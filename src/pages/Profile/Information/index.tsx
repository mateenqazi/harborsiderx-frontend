import { Grid, Typography } from '@mui/material';
import { darkTextColor, whiteColor } from '../../../theme';

const Information = (props: any) => {
  const {authUser} = props;
  return (
    <>
      <Grid
        container
        item
        sx={{
          padding: '10px',
          background: whiteColor,
          marginBottom: '10px',
          boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
        }}
      >
        {/* eslint-disable-next-line no-unused-vars */}
        <Grid xs={4} sm={4} md={2} lg={2} item sx={{ paddingRight: '7px' }}>
          <img
            src={'/Astin.png'}
            alt={'person'}
            loading="lazy"
            height={'115px'}
            width={'90px'}
          />
        </Grid>
        <Grid
          container
          md={3}
          lg={3}
          xs={12}
          sm={6}
          item
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Grid item>
            <Typography>Name</Typography>
            <Typography sx={{ color: darkTextColor }}>
              Cameron Williamson
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Address</Typography>
            <Typography sx={{ color: darkTextColor }}>
              456 Forth Avenue, Herndon
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          md={4}
          lg={4}
          xs={12}
          sm={6}
          item
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Grid>
            <Typography>Email</Typography>
            <Typography sx={{ color: darkTextColor }}>
              {authUser?.user?.email}
            </Typography>
          </Grid>
          <Grid>
            <Typography>Date of birth</Typography>
            <Typography sx={{ color: darkTextColor }}>10/12/23</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          md={2}
          lg={2}
          xs={12}
          sm={6}
          item
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Grid>
            <Typography>Phone Number</Typography>
            <Typography sx={{ color: darkTextColor }}>745-858-9632</Typography>
          </Grid>
          <Grid>
            <Typography>Password</Typography>
            <Typography sx={{ color: darkTextColor }}>**********</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          md={1}
          lg={1}
          xs={12}
          sm={6}
          item
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-end'}
        >
          <img
            src={'/edit-button.png'}
            alt={'edit'}
            loading="lazy"
            height={'30px'}
            style={{ cursor: 'pointer' }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          padding: '10px',
          background: whiteColor,
          marginBottom: '10px',
          boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
        }}
      >
        <Grid container>
          <Grid item md={6} lg={6} xs={6} sm={6} sx={{ paddingBottom: '20px' }}>
            <Typography variant="h6">Billing Information</Typography>
          </Grid>
          <Grid
            md={6}
            lg={6}
            xs={6}
            sm={6}
            item
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'flex-end'}
          >
            <img
              src={'/edit-button.png'}
              alt={'edit'}
              loading="lazy"
              height={'30px'}
              style={{ cursor: 'pointer' }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={3} lg={3} sm={12} xs={12}>
            <Typography>State</Typography>
            <Typography sx={{ color: darkTextColor }}>United States</Typography>
          </Grid>
          <Grid item md={3} lg={3} sm={12} xs={12}>
            <Typography>City</Typography>
            <Typography sx={{ color: darkTextColor }}>Decatur</Typography>
          </Grid>
          <Grid item md={3} lg={3} sm={12} xs={12}>
            <Typography>Zip Code</Typography>
            <Typography sx={{ color: darkTextColor }}>1246</Typography>
          </Grid>
          <Grid item md={3} lg={3} sm={12} xs={12}></Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          padding: '10px',
          background: whiteColor,
          marginBottom: '10px',
          boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
        }}
      >
        <Grid container>
          <Grid item md={6} lg={6} xs={6} sm={6} sx={{ paddingBottom: '20px' }}>
            <Typography variant="h6">Payment Information</Typography>
          </Grid>
          <Grid
            md={6}
            lg={6}
            xs={6}
            sm={6}
            item
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'flex-end'}
          >
            <img
              src={'/edit-button.png'}
              alt={'edit'}
              loading="lazy"
              height={'30px'}
              style={{ cursor: 'pointer' }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={3} lg={3} sm={12} xs={12}>
            <Typography>Card Number</Typography>
            <Typography sx={{ color: darkTextColor }}>123**********22</Typography>
          </Grid>
          <Grid item md={3} lg={3} sm={12} xs={12}>
            <Typography>CVV Number</Typography>
            <Typography sx={{ color: darkTextColor }}>12****</Typography>
          </Grid>
          <Grid item md={3} lg={3} sm={12} xs={12}>
            <Typography>Expiry Month</Typography>
            <Typography sx={{ color: darkTextColor }}>12****</Typography>
          </Grid>
          <Grid item md={3} lg={3} sm={12} xs={12}>
            <Typography>Expiry Year</Typography>
            <Typography sx={{ color: darkTextColor }}>12****</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Information;
