import React, {Component} from 'react';
import {Link} from "react-router-dom";
import CarsList from "../../common/CarsList";
import {initLedger, queryCar} from "../../../api/fabric-rest-api";
import QueryCar from "./components/QueryCar";

export default class OrgA extends Component {
    constructor() {
        super();
        this.state = {
            transaction: "",
            car: {}
        };
    }

    initLedger(e) {
        e.preventDefault();
        initLedger(this.props.match.params.token)
            .then(transaction => {
                this.setState({
                    transaction: transaction
                });
            });
    }

    queryCar(e) {
        e.preventDefault();
        queryCar("a", this.props.match.params.token, "CAR0")
            .then(data => {
                this.setState({
                    car: data
                });
            });
    }

    render() {
        const {transaction} = this.state;
        let button;
        if (transaction === "") {
            button =
                <button className="btn btn-primary btn-block" onClick={this.initLedger.bind(this)}>
                    Init Ledger
                </button>
        } else {
            button =
                <div>
                    {transaction}
                </div>
        }

        return (
            <div className="container">
                <div>
                    <Link to="/">back</Link>
                </div>
                {button}
                <QueryCar token={this.props.match.params.token}/>
                <div className="form-group row">
                    <div className="col-lg-12">
                        <CarsList org="a" token={this.props.match.params.token}/>
                    </div>
                </div>
            </div>
        );
    }
}
