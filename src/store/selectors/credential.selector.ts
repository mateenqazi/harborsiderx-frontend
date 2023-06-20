export const getSignUpLoading = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'signUp', 'loading']);
};

export const getSignUpData = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'signUp', 'data']);
};

export const getSignUpError = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'signUp', 'error']);
};

export const getLoginLoading = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'login', 'loading']);
};

export const getLoginData = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'login', 'data']);
};

export const getGoogleLoginData = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'googleLogin', 'data']);
};

export const getGoogleLoginError = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'googleLogin', 'error']);
};

export const getLoginError = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'login', 'error']);
};

export const getAuthUserData = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'authUser', 'data']);
};

export const getAuthUserError = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'authUser', 'error']);
};

export const getAuthUserLoading = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'authUser', 'loading']);
};

export const getUpdateProfileLoading = (state: any) => {
  const { credentials } = state;
  return credentials.getIn(['credential', 'setProfile', 'loading']);
};
