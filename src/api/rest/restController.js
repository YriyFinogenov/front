import axios from 'axios';

export const registerRequest = (data) => {
    return axios.post('http://localhost:3000/registration', data);
};


export const loginRequest = (data) => {
    return axios.post('http://localhost:3000/login', data);
};


export const checkToken = (token) => {
    return axios.post('http://localhost:3000/onlyLoginUsers', {},{
        headers: {
            Authorization: token
        }
    });
};