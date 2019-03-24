import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import registerSaga from './registerSaga';



function* rootSaga(){
    yield  takeLatest(ACTION.REGISTER_ACTION, registerSaga);
}

export default rootSaga;