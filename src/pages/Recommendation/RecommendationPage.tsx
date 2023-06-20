import React, { useEffect, useState } from 'react';
import Steps from '../../components/Steps';
import { primaryColor, whiteColor } from '../../theme/index';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

interface RecommendationObjectProps {
  title?: string;
  description?: string;
  detail?: string;
  medicineName?: string;
  medicineSalt?: string;
  medicineDescription?: string;
  medicineDetail?: string;
  image?: string;
}

const dummyData = {
  title: 'Recommended Pill for ED Treatment',
  description:
    ' A Starting dose of 60mg is most common for men who are new to ED medication.',
  detail:
    ' Based on the information you provided, a physician will detemine if  the doseage is right fo you, or recommend a more appropiate dosage.',
  image: 'assets/hiw/viagra.png',
  medicineName: 'Generic Viagra',
  medicineSalt: 'Slidenafil',
  medicineDescription: 'Sildenafil is the same active ingredient as viagra',
  medicineDetail: 'The most popular ED treatment for men',
};
export const StyledLinks = styled(Button)(() => ({
  padding: '10px 30px',
  fontWeight: 700,
  borderRadius: '5px',
  textTransform: 'none',
  color: 'black',
  background: primaryColor,
  borderColor: primaryColor,
  width: 'fit-content',
}));

export default function RecommendationPage() {
  const [data, setData] = useState<RecommendationObjectProps>({});
  const navigate = useNavigate();
  useEffect(() => {
    setData(dummyData);
  }, []);

  const submitHandler = () => {
    // call api if necessary
    navigate('/shipping-information');
  };
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      marginY={5}
      style={{ width: 'unset', marginLeft: 'unset' }}
    >
      <Steps currentStepNo={3} />
      <Box
        sx={{
          width: '100%',
          backgroundColor: `${whiteColor}`,
          borderRadius: 2,
        }}
      >
        <Grid
          sx={{
            margin: '0 auto',
            width: { sm: '50%', xs: '90%' },
            rowGap: 2,
            display: 'grid',
            paddingY: 5,
          }}
        >
          <Typography variant="h5">{data?.title} </Typography>
          <Typography>{data?.description}</Typography>
          <Typography>{data?.detail}</Typography>
          <Box sx={{ width: { xs: '80%', sm: 400 } }}>
            <Card
              sx={{
                display: 'flex',
                boxShadow: 'none',
                border: '2px solid #c0c7d1',
                borderRadius: 2,
                paddingX: 2,
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                  }}
                >
                  <Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 100, height: 150 }}
                      image={data?.image}
                      alt="Live from space album cover"
                    />
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent
                      sx={{
                        flex: '1 0 auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'left',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="body2"
                        style={{ fontSize: '0.65rem' }}
                      >
                        <b>{data?.medicineSalt}</b>
                      </Typography>
                      <Typography variant="h4" style={{ fontSize: '2rem' }}>
                        <b>{data?.medicineName}</b>
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
                <Box>
                  <Divider />
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      paddingY: 2,
                    }}
                  >
                    <Typography variant="caption">
                      {data?.medicineDescription}
                      <sup>
                        <span>&#174;</span>
                      </sup>
                    </Typography>
                    <Typography variant="caption">
                      {data?.medicineDetail}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
          <StyledLinks onClick={submitHandler}>Continue</StyledLinks>
        </Grid>
      </Box>
    </Grid>
  );
}
