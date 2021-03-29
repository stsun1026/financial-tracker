import { RefBuilder } from './ref-builder';

const UserRefBuilder = function(pathItems) {
  RefBuilder.call(this);
  this.pathItems = pathItems;
}

export default UserRefBuilder;
