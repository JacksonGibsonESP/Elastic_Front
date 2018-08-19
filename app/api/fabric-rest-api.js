import axios from 'axios';

const ENROLL_A_ADMIN = 'http://localhost:4000/users';
const ENROLL_B_ADMIN = 'http://localhost:4001/users';

const A_COMMON_URL = 'http://localhost:4000/channels/a-b/chaincodes/relationship';
const B_COMMON_URL = 'http://localhost:4001/channels/a-b/chaincodes/relationship';

const A_QUERY_ALL_CARS_URL = 'http://localhost:4000/channels/a-b/chaincodes/relationship?args=%7B%7D&fcn=queryAllCars&peer=a%2Fpeer0';
const B_QUERY_ALL_CARS_URL = 'http://localhost:4001/channels/a-b/chaincodes/relationship?args=%7B%7D&fcn=queryAllCars&peer=b%2Fpeer0';

const A_QUERY_CAR_URL = 'http://localhost:4000/channels/a-b/chaincodes/relationship?fcn=queryCar&peer=a%2Fpeer0';
const B_QUERY_CAR_URL = 'http://localhost:4001/channels/a-b/chaincodes/relationship?fcn=queryCar&peer=b%2Fpeer0';

export {enrollAdmin, queryAllCars, initLedger, queryCar, addRestriction, removeRestriction, changeCarOwner, createCar};

function enrollAdmin(org) {
    if (org === "a") {
        return axios.post(ENROLL_A_ADMIN, {
            username: "anyName"
        }).then(response => response.data.token);
    } else if (org === "b") {
        return axios.post(ENROLL_B_ADMIN, {
            username: "anyName"
        }).then(response => response.data.token);
    }
}

function queryAllCars(org, token) {
    if (org === "a") {
        return axios.get(A_QUERY_ALL_CARS_URL, {headers: {Authorization: `Bearer ${token}`}})
            .then(response => {
                return response.data.result;
            });
    } else if (org === "b") {
        return axios.get(B_QUERY_ALL_CARS_URL, {headers: {Authorization: `Bearer ${token}`}})
            .then(response => {
                return response.data.result;
            });
    }
}

function initLedger(token) {
    return axios({
        method: 'post',
        url: A_COMMON_URL,
        headers: {Authorization: `Bearer ${token}`},
        data: {"peers": ["a/peer0"], "fcn": "initLedger", "args": {}}
    }).then(response => {
        return response.data.transaction;
    });
}

function queryCar(org, token, key) {
    if (org === "a") {
        return axios({
            method: 'get',
            url: A_QUERY_CAR_URL,
            headers: {Authorization: `Bearer ${token}`},
            params: {args: "[\"" + key + "\"]"}
        }).then(response => {
            return response.data.result;
        });
    } else if (org === "b") {
        return axios({
            method: 'get',
            url: B_QUERY_CAR_URL,
            headers: {Authorization: `Bearer ${token}`},
            params: {args: "[\"" + key + "\"]"}
        }).then(response => {
            return response.data.result;
        });
    }
}

function addRestriction(token, key, reason) {
    return axios({
        method: 'post',
        url: B_COMMON_URL,
        headers: {Authorization: `Bearer ${token}`},
        data: {"peers":["b/peer0"],"fcn":"addRestriction","args":[key, reason]}
    }).then(response => {
        return response.data.transaction;
    });
}

function removeRestriction(token, key) {
    return axios({
        method: 'post',
        url: B_COMMON_URL,
        headers: {Authorization: `Bearer ${token}`},
        data: {"peers":["b/peer0"],"fcn":"removeRestriction","args":[key]}
    }).then(response => {
        return response.data.transaction;
    });
}

function changeCarOwner(token, key, newOwner) {
    return axios({
        method: 'post',
        url: A_COMMON_URL,
        headers: {Authorization: `Bearer ${token}`},
        data: {"peers":["a/peer0"],"fcn":"changeCarOwner","args":[key, newOwner]}
    }).then(response => {
        return response.data.transaction;
    });
}

function createCar(token, key, manufacturer, model, color, owner) {
    return axios({
        method: 'post',
        url: A_COMMON_URL,
        headers: {Authorization: `Bearer ${token}`},
        data: {"peers":["b/peer0"],"fcn":"createCar","args":[key, manufacturer, model, color, owner]}
    }).then(response => {
        return response.data.transaction;
    });
}
