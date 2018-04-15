import React, {Component} from 'react';
import ArticlesList from './components/ArticlesList'
import PagesBar from "./components/PagesBar";

export default class SearchResult extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.setState(function (prevState) {
            return {
                query: this._query.value,
                chemicalElement: this._chemicalElement.value,
                chemicalFormula: this._chemicalFormula.value,
                crystalSystem: this._crystalSystem.value,
                radiusType: this._radiusType.value,
                spaceGroup: this._spaceGroup.value,
            }
        });
    };

    constructor() {
        super();
        this.state = {currentPage: 0};
        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    incrementPage(e) {
        e.preventDefault();
        this.setState(function (prevState) {
            return {
                currentPage: prevState.currentPage + 1
            }
        });
    }

    decrementPage(e) {
        e.preventDefault();
        this.setState(function (prevState) {
            return {
                currentPage: prevState.currentPage > 0 ? prevState.currentPage - 1 : prevState.currentPage
            }
        });
    }

    render() {
        const {query} = this.state;
        const {chemicalElement} = this.state;
        const {chemicalFormula} = this.state;
        const {crystalSystem} = this.state;
        const {radiusType} = this.state;
        const {spaceGroup} = this.state;
        const {currentPage} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input
                                type="text"
                                placeholder="Введите запрос"
                                className="form-control"
                                ref={ref => (this._query = ref)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-2">
                            <input
                                type="text"
                                placeholder="Type Chemical Element"
                                className="form-control"
                                ref={ref => (this._chemicalElement = ref)}
                            />
                        </div>
                        <div className="col-md-2">
                            <input
                                type="text"
                                placeholder="Type Chemical Formula"
                                className="form-control"
                                ref={ref => (this._chemicalFormula = ref)}
                            />
                        </div>
                        <div className="col-md-2">
                            <input
                                type="text"
                                placeholder="Type Crystal System"
                                className="form-control"
                                ref={ref => (this._crystalSystem = ref)}
                            />
                        </div>
                        <div className="col-md-2">
                            <input
                                type="text"
                                placeholder="Type Radius Type"
                                className="form-control"
                                ref={ref => (this._radiusType = ref)}
                            />
                        </div>
                        <div className="col-md-2">
                            <input
                                type="text"
                                placeholder="Type Space Group"
                                className="form-control"
                                ref={ref => (this._spaceGroup = ref)}
                            />
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-primary btn-block">
                                Go
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <ArticlesList
                                query={query}
                                chemicalElement={chemicalElement}
                                chemicalFormula={chemicalFormula}
                                crystalSystem={crystalSystem}
                                radiusType={radiusType}
                                spaceGroup={spaceGroup}
                                pageNumber={currentPage}/>
                        </div>
                    </div>
                    <PagesBar decrementPage={this.decrementPage} incrementPage={this.incrementPage}/>
                </div>
            </form>
        );
    }
}
