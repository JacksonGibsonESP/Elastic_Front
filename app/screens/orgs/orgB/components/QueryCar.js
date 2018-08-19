import React, {Component} from 'react';
import {addRestriction, queryCar, removeRestriction} from "../../../../api/fabric-rest-api";
import Car from "../../../common/Car";

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
                    key: this.key.value,
                    queried: true,
                    car: data
                });
            });
    }

    addRestriction(e) {
        e.preventDefault();
        addRestriction(this.props.token, this.state.key, this.restriction.value)
            .then(() => {
                this.setState({
                    key: "",
                    queried: false,
                    car: {}
                });
                this.props.trigger();
            });
    }

    removeRestriction(e) {
        e.preventDefault();
        removeRestriction(this.props.token, this.state.key)
            .then(() => {
                this.setState({
                    key: "",
                    queried: false,
                    car: {}
                });
                this.props.trigger();
            });
    }

    flashState(e) {
        e.preventDefault();
        this.setState({
            key: "",
            queried: false,
            car: {}
        });
    }

    render() {
        const {queried} = this.state;
        if (queried) {
            const {car} = this.state;
            return (
                <div>
                    <div className="row custom-margin-org align-content-start">
                        <div className="col">
                            <Car
                                vin={this.state.key}
                                manufacturer={car.make}
                                model={car.model}
                                color={car.color}
                                owner={car.owner}
                                restricted={car.restricted}
                                reason={car.reason}
                            />
                        </div>
                    </div>
                    <div className="row custom-margin-org align-content-start">
                        <div className="col">
                            <input
                                type="text"
                                placeholder="Ограничение"
                                className="form-control"
                                ref={ref => (this.restriction = ref)}
                            />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" onClick={this.addRestriction.bind(this)}>
                                Задать ограничение
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" onClick={this.removeRestriction.bind(this)}>
                                Удалить ограничение
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" onClick={this.flashState.bind(this)}>
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row custom-margin-org align-content-start">
                    <div className="col-2">
                        <input
                            type="text"
                            placeholder="VIN"
                            className="form-control"
                            ref={ref => (this.key = ref)}
                        />
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" onClick={this.queryCar.bind(this)}>
                            Запрос
                        </button>
                    </div>
                </div>
            )
        }
    }
}
