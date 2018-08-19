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
                <div className="row custom-margin-org">
                    <div className="col">
                        <input
                            type="text"
                            placeholder="VIN"
                            className="form-control"
                            ref={ref => (this.key = ref)}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            placeholder="Марка"
                            className="form-control"
                            ref={ref => (this.manufacturer = ref)}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            placeholder="Модель"
                            className="form-control"
                            ref={ref => (this.model = ref)}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            placeholder="Цвет"
                            className="form-control"
                            ref={ref => (this.color = ref)}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            placeholder="Имя владельца"
                            className="form-control"
                            ref={ref => (this.owner = ref)}
                        />
                    </div>
                    <div className="col">
                        <button className="btn btn-primary btn-block" onClick={this.changeCarOwner.bind(this)}>
                            Внести
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row custom-margin-org">
                    <div className="col">
                        <button className="btn btn-primary" onClick={this.query.bind(this)}>
                            Внести в реестр автомобиль
                        </button>
                    </div>
                </div>
            )
        }
    }
}
