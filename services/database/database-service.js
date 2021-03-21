import firebase from '../../config/firebase/firebase';
import { store } from '../../redux/store';
import AuthService from './auth-service';
import {
  VALUE,
} from './constants';
import {
  settingUserData,
  settingUserDataSuccess,
  settingUserDataFailed,
} from '../../redux/set-user-data/actions';
import {
  fetchingUserData,
  fetchingUserDataSuccess,
  fetchingUserDataFailed,
} from '../../redux/fetch-user-data/actions';

const initDatabaseService = function() {
  this._ref = null;
  this._authService = new AuthService(firebase);

  const resetRef = () => this._ref = null;

  this.withRef = (ref) => {
    this._ref = ref;
    return this;  
  }

  this.setValue = (model) => {
    store.dispatch(settingUserData());
    this._ref.set(
      model,
      (error) => {
        if(error) {
          store.dispatch(settingUserDataFailed(error));
        } else {
          store.dispatch(settingUserDataSuccess());
        }
      });
      resetRef();
  }

  this.getValue = () => {
    store.dispatch(fetchingUserData());
    this._ref.on(VALUE, (snapshot) => {
      const data = snapshot.val();
      store.dispatch(fetchingUserDataSuccess(data)); 
    }, (error) => {
      store.dispatch(fetchingUserDataFailed(error));
    });
    resetRef();
  }

  this.auth = () => this._authService;
}

const DatabaseService = new initDatabaseService();

export default DatabaseService;
