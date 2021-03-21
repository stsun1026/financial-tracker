import RedirectService from '../../services/routing/redirect-service';
import DatabaseService from '../../services/database/database-service';

const Logout = ({children, ...props}) => {
  const logout = () => {
    new DatabaseService().auth()
      .withSuccessAction(
        new RedirectService().goToUnauthorizedLandingPage)
      .logout();
  }

  return (<button onClick={logout}>{children}</button>);
}

export default Logout;
