import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RedirectService from '../../services/routing/redirect-service';
import DatabaseService from '../../services/database/database-service';

const GoogleLogin = ({children, ...props}) => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  
  useEffect(() => {
    if(isLoggedIn) {
      new RedirectService().goToAuthorizedLandingPage();
    }
  }, [isLoggedIn]);

  const login = () => {
    new DatabaseService()
      .auth()
        .withSuccessAction(
          new RedirectService().goToAuthorizedLandingPage)
        .loginWithGooglePopup();
  }

  return (<button onClick={login}>{children}</button>);
}

export default GoogleLogin;
