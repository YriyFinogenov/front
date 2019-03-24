import axios from 'axios';

export const registerRequest=(data)=>{
    return axios.post('http://localhost:3000/registration', data);
};