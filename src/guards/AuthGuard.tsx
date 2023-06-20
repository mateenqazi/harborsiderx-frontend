import { Box, CircularProgress } from '@mui/material';
// import {  Typography, Button } from '@mui/material';
// import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = (props: any) => {
  const navigate = useNavigate();
  const { authUserLoading, getAuthUserHandler } = props;
  // const {authUserData, authUserError } = props;
  // const [authData, setAuthData] = useState<any>();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('sid');
    if (token) {
      localStorage.setItem('token', token);
      getAuthUserHandler(token);
      setTimeout(() => {
        navigate('/profile');
      }, 500);
    } else {
      getAuthUserHandler(localStorage.getItem('token')!);
    }
  }, []);

  // useEffect(() => {
  //   setAuthData(authUserData);
  // }, [authUserData]);

  if (authUserLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // if (authUserError) {
  //   return (
  //     <Box
  //     sx={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       flexDirection: 'column'
  //     }}
  //   >
  //     <Typography variant="h1" style={{ color: 'black' }}>
  //       404
  //     </Typography>
  //     <Typography variant="h3" style={{ color: 'black', textAlign: 'center' }}>
  //       Page not Found
  //     </Typography>
  //     <Button
  //       sx={{ mt: 3, color: 'black', backgroundColor: '#fec256', '&:hover': {backgroundColor: '#fec256'} }}
  //       size="large"
  //       onClick={() => {
  //         navigate('/');
  //       }}
  //     >
  //       Go to main page
  //     </Button>
  //   </Box>
  //   );
  // };
  return <>{props.children}</>;
  //  authData?.user?.email ? (
  // <>{props.children}</>
  // ) : (
  //   <Box
  //     sx={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       flexDirection: 'column',
  //     }}
  //   >
  //     <Typography variant="h1" style={{ color: 'black' }}>
  //       404
  //     </Typography>
  //     <Typography variant="h3" style={{ color: 'black', textAlign: 'center' }}>
  //       Page not Found
  //     </Typography>
  //     <Button
  //       sx={{
  //         mt: 3,
  //         color: 'black',
  //         backgroundColor: '#fec256',
  //         '&:hover': { backgroundColor: '#fec256' },
  //       }}
  //       size="large"
  //       onClick={() => {
  //         navigate('/');
  //       }}
  //     >
  //       Go to main page
  //     </Button>
  //   </Box>
  // );
};

export default AuthGuard;
