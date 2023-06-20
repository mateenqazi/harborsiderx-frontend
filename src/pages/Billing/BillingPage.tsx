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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useNavigate } from 'react-router-dom';
import { primaryColor, whiteBorderColor } from '../../theme/index';
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
  phoneNumber: string;
  state: string;
  city: string;
  zipCode: string;
}
interface ShippingProps {
  loading: boolean;
  shippingData: ShippingDataType;
  errors: any;
  // eslint-disable-next-line no-unused-vars
  billingInformation: (arg0: object) => {};
}

const BillingPage = (props: ShippingProps) => {
  const navigate = useNavigate();

  const { loading, errors, shippingData, billingInformation } = props;
  console.log(errors, shippingData);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<any>('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [firstLoad, setFirstLoad] = useState(false);

  const list = [
    '12 Doses - 3x per week',
    '12 Doses - 3x per week',
    '12 Doses - 3x per week',
    '12 Doses - 3x per week',
  ];

  console.log('loading', loading);

  useEffect(() => {
    if (firstLoad && !loading) {
      navigate('/payment-information');
    }
  }, [loading]);

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

  const containsOnlyNumbers = (str: string) => {
    return /^\d+$/.test(str);
  };

  const submitHandler = () => {
    if (
      _.isEmpty(firstName) ||
      _.isEmpty(lastName) ||
      _.isEmpty(dateOfBirth) ||
      _.isEmpty(phoneNumber) ||
      _.isEmpty(state) ||
      _.isEmpty(city) ||
      _.isEmpty(zipCode)
    ) {
      // eslint-disable-next-line no-undef
      alert('Please Fill Empty Fields');
      return;
    }
    setFirstLoad(true);
    billingInformation({
      firstName,
      lastName,
      dateOfBirth,
      phoneNumber,
      state,
      city,
      zipCode,
    });
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
          Billing Information
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
              Date Of Birth
            </InputLabel>
            {/* <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="DD/MM/YYYY"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            /> */}
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
                    marginBottom: '0px',
                  }}
                  slotProps={{ textField: { size: 'small', error: false } }}
                  disableFuture={true}
                  value={dateOfBirth}
                  onChange={(e) => {
                    setDateOfBirth(e);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputLabel htmlFor="phone-number" sx={{ fontSize: 14, mb: 1 }}>
              Phone Number
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter number"
              value={phoneNumber}
              // onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              onChange={(e) =>
                setPhoneNumber((v) =>
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
            <InputLabel htmlFor="state" sx={{ fontSize: 14, mb: 1 }}>
              State
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputLabel htmlFor="city" sx={{ fontSize: 14, mb: 1 }}>
              City
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
        </Box>
        <Box
          sx={{ display: { lg: 'flex', md: 'flex', xs: 'block' } }}
          justifyContent="space-between"
          columnGap={4}
        >
          <Grid item xs={12} md={6} lg={6}>
            <InputLabel htmlFor="zip-code" sx={{ fontSize: 14, mb: 1 }}>
              Zip Code
            </InputLabel>
            <TextField
              sx={{ width: '100%', borderColor: whiteBorderColor, mb: 3 }}
              size="small"
              placeholder="Enter zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Grid>
          <Grid
            item
            sx={{ display: { lg: 'flex', md: 'flex', xs: 'block' } }}
          ></Grid>
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
            onClick={() => navigate(-1)}
          >
            Back
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
            onClick={submitHandler}
          >
            {loading ? <CircularProgress color="inherit" /> : 'Next'}
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

export default BillingPage;
