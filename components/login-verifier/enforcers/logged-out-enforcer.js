import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { DASHBOARD_HOME } from '../../../constants/routes';
import CheckingLoginStatus from '../checking-login-status';
import LoginStatusFetcher from './login-status-fetcher';

const LoggedOutEnforcer = ({children, ...props}) => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const isFetchingLoginStatus = useSelector(state => state.login.isFetchingLoginStatus);
  
  useEffect(() => {
    if(isFetchingLoginStatus === false && isLoggedIn === true) {
      Router.push(DASHBOARD_HOME);
    }
  }, [isLoggedIn]);

  const displayChildren = () => !isFetchingLoginStatus && !isLoggedIn;
  return (
    <LoginStatusFetcher>
      {displayChildren() ? children : <CheckingLoginStatus/>}
    </LoginStatusFetcher>
    );
}

export default LoggedOutEnforcer;
