import React from 'react';
import { Box, Button, Grid, MenuItem, styled, Typography } from '@mui/material';
import TreatmentPlanCard from './TreatmentPlanCard';
import { useNavigate } from 'react-router-dom';
import { ashWhiteColor, blackColor, mediumGrey, primaryColor, whiteColor } from '../../theme';

const treatmentOptions = [
  {
    title: 'Generic',
    name: 'Viagra',
    image: 'assets/hiw/viagra.png',
  },
  {
    title: 'Generic',
    name: 'Cialis',
    image: 'assets/hiw/cialis.png',
  },
];

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

const HowItWorks: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="child">
      <Grid
        container
        columns={26}
        spacing={1}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          width: '100vw',
          position: 'relative',
          marginLeft: 'calc((100% - 100vw) / 2)',
          paddingTop: '30px',
          paddingBottom: '40px',
          background: `${whiteColor} !important`,
          marginBottom: '15px',
        }}
        className="text-image-section text-image-section-secondary"
      >
        <Grid item xs={26} md={14}>
          <Box className="img-wrapper">
            <img
              src={'/assets/hiw/medium-shot-man.png'}
              alt={'medium-shot-man'}
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid item xs={26} md={12}>
          <Box className="text-wrapper">
            <p>How it works</p>
            <h1>
              Men&apos;s Health made<span> Easy </span>
            </h1>
            <p>
              Order genuine, FDA-approved ED treatments from the comfort of your
              home. Always be ready for intense action with Harbor Side Rx!{' '}
            </p>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          width: '100vw',
          background: ashWhiteColor,
          position: 'relative',
          marginLeft: 'calc((100% - 100vw) / 2)',
          padding: '60px calc(max((100vw - min(560px, 100%)) / 5, 20px))',
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <h4 style={{ marginBottom: 0 }}>Process</h4>
          <h2 style={{ marginBottom: 0 }}>How Harbor Side RX works</h2>
          <p style={{ paddingBottom: '10px', width: '70%' }}>
            With the treatment options and plans available, Harbor side RX gets
            you the help you need - fast, safe and affordable.
          </p>
        </Grid>
        <Grid
          container
          columnSpacing={{ xs: 3, md: 8 }}
          rowSpacing={{ xs: 8, md: 3 }}
        >
          <Grid
            className="process-mini-container process-mini-container-first-arrow"
            item
            xs={12}
            md={4}
          >
            <Box display={'flex'} justifyContent={'center'}>
              <img
                src={'/treatment-plan.png'}
                alt={'treatment plan'}
                loading="lazy"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </Box>
            <Box sx={{ height: '50px' }}>
              <Typography
                style={{
                  textAlign: 'center',
                  fontWeight: 600,
                  paddingTop: '20px',
                }}
              >
                Select your preferred treatment plan
              </Typography>
            </Box>
            <Box sx={{ paddingTop: '20px' }}>
              <Typography style={{ textAlign: 'center', color: `${mediumGrey}`}}>
                Harbor Side RX offers the best treatment available for a wide
                variety of conditions. Choose your preferred treatment plan and
                begin with process.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            className="process-mini-container process-mini-container-second-arrow"
            xs={12}
            md={4}
          >
            <Box display={'flex'} justifyContent={'center'}>
              <img
                src={'/place-order.png'}
                alt={'place order'}
                loading="lazy"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </Box>
            <Box sx={{ height: '50px' }}>
              <Typography
                style={{
                  textAlign: 'center',
                  fontWeight: 600,
                  paddingTop: '20px',
                }}
              >
                Place your order
              </Typography>
            </Box>
            <Box sx={{ paddingTop: '20px' }}>
              <Typography style={{ textAlign: 'center', color: `${mediumGrey}` }}>
                follow our simple and easy checkout process to initiate your
                order
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box display={'flex'} justifyContent={'center'}>
              <img
                src={'/health-survey.png'}
                alt={'health survey'}
                loading="lazy"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </Box>
            <Box sx={{ height: '50px' }}>
              <Typography
                style={{
                  textAlign: 'center',
                  fontWeight: 600,
                  paddingTop: '20px',
                }}
              >
                Answer a quick 3 minute health survey
              </Typography>
            </Box>
            <Box sx={{ paddingTop: '20px' }}>
              <Typography style={{ textAlign: 'center', color: `${mediumGrey}` }}>
                Your health survey will be forward to a US based physician for
                evaluation. if approved your treatment will shipped out the same
                day.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          display={'flex'}
          justifyContent={'center'}
          sx={{ width: '100%', paddingTop: '50px' }}
        >
          <ActionButton onClick={() => navigate('/signup')}>
            Get Started
          </ActionButton>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          width: '100vw',
          background: whiteColor,
          position: 'relative',
          marginLeft: 'calc((100% - 100vw) / 2)',
          padding: '60px calc(max((100vw - min(560px, 100%)) / 5, 20px))',
        }}
      >
        <Grid item sx={{ paddingTop: '20px' }}>
          <Typography
            variant="body2"
            style={{ color: `${blackColor}`, marginBottom: '20px' }}
          >
            Our treatment plans
          </Typography>
          <Typography
            variant="body2"
            style={{ color: `${blackColor}`, marginBottom: '20px' }}
          >
            You may choose your preferred treatment and treatment plan that
            suits your budget and lifestyle. Your assigned US-licensed physician
            takes your choice into consideration when evaluating your health and
            prescribing the appropriate medication.
          </Typography>
          <Typography
            variant="h5"
            style={{ color: `${blackColor}`, marginBottom: '10px' }}
          >
            ED Treatments Options
          </Typography>
          <Typography variant="body2" style={{ color: `${blackColor}` }}>
            ED treatments are only available with a prescription. Our assigned
            US-licensed physician will determine the appropriate treatment and
            treatment plan for you, with respect to your preference.
          </Typography>
        </Grid>
        {treatmentOptions.map((option, index) => (
          <TreatmentPlanCard key={index} option={option} />
        ))}
        <Grid
          item
          xs={26}
          style={{
            display: 'flex',
            justifyContent: 'right',
          }}
        >
          <Button
            className="continue-button-style"
            variant="contained"
            size="medium"
            onClick={() => navigate('/signup')}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default HowItWorks;
