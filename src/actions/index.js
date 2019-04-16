import {
    FETCH_USERS,
    PARAMS_ACTION,
    MAIN_MENU_ID,
    SUBMENU_ID
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

export const mainMenuId = (id) => ({
  type: MAIN_MENU_ID,
  payload: id
})

export const submenuAction = (payload) => ({
  type: SUBMENU_ID,
  payload
})
