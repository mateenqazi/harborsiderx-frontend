import React from 'react';
import { Box, Grid, MenuItem, Paper, styled, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import { ashWhiteColor, mediumGrey, primaryColor, whiteBorderColor, whiteColor } from '../../theme';

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

const LandingPage: React.FC = () => {
  // const {medicines, getMedicines} = props;
  // const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const items = [
    { id: 1, name: 'Viagra', color: '#d2c5b5', image: '/viagra-bottle.png' },
    { id: 2, name: 'Cialis', color: '#efe8df', image: '/Cialis.png' },
    {
      id: 3,
      name: 'ED Medication',
      color: '#ddded9',
      image: '/HarbourSide.png',
    },
    { id: 4, name: 'Metformin', color: '#e9ba9e', image: '/Metformin.png' },
    { id: 5, name: 'Hair Loss', color: '#efe8df', image: '/hairLoss.png' },
    { id: 6, name: 'Finasteride', color: '#ddded9', image: '/Finasteride.png' },
  ];

  function createData(
    name: string,
    col1: string,
    col2: string,
    col3: string,
    col4: string
  ) {
    return { name, col1, col2, col3, col4 };
  }

  const rows = [
    createData(
      'Doctors Fee',
      'Free',
      '$300-500 per appointment ',
      '$50-150',
      '$75'
    ),
    createData(
      'Pharmacy fees',
      'Free',
      '$5 per purchase',
      '$10 per purchase',
      '$5 per purchase'
    ),
    createData(
      'Shipping Cost',
      'Free',
      'Local Pharmacy Pickup',
      '$5.95',
      '$4.95'
    ),
    createData('FDA-approved medication', 'Yes', 'Yes', 'Yes', 'No'),
    createData(
      'Average treatment cost',
      'Up to 90% less vs Retail Pharmacies',
      'Standard retail price',
      '25-50% more expensive generic medication',
      'Standard retail price'
    ),
    createData(
      'Average time required',
      '3-5minutes',
      '2-3 days',
      '2 hours',
      '12 hours'
    ),
  ];

  // useEffect(() => {
  //   if (medicines) {
  //     const colors = ['#d2c5b5', '#efe8df', '#e9ba9e'];
  //     const transformedMedicines = medicines?.data.reduce((acc: any, { name, imageName }: any, index: any) => {
  //       const color = colors[index % colors.length];
  //       const newMedicineItem = {
  //         name,
  //         image: `/${imageName}.png`,
  //         color,
  //       };

  //       acc.push(newMedicineItem);
  //       return acc;
  //     }, []);
  //     setItems(transformedMedicines);
  //   }
  // }, [medicines]);

  // useEffect(() => {
  //   getMedicines();
  // }, []);

  return (
    <div className="child">
      <Grid
        container
        rowSpacing={{ xs: 3, md: 0 }}
        display="flex"
        flexDirection={'row'}
        sx={{ padding: '60px 0px' }}
      >
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
          <h4 style={{ paddingBottom: '8px' }}>
            Your #1 prescribed medicine provider
          </h4>
          <h1 style={{ paddingBottom: '10px' }}>
            Get Approved for{' '}
            <span style={{ color: primaryColor }}>Treatment</span> Today!
          </h1>
          <p style={{ paddingBottom: '10px', width: '80%', color: '#a0a2a7' }}>
            Order genuine, FDA approved treatments from the comfort of your own
            home. We provide ED medications, finasteride, sleep aids, and
            metformin
          </p>
          <ActionButton onClick={() => navigate('/signup')}>
            Get Your Treatment Today
          </ActionButton>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={'/landingPage.png'}
            alt={'Hero-Image'}
            loading="lazy"
            height={'100%'}
            width={'100%'}
          />
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
        <Grid item xs={12} md={6}>
          <h4 style={{ paddingBottom: '8px' }}>What we provide</h4>
          <h1 style={{ paddingBottom: '10px' }}>
            Why should you switch to Harbor Side Rx?
          </h1>
          <Grid display={'flex'} flexDirection={'column'} sx={{ width: '80%' }}>
            <div
              style={{
                padding: '15px',
                border: '1px solid #c0c1c5',
                marginBottom: '10px',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <img
                src={'/success.png'}
                alt={'success'}
                loading="lazy"
                height={'25px'}
                style={{ paddingRight: '4px' }}
              />
              <div>Cost 90% less compared to brand-new pills</div>
            </div>
            <div
              style={{
                padding: '15px',
                border: '1px solid #c0c1c5',
                marginBottom: '10px',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <img
                src={'/success.png'}
                alt={'success'}
                loading="lazy"
                height={'25px'}
                style={{ paddingRight: '4px' }}
              />
              <div>FDA - Approved ED Medication - Made in the USA</div>
            </div>
            <div
              style={{
                padding: '15px',
                border: '1px solid #c0c1c5',
                marginBottom: '10px',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <img
                src={'/success.png'}
                alt={'success'}
                loading="lazy"
                height={'25px'}
                style={{ paddingRight: '4px' }}
              />
              <div>US-based pharmacy - shipped instantly</div>
            </div>
            <div
              style={{
                padding: '15px',
                border: '1px solid #c0c1c5',
                marginBottom: '10px',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <img
                src={'/success.png'}
                alt={'success'}
                loading="lazy"
                height={'25px'}
                style={{ paddingRight: '4px' }}
              />
              <div>Quick and easy online process</div>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img
            className="sm-width-100"
            src={'/choose-us.png'}
            alt={'Hero-Image'}
            loading="lazy"
            height={'90%'}
            width={'80%'}
          />
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection={'row'}
        sx={{ padding: '60px 0px' }}
      >
        <Grid item xs={12} md={6}>
          <img
            className="sm-width-100"
            src={'/pills-bottle-hand.png'}
            alt={'Hero-Image'}
            loading="lazy"
            height={'100%'}
            width={'80%'}
            style={{ borderRadius: '20px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h4 style={{ paddingBottom: '8px' }}>Do you know?</h4>
          <h1 style={{ paddingBottom: '10px' }}>FDA - Approved</h1>
          <p style={{ paddingBottom: '10px' }}>
            Harborside Rx only provides FDA - approved and oof-label treatments
            as approved by your assigned US-licensed physician. Our premium, US
            made generic medications provide the exact same specifications as
            their brand name counterparts, giving you the same proven and tested
            results.
          </p>
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
          md={6}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <h2 style={{ paddingBottom: '10px' }}>US - based Online Pharmacy</h2>
          <p style={{ paddingBottom: '10px', width: '80%' }}>
            Harborside Rx only works with US-based online pharmacies that comply
            ith strict US regulatory guidelines to ensure safe, effective and
            consistent quality treatments. All medications are shipped directly
            from US-based pharmacies to your doorstep!
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            className="sm-width-100"
            src={'/Pharmacy.png'}
            alt={'Hero-Image'}
            loading="lazy"
            height={'100%'}
            width={'80%'}
          />
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection={'row'}
        sx={{ padding: '60px 0px' }}
      >
        <Grid item xs={12} md={6}>
          <img
            className="sm-width-100"
            src={'/grey-hair-man.png'}
            alt={'hair-man'}
            loading="lazy"
            height={'90%'}
            width={'80%'}
            style={{ borderRadius: '20px' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <h1 style={{ paddingBottom: '5px' }}>Treatment Available - 24/7</h1>
          <p style={{ paddingBottom: '10px' }}>
            Harborside Rx is here to make FDA - approved medication more
            accessible and affordable to you. No need to set appointments with
            your doctor or make the trip to your local pharmacy. We here for
            you, 24/7 - and we shipped you approved medications directly to you.
            Simple Easy Secure. We always expanding our services to accommodate
            various treatments.
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection={'row'}
        sx={{ padding: '60px 0px', paddingTop: '0px' }}
      >
        <Grid item xs={6} sm={3} md={3}>
          <Grid
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img
              src={'/ED-Medication.png'}
              alt={'hair-man'}
              loading="lazy"
              style={{ borderRadius: '20px' }}
            />
          </Grid>
          <Grid
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingBottom: '10px' }}
          >
            ED Medications
          </Grid>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Grid
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img
              src={'/Anti-Depressant.png'}
              alt={'hair-man'}
              loading="lazy"
              style={{ borderRadius: '20px' }}
            />
          </Grid>
          <Grid
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingBottom: '10px' }}
          >
            Anti-Depressants
          </Grid>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Grid
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img
              src={'/Sleep-Aids.png'}
              alt={'hair-man'}
              loading="lazy"
              style={{ borderRadius: '20px' }}
            />
          </Grid>
          <Grid
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingBottom: '10px' }}
          >
            Sleep aids
          </Grid>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Grid
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img
              src={'/Hair-Loss.png'}
              alt={'hair-man'}
              loading="lazy"
              style={{ borderRadius: '20px' }}
            />
          </Grid>
          <Grid
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ paddingBottom: '10px' }}
          >
            Hair Loss
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          <h4>Our Services</h4>
          <h1>Wider Range of Treatments</h1>
          <Typography sx={{ width: '70%' }}>
            Choose wider range of treatments below. Our US based physicians will
            consider your choice in determining the wider range of treatment
            plan for your needs.
          </Typography>
        </Grid>
        <div style={{ width: '100%', overflowX: 'scroll' }}>
          <Grid
            container
            spacing={2}
            sx={{ minWidth: 1200, padding: '30px 5px' }}
          >
            {items?.map((item: any, index: any) => (
              <Grid key={index} item xs={2} sx={{ cursor: 'pointer' }}>
                <Paper
                  elevation={0}
                  sx={{
                    padding: '20px 10px',
                    backgroundColor: `${item.color}`,
                    height: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '20px',
                  }}
                >
                  <Grid sx={{ fontWeight: 600 }}>{item.name}</Grid>
                  <Grid container alignItems="flex-end">
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          width: '48px',
                          height: '48px',
                          backgroundColor: `${whiteColor}`,
                        }}
                      >
                        <ArrowForwardIcon />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <img
                        src={item.image}
                        alt={'viagra'}
                        loading="lazy"
                        height={'120px'}
                        width={'100%'}
                        style={{ transform: 'scale(1.2)', overflow: 'hidden' }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ background: ashWhiteColor, margin: '70px 0px', borderRadius: '20px' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <img
                  src={'/Logo.svg'}
                  alt={'logo'}
                  loading="lazy"
                  width={'200px'}
                />
              </TableCell>
              <TableCell
                sx={{
                  borderRight: `1px solid ${whiteBorderColor}`,
                  background: primaryColor,
                }}
              >
                <img
                  src={'/viagra-bottle-center.png'}
                  alt={'logo'}
                  loading="lazy"
                  width={'200px'}
                  height={'300px'}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </TableCell>
              <TableCell sx={{ borderRight: `1px solid ${whiteBorderColor}` }}>
                <img
                  src={'/blur-medicine-box.png'}
                  alt={'logo'}
                  loading="lazy"
                  width={'200px'}
                  height={'200px'}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <h3 style={{ margin: 0, textAlign: 'center' }}>
                  Traditional Rx
                </h3>
              </TableCell>
              <TableCell sx={{ borderRight: `1px solid ${whiteBorderColor}` }}>
                <img
                  src={'/blur-medicine-box.png'}
                  alt={'logo'}
                  loading="lazy"
                  width={'200px'}
                  height={'200px'}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <h3 style={{ margin: 0, textAlign: 'center' }}>
                  Online Pharmacy A
                </h3>
              </TableCell>
              <TableCell>
                <img
                  src={'/blur-medicine-box.png'}
                  alt={'logo'}
                  loading="lazy"
                  width={'200px'}
                  height={'200px'}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <h3 style={{ margin: 0, textAlign: 'center' }}>
                  Online Pharmacy B
                </h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td': {
                    borderRight: `1px solid ${whiteBorderColor}`,
                    borderBottom: 0,
                  },
                  '&:last-child th': {
                    border: 0,
                  },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    textAlign: 'center',
                    fontWeight: 600,
                    padding: '30px !important',
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: 'center',
                    borderRight: `1px solid ${whiteBorderColor}`,
                    background: primaryColor,
                    fontWeight: 600,
                    fontSize: '17px',
                  }}
                >
                  {row.col1}
                </TableCell>
                <TableCell
                  sx={{ textAlign: 'center', borderRight: `1px solid ${whiteBorderColor}` }}
                >
                  {row.col2}
                </TableCell>
                <TableCell
                  sx={{ textAlign: 'center', borderRight: `1px solid ${whiteBorderColor}` }}
                >
                  {row.col3}
                </TableCell>
                <TableCell
                  sx={{ textAlign: 'center', borderRight: `1px solid ${whiteBorderColor}` }}
                >
                  {row.col4}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
              <Typography style={{ textAlign: 'center', color: `${mediumGrey}` }}>
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
    </div>
  );
};

export default LandingPage;
