import Router from 'next/router';
import {
  DASHBOARD_HOME,
  LOGIN_HOME,
} from '../../services/routing/constants';

const RedirectService = function() {
  this.goToUnauthorizedLandingPage = () => {
    Router.push(LOGIN_HOME);
  }

  this.goToAuthorizedLandingPage = () => {
    Router.push(DASHBOARD_HOME);
  }
}

const redirectService = new RedirectService();

export default redirectService;
