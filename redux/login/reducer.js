import { loginActionTypes } from './actions';

const loginInitialState = {
  isFetchingLoginStatus: false,
  isLoggedIn: null,
};

export default function reducer(state = loginInitialState, action) {
  switch(action.type) {
    case loginActionTypes.FETCHING_LOGIN_STATUS:
      return {
        ...state,
        isFetchingLoginStatus: true,
      };
    
    case loginActionTypes.FETCHING_LOGIN_STATUS_COMPLETE:
      return {
        ...state,
        isFetchingLoginStatus: false,
        isLoggedIn: action.isLoggedIn,
      };

    case loginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetchingLoginStatus: false,
        isLoggedIn: true,
      };

    case loginActionTypes.LOGIN_FAILED:
    case loginActionTypes.LOGOUT:
      return {
        ...state,
        isFetchingLoginStatus: false,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
