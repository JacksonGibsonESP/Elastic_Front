import axios from 'axios';

const ENROLL_A_ADMIN = 'http://localhost:4000/users';
const ENROLL_B_ADMIN = 'http://localhost:4001/users';

export const A_QUERY_ALL_CARS_URL = 'http://localhost:4000/channels/a-b/chaincodes/relationship?args=%7B%7D&fcn=queryAllCars&peer=a%2Fpeer0';
export const B_QUERY_ALL_CARS_URL = 'http://localhost:4001/channels/a-b/chaincodes/relationship?args=%7B%7D&fcn=queryAllCars&peer=b%2Fpeer0';

export {enrollAdmin, queryAllCars};

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
