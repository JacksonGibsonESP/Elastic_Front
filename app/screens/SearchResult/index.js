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
                currentPage: 0
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
        const {currentPage} = this.state;
        const pageSize = 3;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="form-group row custom-margin">
                        <div className="col-lg-12">
                            <input
                                type="text"
                                placeholder="Введите запрос"
                                className="form-control"
                                ref={ref => (this._query = ref)}
                            />
                        </div>
                    </div>
                    <div className="form-group row d-flex align-items-end">
                        <div className="col-lg">
                            <label>Химические элементы</label>
                            <select
                                className="form-control"
                                defaultValue=""
                                ref={ref => (this._chemicalElement = ref)}
                            >
                                <option value=""/>
                                <option value="N">N</option>
                                <option value="O">O</option>
                                <option value="Al">Al</option>
                                <option value="Si">Si</option>
                                <option value="Fe">Fe</option>
                                <option value="W">W</option>
                                <option value="U">U</option>
                            </select>
                        </div>
                        <div className="col-lg">
                            <label>Химическая формула</label>
                            <select
                                className="form-control"
                                defaultValue=""
                                ref={ref => (this._chemicalFormula = ref)}
                            >
                                <option value=""/>
                                <option value="Al2O3">Al2O3</option>
                                <option value="Al1N1">Al1N1</option>
                                <option value="Si1">Si1</option>
                            </select>
                        </div>
                        <div className="col-lg">
                            <label>Кристаллическая система</label>
                            <select
                                className="form-control"
                                defaultValue=""
                                ref={ref => (this._crystalSystem = ref)}
                            >
                                <option value=""/>
                                <option value="Кубическая">Кубическая</option>
                                <option value="Гексагональная">Гексагональная</option>
                                <option value="Ромбическая">Ромбическая</option>
                            </select>
                        </div>
                        <div className="col-lg">
                            <label>Тип атомного радиуса</label>
                            <select
                                className="form-control"
                                defaultValue=""
                                ref={ref => (this._radiusType = ref)}
                            >
                                <option value=""/>
                                <option value="Ионный">Ионный</option>
                                <option value="Металлический">Металлический</option>
                                <option value="Ковалентный">Ковалентный</option>
                            </select>
                        </div>
                        <div className="col-lg">
                            <button type="submit" className="btn btn-primary btn-block">
                                Поиск
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-12">
                            <ArticlesList
                                query={query}
                                chemicalElement={chemicalElement}
                                chemicalFormula={chemicalFormula}
                                crystalSystem={crystalSystem}
                                radiusType={radiusType}
                                pageNumber={currentPage}
                                pageSize={pageSize}/>
                        </div>
                    </div>
                    <PagesBar decrementPage={this.decrementPage} incrementPage={this.incrementPage}/>
                </div>
            </form>
        );
    }
}
