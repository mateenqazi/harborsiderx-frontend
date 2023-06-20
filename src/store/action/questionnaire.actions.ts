import ACTIONS from '../app.constants';

export const getAllQuestionActions = {
  pending: () => ({
    type: ACTIONS.GET_ALL_QUESTIONS.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.GET_ALL_QUESTIONS.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.GET_ALL_QUESTIONS.ERROR,
    error,
  }),
};

export const getAllQuestions = () => {
  return {
    type: ACTIONS.FETCH_ALL_QUESTIONS,
  };
};

export const getAllAnswersActions = {
  pending: () => ({
    type: ACTIONS.GET_ALL_ANSWERS.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.GET_ALL_ANSWERS.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.GET_ALL_ANSWERS.ERROR,
    error,
  }),
};

export const saveAllAnswersActions = {
  pending: () => ({
    type: ACTIONS.SAVE_ALL_ANSWERS.PENDING,
  }),
  success: () => ({
    type: ACTIONS.SAVE_ALL_ANSWERS.SUCCESS,
  }),
  error: (error: any) => ({
    type: ACTIONS.SAVE_ALL_ANSWERS.ERROR,
    error,
  }),
};

export const getAllAnswers = () => {
  return {
    type: ACTIONS.FETCH_ALL_ANSWERS,
  };
};

export const saveAllAnswers = (data: any) => {
  return {
    type: ACTIONS.SAVE_ALL_ANSWERS_INTO_DB,
    data,
  };
};
