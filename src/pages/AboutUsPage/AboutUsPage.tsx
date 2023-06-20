import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CoreValues from './CoreValues';
import { ashWhiteColor, primaryColor } from '../../theme/index';
const AboutUsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box className="about-us-main-container">
      <Grid
        container
        columns={26}
        spacing={1}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          paddingBottom: '40px',
          marginLeft: '0px',
          background: ashWhiteColor,
        }}
        className="text-image-section"
      >
        <Grid item xs={26} md={14}>
          <Box className="text-wrapper">
            <Typography
              variant="body2"
              sx={{
                marginBottom: '1.15rem',
              }}
            >
              About Us
            </Typography>
            <Typography variant="h1" className="headings first-heading">
              Harbor Side Rx makes <span>Men&apos;s Health </span>
              Simple, accessible and <span>affordable</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: '1.15rem',
              }}
            >
              just the way it should
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={26} md={12}>
          <Box className="img-wrapper">
            <img
              src={'/assets/aboutUs/bottle-hand.png'}
              alt={'bottle-hand'}
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        columns={26}
        spacing={1}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          paddingBottom: '40px',
          marginLeft: '0px',
          background: ashWhiteColor,
          marginBottom: '15px',
        }}
        className="text-image-section text-image-section-secondary"
      >
        <Grid item xs={26} md={14}>
          <Box className="img-wrapper">
            <img
              src={'/assets/aboutUs/arm-wrestling-challenge.png'}
              alt={'arm-wrestling-challenge'}
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid item xs={26} md={12}>
          <Box className="text-wrapper">
            <Typography variant="h1" className="headings">
              Revolutionizing <span>Men&apos;s Healthcare </span>
              through technology and <span>efficiency</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <CoreValues />

      <Grid
        container
        spacing={1}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          marginLeft: '0px',
          paddingBottom: '40px',
          background: ashWhiteColor,
        }}
      >
        <Grid item xs={12} md={7}>
          <Box className="quote-wrapper">
            <Typography
              variant="h1"
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
            >
              &quot; Try not to become a man of success, <br /> but rather try
              to become a man of value
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box className="quote-writer">
            <span>- Albert Einstein</span>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        columns={26}
        spacing={1}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          paddingBottom: '40px',
          marginLeft: '0px',
          background: ashWhiteColor,
        }}
        className="text-image-section"
      >
        <Grid item xs={26} md={14}>
          <Box className="text-wrapper">
            <Typography variant="h1" className="headings">
              We believe that men <span>deserve </span>easier, simpler, and more{' '}
              <span>affordable</span> access to essential healthcare.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={26} md={12}>
          <Box className="img-wrapper">
            <img
              src={'/assets/aboutUs/bottle-hand.png'}
              alt={'bottle-hand'}
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        columns={26}
        spacing={1}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '40px',
          paddingBottom: '80px !important',
          marginLeft: '0px',
          background: ashWhiteColor,
        }}
        className="text-image-section text-image-section-secondary"
      >
        <Grid item xs={26} md={14}>
          <Box className="img-wrapper">
            <img
              src={'/assets/common/senior-man.png'}
              alt={'senior-man'}
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid item xs={26} md={12}>
          <Box className="text-wrapper">
            <Typography variant="h1" className="headings">
              Harbor Side Rx revamps the old system that made{' '}
              <span>men&apos;s health </span>
              more complex, expensive and time-consuming than it should be.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        spacing={1}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          paddingBottom: '40px',
          marginBottom: '5vw',
          aspectRatio: 'auto 1287 / 480',
          marginLeft: '0px',
          background: ashWhiteColor,
          position: 'relative',
        }}
      >
        <Grid item xs={12}>
          <img
            className="about-us-banner-image"
            src="/assets/aboutUs/old-men.png"
            alt="old-men"
          />
          <Box className="about-us-bottom-banner">
            <img className="logo-image" src="./Logo.svg" alt="logo" />
            <Typography variant="h1" className="banner-text">
              The New Age of Men&apos;s Health
            </Typography>
            <Button
              className="banner-button"
              sx={{
                mt: 2,
                boxShadow: 'none',
                borderRadius: 1,
                '&:hover': { backgroundColor: primaryColor },
              }}
              size="large"
              onClick={() => navigate('/signup')}
            >
              Start Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsPage;
