export const setUserDataActionTypes = {
  SETTING_USER_DATA: 'SETTING_USER_DATA',
  SETTING_USER_DATA_SUCCESS: 'SETTING_USER_DATA_SUCCESS',
  SETTING_USER_DATA_FAILED: 'SETTING_USER_DATA_FAILED',
}

export const settingUserData = () => (dispatch) => {
  return dispatch({ type: setUserDataActionTypes.SETTING_USER_DATA });
}

export const settingUserDataSuccess = () => (dispatch) => {
  return dispatch({ type: setUserDataActionTypes.SETTING_USER_DATA_SUCCESS });
}

export const settingUserDataFailed = (error) => (dispatch) => {
  return dispatch({
    type: setUserDataActionTypes.SETTING_USER_DATA_FAILED,
    error: error,
  });
}
