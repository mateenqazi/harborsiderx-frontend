import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { ashWhiteColor } from '../../theme';

const reasonsArr = [
  {
    title: 'Fast & Effective ',
    description:
      'It only takes 30-45 minutes to reach the peak effectiveness of Generic Viagra. Once Generic Viagra is fully active, you can experience robust erections that will definitely excite both you and your partner! Timing is the key, and Generic Viagra is preferred by many because of its fast-acting, fast-absorbing formula.',
    image: '/Anti-Depressant.png',
  },
  {
    title: 'Affordable ',
    description:
      'Generic Viagra costs 90% less compared to its brand-name counterpart, Viagra. You won&apos;t need to spend a huge sum to get help in the bedroom. Harbor Side Rx offers affordable Generic Viagra treatment plans that perfectly suit your budget and lifestyle.',
    image: '/Anti-Depressant.png',
  },
  {
    title: 'Trusted & Reliable',
    description:
      'For the past 25 years, men have turned to Viagra to protect themselves against the risk of ED happening at the worst time. Its decades-long reign as the #1 ED treatment made Generic Viagra the ED treatment that most men are familiar with, especially when it comes to effectiveness and reliability. You can be confident that Generic Viagra will deliver amazing ',
    image: '/Anti-Depressant.png',
  },
  {
    title: 'FDA Approved ',
    description:
      'Sildenafil Citrate is the first FDA-approved treatment for ED. It&apos;s also the most studied and verified treatment, with regard to its safety, contraindications, usage, and effectiveness. The level of understanding that experts have of Sildenafil surpasses those of other available ED treatments. ',
    image: '/Anti-Depressant.png',
  },
];

const ReasonsToChoose: React.FC = () => {
  return (
    <Box
      sx={{
        background: ashWhiteColor,
      }}
    >
      <Grid
        container
        sx={{
          padding: '0 calc((100vw - min(560px, 100%)) / 5)',
          paddingTop: '30px',
          marginLeft: '0px',
        }}
      >
        <Grid className="cialis-text-container" item xs={12}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'serif',
              fontSize: '2rem',
            }}
          >
            Here&apos;s why men choose Viagra to be their go to ED
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
          <Grid key={index} item xs={12} md={6}>
            <Card
              className="reason-card"
              sx={{
                padding: '20px',
                boxShadow: 'none',
                height: '270px',
              }}
            >
              <CardMedia
                component="img"
                height="70px"
                className="reason-card-icon"
                image={value.image}
                alt="green iguana"
                sx={{
                  marginBottom: '15px',
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
                    fontSize: '2rem',
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
                    lineHeight: '1.5rem',
                    color: 'black',
                  }}
                >
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            className="primary-button-features choose-plan-button"
            sx={{ mt: 2, boxShadow: 'none', borderRadius: 1 }}
            variant="contained"
            size="large"
          >
            Select your treatment plan
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReasonsToChoose;
