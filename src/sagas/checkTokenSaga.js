import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';



export default function* checkToken(action){
    yield put({type: ACTION.CHECK_TOKEN_ACTION_REQUEST});
    try{
        yield  restController.checkToken(action.token);
        yield  put({type: ACTION.CHECK_TOKEN_ACTION_SUCCESS});
    }
    catch (e) {
        yield put({type: ACTION.CHECK_TOKEN_ACTION_ERROR, error: e.response});
    }
}