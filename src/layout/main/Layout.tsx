import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  ButtonProps,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BackgroundLayout from '../backgroundLayout';
import { getLocalStorageValue } from '../../utils/auth';
import { ashWhiteColor, primaryColor } from '../../theme/index';

type ContainerProps = {
  loginData: any;
  children: React.ReactNode;
  authUserData: any;
  redirectToLogin: () => {};
  clearLoginState: () => {};
  clearAuthUserState: () => {};
  getAuthUserHandler: (token: string) => {}; // eslint-disable-line no-unused-vars
};
interface StyledLinksProps extends ButtonProps {
  active?: boolean;
  loginButton?: boolean;
  footerLink?: boolean;
  activeLink?: boolean;
  profileButton?: boolean;
}

export const StyledLinks = styled(MenuItem)<StyledLinksProps>(
  ({ active, activeLink, loginButton, profileButton }) => ({
    color: '#686b73',
    paddingRight: '20px',
    paddingLeft: '10px',
    borderBottom: 'none',
    ...(!!activeLink && {
      color: primaryColor,
    }),
    ...(!!loginButton && {
      color: 'black',
      background: `${primaryColor} !important`,
      padding: '10px 30px',
      fontWeight: 700,
      borderRadius: '5px',
    }),
    ...(!!profileButton && {
      color: 'black',
      background: `${primaryColor} !important`,
      padding: '0 0 0 0',
      fontWeight: 700,
      height: 50,
      width: 50,
      borderRadius: '100%',
    }),
    ...(!!active && {
      ':after': {
        display: 'block',
        content: '""',
        borderBottom: `solid 2px ${primaryColor}`,
        transform: 'scaleX(0)',
        transition: 'transform 250ms ease-in-out',
        transformOrigin: '0% 100%',
      },
      ':hover': {
        background: 'none',
        color: primaryColor,
      },
      ':hover:after': {
        transform: 'scaleX(0.7)',
      },
    }),
  })
);

const FooterLink = styled(MenuItem)(() => ({
  display: 'flex',
  textAlign: 'start',
  alignItems: 'start',
  justifyContent: 'start',
  paddingLeft: '0px',
  fontSize: '0.8rem',
  ':hover': {
    background: 'none',
  },
  '::active': {
    background: 'none',
  },
}));

const ContactPaper = styled(Paper)(() => ({
  backgroundColor: ashWhiteColor,
  height: '150px',
  paddingLeft: '15px',
  paddingTop: '25px',
  borderRadius: '10px',
}));

export default function Layout(props: ContainerProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');
  const [headerLinks] = React.useState([
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: '/login' },
  ]);

  const [aboutLinks] = React.useState([
    { label: 'Terms and Conditions', href: '/terms-and-conditions' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Consent to telehealth', href: '/consent-to-telehealth' },
    { label: 'Sitemap', href: '/sitemap' },
  ]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLogin, setIsLogin] = useState(!!getLocalStorageValue('token'));

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickNav = (path: string) => {
    navigate(path);
  };

  const getAuthUser = async () => {
    props.getAuthUserHandler(localStorage.getItem('token')!);
  };

  useEffect(() => {
    if (props.authUserData) {
      setIsLogin(props.authUserData);
    }
  }, [props.authUserData]);

  useEffect(() => {
    const path = location.pathname;
    setActiveButton(path);
  }, [location.pathname]);

  useEffect(() => {
    getAuthUser();
    setIsLogin(!!getLocalStorageValue('token'));
  }, []);

  useEffect(() => {
    if (props?.loginData) {
      if (props?.loginData?.token) {
        setIsLogin(true);
        localStorage.setItem('token', props?.loginData?.token);
      } else {
        setIsLogin(false);
      }
    }
  }, [props?.loginData]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* AppBar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          padding: '0 calc(max((100vw - min(560px, 100%)) / 5, 20px))',
          boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.03), 0px 4px 5px 0px rgba(0,0,0,0.03), 0px 1px 10px 0px rgba(0,0,0,0.03)',
        }}
      >
        <Toolbar
          sx={{
            paddingLeft: '0px !important',
            paddingRight: '0px !important',
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LazyLoadImage
              src={'/Logo.svg'}
              alt={'Header-logo'}
              effect="blur"
              height="50px"
              width="162px"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
          </Typography>

          {headerLinks.map((header: { label: string; href: string }) => {
            if (header.label === 'Login') {
              return (
                <StyledLinks
                  loginButton={!getLocalStorageValue('token')}
                  profileButton={!!getLocalStorageValue('token')}
                  key={header.label}
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'block',
                      lg: 'block',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    {isLogin ? 'CC' : header.label}
                  </Box>
                </StyledLinks>
              );
            } else if (header.label !== 'Blog') {
              return (
                <StyledLinks
                  active={true}
                  key={header.label}
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'block',
                      lg: 'block',
                    },
                  }}
                  onClick={() => handleClickNav(header.href)}
                  activeLink={activeButton === header.href}
                >
                  {header.label}
                </StyledLinks>
              );
            }
          })}

          <IconButton
            aria-label="menu"
            aria-controls="hambdar-menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{
              display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="hambdar-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {headerLinks.map((header: { label: string; href: string }) => (
              <MenuItem onClick={handleClose} key={header.label}>
                {header.label === 'Login'
                  ? isLogin
                    ? 'CC'
                    : header.label
                  : header.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Inner Content */}
      <BackgroundLayout>
        <div
          style={{
            flex: 1,
            minHeight: 'calc(100vh - 360px)',
            padding: '0 calc(max((100vw - min(560px, 100%)) / 5, 20px))',
          }}
        >
          {props.children}
        </div>
      </BackgroundLayout>

      {/* Footer */}
      <Grid
        container
        spacing={1}
        sx={{
          height: '300px',
          padding: '0 calc(max((100vw - min(560px, 100%)) / 5, 20px))',
          paddingTop: '30px',
          paddingBottom: '40px',
        }}
      >
        <Grid
          container
          display={'flex'}
          flexDirection={'row'}
          sx={{ paddingBottom: '20px', borderBottom: '1px solid #b4bbc8' }}
        >
          <Grid
            container
            item
            md={4}
            xs={12}
            sm={6}
            sx={{ paddingBottom: '10px' }}
          >
            <Grid item xs={12} sx={{ paddingBottom: '20px' }}>
              <LazyLoadImage
                src={'/Logo.svg'}
                alt={'Header-logo'}
                effect="blur"
                height="45px"
                width="162px"
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: '0.8rem', width: '70%' }}
              >
                Your fast and affordable source for ED treatment. Delivered
                directly to your door.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="div">
                Payment Methods
              </Typography>
              <LazyLoadImage
                src={'/visas.png'}
                alt={'Header-logo'}
                effect="blur"
                height="45px"
                style={{
                  objectFit: 'contain',
                }}
              />
            </Grid>
          </Grid>
          <Grid item md={2} xs={6} sm={6}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: primaryColor, fontWeight: 600 }}
            >
              Our Site
            </Typography>
            {headerLinks.map((header: { label: string; href: string }) => {
              if (header.label !== 'Login' && header.label !== 'How it works') {
                return (
                  <FooterLink
                    onClick={() => handleClickNav(header.href)}
                    key={header.label}
                  >
                    {header.label}
                  </FooterLink>
                );
              }
            })}
          </Grid>
          <Grid item md={2} xs={6} sm={6}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: primaryColor, fontWeight: 600 }}
            >
              About
            </Typography>
            {aboutLinks.map((header: { label: string; href: string }) => {
              return (
                <FooterLink
                  onClick={() => handleClickNav(header.href)}
                  key={header.label}
                >
                  {header.label}
                </FooterLink>
              );
            })}
          </Grid>
          <Grid item md={4} xs={12} sm={6}>
            <ContactPaper elevation={0}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: primaryColor,
                  fontWeight: 600,
                  paddingBottom: '10px',
                }}
              >
                Contact
              </Typography>
              <Grid>
                <Grid
                  display={'flex'}
                  justifyContent={'start'}
                  alignItems={'center'}
                  sx={{ paddingBottom: '20px' }}
                >
                  <MailIcon sx={{ fontSize: '20px', paddingRight: '10px' }} />
                  Contact@harborsiderx.com
                </Grid>
                <Grid
                  display={'flex'}
                  justifyContent={'start'}
                  alignItems={'center'}
                >
                  <PhoneIcon sx={{ fontSize: '20px', paddingRight: '10px' }} />
                  1-800-251-3872
                </Grid>
              </Grid>
            </ContactPaper>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          display={'flex'}
          justifyContent={'space-between'}
          sx={{
            height: '50px',
            marginLeft: '0px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <Grid
            item
            display={'flex'}
            justifyContent={'flex-start'}
            sx={{
              '@media (max-width:600px)': {
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              },
            }}
          >
            HerbosiderX &#169;. All Right Reserved
          </Grid>
          <Grid
            item
            display={'flex'}
            justifyContent={'flex-end'}
            sx={{
              '@media (max-width:600px)': {
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              },
            }}
          >
            <FacebookIcon sx={{ paddingRight: '10px', cursor: 'pointer' }} />
            <InstagramIcon sx={{ paddingRight: '10px', cursor: 'pointer' }} />
            <LinkedInIcon sx={{ paddingRight: '10px', cursor: 'pointer' }} />
            <TwitterIcon sx={{ paddingRight: '10px', cursor: 'pointer' }} />
            <YouTubeIcon sx={{ cursor: 'pointer' }} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
