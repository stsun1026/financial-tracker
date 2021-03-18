import RefBuilder from './ref-builder';

const UserRefBuilder = function(pathItems) {
  RefBuilder.call(this);
  this.pathItems = pathItems;
  this.build = () => {
   return RefBuilder.prototype.build(this.pathItems);
  }
}

export default UserRefBuilder;
