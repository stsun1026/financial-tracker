import firebase from '../../../config/firebase/firebase';
import {
  SEPARATOR,
  USERS,
} from '../constants';
import UserRefBuilder from './user-ref-builder';
import DatabaseReferenceError from '../../errors/database-reference-error';

const RefBuilder = function() {
  this.pathItems = []
  this.user = (uid) => {
    if(!uid) {
      throw new DatabaseReferenceError('Uid must be provided');
    }
    this.pathItems.push(...[USERS, uid]);
    return new UserRefBuilder(this.pathItems);
  }
}

RefBuilder.prototype.build = function(pathItems) {
  const combinedPath = pathItems.join(SEPARATOR) + SEPARATOR;
  return firebase.database().ref(combinedPath);
}

export default RefBuilder;
