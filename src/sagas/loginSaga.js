import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';


export default function* loginSaga(action){
    yield put({type: ACTION.LOGIN_ACTION_REQUEST});
    try{
        const {data}=yield  restController.loginRequest(action.data);
        yield  put({type: ACTION.LOGIN_ACTION_SUCCESS, accessToken: data});
    }
    catch (e) {
        yield  put({type: ACTION.LOGIN_ACTION_ERROR, error: e.response});
    }
}