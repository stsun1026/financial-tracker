import RedirectService from '../../services/routing/redirect-service';
import databaseService from '../../services/database/database-service';

const Logout = ({children, ...props}) => {
  const logout = () => {
    databaseService.auth()
      .withSuccessAction(RedirectService.goToUnauthorizedLandingPage)
      .logout();
  }

  return (<button onClick={logout}>{children}</button>);
}

export default Logout;
