import React, {Component} from 'react';
import {Link} from "react-router-dom";
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

    render() {
        return (
            <div className="container">
                <div>
                    <Link to="/">back</Link>
                </div>
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
