import { AppBar, Avatar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAuthStore, useUser } from '../../store/authStore';
import jwtDecode from 'jwt-decode';

const TheAppbar = () => {
  const profile = useProfile();
  const handleLogout = useLogout();
  const { anchorEl, open, setAnchorEl } = useMenu();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              sx={{
                height: '34px',
              }}
            >
              <img
                src="/images/github.png"
                alt="logo"
                style={{
                  height: '100%',
                  width: 'auto',
                }}
              />
            </Box>
            <Typography variant="h5" color={'white'}>
              Jobs
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="body1" color={'white'}>
              {profile.name}
            </Typography>
            <Box>
              <Button
                onClick={(e) => {
                  setAnchorEl(e.currentTarget);
                }}
              >
                <Avatar src={profile.picture} alt={profile.name} />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => {
                  setAnchorEl(null);
                }}
              >
                <MenuItem onClick={handleLogout}>
                  <Typography variant="body1" fontWeight={600}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

const useMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return {
    anchorEl,
    open,
    setAnchorEl,
  };
};

const useProfile = () => {
  const user = useUser();
  const [profile, setProfile] = React.useState({
    picture: '',
    name: '',
  });

  useEffect(() => {
    const userData: {
      picture: string;
      name: string;
    } = jwtDecode(user?.credential || '');

    setProfile(userData);
  }, [user]);

  return profile;
};

const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return handleLogout;
};

export default TheAppbar;
