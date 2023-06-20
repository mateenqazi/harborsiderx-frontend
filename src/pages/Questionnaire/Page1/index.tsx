/* eslint-disable no-unused-vars */
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { whiteBorderColor } from '../../../theme';

interface ErrorObject {
  patientFirstName?: boolean;
  patientLastName?: boolean;
  birthday?: boolean;
}

const styles = {
  backgroundColor: '#fec156',
  height: '48px',
  color: 'black',
  fontWeight: 'bold',
};

type Page1Props = {
  loading: boolean;
  submitPageData: (
    pageNo: number,
    type: string,
    answer: object,
    submitResponse?: object
  ) => void;
};

const QuestionnairePage1: React.FC<Page1Props> = (props) => {
  const [patientFirstName, setPatientFirstName] = useState('');
  const [patientLastName, setPatientLastName] = useState('');
  const [birthday, setBirthday] = useState<any>('');
  const [error, setError] = useState<ErrorObject>({
    patientFirstName: false,
    patientLastName: false,
    birthday: false,
  });

  const { loading, submitPageData } = props;

  const submitAnswersHandler = () => {
    if (!patientFirstName) {
      setError((prevErrors) => ({
        ...prevErrors,
        patientFirstName: true,
      }));
      return;
    }
    if (!patientLastName) {
      setError((prevErrors) => ({
        ...prevErrors,
        patientLastName: true,
      }));
      return;
    }

    if (!birthday) {
      setError((prevErrors) => ({
        ...prevErrors,
        birthday: true,
      }));
      return;
    }
    // redux logic of storing goes here {patientFirstName, patientLastName, birthday}

    // sending pageNo so it goes to next page
    submitPageData(
      1,
      'next',
      {},
      { firstName: patientFirstName, lastName: patientLastName, dob: birthday }
    );
  };
  return (
    <Box
      sx={{
        width: { xs: '90%', sm: '80%', md: '50%', lg: '50%' },
        margin: 'auto',
      }}
    >
      <Box marginY={5}>
        <Typography
          sx={{
            fontSize: 25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Please Complete Medical Profile
        </Typography>
        <Typography
          sx={{
            fontSize: 15,
            display: 'flex',
            marginBottom: 2,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          In order for us to ship you pills, you must first answer some
          questions about your health
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} pr={1}>
              <InputLabel
                htmlFor="username"
                sx={{
                  fontSize: 14,
                  mb: 1,
                  fontsize: '14px',
                  display: 'flex',
                  ':after': { content: '" *"', color: 'red', fontSize: '22px' },
                }}
              >
                Patient First Name
              </InputLabel>
              <TextField
                sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
                size="small"
                placeholder="John"
                value={patientFirstName}
                onChange={(e) => {
                  setPatientFirstName(e.target.value);
                  setError((prevErrors) => ({
                    ...prevErrors,
                    patientFirstName: false,
                  }));
                }}
                error={error && error?.patientFirstName}
                helperText={
                  error && error?.patientFirstName
                    ? 'Please enter a valid name'
                    : ''
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputLabel
                htmlFor="password"
                className="required"
                sx={{
                  fontSize: 14,
                  mb: 1,
                  fontsize: '14px',
                  display: 'flex',
                  ':after': { content: '" *"', color: 'red', fontSize: '22px' },
                }}
              >
                Patient Last Name
              </InputLabel>
              <TextField
                sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
                size="small"
                placeholder="Doe"
                value={patientLastName}
                error={error && error?.patientLastName}
                onChange={(e) => {
                  setPatientLastName(e.target.value);
                  setError((prevErrors) => ({
                    ...prevErrors,
                    patientLastName: false,
                  }));
                }}
                helperText={
                  error && error?.patientLastName
                    ? 'Please enter a valid last name'
                    : ''
                }
              />
            </Grid>
          </Grid>
          <InputLabel
            htmlFor="password"
            className="required"
            sx={{
              fontSize: 14,
              mb: 1,
              fontsize: '14px',
              display: 'flex',
              ':after': { content: '" *"', color: 'red', fontSize: '22px' },
            }}
          >
            BirthDate
          </InputLabel>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            sx={{ padding: '0px', margin: '0px' }}
          >
            <DemoContainer
              components={['DatePicker']}
              sx={{ padding: '0px', margin: '0px' }}
            >
              <DatePicker
                sx={{
                  width: '100%',
                  borderColor: whiteBorderColor,
                  mb: 3,
                  padding: '8.5px 0px',
                  marginBottom: '0px',
                  paddingTop: '4px',
                }}
                disableFuture={true}
                onError={(e: any) => {
                  if (e) {
                    setError((prevErrors) => ({
                      ...prevErrors,
                      birthday: true,
                    }));
                  }
                }}
                onChange={(e) => {
                  setBirthday(e);
                  setError((prevErrors) => ({
                    ...prevErrors,
                    birthday: false,
                  }));
                }}
              />
              <p style={{ color: 'red', margin: '0px' }}>
                {error && error?.birthday
                  ? 'Please enter a valid birth date.'
                  : ''}
              </p>
            </DemoContainer>
          </LocalizationProvider>
        </form>
        <Box sx={{ mt: 2 }}>
          <Button
            style={styles}
            sx={{ mt: 2, boxShadow: 'none', borderRadius: 1 }}
            variant="contained"
            fullWidth
            size="large"
            onClick={submitAnswersHandler}
          >
            {loading ? <CircularProgress color="inherit" /> : 'Next'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionnairePage1;
