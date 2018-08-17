import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class BOrganisation extends Component {

    render() {
        const {token} = this.props.match;
        return (
            <div className="container">
                B: {this.props.match.params.token}
                <div>
                    <Link to="/">back</Link>
                </div>
            </div>
        );
    }
}
