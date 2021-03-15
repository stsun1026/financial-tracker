import RedirectService from '../../services/routing/redirect-service';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import firebase from '../../config/firebase/firebase';
import {
  loginSuccess,
  loginFailed
} from '../../redux/login/actions';

const GoogleLogin = ({children, ...props}) => {
  const createProvider = () => new firebase.auth.GoogleAuthProvider();
  const login = () => {
    const provider = createProvider();
    firebase.auth().signInWithPopup(provider)
      .then((user) => {
        props.loginSuccess(user);
        RedirectService.goToAuthorizedLandingPage();
      }).catch((error) => {
        props.loginFailed()
      });
  }

  return (<button onClick={login}>{children}</button>);
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: bindActionCreators(loginSuccess, dispatch),
    loginFailed: bindActionCreators(loginFailed, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(GoogleLogin);
