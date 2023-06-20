import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { primaryColor } from '../../theme/index';

interface MedicineDetailMetaDataProps {
  list: string[];
  image: string;
  price: string | number;
  shipping: string | number;
  tax: string | number;
  total: string | number;
  preHeading: string;
  heading: string;
  postHeading: string;
}

interface MedicineDetailProps {
  medicince: MedicineDetailMetaDataProps;
}

const MedicineDetail = ({ medicince }: MedicineDetailProps) => {
  const {
    list,
    image,
    price,
    total,
    shipping,
    tax,
    preHeading,
    heading,
    postHeading,
  } = medicince;
  return (
    <Box
      sx={{
        border: '1px solid #bfc6d1',
        borderRadius: 2,
        padding: 1,
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Grid display="flex" flexDirection="column">
        <Grid item>
          <Typography variant="caption">{preHeading}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{heading}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2"> {postHeading}</Typography>
        </Grid>
        <Grid item>
          <Box
            component="img"
            sx={{
              height: 250,
            }}
            alt="Viagra bottle center"
            // src={'/viagra-bottle-center.png'}
            src={image}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginY={1}
        >
          <Typography variant="caption">Price</Typography>
          <Box>$ {price}</Box>
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginY={1}
        >
          <Typography variant="caption">Shipping</Typography>
          <Box>$ {shipping}</Box>
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginY={1}
        >
          <Typography variant="caption">Service charges + Tax</Typography>
          <Box>$ {tax}</Box>
        </Grid>
        <Grid item marginY={1}>
          <Divider />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption">Total</Typography>
          <Box sx={{ fontWeight: 600 }}>{total}</Box>
        </Grid>
        <Grid item marginY={1}>
          <Divider />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          xs={12}
        >
          <Box
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <List>
              {list?.map((item, key) => {
                return (
                  <ListItem
                    disableGutters
                    sx={{ height: 12, marginBottom: 1 }}
                    key={key}
                  >
                    <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
                      <CheckCircleIcon
                        sx={{ fontSize: 18, color: primaryColor }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant="caption">{item}</Typography>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MedicineDetail;
