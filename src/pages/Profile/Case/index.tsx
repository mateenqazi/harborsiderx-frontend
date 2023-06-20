import React from 'react';
import { Grid, Typography } from '@mui/material';
import { caseQuestions } from '../../../utils/constants';
import AdjustIcon from '@mui/icons-material/Adjust';
import { whiteColor } from '../../../theme';

const Case = () => {
  const fileInput: any = React.useRef();
  const [questions] = React.useState(caseQuestions);

  return (
    <Grid
      item
      sx={{
        padding: '20px',
        background: whiteColor,
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ height: '10%', paddingBottom: '30px' }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, fontFamily: 'sans-serif' }}
        >
          Cases
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography sx={{ fontFamily: 'sans-serif', color: '#95989e' }}>
          Submit file for physician to review
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ paddingBottom: '20px' }}
      >
        <Grid
          container
          item
          sx={{
            width: '100%',
            border: '2px dashed #c4c9d4',
            borderRadius: '10px',
            padding: '10px',
            display: 'flex',
          }}
        >
          <Grid
            item
            container
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ padding: '30px 0px', cursor: 'pointer' }}
            onClick={() => fileInput?.current?.click()}
          >
            <Grid item>
              <img
                src={'/upload-icon.png'}
                alt={'upload'}
                loading="lazy"
                height={'30px'}
                width={'40px'}
              />
            </Grid>
            <Grid item sx={{ color: '#bcc3ce' }}>
              <Typography sx={{ fontSize: '13px' }}>
                Drop you front view here or browse PNG, JPG are allowed
              </Typography>
            </Grid>
            <input
              ref={fileInput}
              type="file"
              style={{ display: 'none' }}
              onClick={() => {}}
            />
          </Grid>
        </Grid>
      </Grid>
      <hr style={{ borderBottom: '0.5px solid #bcc3ce', width: '100%' }}></hr>
      <Grid sx={{ padding: '20px 60px' }}>
        {questions.map((question) => (
          <>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontFamily: 'sans-serif',
                marginBottom: '5px',
              }}
            >
              {question.question}
            </Typography>
            <Grid
              container
              item
              sx={{
                width: '100%',
                border: '1px solid #c4c9d4',
                borderRadius: '5px',
                padding: '10px 10px',
                marginBottom: '15px',
                display: 'flex',
                cursor: 'pointer',
              }}
            >
              <AdjustIcon sx={{ color: '#95989e', paddingRight: '5px' }} />
              <Typography sx={{ color: '#95989e' }}>Yes</Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </Grid>
  );
};

export default Case;
