import axios from 'axios';

const ENROLL_A_ADMIN = 'http://localhost:4000/users';
const ENROLL_B_ADMIN = 'http://localhost:4001/users';

export const A_QUERY_ALL_CARS_URL = 'http://localhost:4000/channels/a-b/chaincodes/relationship?args=%7B%7D&fcn=queryAllCars&peer=a%2Fpeer0';
export const B_QUERY_ALL_CARS_URL = 'http://localhost:4001/channels/a-b/chaincodes/relationship?args=%7B%7D&fcn=queryAllCars&peer=b%2Fpeer0';

export {enrollAAdmin, enrollBAdmin, queryAllCarsByA, queryAllCarsByB};

function enrollAAdmin() {
    return axios.post(ENROLL_A_ADMIN, {
        username: "anyName"
    }).then(response => response.data.token);
}

function enrollBAdmin() {
    return axios.post(ENROLL_B_ADMIN, {
        username: "anyName"
    }).then(response => response.data.token);
}

function queryAllCarsByA(token) {
    return axios.get(A_QUERY_ALL_CARS_URL, {headers: {Authorization: `Bearer ${token}`}})
        .then(response => {
            return response.data.result;
        });
}

function queryAllCarsByB(token) {
    return axios.get(B_QUERY_ALL_CARS_URL, {headers: {Authorization: `Bearer ${token}`}})
        .then(response => {
            return response.data.result;
        });
}
