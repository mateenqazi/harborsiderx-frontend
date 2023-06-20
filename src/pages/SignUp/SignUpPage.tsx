/* eslint-disable no-unused-vars */
import {
  Grid,
  Box,
  Checkbox,
  TextField,
  InputLabel,
  Button,
  CircularProgress,
} from '@mui/material';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Steps from '../../components/Steps';
import { getLocalStorageValue, setLocalStorageValue } from '../../utils/auth';
import { primaryColor, whiteBorderColor, whiteColor } from '../../theme';

const Wrapper = styled.div`
  .font-color {
    color: #fec156;
  }
  required {
    fontsize: 14px;
    display: flex;
  }
  .required:after {
    content: ' *';
    color: red;
    fontsize: 22px;
  }
`;

const styles = {
  backgroundColor: '#fec156',
  height: '48px',
  color: 'black',
  fontWeight: 'bold',
};

const styles2 = {
  border: '1px solid #b4bbc8',
  color: 'black',
  height: '48px',
  fontWeight: 'bold',
  borderRadius: '8px',
};

interface ErrorObject {
  email?: boolean;
  password?: boolean;
  rememberPassword?: boolean;
  checked?: boolean;
}

type SignUpDataType = {
  token: string;
};

interface SignUpProps {
  loading: boolean;
  signUpData: SignUpDataType;
  errors: any;
  // eslint-disable-next-line no-unused-vars
  signUpHandler: (arg0: object) => {};
}

export default function SignUp(props: SignUpProps) {
  const navigate = useNavigate();
  const { loading, signUpData, errors } = props;
  console.log('signUpData', signUpData, errors);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState<ErrorObject>({
    email: false,
    password: false,
    rememberPassword: false,
    checked: false,
  });
  const submitHandler = () => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: true,
      }));
      return;
    }
    if (String(password).length < 6) {
      setError((prevErrors) => ({
        ...prevErrors,
        password: true,
      }));
      return;
    }

    if (password !== rememberPassword) {
      setError((prevErrors) => ({
        ...prevErrors,
        rememberPassword: true,
      }));
      return;
    }
    if (!checked) {
      setError((prevErrors) => ({
        ...prevErrors,
        checked: true,
      }));
      return;
    }
    localStorage.setItem('token', 'hy hy');
    setTimeout(() => {
      navigate('/questionnaire-steps');
    }, 500);
    // signUpHandler({ email, password });
  };

  useEffect(() => {
    if (signUpData?.token) {
      setEmail('');
      setPassword('');
      setRememberPassword('');
      setChecked(false);
      setLocalStorageValue('step1', 'true');
      setLocalStorageValue('token', signUpData?.token);
      navigate('/questionnaire-steps');
    }
  }, [signUpData]);

  useEffect(() => {
    if (getLocalStorageValue('step1') === 'true') {
      navigate('/questionnaire-steps');
    }
  }, []);

  return (
    <Wrapper>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginY={5}
        style={{ width: 'unset', marginLeft: 'unset' }}
      >
        <Steps currentStepNo={1} />
        <Box
          sx={{
            width: '100%',
            backgroundColor: `${whiteColor}`,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              width: { xs: '90%', sm: '80%', md: '50%', lg: '50%' },
              margin: 'auto',
            }}
          >
            <Box marginY={5}>
              <Box
                sx={{
                  fontSize: 36,
                  marginBottom: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                SignUp
              </Box>
              <form noValidate autoComplete="off">
                <InputLabel
                  htmlFor="username"
                  className="required"
                  sx={{ fontSize: 14, mb: 1 }}
                >
                  Email
                </InputLabel>
                <TextField
                  sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
                  size="small"
                  placeholder="Johndoe@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError((prevErrors) => ({
                      ...prevErrors,
                      email: false,
                    }));
                  }}
                  error={error && error?.email}
                  helperText={
                    error && error?.email ? 'Please enter a valid email' : ''
                  }
                />
                <InputLabel
                  htmlFor="password"
                  className="required"
                  sx={{ fontSize: 14, mb: 1 }}
                >
                  Password
                </InputLabel>
                <TextField
                  sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
                  size="small"
                  placeholder="Create a password"
                  type="password"
                  value={password}
                  error={error && error?.password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError((prevErrors) => ({
                      ...prevErrors,
                      password: false,
                    }));
                  }}
                  helperText={
                    error && error?.password
                      ? 'Please enter a 6 digit long password'
                      : ''
                  }
                />
                <InputLabel
                  htmlFor="password"
                  className="required"
                  sx={{ fontSize: 14, mb: 1 }}
                >
                  Confirm Password
                </InputLabel>
                <TextField
                  sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
                  size="small"
                  placeholder="Enter password again"
                  type="password"
                  value={rememberPassword}
                  error={error && error?.rememberPassword}
                  onChange={(e) => {
                    setRememberPassword(e.target.value);
                    setError((prevErrors) => ({
                      ...prevErrors,
                      rememberPassword: false,
                    }));
                  }}
                  helperText={
                    error && error?.rememberPassword
                      ? 'password and rememberPassword did not match'
                      : ''
                  }
                />
              </form>
              <Box
                sx={{
                  display: 'flex',
                  alignContent: 'space-between',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
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
                    checked={checked}
                    onChange={(e) => {
                      setChecked(e.target.checked);
                      setError((prevErrors) => ({
                        ...prevErrors,
                        checked: false,
                      }));
                    }}
                  />
                  <Box className="mt-1" fontSize={14}>
                    I agree to the{' '}
                    <span style={{ color: `${primaryColor}` }}>Terms & Condition</span>{' '}
                    and <span style={{ color: `${primaryColor}` }}>Privacy Policy</span>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ color: 'red' }}>
                {error && error?.checked ? 'Please select checkbox' : ''}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button
                  style={styles}
                  sx={{ mt: 2, boxShadow: 'none', borderRadius: 1 }}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={submitHandler}
                >
                  {loading ? <CircularProgress color="inherit" /> : 'Sign Up'}
                </Button>

                <a
                  // href={`${process.env.REACT_APP_BACKEND_URL}api/auth/google/authenticate`}
                  // target="_self"
                  // rel="noreferrer"
                  onClick={() => {
                    localStorage.setItem('token', 'hy hy');
                    setTimeout(() => {
                      navigate('/questionnaire-steps');
                    }, 500);
                  }}
                >
                  <Button
                    sx={{ mt: 3 }}
                    style={styles2}
                    variant="outlined"
                    fullWidth
                    size="large"
                    startIcon={<img src="/google.svg" />}
                  >
                    SingIn with Google
                  </Button>
                </a>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  fontSize: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginY: 3,
                }}
              >
                Already have an account?{' '}
                <a
                  style={{
                    cursor: 'pointer',
                    marginLeft: 5,
                    color: `${primaryColor}`,
                    textDecoration: 'none',
                  }}
                  href={'/login'}
                >
                  Log In!
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Wrapper>
  );
}
