import { connect } from 'react-redux';
import Login from './LoginPage';
import {
  getAuthUserData,
  getGoogleLoginData,
  getGoogleLoginError,
  getLoginData,
  getLoginError,
  getLoginLoading,
} from '../../store/selectors/credential.selector';
import {
  getAuthUserBegin,
  googleLoginBegin,
  loginBegin,
} from '../../store/action/credential.actions';

const mapStateToProps = (state: any) => {
  const loginData = getLoginData(state);
  const loading = getLoginLoading(state);
  const errors = getLoginError(state);

  const googleData = getGoogleLoginData(state);
  const googleError = getGoogleLoginError(state);

  const authUserData = getAuthUserData(state);
  return {
    loginData,
    loading,
    errors,

    googleData,
    googleError,
    authUserData
  };
};

const mapDispatchToProps = {
  loginHandler: loginBegin,
  submitGoogleHandler: googleLoginBegin,
  getAuthUserHandler: getAuthUserBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
