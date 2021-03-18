import { setUserDataActionTypes } from './actions';

const setUserDataInitialState = {
  isSettingUserData: false,
  isSuccessful: null,
  error: null,
};

export default function reducer(state = setUserDataInitialState, action) {
  switch(action.type) {
    case setUserDataActionTypes.SETTING_USER_DATA: {
      return {
        ...state,
        isSettingUserData: true,
        isSuccessful: true
      };
    }

    case setUserDataActionTypes.SETTING_USER_DATA_SUCCESS: {
      return {
        ...state,
        isFetchingUserData: false,
        isSuccessful: true,
      };
    }

    case setUserDataActionTypes.SETTING_USER_DATA_FAILED: {
      return {
        ...state,
        isFetchingUserData: false,
        isSuccessful: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
}
