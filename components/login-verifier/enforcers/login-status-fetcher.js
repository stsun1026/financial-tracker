import { useLayoutEffect } from 'react';
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import firebase from '../../../config/firebase/firebase';
import {
  fetchingLoginStatus,
  fetchingLoginStatusComplete,
} from '../../../redux/login/actions';


const LoginStatusFetcher = ({children, ...props}) => {
  const isFetchingLoginStatus = useSelector(state => state.login.isFetchingLoginStatus);
  useLayoutEffect(() => {
    props.fetchingLoginStatus();
  }, [])
  // props.fetchingLoginStatus();
  if(isFetchingLoginStatus) {
    firebase.auth().onAuthStateChanged((user) => {
      props.fetchingLoginStatusComplete(!!user);
    });
  }

  return (<div>{children}</div>);
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingLoginStatus: bindActionCreators(fetchingLoginStatus, dispatch),
    fetchingLoginStatusComplete: bindActionCreators(fetchingLoginStatusComplete, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoginStatusFetcher);