import { useSelector } from 'react-redux';

const Greeting = () => {
  const userData = useSelector(state => state.login.userData)
  const name = userData && userData.name ? userData.name : "";
  return (
    <div>
      Hello {name}
    </div>
  );
}

export default Greeting;
