import {combineReducers} from 'redux';
import registerReducer from './registerReducer';


const appReducer=combineReducers({
   registration: registerReducer
});

export default appReducer;