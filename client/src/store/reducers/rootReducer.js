import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authx: authReducer,
  projectx: projectReducer,
});

export default rootReducer;
