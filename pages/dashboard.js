import LoginVerifier from '../components/login-verifier/login-verifier';
import Logout from '../components/login/logout';
import Greeting from '../components/greeting/greeting';

const Dashboard = () => {
  return (
    <LoginVerifier MUST_BE_LOGGED_IN_OTHERWISE_REDIRECT>
      <h1>Dashboard</h1>
      <h3><Greeting></Greeting></h3>
      <Logout>Logout</Logout>
    </LoginVerifier>
  );
}

export default Dashboard;
