import { connect } from 'react-redux';
import Questionnaire from './Questionnaire';
import {
  getAllQuestions,
  saveAllAnswers,
} from '../../store/action/questionnaire.actions';
import { setUserProfile } from '../../store/action/credential.actions';
import {
  getAllQuestion,
  getQuestionLoading,
  getAllAnswer,
  setAllAnswerLoading,
} from '../../store/selectors/questionnaire.selector';
import { getUpdateProfileLoading } from '../../store/selectors/credential.selector';
const mapStateToProps = (state: any) => {
  const allQuestion = getAllQuestion(state);
  const loading = getQuestionLoading(state);
  const allAnswer = getAllAnswer(state);
  const answerLoading = setAllAnswerLoading(state);
  const updateProfileLoading = getUpdateProfileLoading(state);
  return {
    allQuestion,
    loading,
    allAnswer,
    answerLoading,
    updateProfileLoading,
  };
};

const mapDispatchToProps = {
  getAllQuestions,
  saveAllAnswers,
  setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
