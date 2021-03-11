import { useEffect, useLayoutEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect, useSelector } from 'react-redux';
import Router from 'next/router';
import { DASHBOARD_HOME } from '../../../constants/routes';
import CheckingLoginStatus from '../checking-login-status';
import {
  fetchingLoginStatus,
  fetchingLoginStatusComplete,
} from '../../../redux/login/actions';
import firebase from '../../../config/firebase/firebase';

const LoggedOutEnforcer = ({children, ...props}) => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const isFetchingLoginStatus = useSelector(state => state.login.isFetchingLoginStatus);
  
  useLayoutEffect(() => {
    if(isLoggedIn === null) {
      props.fetchingLoginStatus();
    }
  }, []);

  useEffect(() => {
    if(isFetchingLoginStatus === false && isLoggedIn === true) {
      Router.push(DASHBOARD_HOME);
    }
  }, [isLoggedIn]);

  if(isFetchingLoginStatus) {
    firebase.auth().onAuthStateChanged((user) => {
      props.fetchingLoginStatusComplete(user);
    });
  }

  if(isFetchingLoginStatus || isLoggedIn || isLoggedIn === null) {
    return <CheckingLoginStatus/>;
  }
  return <div>{children}</div>
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchingLoginStatus: bindActionCreators(fetchingLoginStatus, dispatch),
    fetchingLoginStatusComplete: bindActionCreators(fetchingLoginStatusComplete, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoggedOutEnforcer);