import { fromJS } from 'immutable';
import { ACTIONS } from '../app.constants';

export default function credential(
  state = fromJS({
    credential: {},
  }),
  action: any
) {
  switch (action.type) {
    case ACTIONS.GET_SIGNUP.PENDING: {
      return state.setIn(['credential', 'signUp', 'loading'], true);
    }
    case ACTIONS.GET_SIGNUP.SUCCESS: {
      return state
        .setIn(['credential', 'signUp', 'data'], action.data)
        .setIn(['credential', 'signUp', 'loading'], false);
    }
    case ACTIONS.GET_SIGNUP.ERROR: {
      return state
        .setIn(['credential', 'signUp', 'error'], true)
        .setIn(['credential', 'signUp', 'loading'], false);
    }

    case ACTIONS.GET_LOGIN.PENDING: {
      return state.setIn(['credential', 'login', 'loading'], true);
    }
    case ACTIONS.GET_LOGIN.SUCCESS: {
      return state
        .setIn(['credential', 'login', 'data'], action.data)
        .setIn(['credential', 'login', 'loading'], false);
    }
    case ACTIONS.GET_LOGIN.ERROR: {
      return state
        .setIn(['credential', 'login', 'error'], action.data)
        .setIn(['credential', 'login', 'loading'], false);
    }

    case ACTIONS.GET_GOOGLE_LOGIN.SUCCESS: {
      return state
        .setIn(['credential', 'googleLogin', 'data'], action.data)
        .setIn(['credential', 'googleLogin', 'loading'], false);
    }

    case ACTIONS.GET_GOOGLE_LOGIN.ERROR: {
      return state
        .setIn(['credential', 'googleLogin', 'error'], action.data)
        .setIn(['credential', 'googleLogin', 'loading'], false);
    }

    case ACTIONS.GET_AUTH_USER.ERROR: {
      return state
        .setIn(['credential', 'authUser', 'error'], action.data)
        .setIn(['credential', 'authUser', 'loading'], false);
    }

    case ACTIONS.GET_AUTH_USER.SUCCESS: {
      return state
        .setIn(['credential', 'authUser', 'data'], action.data)
        .setIn(['credential', 'authUser', 'loading'], false);
    }

    case ACTIONS.GET_AUTH_USER.PENDING: {
      return state.setIn(['credential', 'authUser', 'loading'], true);
    }

    case ACTIONS.SAVE_USER_PROFILE_DATA_ACTIONS.PENDING: {
      return state.setIn(['credential', 'setProfile', 'loading'], true);
    }
    case ACTIONS.SAVE_USER_PROFILE_DATA_ACTIONS.SUCCESS: {
      return state.setIn(['credential', 'setProfile', 'loading'], false);
    }
    case ACTIONS.SAVE_USER_PROFILE_DATA_ACTIONS.ERROR: {
      return state.setIn(['credential', 'setProfile', 'loading'], false);
    }
  }
  return state;
}
