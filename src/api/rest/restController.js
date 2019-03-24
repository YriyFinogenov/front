import axios from 'axios';

export const registerRequest=(data)=>{
    axios.post('http://localhost:3000/registration', data);
};