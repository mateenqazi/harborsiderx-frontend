import { Grid, Typography, Box, Button } from '@mui/material';
import React from 'react';
import { forthHeadingColor, primaryColor, whiteColor } from '../../../theme';

const Membership = () => {
  return (
    <Grid
      item
      sx={{
        padding: '10px',
        background: whiteColor,
        marginBottom: '10px',
        overflowY: 'scroll',
        boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ height: '10%' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, fontFamily: 'sans-serif' }}
        >
          Membership
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ height: '20%' }}
      >
        <Grid
          container
          item
          sx={{
            width: '100%',
            border: '2px solid #c4c9d4',
            borderRadius: '10px',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/viagra-bottle.png"
              alt={'bottle'}
              loading="lazy"
              height={'70px'}
              width={'70px'}
            />
          </Grid>
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingRight: '10px' }}
          >
            <Box>
              <Typography sx={{ color: `${forthHeadingColor}` }}>Sildenafil</Typography>
              <Typography>Generic Viagra</Typography>
            </Box>
          </Grid>
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingRight: '10px' }}
          >
            <Box>
              <Typography sx={{ color: `${forthHeadingColor}` }}>ID Verification</Typography>
              <Typography>Verified</Typography>
            </Box>
          </Grid>
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingRight: '10px' }}
          >
            <Box>
              <Typography sx={{ color: `${forthHeadingColor}` }}>Created</Typography>
              <Typography>02-12-22</Typography>
            </Box>
          </Grid>
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingRight: '10px' }}
          >
            <Box>
              <Typography sx={{ color: `${forthHeadingColor}` }}>Subscription</Typography>
              <Typography>Stopped</Typography>
            </Box>
          </Grid>
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingRight: '10px' }}
          >
            <Box>
              <Typography sx={{ color: `${forthHeadingColor}` }}>Status</Typography>
              <Typography sx={{ color: primaryColor }}>Pending</Typography>
            </Box>
          </Grid>
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingRight: '10px' }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button sx={{ color: '#48b4e6' }}>Change Plan</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ minHeight: 'calc(100vh - 560px)' }}></Grid>
    </Grid>
  );
};

export default Membership;
