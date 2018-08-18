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
            <form>
                <div className="container">
                    <div className="form-group row d-flex align-items-end">
                        <div className="col-lg">
                            <button className="btn btn-primary btn-block" onClick={this.redirectA.bind(this)}>
                                Enroll A org admin
                            </button>
                        </div>
                        <div className="col-lg">
                            <button className="btn btn-primary btn-block" onClick={this.redirectB.bind(this)}>
                                Enroll B org admin
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}