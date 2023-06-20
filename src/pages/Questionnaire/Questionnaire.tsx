/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Steps from '../../components/Steps';
import GenericPage from './GenericPage';
import QuestionnairePage1 from './Page1';
import { useNavigate } from 'react-router-dom';
import { getLocalStorageValue, setLocalStorageValue } from '../../utils/auth';
import { AnswerType, QuestionType } from '../../utils/types';
import { allQuestion } from '../../utils/constants/index';
import { primaryColor, whiteColor } from '../../theme';

interface QuestionnaireProps {
  loading: boolean;
  // allQuestion: QuestionType[];
  allAnswer: any;
  answerLoading: boolean;
  updateProfileLoading: boolean;
  getAllQuestions: () => {};
  saveAllAnswers: (data: any) => {};
  setUserProfile: (data: any) => {};
}

const Questionnaire = ({
  loading,
  getAllQuestions,
  // allQuestion,
  allAnswer,
  saveAllAnswers,
  answerLoading,
  setUserProfile,
  updateProfileLoading,
}: QuestionnaireProps) => {
  const navigate = useNavigate();
  const [pageNo, setPageNo] = useState(1);
  const [showData, setShowData] = useState(false);
  const [toggleItem, setToggleItem] = useState(false);
  const [toggleGoBackItem, setToggleGoBackItem] = useState(false);

  const [currentPageQuestion, setCurrentPageQuestion] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isSubmitAnswer, setIsSubmitAnswer] = useState(false);
  const [isProfileUpdate, setIsProfileUpdate] = useState(false);
  useEffect(() => {
    // getAllQuestions();
    const localAnswer = getLocalStorageValue('answers');
    if (typeof localAnswer !== 'undefined' && localAnswer !== null) {
      setAnswers(JSON.parse(localAnswer));
    }
    if (getLocalStorageValue('step2')) {
      navigate('/recommendation');
    }
  }, []);

  // useEffect(() => {
  //   if (isSubmitAnswer && !answerLoading) {
  //     setLocalStorageValue('step2', true);
  //     navigate('/recommendation');
  //   }
  // }, [answerLoading]);

  useEffect(() => {
    if (allAnswer?.length) {
      const transformAnswers = allAnswer.reduce(
        (result: any, currentObject: AnswerType) => {
          const { questionId, optionId, answer } = currentObject;
          result[currentObject.questionId] = { questionId, optionId, answer };
          return result;
        },
        {}
      );
      if (!Object.keys(answers).length) {
        setAnswers(transformAnswers);
      }
    }
  }, [allAnswer]);

  // useEffect(() => {
  //   if (isProfileUpdate && !updateProfileLoading) {
  //     setCurrentPageQuestion(getCurrentPageQuestion(allQuestion));
  //     setToggleItem(!toggleItem);
  //   }
  // }, [updateProfileLoading]);

  const getCurrentPageQuestion = (data: any) => {
    const pageValue = getLocalStorageValue('page');
    const filterResult = data.filter(
      (item: QuestionType) => item.step === Number(pageValue || 0)
    );
    return filterResult;
  };

  useEffect(() => {
    if (allQuestion?.length) {
      setCurrentPageQuestion(getCurrentPageQuestion(allQuestion));
    }
  }, [allQuestion]);

  useEffect(() => {
    const page = Number(getLocalStorageValue('page')) || 0;
    setShowData(false);
    setPageNo(page + 1);
  }, [toggleItem]);

  useEffect(() => {
    if (toggleGoBackItem) {
      const page = Number(getLocalStorageValue('page')) || 0;
      setShowData(false);
      setPageNo(page + 1);
      setToggleGoBackItem(!toggleGoBackItem);
    }
  }, [toggleGoBackItem]);

  const goBack = () => {
    const page = Number(getLocalStorageValue('page')) || 0;
    setLocalStorageValue('page', page - 1);
    setCurrentPageQuestion(getCurrentPageQuestion(allQuestion));
    setToggleGoBackItem(!toggleGoBackItem);
  };

  useEffect(() => {
    setShowData(true);
  }, [pageNo]);

  const submitPageData = (
    pageNo: number,
    type: string,
    answer: object,
    profileData?: any
  ) => {
    setLocalStorageValue('page', pageNo);
    setLocalStorageValue('answers', JSON.stringify(answer));
    if (pageNo === 1) {
      // setUserProfile(profileData);
      // setIsProfileUpdate(true);
      setCurrentPageQuestion(getCurrentPageQuestion(allQuestion));
      setToggleItem(!toggleItem);
      return;
    }
    if (pageNo === 18) {
      const dataAnswer = Object.values(answer);
      // setIsSubmitAnswer(true);
      // saveAllAnswers(dataAnswer);
      localStorage.removeItem('answers');
      setLocalStorageValue('step2', true);
      navigate('/recommendation');
      return;
    }
    setCurrentPageQuestion(getCurrentPageQuestion(allQuestion));
    setToggleItem(!toggleItem);
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      marginY={5}
      style={{ width: 'unset', marginLeft: 'unset' }}
    >
      <Steps currentStepNo={2} />
      <Box
        sx={{
          width: '100%',
          backgroundColor: `${whiteColor}`,
          borderRadius: 2,
        }}
      >
        <Grid m={2}>
          <Grid
            container
            p={2}
            sx={{
              color: '#040201',
              backgroundColor: `${primaryColor}`,
              borderRadius: '5px',
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              display={'flex'}
              justifyContent={'flex-start'}
              fontWeight={600}
              fontSize={'14px'}
              sx={{
                justifyContent: {
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-start',
                  lg: 'flex-start',
                },
              }}
            >
              Step 2: Complete Health Questionnaire
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              display={'flex'}
              justifyContent={'flex-end'}
              fontWeight={600}
              fontSize={'14px'}
              sx={{
                justifyContent: {
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-end',
                  lg: 'flex-end',
                },
              }}
            >
              {`${pageNo}`} of 18
            </Grid>
          </Grid>
        </Grid>
        {pageNo === 1 ? (
          <QuestionnairePage1
            submitPageData={submitPageData}
            loading={updateProfileLoading}
          />
        ) : (
          showData && (
            <GenericPage
              loading={loading}
              pageNo={pageNo}
              submitPageData={submitPageData}
              questionsData={currentPageQuestion}
              answers={answers}
              setAnswers={setAnswers}
              answerLoading={answerLoading}
              goBack={goBack}
            />
          )
        )}
      </Box>
    </Grid>
  );
};

export default Questionnaire;
