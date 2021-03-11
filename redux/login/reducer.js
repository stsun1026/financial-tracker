import { loginActionTypes } from './actions';
import {
  isUserLoggedIn,
  parseGoogleUserData,
  parseGoogleUserDataFromLogin,
} from '../../parsers/user-parser';

const loginInitialState = {
  isFetchingLoginStatus: false,
  isLoggedIn: null,
  userData: null,
};

export default function reducer(state = loginInitialState, action) {
  switch(action.type) {
    case loginActionTypes.FETCHING_LOGIN_STATUS:
      return {
        ...state,
        isFetchingLoginStatus: true,
        isLoggedIn: null,
        userData: null,
      };
    
    case loginActionTypes.FETCHING_LOGIN_STATUS_COMPLETE:
      return {
        ...state,
        isFetchingLoginStatus: false,
        isLoggedIn: isUserLoggedIn(action.userData),
        userData: parseGoogleUserData(action.userData),
      };

    case loginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetchingLoginStatus: false,
        isLoggedIn: true,
        userData: parseGoogleUserDataFromLogin(action.userDataFromLogin),
      };

    case loginActionTypes.LOGIN_FAILED:
    case loginActionTypes.LOGOUT:
      return {
        ...state,
        isFetchingLoginStatus: false,
        isLoggedIn: false,
        userData: null,
      };

    default:
      return state;
  }
}
