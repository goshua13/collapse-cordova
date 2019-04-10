import {
    FETCH_USERS,
    PARAMS_ACTION
} from './types';

import json from '../apis/jsonPlaceholder';


export const fetchUsers = () => async dispatch => {
    const res = await json.get('/users');
    dispatch({ type: FETCH_USERS, payload: res.data })
}

export const paramsAction = params => ({
  type: PARAMS_ACTION,
  payload: params
})