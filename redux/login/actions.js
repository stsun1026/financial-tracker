export const loginActionTypes = {
  FETCHING_LOGIN_STATUS: 'FETCHING_LOGIN_STATUS',
  FETCHING_LOGIN_STATUS_COMPLETE: 'LOGIN_STATUS_FETCHED',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT: 'LOGOUT'
}

export const fetchingLoginStatus = () => (dispatch) => {
  return dispatch({ type: loginActionTypes.FETCHING_LOGIN_STATUS });
}

export const fetchingLoginStatusComplete = (isLoggedIn) => (dispatch) => {
  return dispatch({
    type: loginActionTypes.FETCHING_LOGIN_STATUS_COMPLETE,
    isLoggedIn: isLoggedIn,
  });
}

export const loginSuccess = () => (dispatch) => {
  return dispatch({ type: loginActionTypes.LOGIN_SUCCESS });
}

export const loginFailed = () => (dispatch) => {
  return dispatch({ type: loginActionTypes.LOGIN_FAILED });
}

export const logout = () => (dispatch) => {
  return dispatch({ type: loginActionTypes.LOGOUT });
}
