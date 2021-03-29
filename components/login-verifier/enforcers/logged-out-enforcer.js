import { useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux';
import RedirectService from '../../../services/routing/redirect-service';
import CheckingLoginStatus from '../checking-login-status';
import databaseService from '../../../services/database/database-service';

const LoggedOutEnforcer = ({children, ...props}) => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const isFetchingLoginStatus = useSelector(state => state.login.isFetchingLoginStatus);

  useLayoutEffect(() => {
    if(isLoggedIn === null) {
      databaseService.auth().getUserData();
    }
  }, []);

  useEffect(() => {
    if(isFetchingLoginStatus === false && isLoggedIn === true) {
      RedirectService.goToAuthorizedLandingPage();
    }
  }, [isFetchingLoginStatus]);

  if(isFetchingLoginStatus || isLoggedIn || isLoggedIn === null) {
    return <CheckingLoginStatus/>;
  }
  return (<div>{children}</div>);
}

export default LoggedOutEnforcer;
