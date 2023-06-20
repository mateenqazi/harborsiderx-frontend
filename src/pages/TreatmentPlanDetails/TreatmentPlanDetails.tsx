import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from '../LandingPage/LandingPage';
import ReasonsToChoose from './ReasonsToChoose';
import ReasonsToChooseHarborSideRX from './ReasonsToChooseHarborSideRX';
import { ashWhiteColor } from '../../theme';

const TreatmentPlanDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="treatment-plan-main-container">
      <Grid
        container
        spacing={1}
        className="cialis-main-container"
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          paddingBottom: '40px',
          marginLeft: '0px',
        }}
      >
        <Grid item className="treatment-page-image-container" xs={12} md={6}>
          <img
            className="cialis-plan-image"
            src={'/Cialis.png'}
            alt={'cialis-bottle'}
            loading="lazy"
            height={'80%'}
            width={'70%'}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
          }}
        >
          <Typography
            variant="body2"
            className="cialis-container-heading"
            style={{
              color: 'black',
              marginTop: '3.5rem',
              paddingBottom: '8px',
            }}
          >
            HarborsideRx
          </Typography>
          <Typography variant="h3" className="text-heading">
            The <span># 1 Online </span> ED Health Portal Get{' '}
            <span>Generic Cialis</span>
          </Typography>
          <ActionButton onClick={() => navigate('/signup')}>
            Start Now
          </ActionButton>
        </Grid>
      </Grid>

      <Grid
        container
        className="fda-treatment-container"
        columnSpacing={{ xs: 2, sm: 2, md: 5 }}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '60px',
          marginLeft: '0px',
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: '5px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: '1rem',
              marginTop: '15px !important',
              fontSize: '2rem',
              fontFamily: 'serif',
              fontWeight: 'bold',
            }}
          >
            {' '}
            FDA-Approved ED Treatment{' '}
          </Typography>
          <Typography
            variant="body2"
            style={{
              paddingBottom: '10px',
              fontSize: '1rem',
              lineHeight: '1.65rem',
            }}
          >
            Tadalafil is the active component in Cialis and offers the same
            safety and long-term effectiveness that Cialis is best known for.
            Tadalafil is emerging as the ideal, more practical choice, as it
            offers users spontaneity, performance, and confidence that can only
            be achieved with an ED pill that stays effective for more than 24
            hours
          </Typography>
          <Button
            className="primary-button-features selecting-treatment-plan-button"
            sx={{ mt: 2, boxShadow: 'none', borderRadius: 1 }}
            variant="contained"
            size="medium"
            onClick={() => navigate('/signup')}
          >
            Select your treatment
          </Button>
        </Grid>
        <Grid className="treatment-page-image-container" item xs={12} md={6}>
          <img
            src={'/assets/common/senior-man.png'}
            alt={'hair-man'}
            loading="lazy"
            height={'90%'}
            width={'80%'}
            style={{ borderRadius: '20px' }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 2, sm: 2, md: 5 }}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '40px',
          paddingBottom: '60px !important',
          marginLeft: '0px',
          background: ashWhiteColor,
        }}
        className="text-image-section text-image-section-secondary"
      >
        <Grid className="treatment-page-image-container" item xs={12} md={6}>
          <Box className="img-wrapper">
            <img
              src={'/assets/common/priscilla.png'}
              alt={'priscilla'}
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '10px',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginBottom: '1rem',
                marginTop: '15px',
                fontSize: '2rem',
                fontFamily: 'serif',
                fontWeight: 'bold',
              }}
            >
              {' '}
              Uncompromising Solution for Men&apos;s Sexual Performance{' '}
            </Typography>
            <Typography
              variant="body2"
              style={{
                fontSize: '1rem',
                lineHeight: '1.65rem',
                wordSpacing: '0.02rem',
              }}
            >
              Being caught unprepared in the bedroom is perhaps the worst that
              could happen to a man. Not only does ED impact your confidence,
              but it can also affect relationships and your willingness to be
              intimate with another person. Make ED a thing of the past.
              Tadalafil has been around for more than 20 years, helping men
              regain their sexual prime and confidence by providing a safe and
              reliable way to gain robust erections all day long.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ position: 'relative' }}>
        <img
          className="treatment-plan-banner-image treatment-plan-middle-banner-image"
          src="/assets/aboutUs/old-men.png"
          alt="old-men"
        />
        <Grid
          container
          className="middle-banner-container"
          columnSpacing={{ xs: 5, sm: 2, md: 10 }}
          sx={{
            position: 'relative',
            padding: '0 calc((100vw - min(560px, 100%)) / 5)',
            paddingTop: '40px',
            paddingBottom: '80px',
            marginLeft: '0px',
            zIndex: '2',
          }}
        >
          <Grid item className="middle-banner-text-container" xs={12} md={6}>
            <Typography
              variant="h5"
              className="middle-banner-title"
              sx={{
                marginBottom: '1rem',
                marginTop: '15px !important',
                fontSize: '2rem',
                color: 'white',
                fontFamily: 'serif',
                fontWeight: 'bold',
              }}
            >
              {' '}
              You Can Count on Generic Viagra All Day, Every Day{' '}
            </Typography>
            <Typography
              variant="body2"
              style={{
                fontSize: '1rem',
                color: 'white',
                maxWidth: '100vw',
                lineHeight: '1.65rem',
                wordSpacing: '0.02rem',
              }}
            >
              Tadalafil (Generic Cialis) is the ideal ED treatment for millions
              of men worldwide - a trusted treatment that brings reliability and
              confidence in the bedroom
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="middle-banner-image"
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <img
              src={'Cialis.png'}
              alt={'hair-man'}
              loading="lazy"
              height={'auto'}
              width={'40%'}
              style={{ borderRadius: '20px' }}
            />
          </Grid>
        </Grid>
      </Box>
      <ReasonsToChoose />

      <Grid
        container
        className="cialis-properties-section"
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '60px',
          marginLeft: '0px',
          marginBottom: '3rem',
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingRight: '3rem',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: '1rem',
              marginTop: '15px !important',
              fontSize: '2rem',
              fontFamily: 'serif',
              fontWeight: 'bold',
            }}
          >
            {' '}
            Is Generic Cialis Reliable?{' '}
          </Typography>
          <Typography
            variant="body2"
            style={{
              paddingBottom: '10px',
              fontSize: '1rem',
              lineHeight: '1.65rem',
            }}
          >
            Will Generic Cialis work for you? Can you put your trust in Cialis
            to work, especially when it matters most? Tadalafil&apos;s effective
            duration and peak effectiveness have been extensively studied and
            observed by experts and patients alike. Typically, Tadalafil is
            absorbed by the body 30 to 120 minutes after taking the pill, and in
            most cases, the medication stays in your system for more than 24
            hours. Taking Generic Cialis allows you to maintain erectile
            function by improving blood circulation in the penile chambers, and
            its prolonged half-life ensures that you maintain the ability to
            gain and maintain an erection longer than any other ED medication.
          </Typography>

          <Button
            className="primary-button-features selecting-ed-treatment-button"
            sx={{ mt: 2, boxShadow: 'none', borderRadius: 1 }}
            variant="contained"
            size="medium"
            onClick={() => navigate('/signup')}
          >
            Select your ED treatment
          </Button>
        </Grid>
        <Grid item className="treatment-page-image-container " xs={12} md={6}>
          <img
            src={'/assets/common/priscilla.png'}
            alt={'hair-man'}
            loading="lazy"
            height={'90%'}
            width={'80%'}
            style={{ borderRadius: '20px' }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        columns={26}
        columnSpacing={{ md: 7 }}
        rowSpacing={{ xs: 5, md: 5 }}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '40px',
          paddingBottom: '80px !important',
          marginLeft: '0px',
          background: ashWhiteColor,
        }}
        className="text-image-section cialis-procedure text-image-section-secondary"
      >
        <Grid item className="treatment-page-image-container" xs={26} md={12}>
          <img
            src={'/assets/common/senior-man.png'}
            alt={'hair-man'}
            loading="lazy"
            height={'100%'}
            width={'100%'}
            style={{ borderRadius: '20px' }}
          />
        </Grid>
        <Grid item xs={26} md={14}>
          <Typography
            variant="h5"
            sx={{
              marginBottom: '1rem',
              fontSize: '2rem',
              fontFamily: 'serif',
              fontWeight: 'bold',
            }}
          >
            {' '}
            How should I take Generic Cialis?{' '}
          </Typography>
          <Typography
            variant="body2"
            style={{
              paddingBottom: '10px',
              fontSize: '1rem',
              lineHeight: '1.65rem',
            }}
          >
            Don&apos;t leave anything to chance when taking your ED medication.
            Always be sure to refer to your healthcare provider&apos;s
            directions when taking Generic Cialis, especially the dosage, the
            frequency, and the timing of your pill intake. Generic Cialis is
            taken orally, 30-120 minutes before sexual activity. Never exceed
            your prescribed dosage, and never take more than one dose every 24
            hours. Do not take Generic Cialis with nitrates or medication that
            affects your heart and cardiovascular system, and do not take
            Generic Cialis with other types of ED medication, such as Viagra
            (Sildenafil Citrate) or Levitra (Vardenafil). Do not consume food
            that can lower your blood pressure, such as grapefruit. While
            Generic Cialis is less affected by food, it is generally recommended
            to take the medication on an empty
          </Typography>
        </Grid>
      </Grid>

      <ReasonsToChooseHarborSideRX />

      <Grid
        container
        columns={26}
        className="cialis-procedure "
        columnSpacing={{ md: 15 }}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '60px',
          paddingBottom: '70px',
          marginLeft: '0px',
        }}
      >
        <Grid item xs={26} md={14}>
          <Typography
            variant="h5"
            sx={{
              marginBottom: '1rem',
              fontSize: '2rem',
              fontFamily: 'serif',
              fontWeight: 'bold',
            }}
          >
            {' '}
            Generic Cialis with Harbor Side Rx{' '}
          </Typography>
          <Typography
            variant="body2"
            style={{
              paddingBottom: '10px',
              fontSize: '1rem',
              lineHeight: '1.65rem',
            }}
          >
            At Harbor Side Rx, we specialize in simplifying ED treatments for
            every man. Our safe, secure, and simple process gives you the
            convenience and savings you deserve, on top of the confidence that
            you can get from our treatments. We pride ourselves as the #1 most
            trusted ED service online, and we are committed to providing the
            best treatments and
          </Typography>
        </Grid>
        <Grid
          item
          className="treatment-page-image-container cialis-banner-image-conatainer"
          xs={26}
          md={12}
        >
          <img
            className="cialis-banner-image"
            src={'/Cialis.png'}
            alt={'cialis-bottle'}
            loading="lazy"
            height={'auto'}
            width={'60%'}
          />
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
            className="treatment-plan-banner-image tadalafil-bottom-banner-image"
            src="/assets/aboutUs/old-men.png"
            alt="old-men"
          />
          <Box className="treatment-plan-bottom-banner">
            <img className="logo-image" src="./Logo.svg" alt="logo" />
            <Typography variant="h5" className="banner-mini-text">
              {' '}
              Most Importantly
            </Typography>
            <Typography variant="h1" className="banner-text">
              Harbor Side Rx makes ED simpler, more affordable, and more
              accessible for thousands of men in the United States.
            </Typography>
            <Button
              className="primary-button-features banner-button"
              sx={{ mt: 2, boxShadow: 'none', borderRadius: 1 }}
              variant="contained"
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

export default TreatmentPlanDetails;
