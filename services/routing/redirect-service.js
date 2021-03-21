import Router from 'next/router';
import {
  DASHBOARD_HOME,
  LOGIN_HOME,
} from '../../services/routing/constants';

const initRedirectService = function() {
  this.goToUnauthorizedLandingPage = () => {
    Router.push(LOGIN_HOME);
  }

  this.goToAuthorizedLandingPage = () => {
    Router.push(DASHBOARD_HOME);
  }
}

const RedirectService = new initRedirectService();

export default RedirectService;
