import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import idReducer from './idReducer';

const rootReducer = combineReducers({
  menu: usersReducer,
  id: idReducer,
});

export default rootReducer;