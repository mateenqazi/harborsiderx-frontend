export const getAllQuestion = (state: any) => {
  const { questionnaire } = state;
  return questionnaire.getIn(['questionnaire', 'questions', 'data']);
};

export const getQuestionLoading = (state: any) => {
  const { questionnaire } = state;
  return questionnaire.getIn(['questionnaire', 'questions', 'loading']);
};

export const getAllAnswer = (state: any) => {
  const { questionnaire } = state;
  return questionnaire.getIn(['questionnaire', 'answers', 'data']);
};

export const setAllAnswerLoading = (state: any) => {
  const { questionnaire } = state;
  return questionnaire.getIn(['questionnaire', 'answers', 'loading']);
};
