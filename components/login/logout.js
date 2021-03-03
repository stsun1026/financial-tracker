import { connect } from 'react-redux'
import firebase from '../../config/firebase/firebase';
import { bindActionCreators } from 'redux'
import { logout } from '../../redux/login/actions';

const Logout = ({children, ...props}) => {
  const logout = () => {
    firebase.auth().signOut().then(() => {
      props.logout(); 
    }).catch((error) => {
      console.log('logout error', error);
    });
  }

  return (<button onClick={logout}>{children}</button>);
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: bindActionCreators(logout, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
