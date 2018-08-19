import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import CarsList from "../../common/CarsList";
import QueryCar from "../orgB/components/QueryCar";

export default class OrgB extends Component {

    constructor() {
        super();
        this.state = {
            trigger: false
        };
        this.triggerState = this.triggerState.bind(this);
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

        return (
            <div className="container">
                <button className="btn btn-primary" onClick={this.redirectBack.bind(this)}>
                    Назад
                </button>
                <QueryCar trigger={this.triggerState} token={this.props.match.params.token}/>
                <div className="form-group row">
                    <div className="col-lg-12">
                        <CarsList trigger={this.state.trigger} org="b" token={this.props.match.params.token}/>
                    </div>
                </div>
            </div>
        );
    }
}
