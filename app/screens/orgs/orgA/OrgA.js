import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import CarsList from "../../common/CarsList";
import {initLedger} from "../../../api/fabric-rest-api";
import QueryCar from "./components/QueryCar";
import CreateCar from "./components/CreateCar";

export default class OrgA extends Component {
    constructor() {
        super();
        this.state = {
            transaction: "",
            car: {}
        };
        this.triggerState = this.triggerState.bind(this);
    }

    initLedger(e) {
        e.preventDefault();
        initLedger(this.props.match.params.token)
            .then(transaction => {
                this.setState({
                    transaction: transaction
                });
                this.triggerState();
            });
    }

    triggerState() {
        this.setState({
            trigger: !this.state.trigger
        });
    }

    redirectBack(e) {
        e.preventDefault();
        this.setState({
            back: true
        })
    }

    render() {
        if (this.state.back === true) {
            return <Redirect to={`/`}/>
        }

        const {transaction} = this.state;
        let button;
        if (transaction === "") {
            button =
                <button className="btn btn-primary btn-block" onClick={this.initLedger.bind(this)}>
                    Инициализировать реестр
                </button>
        } else {
            button =
                <div className="alert alert-success" role="alert">
                    Реестр инициализирован
                </div>
        }

        return (
            <div className="container">
                <div className="row custom-margin-org">
                    <div className="col">
                        <button className="btn btn-primary btn-block" onClick={this.redirectBack.bind(this)}>
                            Назад
                        </button>
                    </div>
                    <div className="col">
                        {button}
                    </div>
                    <div className="col">
                        <QueryCar trigger={this.triggerState} token={this.props.match.params.token}/>
                    </div>
                    <div className="col">
                        <CreateCar trigger={this.triggerState} token={this.props.match.params.token}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-lg-12">
                        <CarsList trigger={this.state.trigger} org="a" token={this.props.match.params.token}/>
                    </div>
                </div>
            </div>
        );
    }
}
