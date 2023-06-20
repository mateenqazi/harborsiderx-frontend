import { connect } from 'react-redux';
import { getAuthUserBegin } from '../store/action/credential.actions';
import {
  getAuthUserData, getAuthUserError, getAuthUserLoading,
} from '../store/selectors/credential.selector';
import AuthGuard from './AuthGuard';

const mapStateToProps = (state: any) => {
  const authUserData = getAuthUserData(state);
  const authUserError = getAuthUserError(state);
  const authUserLoading = getAuthUserLoading(state);
  return {
    authUserData,
    authUserError,
    authUserLoading
  };
};

const mapDispatchToProps = {
    getAuthUserHandler: getAuthUserBegin
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthGuard);
