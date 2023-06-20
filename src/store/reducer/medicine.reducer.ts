import { fromJS } from 'immutable';
import { ACTIONS } from '../app.constants';

export default function medicine(
  state = fromJS({
    medicine: {},
  }),
  action: any
) {
  switch (action.type) {
    case ACTIONS.GET_MEDICINES.PENDING: {
      return state.setIn(['medicine', 'loading'], true);
    }
    case ACTIONS.GET_MEDICINES.SUCCESS: {
      return state
        .setIn(['medicine', 'data'], action.data)
        .setIn(['medicine', 'loading'], false);
    }
    case ACTIONS.GET_MEDICINES.ERROR: {
      return state
        .setIn(['medicine', 'error'], action.data)
        .setIn(['medicine', 'loading'], false);
    }
  }
  return state;
}
