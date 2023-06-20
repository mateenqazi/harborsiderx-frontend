/* eslint-disable no-unused-vars */
import { all, put, retry, takeLatest, delay } from '@redux-saga/core/effects';
import { ACTIONS } from '../app.constants';
import { informationActions } from '../action';
import { API } from '../services/auth';

type informationActionType = {
  type: string;
  data: any;
};

function* shippingInformation(action: informationActionType) {
  try {
    yield put(informationActions.ShippingInformation.pending());
    // const response: string = yield retry(2, 2000, API.getLogin, action.data);
    yield delay(2000);
    yield put(informationActions.ShippingInformation.success({}));
  } catch (error) {
    yield put(
      informationActions.ShippingInformation.error('there is an error')
    );
  }
}

function* paymentInformation(action: informationActionType) {
  try {
    console.log('MATEEEEEN', action);
    yield put(informationActions.PaymentInformation.pending());
    yield delay(2000);
    // const response: string = yield retry(2, 2000, API.getLogin, action.data);
    // console.log(response);
    yield put(informationActions.PaymentInformation.success({}));
  } catch (error) {
    yield put(informationActions.PaymentInformation.error('there is an error'));
  }
}

function* billingInformation(action: informationActionType) {
  try {
    yield put(informationActions.BillingInformation.pending());
    yield delay(2000);
    // const response: string = yield retry(2, 2000, API.getLogin, action.data);
    // console.log(response);
    yield put(informationActions.BillingInformation.success({}));
  } catch (error) {
    yield put(informationActions.BillingInformation.error('there is an error'));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(ACTIONS.SUBMIT_SHIPPING_INFORMATION, shippingInformation),
    takeLatest(ACTIONS.SUBMIT_BILLING_INFORMATION, billingInformation),
    takeLatest(ACTIONS.SUBMIT_PAYMENT_INFORMATION, paymentInformation),
  ]);
}
