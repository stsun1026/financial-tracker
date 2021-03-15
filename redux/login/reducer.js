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
  dbRef: null,
};

export default function reducer(state = loginInitialState, action) {
  switch(action.type) {
    case loginActionTypes.FETCHING_LOGIN_STATUS: {
      return {
        ...state,
        isFetchingLoginStatus: true,
      };
    }
    
    case loginActionTypes.FETCHING_LOGIN_STATUS_COMPLETE: {
      const isLoggedIn = state.isLoggedIn ?? isUserLoggedIn(action.userData);
      const parsedUserData = state.userData ?? parseGoogleUserData(action.userData);
      
      return {
        ...state,
        isFetchingLoginStatus: false,
        isLoggedIn: isLoggedIn,
        userData: parsedUserData,
      };
    }

    case loginActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isFetchingLoginStatus: false,
        isLoggedIn: true,
        userData: parseGoogleUserDataFromLogin(action.userDataFromLogin),
      };
    }

    case loginActionTypes.LOGIN_FAILED:
    case loginActionTypes.LOGOUT: {
      return {
        ...state,
        isFetchingLoginStatus: false,
        isLoggedIn: false,
        userData: null,
      };
    }

    default:
      return state;
  }
}
