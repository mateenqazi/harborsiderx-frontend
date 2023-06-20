/* eslint-disable no-undef */
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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { credentialActions } from '../../store/action';
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

// const useStyles = makeStyles(() => ({
//   container: {
//     border: '3px solid purple',
//     padding: '10px',
//   },
//   item: {
//     padding: '10px',
//     border: '1px solid lightblue',
//   },
//   'font-color': {
//     color: '#fec156',
//   },
//   required: {
//     fontSize: '14px',
//     display: 'flex',
//   },
//   'required:after': {
//     content: ' *',
//     color: 'red',
//     fontSize: '22px',
//   },
// }));

interface ErrorObject {
  email?: boolean;
  password?: boolean;
  checked?: boolean;
}

interface loginDataType {
  email: string;
  password: string;
  checked: boolean;
  token: string;
  error: boolean;
}

interface LoginProps {
  loading: boolean;
  loginData: loginDataType;
  errors: any;
  googleData: any;
  googleError: any;
  authUserData: any;
  // eslint-disable-next-line no-unused-vars
  loginHandler: (arg0: object) => {};
  submitGoogleHandler: () => void;
  // eslint-disable-next-line no-unused-vars
  getAuthUserHandler: (token: any) => {};
}

export default function Login(props: LoginProps) {
  const { loading, loginData, errors, authUserData, getAuthUserHandler } =
    props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log('loginData', errors);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState<ErrorObject>({
    email: false,
    password: false,
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
    localStorage.setItem('token', 'token');
    setTimeout(() => {
      // remove later
      const successResponse = {
        token: 'dummytoken',
      };
      dispatch(credentialActions.login.success(successResponse));
      navigate('/profile');

      // navigate('/questionnaire-steps');
    }, 500);
    // loginHandler({ email, password });
  };

  useEffect(() => {
    if (loginData && loginData?.token) {
      localStorage.setItem('token', loginData?.token);
      getAuthUserHandler(localStorage.getItem('token')!);
      setTimeout(() => {
        navigate('/profile');
      }, 500);
    }
  }, [loginData]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/profile');
    } else if (authUserData?.user?.email) {
      navigate('/profile');
    }
  }, [authUserData]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/profile');
    } else if (authUserData?.user?.email) {
      navigate('/profile');
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
        marginY={10}
        style={{ width: 'unset', marginLeft: 'unset' }}
      >
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
                Login
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
                  sx={{ width: '100%', borderColor: whiteBorderColor }}
                  size="small"
                  placeholder="1234123"
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
                    Remember me
                  </Box>
                </Box>
                <Box sx={{ fontWeight: '500' }}>Forget Password?</Box>
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
                  onClick={() => submitHandler()}
                >
                  {loading ? <CircularProgress color="inherit" /> : 'Login'}
                </Button>
                <a
                  // href={`${process.env.REACT_APP_BACKEND_URL}api/auth/google/authenticate`}
                  // target="_self"
                  // rel="noreferrer"
                  onClick={() => {
                    localStorage.setItem('token', 'dummytoken');
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
                Don&apos;t have a account?{' '}
                <a
                  style={{
                    cursor: 'pointer',
                    marginLeft: 5,
                    color: `${primaryColor}`,
                    textDecoration: 'none',
                  }}
                  href={'/signup'}
                >
                  Sign Up!
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Wrapper>
  );
}
