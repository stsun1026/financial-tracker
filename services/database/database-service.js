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

const DatabaseService = function() {
  this._ref = null;

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
  }

  this.getValue = () => {
    store.dispatch(fetchingUserData());
    this._ref.on(VALUE, (snapshot) => {
      const data = snapshot.val();
      store.dispatch(fetchingUserDataSuccess(data)); 
    }, (error) => {
      store.dispatch(fetchingUserDataFailed(error));
    });
  }

  this.auth = () => new AuthService();
}

export default DatabaseService;
