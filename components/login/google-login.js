import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RedirectService from '../../services/routing/redirect-service';
import DatabaseService from '../../services/database/database-service';

const GoogleLogin = ({children, ...props}) => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const redirectService = new RedirectService();

  useEffect(() => {
    if(isLoggedIn) {
      new redirectService.goToAuthorizedLandingPage();
    }
  }, [isLoggedIn]);

  const login = () => {
    new DatabaseService()
      .auth()
        .withSuccessAction(
          redirectService.goToAuthorizedLandingPage)
        .loginWithGooglePopup();
  }

  return (<button onClick={login}>{children}</button>);
}

export default GoogleLogin;
