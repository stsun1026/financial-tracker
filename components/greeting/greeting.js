import { useSelector } from 'react-redux';

const Greeting = () => {
  const userData = useSelector(state => state.login.userData)
  const name = userData && userData.name ? userData.name : "";
  const firstName = name.split(' ')[0];
  return (
    <div>
      Hi {firstName}
    </div>
  );
}

export default Greeting;
