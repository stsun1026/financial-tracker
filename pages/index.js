import Head from 'next/head';
import LoginVerifier from '../components/login-verifier/login-verifier';
import GoogleLogin from '../components/login/google-login';

const Index = () => {
  return (
    <LoginVerifier MUST_BE_LOGGED_OUT_OTHERWISE_REDIRECT>
      <Head>
        <title>Welcome</title>
      </Head>
      <h1>Login</h1>
      <GoogleLogin>Login With Google</GoogleLogin>
    </LoginVerifier>
  );
}

export default Index;
