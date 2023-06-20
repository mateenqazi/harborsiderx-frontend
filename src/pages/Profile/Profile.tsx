import { Box, Grid, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import Case from './Case';
import Information from './Information';
import Membership from './Membership';
import Orders from './Orders';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { credentialActions } from '../../store/action';
import { primaryColor, whiteColor } from '../../theme';

interface LinksProps {
  active?: boolean;
}

const CustomBox = styled(Box)<LinksProps>(({ active }) => ({
  cursor: 'pointer',
  fontSize: '13px',
  color: '#bcc3ce',
  background: whiteColor,
  padding: '13px 20px',
  borderBottom: '1px solid #f0f3f9',
  position: 'relative',
  ...(!!active && {
    color: primaryColor,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '20%',
      bottom: '20%',
      left: 0,
      height: '70%',
      borderLeft: `4px solid ${primaryColor}`,
      borderRadius: '0px 5px 5px 0px',
      transition: 'top 0.2s ease, height 0.2s ease, bottom 0.2s ease',
    },
  }),
  ':first-child': {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  ':last-child': {
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    borderBottom: '0px',
  },
}));

const Profile = (props: any) => {
  const { authUserData } = props;
  const [authData, setAuthUserData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const links = ['Profile', 'Membership', 'Orders', 'Case', 'Logout'];
  const [activeLink, setActiveLink] = useState('Profile');
  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(credentialActions.login.success({}));
    navigate('/login');
  };
  useEffect(() => {
    setAuthUserData(authUserData);
  }, [authUserData]);

  return (
    <Grid container mt={3} mb={3} spacing={2} sx={{ paddingBottom: '50px' }}>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <Grid
          container
          display={'flex'}
          flexDirection={'column'}
          sx={{
            boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
          }}
        >
          {links.map((link, index) => (
            <CustomBox
              key={index}
              active={activeLink === link}
              onClick={() =>
                link.toLowerCase() === 'logout'
                  ? logoutHandler()
                  : handleClick(link)
              }
            >
              {link}
            </CustomBox>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={9}
        md={9}
        lg={9}
        display={'flex'}
        flexDirection={'column'}
      >
        {activeLink === 'Profile' && <Information authUser={authData} />}
        {activeLink === 'Membership' && <Membership />}
        {activeLink === 'Orders' && <Orders />}
        {activeLink === 'Case' && <Case />}
        {activeLink === 'Logout' && <></>}
      </Grid>
    </Grid>
  );
};

export default Profile;
