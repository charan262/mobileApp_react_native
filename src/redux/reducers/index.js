import { auth } from './AuthReducer';
import { combineReducers } from 'redux';

const  rootReducer=combineReducers({
    authLevel: auth,
})
export default rootReducer;