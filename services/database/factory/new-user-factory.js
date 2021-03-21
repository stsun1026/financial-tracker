import Profile from '../../../models/profile';
import Income from '../../../models/income'
import Tax from '../../../models/tax';
import User from '../../../models/user';

const initNewUserFactory = function() {
  this.create = () => {
    return User({
      isOnboarded: false,
    });
  }
}

const NewUserFactory = new initNewUserFactory();

export default NewUserFactory;
