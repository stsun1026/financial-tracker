import firebase from '../../../config/firebase/firebase';
import {
  SEPARATOR,
  USERS,
} from '../constants';
import UserRefBuilder from './user-ref-builder';
import DatabaseReferenceError from '../../errors/database-reference-error';

export const RefBuilder = function() {
  this.pathItems = []

  this.user = (uid) => {
    if(!uid) {
      throw new DatabaseReferenceError('Uid must be provided');
    }
    return new UserRefBuilder([USERS, uid]);
  }

  this.build = () => {
    const combinedPath = this.pathItems.join(SEPARATOR) + SEPARATOR;
    return firebase.database().ref(combinedPath);
  }
}

const refBuilder = new RefBuilder();

export default refBuilder;
