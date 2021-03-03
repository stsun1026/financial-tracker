import LoggedInEnforcer from './enforcers/logged-in-enforcer';
import LoggedOutEnforcer from './enforcers/logged-out-enforcer';

const LoginVerifier = ({children, ...props}) => {
  if(props.MUST_BE_LOGGED_IN_OTHERWISE_REDIRECT) {
    return(<LoggedInEnforcer>{children}</LoggedInEnforcer>);
  }
  else if(props.MUST_BE_LOGGED_OUT_OTHERWISE_REDIRECT) {
    return(<LoggedOutEnforcer>{children}</LoggedOutEnforcer>);
  }

  return (<div>{children}</div>);
}

export default LoginVerifier;
