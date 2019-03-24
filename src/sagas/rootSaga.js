import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import registerSaga from './registerSaga';
import loginSaga from './loginSaga';


function* rootSaga(){
    yield  takeLatest(ACTION.REGISTER_ACTION, registerSaga);
    yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
}

export default rootSaga;