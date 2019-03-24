import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';

const appReducer=combineReducers({
   registration: registerReducer,
   login: loginReducer
});

export default appReducer;