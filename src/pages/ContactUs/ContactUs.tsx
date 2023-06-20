import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Typography,
  styled,
  Button,
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { primaryColor } from '../../theme/index';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

export const ActionButton = styled(MenuItem)(() => ({
  display: 'inline-block',
  paddingRight: '20px',
  paddingLeft: '10px',
  borderBottom: 'none',
  color: 'black',
  background: `${primaryColor} !important`,
  padding: '10px 30px',
  fontWeight: 700,
  borderRadius: '5px',
}));

const LandingPage: React.FC = () => {
  const initialValues = {
    email: '',
    message: '',
  };

  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState('');

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = () => {
    if (!Object.values(values).every((x) => x)) {
      setError('Please fill in all the field before submitting.');
      return;
    }
    setError('');
    // call api
  };

  return (
    <Box sx={{ margin: '45px 0px' }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{
              fontWeight: 'bold',
              borderBottom: '2px solid lightgrey',
              marginBottom: '17px',
            }}
            className="contact-page-title"
          >
            Contact
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={{ xs: 3 }} columnSpacing={{ md: 6 }}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              background: '#f4f4f4',
              padding: '20px',
              paddingBottom: '40px',
              borderRadius: '5px',
            }}
          >
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Typography
              variant="h6"
              sx={{
                marginBottom: '15px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Send A Message
            </Typography>
            <FormControl fullWidth>
              <OutlinedInput
                sx={{
                  marginBottom: '15px',
                  fontSize: '0.75rem',
                  background: 'white',
                }}
                placeholder="Email"
                value={values?.email}
                name="email"
                onChange={handleInputChange}
              />
              <TextareaAutosize
                minRows={10}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  maxWidth: '100%',
                  width: 'unset',
                }}
                placeholder="Type your message here.."
                value={values?.message}
                name="message"
                onChange={handleInputChange}
              />
            </FormControl>
            <Typography variant="body2">Verification Code</Typography>
            <Button
              type="submit"
              sx={{
                marginTop: '10px',
                background: primaryColor,
                color: 'black',
              }}
              onClick={submitHandler}
            >
              {' '}
              Submit{' '}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box className="contact-right-container">
            <Typography variant="h6" className="contact-main-heading">
              {' '}
              Give Us A Call{' '}
            </Typography>
            <Typography
              variant="body2"
              className="contact-small-description"
              style={{ marginBottom: '15px' }}
            >
              Monday - Friday: 9AM - 5PM (EST){' '}
            </Typography>
            <Box
              sx={{
                marginBottom: '15px',
              }}
            >
              <Typography variant="body2" className="contact-small-heading">
                {' '}
                Address:{' '}
              </Typography>
              <Typography variant="body2" className="contact-small-description">
                16 Madison Square West 12th Floor, New York, NY, 10010
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                marginBottom: '15px',
              }}
            >
              <Typography variant="body2" className="contact-small-heading">
                {' '}
                Customer Service:{' '}
              </Typography>
              <Typography variant="body2" className="contact-small-description">
                1-800-251-3872
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: '15px',
              }}
            >
              <Typography variant="body2" className="contact-small-heading">
                {' '}
                Email us anytime:{' '}
              </Typography>
              <Typography variant="body2" className="contact-small-description">
                contact@harborsiderx.com
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: '15px',
              }}
            >
              <Typography variant="body2" className="contact-small-heading">
                {' '}
                More questions or concerns:{' '}
              </Typography>
              <Typography variant="body2" className="contact-small-description">
                Visit our FAQ page
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
