import React, {Component} from 'react';
import {queryAllCarsByB} from "../../../../api/fabric-rest-api";
import CarListItem from "../../../common/CarListItem";

export default class CarsList extends Component {
    constructor() {
        super();
        this.state = {
            cars: []
        }
    }

    getCars(props) {
        const {token} = props;
        queryAllCarsByB(token).then(cars => {
            this.setState({
                cars: cars
            });
        });
    }

    componentDidMount() {
        this.getCars(this.props);
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
