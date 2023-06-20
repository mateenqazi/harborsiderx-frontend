export const realBusinessActionTypes = (key: string) => ({
  PENDING: `${key} - Pending`,
  SUCCESS: `${key} - Success`,
  ERROR: `${key} - Error`,
});
export const ACTIONS = {
  GET_MEDICINES_BEGIN: 'GET_MEDICINES_BEGIN',
  GET_MEDICINES: realBusinessActionTypes('GET_MEDICINES'),
  GET_SIGNUP: realBusinessActionTypes('GET_SIGNUP'),
  GET_SIGNUP_BEGIN: 'GET_SIGNUP_BEGIN',
  GET_LOGIN_BEGIN: 'GET_LOGIN_BEGIN',
  GET_LOGIN: realBusinessActionTypes('GET_LOGIN'),
  GET_GOOGLE_LOGIN_BEGIN: 'GET_GOOGLE_LOGIN_BEGIN',
  GET_GOOGLE_LOGIN: realBusinessActionTypes('GET_GOOGLE_LOGIN'),
  CLEAR_LOGIN_STATE_BEGIN: 'CLEAR_LOGIN_STATE_BEGIN',
  GET_AUTH_USER_BEGIN: 'GET_AUTH_USER_BEGIN',
  CLEAR_AUTH_USER_STATE_BEGIN: 'CLEAR_AUTH_USER_STATE_BEGIN',
  GET_AUTH_USER: realBusinessActionTypes('GET_AUTH_USER_BEGIN'),
  CLEAR_LOGIN_STATE: realBusinessActionTypes('CLEAR_LOGIN_STATE'),
  SHIPPING_INFORMATION: realBusinessActionTypes('SHIPPING_INFORMATION'),
  PAYMENT_INFORMATION: realBusinessActionTypes('PAYMENT_INFORMATION'),
  BILLING_INFORMATION: realBusinessActionTypes('BILLING_INFORMATION'),
  SUBMIT_SHIPPING_INFORMATION: 'SUBMIT_SHIPPING_INFORMATION',
  SUBMIT_BILLING_INFORMATION: 'SUBMIT_BILLING_INFORMATION',
  SUBMIT_PAYMENT_INFORMATION: 'SUBMIT_PAYMENT_INFORMATION',
  REDIRECT_TO_LOGIN: 'REDIRECT_TO_LOGIN',
  GET_ALL_QUESTIONS: realBusinessActionTypes('GET_ALL_QUESTIONS'),
  GET_ALL_ANSWERS: realBusinessActionTypes('GET_ALL_ANSWERS'),
  SAVE_ALL_ANSWERS: realBusinessActionTypes('SAVE_ALL_ANSWERS'),
  FETCH_ALL_QUESTIONS: 'FETCH_ALL_QUESTIONS',
  FETCH_ALL_ANSWERS: 'FETCH_ALL_ANSWERS',
  SAVE_ALL_ANSWERS_INTO_DB: 'SAVE_ALL_ANSWERS_INTO_DB',
  SAVE_USER_PROFILE_DATA: 'SAVE_USER_PROFILE_DATA',
  SAVE_USER_PROFILE_DATA_ACTIONS: realBusinessActionTypes(
    'SAVE_USER_PROFILE_DATA_ACTIONS'
  ),
};

export default {
  ...ACTIONS,
};
