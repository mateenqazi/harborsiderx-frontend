import { all, put, retry, takeLatest } from '@redux-saga/core/effects';
import { ACTIONS } from '../app.constants';
import { medicineAction } from '../action';
import { API } from '../services/auth';
import { AxiosResponse } from 'axios';

function* getAllMedicines() {
  try {
    yield put(medicineAction.getMedicines.pending());
    const response: AxiosResponse = yield retry(
      2,
      2000,
      API.getMedicines
    );
    if (response) {
      yield put(medicineAction.getMedicines.success(response));
    }
  } catch (error) {
    yield put(
      medicineAction.getMedicines.error('there is an error')
    );
  }
}

export default function* rootSaga() {
  yield all([takeLatest(ACTIONS.GET_MEDICINES_BEGIN, getAllMedicines)]);
}
