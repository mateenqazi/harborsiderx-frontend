import { all, put, retry, takeLatest } from '@redux-saga/core/effects';
import { ACTIONS } from '../app.constants';
import { questionnaireActions } from '../action';
import { API } from '../services/auth';
import { AxiosResponse } from 'axios';

function* getAllQuestionApi() {
  try {
    yield put(questionnaireActions.getAllQuestionActions.pending());
    const response: AxiosResponse = yield retry(
      2,
      2000,
      API.getAllQuestion,
      {}
    );
    if (response?.data) {
      const questions = response?.data && response?.data?.questions;
      const answers = response?.data && response?.data?.answers;
      yield put(questionnaireActions.getAllQuestionActions.success(questions));
      yield put(questionnaireActions.getAllAnswersActions.success(answers));
    }
  } catch (error) {
    yield put(
      questionnaireActions.getAllQuestionActions.error('there is an error')
    );
  }
}

function* saveAllAnswersApi(data: any) {
  try {
    yield put(questionnaireActions.saveAllAnswersActions.pending());
    const response: AxiosResponse = yield retry(
      2,
      2000,
      API.saveAnswer,
      data?.data
    );
    if (response) {
      yield put(questionnaireActions.saveAllAnswersActions.success());
    }
  } catch (error) {
    yield put(
      questionnaireActions.saveAllAnswersActions.error('there is an error')
    );
  }
}

export default function* rootSaga() {
  yield all([takeLatest(ACTIONS.FETCH_ALL_QUESTIONS, getAllQuestionApi)]);
  yield all([takeLatest(ACTIONS.SAVE_ALL_ANSWERS_INTO_DB, saveAllAnswersApi)]);
}
