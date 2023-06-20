import { FC } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Grid, Typography } from '@mui/material';
import {
  circleColor,
  darkGrayColor,
  headingColor,
  primaryColor,
  secondHeadingColor,
  thirdHeadingColor,
  whiteColor,
} from '../../theme/index';

type StepsType = {
  currentStepNo: number;
};

const Steps: FC<StepsType> = (props) => {
  const { currentStepNo } = props;

  const assignColors = (step: number) => {
    switch (step) {
      case 1:
        return {
          first: {
            circleColor: primaryColor,
            titleColor: primaryColor,
            headingColor: headingColor,
            circleText: '01',
            fontWeight: 600,
          },
          second: {
            circleColor: circleColor,
            titleColor: darkGrayColor,
            headingColor: thirdHeadingColor,
            circleText: '02',
            fontWeight: 200,
          },
          third: {
            circleColor: circleColor,
            titleColor: darkGrayColor,
            headingColor: thirdHeadingColor,
            circleText: '03',
            fontWeight: 200,
          },
          firstDotColor: darkGrayColor,
          secondDotColor: darkGrayColor,
        };
      case 2:
        return {
          first: {
            circleColor: primaryColor,
            titleColor: primaryColor,
            headingColor: secondHeadingColor,
            circleText: <CheckIcon fontSize={'small'} />,
            fontWeight: 200,
          },
          second: {
            circleColor: primaryColor,
            titleColor: primaryColor,
            headingColor: headingColor,
            circleText: '02',
            fontWeight: 600,
          },
          third: {
            circleColor: circleColor,
            titleColor: darkGrayColor,
            headingColor: thirdHeadingColor,
            circleText: '03',
            fontWeight: 200,
          },
          firstDotColor: primaryColor,
          secondDotColor: darkGrayColor,
        };
      case 3:
        return {
          first: {
            circleColor: primaryColor,
            titleColor: primaryColor,
            headingColor: secondHeadingColor,
            circleText: <CheckIcon fontSize={'small'} />,
            fontWeight: 200,
          },
          second: {
            circleColor: primaryColor,
            titleColor: primaryColor,
            headingColor: secondHeadingColor,
            circleText: <CheckIcon fontSize={'small'} />,
            fontWeight: 200,
          },
          third: {
            circleColor: primaryColor,
            titleColor: primaryColor,
            headingColor: headingColor,
            circleText: '03',
            fontWeight: 600,
          },
          firstDotColor: primaryColor,
          secondDotColor: primaryColor,
        };
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: whiteColor,
        borderRadius: 2,
        marginBottom: '10px',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        }}
      >
        <Box marginY={5} sx={{ padding: '0px 20px' }}>
          <Grid
            container
            display={'flex'}
            justifyContent={'space-between'}
            sx={{
              paddingLeft: {
                xs: '20px',
                sm: '20px',
                md: '85px',
                lg: '85px',
              },
              paddingRight: {
                xs: '20px',
                sm: '20px',
                md: '50px',
                lg: '50px',
              },
              paddingTop: {
                xs: '0px',
                sm: '0px',
                md: '0px',
                lg: '0px',
              },
              paddingBottom: {
                xs: '0px',
                sm: '0px',
                md: '0px',
                lg: '0px',
              },
            }}
          >
            <Grid
              item
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              pb={2}
              xs={12}
              sm={12}
              md={'auto'}
              lg={'auto'}
            >
              <div
                style={{
                  color: `${assignColors(currentStepNo)?.first.circleColor}`,
                  border: `2px solid ${
                    assignColors(currentStepNo)?.first.circleColor
                  }`,
                  borderRadius: '50%',
                  padding: '10px',
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {assignColors(currentStepNo)?.first.circleText}
              </div>
              <Typography
                sx={{
                  textAlign: 'center',
                  color: `${assignColors(currentStepNo)?.first.titleColor}`,
                }}
              >
                Step one
              </Typography>
              <Typography
                sx={{
                  color: `${assignColors(currentStepNo)?.first.headingColor}`,
                  textAlign: 'center',
                  fontWeight: `${
                    assignColors(currentStepNo)?.first.fontWeight
                  }`,
                }}
              >
                Get Started
              </Typography>
            </Grid>
            <Grid
              item
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                color: `${assignColors(currentStepNo)?.firstDotColor}`,
                fontSize: 'larger',
                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
              }}
            >
              •••••••
            </Grid>
            <Grid
              item
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              pb={2}
              xs={12}
              sm={12}
              md={'auto'}
              lg={'auto'}
            >
              <div
                style={{
                  color: `${assignColors(currentStepNo)?.second.circleColor}`,
                  border: `2px solid ${
                    assignColors(currentStepNo)?.second.circleColor
                  }`,
                  borderRadius: '50%',
                  padding: '10px',
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {assignColors(currentStepNo)?.second.circleText}
              </div>
              <Typography
                sx={{
                  textAlign: 'center',
                  color: `${assignColors(currentStepNo)?.second.titleColor}`,
                }}
              >
                Step two
              </Typography>
              <Typography
                sx={{
                  color: `${assignColors(currentStepNo)?.second.headingColor}`,
                  textAlign: 'center',
                  fontWeight: `${
                    assignColors(currentStepNo)?.second.fontWeight
                  }`,
                }}
              >
                Health Questionnaire
              </Typography>
            </Grid>
            <Grid
              item
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                color: `${assignColors(currentStepNo)?.secondDotColor}`,
                fontSize: 'larger',
                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
              }}
            >
              •••••••
            </Grid>
            <Grid
              item
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              pb={2}
              xs={12}
              sm={12}
              md={'auto'}
              lg={'auto'}
            >
              <div
                style={{
                  color: `${assignColors(currentStepNo)?.third.circleColor}`,
                  border: `2px solid ${
                    assignColors(currentStepNo)?.third.circleColor
                  }`,
                  borderRadius: '50%',
                  padding: '10px',
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {assignColors(currentStepNo)?.third.circleText}
              </div>
              <Typography
                sx={{
                  textAlign: 'center',
                  color: `${assignColors(currentStepNo)?.third.titleColor}`,
                }}
              >
                Step three
              </Typography>
              <Typography
                sx={{
                  color: `${assignColors(currentStepNo)?.third.headingColor}`,
                  textAlign: 'center',
                  fontWeight: `${
                    assignColors(currentStepNo)?.third.fontWeight
                  }`,
                }}
              >
                Recommendations
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Steps;
