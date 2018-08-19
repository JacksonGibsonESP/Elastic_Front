import React, {Component} from 'react';
import {Link} from "react-router-dom";
import CarsList from "../../common/CarsList";
import {initLedger} from "../../../api/fabric-rest-api";
import QueryCar from "./components/QueryCar";

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
                    Ledger initiated
                </div>
        }

        return (
            <div className="container">
                <div>
                    <Link to="/">back</Link>
                </div>
                {button}
                <QueryCar trigger={this.triggerState} token={this.props.match.params.token}/>
                <div className="form-group row">
                    <div className="col-lg-12">
                        <CarsList trigger={this.state.trigger} org="a" token={this.props.match.params.token}/>
                    </div>
                </div>
            </div>
        );
    }
}
