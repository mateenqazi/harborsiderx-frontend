import { connect } from 'react-redux';
import {
  SignUpBegin,
  redirectToLogin,
  clearLoginStateBegin,
  getAuthUserBegin,
  clearAuthUserStateBegin,
} from '../../store/action/credential.actions';
import {
  getSignUpData,
  getSignUpError,
  getSignUpLoading,
  getLoginData,
  getAuthUserData,
} from '../../store/selectors/credential.selector';
import Layout from '../main/Layout';

const mapStateToProps = (state: any) => {
  const signUpData = getSignUpData(state);
  const signUpLoading = getSignUpLoading(state);
  const signUpError = getSignUpError(state);
  const loginData = getLoginData(state);
  const authUserData = getAuthUserData(state);
  return {
    signUpData,
    signUpLoading,
    signUpError,
    loginData,
    authUserData,
  };
};

const mapDispatchToProps = {
  signUp: SignUpBegin,
  redirectToLogin,
  clearLoginState: clearLoginStateBegin,
  getAuthUserHandler: getAuthUserBegin,
  clearAuthUserState: clearAuthUserStateBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
