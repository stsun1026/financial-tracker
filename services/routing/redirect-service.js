import Router from 'next/router';
import {
  DASHBOARD_HOME,
  LOGIN_HOME,
} from '../../services/routing/constants';

const goToUnauthorizedLandingPage = () => {
  Router.push(LOGIN_HOME);
}

const goToAuthorizedLandingPage = () => {
  Router.push(DASHBOARD_HOME);
}

const RedirectService = {
  goToUnauthorizedLandingPage: goToUnauthorizedLandingPage,
  goToAuthorizedLandingPage: goToAuthorizedLandingPage,
};

export default RedirectService;
