import React, {Component} from 'react';
import {changeCarOwner, queryCar} from "../../../../api/fabric-rest-api";
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
            const {restricted} = car;
            if (!restricted) {
                return (
                    <div>
                        <div className="row custom-margin-org">
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
                        <div className="row custom-margin-org">
                            <div className="col">
                                <input
                                    type="text"
                                    placeholder="Новое имя"
                                    className="form-control"
                                    ref={ref => (this.newOwner = ref)}
                                />
                            </div>
                            <div className="col">
                                <button className="btn btn-primary" onClick={this.changeCarOwner.bind(this)}>
                                    Изменить имя владельца
                                </button>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="row custom-margin-org">
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
                        <div className="col">
                            <div className="alert alert-danger" role="alert">
                                Сменить владельца невозможно! Есть ограничения!
                            </div>
                        </div>
                        <div className="col">
                            <button className="col btn btn-primary btn-block" onClick={this.flashState.bind(this)}>
                                Ок
                            </button>
                        </div>
                    </div>
                );
            }
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
                    <div className="col-2">
                        <button className="btn btn-primary" onClick={this.queryCar.bind(this)}>
                            Запрос
                        </button>
                    </div>
                </div>
            )
        }
    }
}
