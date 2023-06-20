import {
  all,
  takeEvery,
  put,
  retry,
  takeLatest,
} from '@redux-saga/core/effects';
import { ACTIONS } from '../app.constants';
import { credentialActions } from '../action';
import { API } from '../services/auth';

type signUpActionType = {
  type: string;
  data: any;
};

function* signUpHandler(action: signUpActionType) {
  try {
    yield put(credentialActions.SignUp.pending());
    const response: object = yield retry(2, 2000, API.getSignUp, action.data);
    yield put(credentialActions.SignUp.success(response));
  } catch (error) {
    yield put(credentialActions.SignUp.error('there is an error'));
  }
}

function* loginHandler(action: signUpActionType) {
  try {
    yield put(credentialActions.login.pending());
    const response: string = yield retry(2, 2000, API.getLogin, action.data);
    yield put(credentialActions.login.success(response));
  } catch (error) {
    yield put(credentialActions.login.error('there is an error'));
  }
}

function* redirectToLogin() {
  try {
    yield put(credentialActions.login.success(undefined));
  } catch (error) {
    yield put(credentialActions.login.error('there is an error'));
  }
}

function* googleLoginHandler() {
  try {
    yield put(credentialActions.googleLogin.pending());
    const response: string = yield retry(2, 2000, API.getGoogleLogin);
    yield put(credentialActions.googleLogin.success(response));
  } catch (error) {
    yield put(credentialActions.googleLogin.error('there is an error'));
  }
}

function* clearLoginState() {
  try {
    yield put(credentialActions.login.success(null));
  } catch (error) {
    yield put(credentialActions.login.error('there is an error'));
  }
}

function* authUserHandler(data: any) {
  try {
    yield put(credentialActions.getAuthUser.pending());
    const response: string = yield retry(1, 1000, API.getAuthUser, data);
    yield put(credentialActions.getAuthUser.success(response));
  } catch (error) {
    yield put(
      credentialActions.getAuthUser.error('there is an error in getting user')
    );
  }
}

function* saveUserProfileData(data: any) {
  try {
    yield put(credentialActions.setProfileInformationUser.pending());
    const response: string = yield retry(2, 2000, API.updateUser, data?.data);
    yield put(credentialActions.setProfileInformationUser.success(response));
  } catch (error) {
    yield put(
      credentialActions.setProfileInformationUser.error(
        'there is an error in getting user'
      )
    );
  }
}

function* clearAuthUserStateHandler() {
  try {
    yield put(credentialActions.getAuthUser.success(null));
  } catch (error) {
    yield put(credentialActions.getAuthUser.error('there is an error'));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(ACTIONS.GET_SIGNUP_BEGIN, signUpHandler)]);
  yield all([takeLatest(ACTIONS.GET_LOGIN_BEGIN, loginHandler)]);
  yield all([takeLatest(ACTIONS.REDIRECT_TO_LOGIN, redirectToLogin)]);

  yield all([takeEvery(ACTIONS.GET_GOOGLE_LOGIN_BEGIN, googleLoginHandler)]);
  yield all([takeEvery(ACTIONS.CLEAR_LOGIN_STATE_BEGIN, clearLoginState)]);

  yield all([takeEvery(ACTIONS.GET_AUTH_USER_BEGIN, authUserHandler)]);
  yield all([
    takeEvery(ACTIONS.CLEAR_AUTH_USER_STATE_BEGIN, clearAuthUserStateHandler),
  ]);
  yield all([takeEvery(ACTIONS.SAVE_USER_PROFILE_DATA, saveUserProfileData)]);
}
