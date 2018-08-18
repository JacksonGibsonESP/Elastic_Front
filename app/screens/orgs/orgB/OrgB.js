import React, {Component} from 'react';
import {Link} from "react-router-dom";
import CarsList from "../../common/CarsList";

export default class OrgB extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <Link to="/">back</Link>
                </div>
                <div className="form-group row">
                    <div className="col-lg-12">
                        <CarsList org="b" token={this.props.match.params.token}/>
                    </div>
                </div>
            </div>

        );
    }
}
