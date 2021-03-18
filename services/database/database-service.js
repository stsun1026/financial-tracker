import firebase from '../../config/firebase/firebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../../redux/store';
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
  this.ref = null;

  this.withRef = (ref) => {
    this.ref = ref;
    return this;  
  }

  this.setValue = (model) => {
    store.dispatch(settingUserData());
    this.ref.set(
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
    this.ref.on(VALUE, (snapshot) => {
      const data = snapshot.val();
      store.dispatch(fetchingUserDataSuccess(data)); 
    }, (error) => {
      store.dispatch(fetchingUserDataFailed(error));
    });
  }
}

export default DatabaseService;
