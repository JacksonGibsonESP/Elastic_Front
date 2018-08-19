import React, {Component} from 'react';
import {createCar} from "../../../../api/fabric-rest-api";

export default class CreateCar extends Component {
    constructor() {
        super();
        this.state = {
            queried: false
        };
    }

    query(e) {
        e.preventDefault();
        this.setState({
            queried: true
        });
    }

    changeCarOwner(e) {
        e.preventDefault();
        createCar(this.props.token, this.key.value, this.manufacturer.value, this.model.value, this.color.value, this.owner.value)
            .then(() => {
                this.setState({
                    queried: false
                });
                this.props.trigger();
            });
    }

    render() {
        const {queried} = this.state;
        if (queried) {
            return (
                <div>
                    <input
                        type="text"
                        placeholder="Введите ключ"
                        className="form-control"
                        ref={ref => (this.key = ref)}
                    />
                    <input
                        type="text"
                        placeholder="Введите марку производителя"
                        className="form-control"
                        ref={ref => (this.manufacturer = ref)}
                    />
                    <input
                        type="text"
                        placeholder="Введите модель"
                        className="form-control"
                        ref={ref => (this.model = ref)}
                    />
                    <input
                        type="text"
                        placeholder="Введите цвет"
                        className="form-control"
                        ref={ref => (this.color = ref)}
                    />
                    <input
                        type="text"
                        placeholder="Введите имя владельца"
                        className="form-control"
                        ref={ref => (this.owner = ref)}
                    />
                    <button className="btn btn-primary btn-block" onClick={this.changeCarOwner.bind(this)}>
                        Create car
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <button className="btn btn-primary btn-block" onClick={this.query.bind(this)}>
                        Create car
                    </button>
                </div>
            )
        }
    }
}
