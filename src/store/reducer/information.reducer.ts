import { fromJS } from 'immutable';
import { ACTIONS } from '../app.constants';

export default function shipping(
  state = fromJS({
    information: {},
  }),
  action: any
) {
  switch (action.type) {
    case ACTIONS.SHIPPING_INFORMATION.PENDING: {
      return state.setIn(['information', 'shipping', 'loading'], true);
    }
    case ACTIONS.SHIPPING_INFORMATION.SUCCESS: {
      return state
        .setIn(['information', 'shipping', 'data'], action.data)
        .setIn(['information', 'shipping', 'loading'], false);
    }
    case ACTIONS.SHIPPING_INFORMATION.ERROR: {
      return state
        .setIn(['information', 'shipping', 'error'], action.data)
        .setIn(['information', 'shipping', 'loading'], false);
    }
    case ACTIONS.BILLING_INFORMATION.PENDING: {
      return state.setIn(['information', 'billing', 'loading'], true);
    }
    case ACTIONS.BILLING_INFORMATION.SUCCESS: {
      return state
        .setIn(['information', 'billing', 'data'], action.data)
        .setIn(['information', 'billing', 'loading'], false);
    }
    case ACTIONS.BILLING_INFORMATION.ERROR: {
      return state
        .setIn(['information', 'billing', 'error'], action.data)
        .setIn(['information', 'billing', 'loading'], false);
    }
    case ACTIONS.PAYMENT_INFORMATION.PENDING: {
      return state.setIn(['information', 'payment', 'loading'], true);
    }
    case ACTIONS.PAYMENT_INFORMATION.SUCCESS: {
      return state
        .setIn(['information', 'payment', 'data'], action.data)
        .setIn(['information', 'payment', 'loading'], false);
    }
    case ACTIONS.PAYMENT_INFORMATION.ERROR: {
      return state
        .setIn(['information', 'payment', 'error'], action.data)
        .setIn(['information', 'payment', 'loading'], false);
    }
  }
  return state;
}
