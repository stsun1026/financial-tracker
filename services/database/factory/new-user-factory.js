import Profile from '../../../models/profile';
import Income from '../../../models/income'
import Tax from '../../../models/tax';
import User from '../../../models/user';

const NewUserFactory = function() {
  this.create = () => {
    return User({
      isOnboarded: false,
    });
  }
}

export default NewUserFactory;
