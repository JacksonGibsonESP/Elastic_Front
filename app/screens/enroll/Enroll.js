import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {enrollAdmin} from "../../api/fabric-rest-api";

export default class Enroll extends Component {

    constructor() {
        super();
        this.state = {
            toA: false,
            toB: false,
        };
    }

    redirectA(e) {
        e.preventDefault();
        enrollAdmin("a").then(token => {
            this.setState({
                token: token,
                toA: true
            });
        });
    }

    redirectB(e) {
        e.preventDefault();
        enrollAdmin("b").then(token => {
            this.setState({
                token: token,
                toB: true
            });
        });
    }

    render() {
        if (this.state.toA === true) {
            return <Redirect to={`/a/${this.state.token}`}/>
        }
        if (this.state.toB === true) {
            return <Redirect to={`/b/${this.state.token}`}/>
        }
        return (
            <div className="container">
                <div className="row custom-margin-enroll justify-content-around">
                    <div className="col-2">
                        <button className="btn btn-primary" onClick={this.redirectA.bind(this)}>
                            Организация "a"
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary" onClick={this.redirectB.bind(this)}>
                            Организация "b"
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}