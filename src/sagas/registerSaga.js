import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';


export default function* registerSaga(action){
    yield put({type: ACTION.REGISTER_ACTION_REQUEST});
    try{
        const {data}=yield  restController.registerRequest(action.data);
        yield put({type: ACTION.REGISTER_ACTION_SUCCESS, accessToken: data});
    }
    catch (e) {
        yield put({type: ACTION.REGISTER_ACTION_ERROR, error: e.response});
    }
}