import {
  Grid,
  InputLabel,
  TextField,
  Box,
  Button,
  CircularProgress,
} from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import { styled } from '@mui/material/styles';
import MedicineDetail from '../../components/MedicineDetail';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { primaryColor, whiteBorderColor } from '../../theme';
interface StyledLinksProps {
  actionButton?: boolean;
  cancelButton?: boolean;
}

export const StyledLinks = styled(Button)<StyledLinksProps>(
  ({ actionButton, cancelButton }) => ({
    padding: '10px 30px',
    fontWeight: 700,
    borderRadius: '5px',
    textTransform: 'none',
    ...(!!actionButton && {
      color: 'black',
      background: primaryColor,
      borderColor: primaryColor,
    }),
    ...(!!cancelButton && {
      color: primaryColor,
      background: 'white',
      border: `1px solid ${primaryColor}`,
      marginRight: '16px',
    }),
  })
);

interface ShippingDataType {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  cardNumber: string;
  expireMonth: string;
  expireYear: string;
}
interface ShippingProps {
  loading: boolean;
  shippingData: ShippingDataType;
  errors: any;
  // eslint-disable-next-line no-unused-vars
  paymentInformation: (arg0: object) => {};
}

const PaymentPage = (props: ShippingProps) => {
  const { loading, errors, shippingData, paymentInformation } = props;
  console.log(errors, shippingData);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireMonth, setExpireMonth] = useState('');
  const [expireYear, setExpireYear] = useState('');
  const [firstLoad, setFirstLoad] = useState(false);
  const navigate = useNavigate();

  console.log('loading', loading);
  const list = [
    '12 Doses - 3x per week',
    '12 Doses - 3x per week',
    '12 Doses - 3x per week',
    '12 Doses - 3x per week',
  ];

  const MedicineDetailValue = {
    list,
    total: '72.00',
    tax: '0.00',
    shipping: '0.00',
    price: '72.00',
    image: '/viagra-bottle-center.png',
    preHeading: 'sildenafil Citrate',
    heading: 'Genetic Viagra',
    postHeading: '60 mg sildenafil 1-Month Supply',
  };

  const submitHandler = () => {
    if (
      _.isEmpty(firstName) ||
      _.isEmpty(lastName) ||
      _.isEmpty(cvvNumber) ||
      _.isEmpty(cardNumber) ||
      _.isEmpty(expireMonth) ||
      _.isEmpty(expireYear)
    ) {
      // eslint-disable-next-line no-undef
      alert('Please Fill Empty Fields');
      return;
    }
    setFirstLoad(true);
    paymentInformation({
      firstName,
      lastName,
      cvvNumber,
      cardNumber,
      expireMonth,
      expireYear,
    });
  };

  useEffect(() => {
    if (firstLoad && !loading) {
      navigate('/profile');
    }
  }, [loading]);

  const containsOnlyNumbers = (str: string) => {
    return /^\d+$/.test(str);
  };

  return (
    <Grid
      container
      sx={{
        background: 'white',
        border: '1px solid #f2f2f2',
        marginY: 5,
        borderRadius: 2,
      }}
    >
      <Grid item xs={12} lg={6} sx={{ margin: { xs: 2, sm: 4, lg: 5, xl: 5 } }}>
        <Typography variant="h5" gutterBottom>
          Payment Information
        </Typography>

        <Box
          sx={{ display: { lg: 'flex', md: 'flex', xs: 'block' } }}
          justifyContent="space-between"
          columnGap={4}
        >
          <Grid item xs={12} lg={6}>
            <InputLabel htmlFor="first-name" sx={{ fontSize: 14, mb: 1 }}>
              First Name
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputLabel htmlFor="last-name" sx={{ fontSize: 14, mb: 1 }}>
              Last Name
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
        </Box>
        <Box
          sx={{ display: { lg: 'flex', md: 'flex', xs: 'block' } }}
          justifyContent="space-between"
          columnGap={4}
        >
          <Grid item xs={12} lg={6}>
            <InputLabel htmlFor="dob" sx={{ fontSize: 14, mb: 1 }}>
              Card Number
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter Card Number"
              value={cardNumber}
              // onChange={(e) => setCardNumber(e.target.value)}
              onChange={(e) =>
                setCardNumber((v) =>
                  containsOnlyNumbers(e.target.value) || e.target.value === ''
                    ? e.target.value
                    : v
                )
              }
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputLabel htmlFor="phone-number" sx={{ fontSize: 14, mb: 1 }}>
              CVV Number
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter  CVV Number"
              value={cvvNumber}
              onChange={(e) =>
                setCvvNumber((v) =>
                  containsOnlyNumbers(e.target.value) || e.target.value === ''
                    ? e.target.value
                    : v
                )
              }
            />
          </Grid>
        </Box>

        <Box
          sx={{ display: { lg: 'flex', md: 'flex', xs: 'block' } }}
          justifyContent="space-between"
          columnGap={4}
        >
          <Grid item xs={12} lg={6}>
            <InputLabel htmlFor="expireMonth" sx={{ fontSize: 14, mb: 1 }}>
              Expire Month
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter Expire Month"
              value={expireMonth}
              onChange={(e) =>
                setExpireMonth((v) =>
                  (containsOnlyNumbers(e.target.value) ||
                    e.target.value === '') &&
                  String(e.target.value).length <= 4
                    ? e.target.value
                    : v
                )
              }
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputLabel htmlFor="expireYear" sx={{ fontSize: 14, mb: 1 }}>
              Expire Year
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter Expire Year"
              value={expireYear}
              onChange={(e) =>
                setExpireYear((v) =>
                  (containsOnlyNumbers(e.target.value) ||
                    e.target.value === '') &&
                  String(e.target.value).length <= 4
                    ? e.target.value
                    : v
                )
              }
            />
          </Grid>
        </Box>

        <Box>
          <StyledLinks
            cancelButton
            sx={{
              width: {
                xs: '100%',
                sm: 'fit-content',
                md: 'fit-content',
                lg: 'fit-content',
              },
              marginBottom: { xs: 2, sm: 0 },
            }}
            onClick={submitHandler}
          >
            {loading ? <CircularProgress color="inherit" /> : 'Continue'}
          </StyledLinks>
          <StyledLinks
            variant="outlined"
            actionButton
            sx={{
              width: {
                xs: '100%',
                sm: 'fit-content',
                md: 'fit-content',
                lg: 'fit-content',
              },
            }}
          >
            Pay Now
          </StyledLinks>
        </Box>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Grid xs="auto"></Grid>
        <Grid
          xs={12}
          sx={{
            marginY: 5,
            marginX: { lg: 0, xs: 2, sm: 4 },
            display: 'flex',
            justifyContent: { lg: 'end', md: 'start' },
            float: { lg: 'right', md: 'unset' },
          }}
        >
          <MedicineDetail medicince={MedicineDetailValue} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentPage;
