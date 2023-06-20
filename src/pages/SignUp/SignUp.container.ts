import { connect } from 'react-redux';
import SignUp from './SignUpPage';
import {
  getSignUpData,
  getSignUpError,
  getSignUpLoading,
} from '../../store/selectors/credential.selector';
import { SignUpBegin } from '../../store/action/credential.actions';

const mapStateToProps = (state: any) => {
  const signUpData = getSignUpData(state);
  const loading = getSignUpLoading(state);
  const errors = getSignUpError(state);
  return {
    signUpData,
    loading,
    errors,
  };
};

const mapDispatchToProps = {
  signUpHandler: SignUpBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
