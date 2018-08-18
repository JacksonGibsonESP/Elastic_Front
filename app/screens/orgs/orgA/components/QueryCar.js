import React, {Component} from 'react';
import {changeCarOwner, queryCar} from "../../../../api/fabric-rest-api";

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
        queryCar("a", this.props.token, this.key.value)
            .then(data => {
                this.setState({
                    key: this.key.value,
                    queried: true,
                    car: data
                });
            });
    }

    changeCarOwner(e) {
        e.preventDefault();
        changeCarOwner(this.props.token, this.state.key, this.newOwner.value)
            .then(() => {
                this.setState({
                    key: "",
                    queried: false,
                    car: {}
                });
                this.props.trigger();
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
                    <input
                        type="text"
                        placeholder="Введите имя нового владельца"
                        className="form-control"
                        ref={ref => (this.newOwner = ref)}
                    />
                    <button className="btn btn-primary btn-block" onClick={this.changeCarOwner.bind(this)}>
                        Change owner
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
