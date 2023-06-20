import { fromJS } from 'immutable';
import { ACTIONS } from '../app.constants';

export default function shipping(
  state = fromJS({
    questionnaire: {},
  }),
  action: any
) {
  switch (action.type) {
    case ACTIONS.GET_ALL_QUESTIONS.PENDING: {
      return state.setIn(['questionnaire', 'questions', 'loading'], true);
    }
    case ACTIONS.GET_ALL_QUESTIONS.SUCCESS: {
      return state
        .setIn(['questionnaire', 'questions', 'data'], action.data)
        .setIn(['questionnaire', 'questions', 'loading'], false);
    }
    case ACTIONS.GET_ALL_QUESTIONS.ERROR: {
      return state
        .setIn(['questionnaire', 'questions', 'error'], action.data)
        .setIn(['questionnaire', 'questions', 'loading'], false);
    }

    case ACTIONS.GET_ALL_ANSWERS.SUCCESS: {
      return state.setIn(['questionnaire', 'answers', 'data'], action.data);
    }
    case ACTIONS.GET_ALL_ANSWERS.ERROR: {
      return state.setIn(['questionnaire', 'answers', 'error'], action.data);
    }

    case ACTIONS.SAVE_ALL_ANSWERS.PENDING: {
      return state.setIn(['questionnaire', 'answers', 'loading'], true);
    }

    case ACTIONS.SAVE_ALL_ANSWERS.SUCCESS: {
      return state.setIn(['questionnaire', 'answers', 'loading'], false);
    }
    case ACTIONS.SAVE_ALL_ANSWERS.ERROR: {
      return state.setIn(['questionnaire', 'answers', 'loading'], false);
    }
  }
  return state;
}
