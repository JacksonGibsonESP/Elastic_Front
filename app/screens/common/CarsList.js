import React, {Component} from 'react';
import {queryAllCars} from "../../api/fabric-rest-api";
import CarListItem from "./CarListItem";

export default class CarsList extends Component {
    constructor() {
        super();
        this.state = {
            cars: [],
            empty: false
        }
    }

    getCars(props) {
        const {org} = props;
        const {token} = props;
        queryAllCars(org, token).then(cars => {
            if (cars.length === 0) {
                this.setState({
                    cars: [],
                    empty: true
                });
            } else {
                this.setState({
                    cars: cars,
                    empty: false
                });
            }
        });
    }

    componentDidMount() {
        this.getCars(this.props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.trigger !== prevProps.trigger) {
            this.getCars(this.props);
        }
    }

    render() {
        const {cars} = this.state;
        const {empty} = this.state;
        if (empty) {
            return <h6 className="custom-margin">В данный момент реестр пуст</h6>
        }
        if (cars.length === 0) {
            //TO DO: Loader
            return <div/>;
        }
        return (
            <div>
                <h6 className="custom-margin">Содержимое реестра:</h6>
                <ul className="list-unstyled">
                    {renderCars(cars)}
                </ul>
            </div>
        );
    }
}

function renderCars(cars) {
    return cars.map(car => <CarListItem key={car.Key} car={car}/>);
}
