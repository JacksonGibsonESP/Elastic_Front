import axios from 'axios';

const PROXY_URL_SEARCH = 'http://crystal-search.mai.moscow:8080/api/search';
const PROXY_URL_CHEMICAL_ELEMENTS = 'http://crystal-search.mai.moscow:8080/api/getChemicalElements';
const PROXY_URL_CHEMICAL_FORMULAS = 'http://crystal-search.mai.moscow:8080/api/getChemicalFormulas';
const PROXY_URL_CRYSTAL_SYSTEMS = 'http://crystal-search.mai.moscow:8080/api/getCrystalSystems';
const PROXY_URL_RADIUS_TYPES = 'http://crystal-search.mai.moscow:8080/api/getRadiusTypes';
const PROXY_URL_CONTENT = 'http://crystal-search.mai.moscow:8080/api/getContentById';
export const PROXY_URL_FILE = 'http://crystal-search.mai.moscow:8080/api/getFileById';

export {getArticles, getContent, getChemicalElements, getChemicalFormulas, getCrystalSystems, getRadiusTypes};

function getArticles(query, chemicalElement, chemicalFormula, crystalSystem, radiusType, spaceGroup, from, size) {
    return axios.get(PROXY_URL_SEARCH, {
        params: {
            Query: query,
            ChemicalElement: chemicalElement,
            ChemicalFormula: chemicalFormula,
            CrystalSystem: crystalSystem,
            RadiusType: radiusType,
            SpaceGroup: spaceGroup,
            from: from,
            size: size
        }
    }).then(response => response.data);
}

function getContent(id) {
    return axios.get(PROXY_URL_CONTENT, {
        params: {
            Id: id
        }
    }).then(response => response.data.content);
}

function getChemicalElements() {
    return axios.get(PROXY_URL_CHEMICAL_ELEMENTS).then(response => response.data);
}

function getChemicalFormulas() {
    return axios.get(PROXY_URL_CHEMICAL_FORMULAS).then(response => response.data);
}

function getCrystalSystems() {
    return axios.get(PROXY_URL_CRYSTAL_SYSTEMS).then(response => response.data);
}

function getRadiusTypes() {
    return axios.get(PROXY_URL_RADIUS_TYPES).then(response => response.data);
}