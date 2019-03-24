import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import registerSaga from './registerSaga';
import loginSaga from './loginSaga';
import checkTokenSaga from './checkTokenSaga';

function* rootSaga(){
    yield  takeLatest(ACTION.REGISTER_ACTION, registerSaga);
    yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
    yield  takeLatest(ACTION.CHECK_TOKEN_ACTION,checkTokenSaga);
}

export default rootSaga;