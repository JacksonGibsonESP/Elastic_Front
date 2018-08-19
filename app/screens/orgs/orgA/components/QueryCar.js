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

    render() {
        const {queried} = this.state;
        if (queried) {
            const {car} = this.state;
            const {restricted} = car;
            let button;
            if (!restricted) {
                button =
                    <div>
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
            } else {
                button =
                    <div className="text-danger">
                        Сменить владельца невозможно! Есть ограничения!
                    </div>
            }
            return (
                <div>
                    <Car
                        vin={this.state.key}
                        manuafactorer={car.make}
                        model={car.model}
                        color={car.color}
                        owner={car.owner}
                        restricted={car.restricted}
                        reason={car.reason}
                    />
                    {button}
                </div>
            );
        } else {
            return (
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
