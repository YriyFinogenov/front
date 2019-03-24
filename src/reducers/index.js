import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import checkTokenReducer from './checkTokenReducer';

const appReducer=combineReducers({
   registration: registerReducer,
   login: loginReducer,
   checkToken: checkTokenReducer
});

export default appReducer;