import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import paramsReducer from './paramsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  params: paramsReducer
});

export default rootReducer;