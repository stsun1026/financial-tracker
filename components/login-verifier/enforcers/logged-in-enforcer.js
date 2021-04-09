import { useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux';
import redirectService from '../../../services/routing/redirect-service';
import CheckingLoginStatus from '../checking-login-status';
import databaseService from '../../../services/database/database-service';

const LoggedInEnforcer = ({children, ...props}) => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const isFetchingLoginStatus = useSelector(state => state.login.isFetchingLoginStatus);

  useLayoutEffect(() => {
    if(isLoggedIn === null) {
      databaseService.auth().getUserData();
    }
  }, []);

  useEffect(() => {
    if(isFetchingLoginStatus === false && isLoggedIn === false) {
      redirectService.goToUnauthorizedLandingPage();
    }
  }, [isFetchingLoginStatus]);

  if(isFetchingLoginStatus || !isLoggedIn) {
    return <CheckingLoginStatus/>;
  }
  return (<div>{children}</div>);
}

export default LoggedInEnforcer;

