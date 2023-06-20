import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function TreatmentPlanCard({ option }: any) {
  return (
    <Box>
      <Card
        sx={{
          display: 'flex',
          marginRight: '25px',
          marginTop: '30px',
          boxShadow:
            '0px 2px 10px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 70 }}
          image={option.image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent
            sx={{
              flex: '1 0 auto',
              paddingTop: '27px',
              paddingLeft: '35px',
              width: '120px',
            }}
          >
            <Typography variant="body2" style={{ fontSize: '0.65rem' }}>
              <b>{option.title}</b>
            </Typography>
            <Typography variant="h4" style={{ fontSize: '2rem' }}>
              <b>{option.name}</b>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
