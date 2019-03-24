import ACTION from './actionTypes';


export const registerAction=(data)=>{
    return{
        type: ACTION.REGISTER_ACTION,
        data: data
    }
};