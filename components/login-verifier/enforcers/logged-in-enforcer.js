import { useEffect, useLayoutEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect, useSelector } from 'react-redux';
import RedirectService from '../../../services/routing/redirect-service';
import CheckingLoginStatus from '../checking-login-status';
import {
  fetchingLoginStatus,
  fetchingLoginStatusComplete,
} from '../../../redux/login/actions';
import firebase from '../../../config/firebase/firebase';

const LoggedInEnforcer = ({children, ...props}) => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const isFetchingLoginStatus = useSelector(state => state.login.isFetchingLoginStatus);

  useLayoutEffect(() => {
    if(isLoggedIn === null) {
      props.fetchingLoginStatus();
    }
  }, []);

  useEffect(() => {
    if(isFetchingLoginStatus === false && isLoggedIn === false) {
      RedirectService.goToUnauthorizedLandingPage();
    }
  }, [isFetchingLoginStatus]);

  if(isFetchingLoginStatus) {
    firebase.auth().onAuthStateChanged((user) => {
      props.fetchingLoginStatusComplete(user);
    });
  }

  if(isFetchingLoginStatus || !isLoggedIn) {
    return <CheckingLoginStatus/>;
  }
  return (<div>{children}</div>);
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingLoginStatus: bindActionCreators(fetchingLoginStatus, dispatch),
    fetchingLoginStatusComplete: bindActionCreators(fetchingLoginStatusComplete, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoggedInEnforcer);
