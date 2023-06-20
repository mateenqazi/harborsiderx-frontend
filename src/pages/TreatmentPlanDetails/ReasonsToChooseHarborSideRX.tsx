import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const reasonsArr = [
  {
    title: 'Fast and Convenient ',
    description:
      'Harbor Side Rx gives you the fastest, most convenient way to safely purchase ED pills online. Our vast network of US-based pharmacies and US-licensed physicians allows ',
    image: '/Anti-Depressant.png',
  },
  {
    title: 'Affordable and Effective ',
    description:
      'Treating ED is no longer as expensive as it once was. Now, you can get Generic Cialis for 90% less compared to its brand-name counterparts, without sacrificing the effectiveness',
    image: '/Anti-Depressant.png',
  },
  {
    title: 'FDA-Approved',
    description:
      'Harbor Side Rx ensures that all treatments and medications purchased from our website follow strict government guidelines, and every medication is approved by the  ',
    image: '/Anti-Depressant.png',
  },
  {
    title: 'No Hidden Charges ',
    description:
      'With Harbor Side Rx, you only pay for your pills. No hidden charges, cancellation charges, processing fees, doctor&apos;s fees, or handling fees when you purchase from us. ',
    image: '/Anti-Depressant.png',
  },
];

const ReasonsToChooseHarborSideRX: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'black',
      }}
    >
      <Grid
        container
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '70px',
          marginLeft: '0px',
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'serif',
              fontSize: '2rem',
              color: 'white',
            }}
          >
            Why choose Harbor Side RX?
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 5, sm: 2, md: 3 }}
        rowSpacing={{ xs: 5, sm: 2, md: 3 }}
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          paddingBottom: '70px',
          marginLeft: '0px',
        }}
      >
        {reasonsArr.map((value, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card
              className="reason-card"
              sx={{
                padding: '15px',
                borderRadius: '10px',
                boxShadow: 'none',
                height: '200px',
              }}
            >
              <CardMedia
                component="img"
                height="70px"
                className="reason-card-icon"
                image={value.image}
                alt="green iguana"
                sx={{
                  marginBottom: '5px',
                  borderRadius: 2,
                  width: '50px !important',
                }}
              />
              <CardContent
                className="reason-card-content"
                sx={{
                  p: 0,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    fontSize: '1.2rem',
                    fontFamily: 'serif',
                    fontWeight: 'bold',
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: '0.7rem',
                    // lineHeight: '1.5rem',
                    color: 'black',
                  }}
                >
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReasonsToChooseHarborSideRX;
