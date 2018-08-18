import React, {Component} from 'react';
import {Link} from "react-router-dom";
import CarsList from "./components/CarsList";

export default class AOrganisation extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <Link to="/">back</Link>
                </div>
                <div className="form-group row">
                    <div className="col-lg-12">
                        <CarsList token={this.props.match.params.token}/>
                    </div>
                </div>
            </div>

        );
    }
}
