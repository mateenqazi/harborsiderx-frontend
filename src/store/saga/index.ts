import { all, spawn } from '@redux-saga/core/effects';
import credentialSagas from './credentialSagas.saga';
import informationSagas from './informationSagas.saga';
import questionSagas from './questionnaireSagas.saga';
import medicineSaga from './medicine.saga';

export default function* rootSaga() {
  yield all([spawn(credentialSagas)]);
  yield all([spawn(informationSagas)]);
  yield all([spawn(questionSagas)]);
  yield all([spawn(medicineSaga)]);
}
