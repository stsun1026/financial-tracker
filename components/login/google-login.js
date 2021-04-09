import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import redirectService from '../../services/routing/redirect-service';
import databaseService from '../../services/database/database-service';

const GoogleLogin = ({children, ...props}) => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  useEffect(() => {
    if(isLoggedIn) {
      redirectService.goToAuthorizedLandingPage();
    }
  }, [isLoggedIn]);

  const login = () => {
    databaseService.auth()
        .withSuccessAction(redirectService.goToAuthorizedLandingPage)
        .loginWithGooglePopup();
  }

  return (<button onClick={login}>{children}</button>);
}

export default GoogleLogin;
