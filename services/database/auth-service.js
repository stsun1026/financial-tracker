import { store } from '../../redux/store';
import {
  fetchingLoginStatus,
  fetchingLoginStatusComplete,
  loginSuccess,
  loginFailed,
  logout,
} from '../../redux/login/actions';
import ServiceAccessError from '../errors/service-access-error';

export const AuthService = function(firebase) {
  if(!firebase) {
    throw new ServiceAccessError('Please access AuthService through DatabaseService');
  }

  this._successAction = null;
  this._failureAction = null;
  
  const executeSuccessAction = () => {
    if(this._successAction) {
      this._successAction();
    }
  }

  const executeFailureAction = () => {
    if(this._failureAction) {
      this._failureAction();
    }
  }

  const createProvider = () => new firebase.auth.GoogleAuthProvider();

  this.withSuccessAction = (action) => {
    this._successAction = action;
    return this;
  }

  this.withFailureAction = (action) => {
    this._failureAction = action;
    return this;
  }
  
  this.loginWithGooglePopup = () => {
    const provider = createProvider();
    firebase.auth().signInWithPopup(provider)
      .then((user) => {
        store.dispatch(loginSuccess(user));
        executeSuccessAction();
      }).catch((error) => {
        store.dispatch(loginFailed());
        executeFailureAction();
      });
  }

  this.logout = () => {
    firebase.auth()
      .signOut()
      .then(() => {
        store.dispatch(logout());
        executeSuccessAction();
      }).catch((error) => {
        executeFailureAction();
      })
  }

  this.getUserData = () => {
    store.dispatch(fetchingLoginStatus());
    firebase.auth().onAuthStateChanged((user) => {
      store.dispatch(fetchingLoginStatusComplete(user));
    });
  }
}
