import React, {Component} from 'react';
import {Link} from "react-router-dom";
import CarsList from "../../common/CarsList";
import {initLedger} from "../../../api/fabric-rest-api";

export default class OrgA extends Component {
    constructor() {
        super();
        this.state = {
            transaction: ""
        };
    }

    initLedger(e) {
        e.preventDefault();
        initLedger(this.props.match.params.token)
            .then(data => {
                console.log(data);
                this.setState({
                    transaction: data.transaction
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
                <div className="form-group row">
                    <div className="col-lg-12">
                        <CarsList org="a" token={this.props.match.params.token}/>
                    </div>
                </div>
            </div>
        );
    }
}
