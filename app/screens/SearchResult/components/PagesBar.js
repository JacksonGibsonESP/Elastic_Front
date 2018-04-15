import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PagesBar extends Component {
    render() {
        return (
            <div className="form-group row">
                <div className="col-md-6">
                    <button onClick={this.props.decrementPage} className="btn btn-primary">
                        Prev
                    </button>
                </div>
                <div className="col-md-6">
                    <button onClick={this.props.incrementPage} className="btn btn-primary float-right">
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

PagesBar.propTypes = {
    decrementPage: PropTypes.func,
    incrementPage: PropTypes.func
};
