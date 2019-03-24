import ACTION from './actionTypes';


export const registerAction=(data)=>{
    return{
        type: ACTION.REGISTER_ACTION,
        data: data
    }
};


export const loginAction=(data)=>{
    return{
        type: ACTION.LOGIN_ACTION,
        data: data
    }
};