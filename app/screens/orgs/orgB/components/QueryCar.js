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

    render() {
        const {queried} = this.state;
        if (queried) {
            const {car} = this.state;
            return (
                <div>
                    <Car
                        vin={this.state.key}
                        manufacturer={car.make}
                        model={car.model}
                        color={car.color}
                        owner={car.owner}
                        restricted={car.restricted}
                        reason={car.reason}
                    />
                    <input
                        type="text"
                        placeholder="Введите ограничение"
                        className="form-control"
                        ref={ref => (this.restriction = ref)}
                    />
                    <button className="btn btn-primary btn-block" onClick={this.addRestriction.bind(this)}>
                        Add restriction
                    </button>
                    <button className="btn btn-primary btn-block" onClick={this.removeRestriction.bind(this)}>
                        Remove restriction
                    </button>
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
