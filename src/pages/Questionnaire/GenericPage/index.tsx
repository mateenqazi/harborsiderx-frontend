/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Typography,
  Grid,
  Checkbox,
  CircularProgress,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import AdjustIcon from '@mui/icons-material/Adjust';
import { AnswerType, QuestionType } from '../../../utils/types';
import { primaryColor } from '../../../theme';

const styles = {
  backgroundColor: `${primaryColor}`,
  height: '48px',
  color: 'black',
  fontWeight: 'bold',
};

const BackStyles = {
  backgroundColor: 'white',
  height: '48px',
  color: `${primaryColor}`,
  fontWeight: 'bold',
  border: `1px solid ${primaryColor}`,
};

type PageProps = {
  questionsData: any;
  loading: boolean;
  pageNo: number;
  answers: any;
  setAnswers: any;
  answerLoading: boolean;
  // eslint-disable-next-line no-unused-vars
  submitPageData: (pageNo: number, type: string, answer: object) => void;
  goBack: () => void;
};

const GenericPage: React.FC<PageProps> = (props) => {
  const [error, setError] = useState('');
  const fileInput: any = React.useRef();
  const {
    pageNo,
    submitPageData,
    questionsData,
    loading,
    answers,
    setAnswers,
    answerLoading,
    goBack,
  } = props;
  const [questions, setQuestions] = useState<any>(questionsData);

  useEffect(() => {
    setQuestions(questionsData);
  }, [questionsData]);

  const exitAnswer = (ques: number) => {
    return ques in answers;
  };

  const submitAnswersHandler = (type: string) => {
    const currentPageQuestionKey = questions.map(
      (item: QuestionType) => item?.id
    );
    const unansweredQuestions = currentPageQuestionKey.every(exitAnswer);
    if (!unansweredQuestions) {
      setError('Please answer all the questions before submitting.');
      return;
    } else {
      setError('');
      submitPageData(pageNo, type, answers);
    }
  };

  const handleAnswer = (
    questionNumber: number,
    questionType: string,
    targetValue: any,
    optionIndex: number
  ) => {
    const newAnswer: any = { ...answers };

    if (questionNumber in newAnswer) {
      if (questionType === 'radio') {
        newAnswer[questionNumber] = {
          ...newAnswer[questionNumber],
          optionId: optionIndex,
        };
      } else {
        newAnswer[questionNumber] = {
          ...newAnswer[questionNumber],
          answer: targetValue,
        };
      }
    } else {
      newAnswer[questionNumber] = {
        questionId: questionNumber,
        optionId: questionType === 'radio' ? optionIndex : null,
        answer: questionType !== 'radio' ? targetValue : '',
      };
    }

    setAnswers(newAnswer);
  };

  const submitAnswerOrNot = (ans: any, quesNo: number, option: number) => {
    return quesNo in ans && ans[quesNo].optionId === option;
  };

  const getTextValue = (ans: any, quesNo: number) => {
    return quesNo in ans ? quesNo in ans && ans[quesNo].answer : '';
  };

  return (
    <Box
      sx={{
        width: { xs: '90%', sm: '80%', md: '50%', lg: '50%' },
        margin: 'auto',
      }}
    >
      <Box marginY={5}>
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress
              sx={{
                color: `${primaryColor}`,
              }}
            />
          </Box>
        ) : (
          <>
            <p style={{ color: 'red' }}>{error}</p>
            {questions.map((question: any, questionIndex: any) => (
              <>
                <Typography
                  sx={{
                    fontSize: 25,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    marginBottom: '10px',
                  }}
                >
                  {question.description}
                </Typography>
                {question.options.map((option: any, optionIndex: any) => {
                  return (
                    <div key={optionIndex}>
                      {question.type === 'radio' && (
                        <div
                          key={optionIndex}
                          onClick={() =>
                            handleAnswer(
                              question.id,
                              question.type,
                              option?.description,
                              optionIndex + 1
                            )
                          }
                        >
                          <Grid
                            container
                            item
                            sx={{
                              width: '100%',
                              border: `1px solid ${
                                submitAnswerOrNot(
                                  answers,
                                  question.id,
                                  optionIndex + 1
                                )
                                  ? `${primaryColor}`
                                  : '#c4c9d4'
                              }`,
                              borderRadius: '5px',
                              padding: '10px 10px',
                              marginBottom: '15px',
                              display: 'flex',
                              cursor: 'pointer',
                            }}
                          >
                            <Grid item xs={1} sm={1} md={1} lg={1}>
                              <AdjustIcon
                                sx={{
                                  color: `${
                                    submitAnswerOrNot(
                                      answers,
                                      question.id,
                                      optionIndex + 1
                                    )
                                      ? `${primaryColor}`
                                      : '#95989e'
                                  }`,
                                  paddingRight: '5px',
                                }}
                              />
                            </Grid>
                            <Grid item xs={11} sm={11} md={11} lg={11}>
                              <Typography
                                sx={{
                                  color: `${
                                    submitAnswerOrNot(
                                      answers,
                                      question.id,
                                      optionIndex + 1
                                    )
                                      ? `${primaryColor}`
                                      : '#95989e'
                                  }`,
                                }}
                              >
                                {option.description}
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                      )}

                      {pageNo === 18 && questionIndex === 1 && (
                        <>
                          <Grid
                            container
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            sx={{ paddingBottom: '20px' }}
                          >
                            <Grid
                              container
                              item
                              sx={{
                                width: '100%',
                                border: '2px dashed #c4c9d4',
                                borderRadius: '10px',
                                padding: '10px',
                                display: 'flex',
                              }}
                            >
                              <Grid
                                item
                                container
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                sx={{ padding: '30px 0px', cursor: 'pointer' }}
                                onClick={() => fileInput?.current?.click()}
                              >
                                <Grid item>
                                  <img
                                    src={'/upload-icon.png'}
                                    alt={'upload'}
                                    loading="lazy"
                                    height={'30px'}
                                    width={'40px'}
                                  />
                                </Grid>
                                <Grid item sx={{ color: '#bcc3ce' }}>
                                  <Typography sx={{ fontSize: '13px' }}>
                                    Drop you front view here or browse PNG, JPG
                                    are allowed
                                  </Typography>
                                </Grid>
                                <input
                                  ref={fileInput}
                                  type="file"
                                  style={{ display: 'none' }}
                                  onClick={() => {}}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Box display="flex" alignItems="center" sx={{}}>
                            <Checkbox
                              sx={{
                                '& .MuiSvgIcon-root': { fontSize: 22 },
                                color: `${primaryColor}`,
                                '&.Mui-checked': {
                                  color: `${primaryColor}`,
                                },
                                paddingX: 0,
                                marginRight: 0.5,
                              }}
                              className="mb-1"
                              checked={true}
                            />
                            <Box className="mt-1" fontSize={14}>
                              I agree to the{' '}
                              <span style={{ color: `${primaryColor}` }}>
                                Terms & Condition
                              </span>{' '}
                              and i consent to the{' '}
                              <span style={{ color: `${primaryColor}` }}>
                                Telehealth
                              </span>{' '}
                              visit
                            </Box>
                          </Box>
                        </>
                      )}
                    </div>
                  );
                })}
                {question.type === 'text' && (
                  <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder={'Write here...'}
                    defaultValue=""
                    value={getTextValue(answers, question.id)}
                    style={{
                      width: '100%',
                      border: '0px',
                      padding: '5px 5px',
                      background: '#fafafa',
                      marginBottom: '15px',
                      display: 'flex',
                      height: '300px',
                      maxWidth: '100%',
                      resize: 'none',
                    }}
                    onChange={(e: any) =>
                      handleAnswer(
                        question.id,
                        question.type,
                        e.target.value,
                        0
                      )
                    }
                  />
                )}
              </>
            ))}
            <Box sx={{ mt: 2 }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={3} lg={3} mr={1}>
                  <Button
                    style={BackStyles}
                    sx={{ mt: 2, boxShadow: 'none', borderRadius: 1, mr: 2 }}
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={goBack}
                  >
                    {'Back'}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Button
                    style={styles}
                    sx={{ mt: 2, boxShadow: 'none', borderRadius: 1 }}
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={() =>
                      submitAnswersHandler(pageNo === 18 ? 'submit' : 'next')
                    }
                  >
                    {answerLoading ? (
                      <CircularProgress color="inherit" />
                    ) : pageNo === 18 ? (
                      'Submit'
                    ) : (
                      'Next'
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default GenericPage;
