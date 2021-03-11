import User from '../models/user';

// keys for user payload from firebase
const PROVIDER_DATA_KEY = 'providerData';
const PROVIDER_DATA_INDEX = 0;
const DISPLAY_NAME_KEY = 'displayName';
const USER_ID_KEY = 'uid';

// keys specific to login payload from firebase
const USER_KEY = 'user';

export const isUserLoggedIn = (userData) => !!userData;

export const parseGoogleUserData = (userData) => {
  if(!isUserLoggedIn(userData)) {
    return null;
  }
  try {
    const providerData = userData[PROVIDER_DATA_KEY][PROVIDER_DATA_INDEX];
    const name = providerData[DISPLAY_NAME_KEY];
    const userId = providerData[USER_ID_KEY];
    return User({ name: name, userId: userId });
  } catch(error) {
    return userInErrorState(error);
  }
}

export const parseGoogleUserDataFromLogin = (userDataFromLogin) => {
  try {
    const userData = userDataFromLogin[USER_KEY];
    return parseGoogleUserData(userData);
  } catch(error) {
    return userInErrorState(error);
  }
}

const userInErrorState = (error) => User({ name: null, userId: null, error: error.message });