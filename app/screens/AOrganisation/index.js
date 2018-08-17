import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class AOrganisation extends Component {

    render() {
        return (
            <div className="container">
                A: {this.props.match.params.token}
                <div>
                    <Link to="/">back</Link>
                </div>
            </div>

        );
    }
}
