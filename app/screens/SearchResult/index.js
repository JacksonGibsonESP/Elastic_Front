import React, {Component} from 'react';
import ArticlesList from './components/ArticlesList'
import PagesBar from "./components/PagesBar";
import {getChemicalElements, getChemicalFormulas, getCrystalSystems, getRadiusTypes} from '../../api/proxy-api'
import PropTypes from "prop-types";

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
        this.state = {
            currentPage: 0,
            chemicalElements: [],
            chemicalFormulas: [],
            crystalSystems: [],
            radiusTypes: []
        };
        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.getChemicalElements();
        this.getChemicalFormulas();
        this.getCrystalSystems();
        this.getRadiusTypes();
    }

    getChemicalElements() {
        this.props.getChemicalElements().then(chemicalElements => {
            this.setState({
                chemicalElements: chemicalElements.chemicalElements
            });
        });
    }

    getChemicalFormulas() {
        this.props.getChemicalFormulas().then(chemicalFormulas => {
            this.setState({
                chemicalFormulas: chemicalFormulas.chemicalFormulas
            });
        });
    }

    getCrystalSystems() {
        this.props.getCrystalSystems().then(crystalSystems => {
            this.setState({
                crystalSystems: crystalSystems.crystalSystems
            });
        });
    }

    getRadiusTypes() {
        this.props.getRadiusTypes().then(radiusTypes => {
            this.setState({
                radiusTypes: radiusTypes.radiusTypes
            });
        });
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
        const {chemicalElements} = this.state;
        const {chemicalFormulas} = this.state;
        const {crystalSystems} = this.state;
        const {radiusTypes} = this.state;
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
                                {renderChemicalElements(chemicalElements)}
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
                                {renderChemicalFormulas(chemicalFormulas)}
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
                                {renderCrystalSystems(crystalSystems)}
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
                                {renderRadiusTypes(radiusTypes)}
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

SearchResult.defaultProps = {
    getChemicalElements,
    getChemicalFormulas,
    getCrystalSystems,
    getRadiusTypes
};

SearchResult.propTypes = {
    chemicalElements: PropTypes.func,
    chemicalFormulas: PropTypes.func,
    crystalSystems: PropTypes.func,
    radiusTypes: PropTypes.func
};

function renderChemicalElements(chemicalElements) {
    return chemicalElements
        .map(chemicalElement => <option key={chemicalElement} value={chemicalElement}>{chemicalElement}</option>);
}

function renderChemicalFormulas(chemicalFormulas) {
    return chemicalFormulas
        .map(chemicalFormula => <option key={chemicalFormula} value={chemicalFormula}>{chemicalFormula}</option>);
}

function renderCrystalSystems(crystalSystems) {
    return crystalSystems
        .map(crystalSystem => <option key={crystalSystem} value={crystalSystem}>{crystalSystem}</option>);
}

function renderRadiusTypes(radiusTypes) {
    return radiusTypes
        .map(radiusType => <option key={radiusType} value={radiusType}>{radiusType}</option>);
}
