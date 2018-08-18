import React, {Component} from 'react';
import {queryCar} from "../../../../api/fabric-rest-api";

export default class QueryCar extends Component {
    constructor() {
        super();
        this.state = {
            queried: false,
            car: {}
        };
    }

    queryCar(e) {
        e.preventDefault();
        queryCar("b", this.props.token, this.key.value)
            .then(data => {
                this.setState({
                    queried: true,
                    car: data
                });
            });
    }

    render() {
        const {queried} = this.state;
        if (queried) {
            const {car} = this.state;
            return (
                <div>
                    <h6>Марка: {car.make}</h6>
                    <h6>Модель: {car.model}</h6>
                    <h6>Цвет: {car.color}</h6>
                    <h6>Владелец: {car.owner}</h6>
                    <h6 hidden={!car.restricted}>Ключ: {car.restricted}</h6>
                    <h6 hidden={!car.restricted}>Ключ: {car.reason}</h6>
                    <button className="btn btn-primary btn-block">
                        Add restriction
                    </button>
                </div>
            );
        } else {
            return(
                <div>
                    <input
                        type="text"
                        placeholder="Введите ключ"
                        className="form-control"
                        ref={ref => (this.key = ref)}
                    />
                    <button className="btn btn-primary btn-block" onClick={this.queryCar.bind(this)}>
                        Query car
                    </button>
                </div>
            )
        }
    }
}
