import ACTIONS from '../app.constants';

export const SignUp = {
  pending: () => ({
    type: ACTIONS.GET_SIGNUP.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.GET_SIGNUP.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.GET_SIGNUP.ERROR,
    error,
  }),
};

export const login = {
  pending: () => ({
    type: ACTIONS.GET_LOGIN.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.GET_LOGIN.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.GET_LOGIN.ERROR,
    error,
  }),
};

export const googleLogin = {
  pending: () => ({
    type: ACTIONS.GET_GOOGLE_LOGIN.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.GET_GOOGLE_LOGIN.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.GET_GOOGLE_LOGIN.ERROR,
    error,
  }),
};

export const getAuthUser = {
  pending: () => ({
    type: ACTIONS.GET_AUTH_USER.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.GET_AUTH_USER.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.GET_AUTH_USER.ERROR,
    error,
  }),
};

export const setProfileInformationUser = {
  pending: () => ({
    type: ACTIONS.SAVE_USER_PROFILE_DATA_ACTIONS.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.SAVE_USER_PROFILE_DATA_ACTIONS.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.SAVE_USER_PROFILE_DATA_ACTIONS.ERROR,
    error,
  }),
};

export const SignUpBegin = (data: any) => {
  return {
    type: ACTIONS.GET_SIGNUP_BEGIN,
    data,
  };
};

export const loginBegin = (data: any) => {
  return {
    type: ACTIONS.GET_LOGIN_BEGIN,
    data,
  };
};

export const getAuthUserBegin = (data: string) => {
  return {
    type: ACTIONS.GET_AUTH_USER_BEGIN,
    data,
  };
};

export const clearLoginStateBegin = () => {
  return {
    type: ACTIONS.CLEAR_LOGIN_STATE_BEGIN,
  };
};

export const googleLoginBegin = () => {
  return {
    type: ACTIONS.GET_GOOGLE_LOGIN_BEGIN,
  };
};

export const redirectToLogin = () => {
  return {
    type: ACTIONS.REDIRECT_TO_LOGIN,
  };
};

export const clearAuthUserStateBegin = () => {
  return {
    type: ACTIONS.CLEAR_AUTH_USER_STATE_BEGIN,
  };
};

export const setUserProfile = (data: any) => {
  return {
    type: ACTIONS.SAVE_USER_PROFILE_DATA,
    data,
  };
};
