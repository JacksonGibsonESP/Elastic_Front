import axios from 'axios';

const ENROLL_A_ADMIN = 'http://localhost:4000/users';
const ENROLL_B_ADMIN = 'http://localhost:4001/users';

export const A_BASE_URL = 'http://localhost:4000/a/';
export const B_BASE_URL = 'http://localhost:4001/b/';

export {enrollAAdmin, enrollBAdmin};

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
