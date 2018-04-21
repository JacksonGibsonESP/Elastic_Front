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
        const {spaceGroup} = this.state;
        const {currentPage} = this.state;
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
                        <div className="col-lg-2">
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
                        <div className="col-lg-2">
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
                        <div className="col-lg-2">
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
                        <div className="col-lg-2">
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
                        <div className="col-lg-2">
                            <label>Пространственная группа</label>
                            <select
                                className="form-control"
                                defaultValue=""
                                ref={ref => (this._spaceGroup = ref)}
                            >
                                <option value=""/>
                                <option value="P23">P23</option>
                                <option value="F23">F23</option>
                                <option value="I23">I23</option>
                                <option value="Pm3">Pm3</option>
                                <option value="Pn3">Pn3</option>
                                <option value="Fm3">Fm3</option>
                                <option value="Fd3">Fd3</option>
                                <option value="Im3">Im3</option>
                                <option value="Pa3">Pa3</option>
                                <option value="P432">P432</option>
                                <option value="F432">F432</option>
                                <option value="I432">I432</option>
                                <option value="P43m">P43m</option>
                                <option value="F43m">F43m</option>
                                <option value="I43m">I43m</option>
                                <option value="Pm3m">Pm3m</option>
                                <option value="Pn3n">Pn3n</option>
                                <option value="Pm3n">Pm3n</option>
                                <option value="Pn3m">Pn3m</option>
                                <option value="Fm3m">Fm3m</option>
                                <option value="Fm3c">Fm3c</option>
                                <option value="Fd3m">Fd3m</option>
                                <option value="Im3m">Im3m</option>
                                <option value="Ia3d">Ia3d</option>
                            </select>
                        </div>
                        <div className="col-lg-2">
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
