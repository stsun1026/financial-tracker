import Profile from '../../../models/database-models/profile';
import Income from '../../../models/database-models/income'
import Tax from '../../../models/database-models/tax';
import User from '../../../models/database-models/user';

const initNewUserFactory = function() {
  this.create = () => {
    return User({
      isOnboarded: false,
    });
  }
}

const NewUserFactory = new initNewUserFactory();

export default NewUserFactory;
