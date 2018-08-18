import React, {Component} from 'react';
import {queryAllCars} from "../../api/fabric-rest-api";
import CarListItem from "./CarListItem";

export default class CarsList extends Component {
    constructor() {
        super();
        this.state = {
            cars: []
        }
    }

    getCars(props) {
        const {org} = props;
        const {token} = props;
        queryAllCars(org, token).then(cars => {
            this.setState({
                cars: cars
            });
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
        if (cars.length === 0) {
            //TO DO: Loader
            return <div/>;
        }
        return (
            <div>
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
