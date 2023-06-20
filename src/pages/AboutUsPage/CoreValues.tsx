import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { whiteColor } from '../../theme';

const coreValuesArray = [
  {
    title: 'Condor',
    description: 'Unshackled honesty builds trust and confidence.',
    image: 'assets/aboutUs/gray-unsplash.png',
  },
  {
    title: 'Collaboration',
    description: 'Collaboration in terms of Doctors and patients',
    image: 'assets/common/priscilla.png',
  },
  {
    title: 'Integrity',
    description: 'Integrity attracts loyalty and valuable relationships.',
    image: 'assets/common/senior-man.png',
  },
  {
    title: 'Responsibility',
    description: 'Embrace duty with pride and honor',
    image: 'assets/aboutUs/lauren.png',
  },
  {
    title: 'Innovation',
    description: 'Leverage technology and inspire progress.',
    image: 'assets/aboutUs/surface.png',
  },
  {
    title: 'Respect',
    description: 'Treat people equally with respect and dignity.',
    image: 'assets/aboutUs/austin-distel.png',
  },
];

const CoreValues: React.FC = () => {
  return (
    <Fragment>
      <Grid
        container
        spacing={1}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          marginLeft: '0px',
        }}
      >
        <Grid item xs={12}>
          <div>
            <p> What we Offer</p>
            <h1>Our Core Values</h1>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          paddingBottom: '40px',
          marginLeft: '0px',
        }}
      >
        {coreValuesArray.map((value, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: '100%', boxShadow: 'none', p: 0 }}>
              <CardMedia
                component="img"
                height="300px"
                image={value.image}
                alt="green iguana"
                sx={{
                  borderRadius: 2,
                }}
              />
              <CardContent
                sx={{
                  position: 'relative',
                  borderTopRightRadius: '70% 70%',
                  borderTopLeftRadius: '70% 70%',
                  paddingTop: '45px',
                  paddingLeft: '30px',
                  background: whiteColor,
                  marginTop: '-65px',
                  zIndex: 2,
                }}
              >
                <Typography
                  gutterBottom
                  variant="button"
                  className="core-value-card-counter"
                  component="div"
                >
                  <b>
                    {index < 9 && 0}
                    {++index}
                  </b>
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default CoreValues;
