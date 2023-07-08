import { AppBar, Avatar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAuthStore, useUser } from '../../store/authStore';
import jwtDecode from 'jwt-decode';

const TheAppbar = () => {
  const user = useUser();
  const logout = useAuthStore((state) => state.logout);

  const [profile, setProfile] = React.useState({
    picture: '',
    name: '',
  });

  useEffect(() => {
    const userData: {
      picture: string;
      name: string;
    } = jwtDecode(user?.credential || '');
    console.log(userData);

    setProfile(userData);
  }, [user]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleLogout = () => {
    logout();
  };

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
                <Avatar src={profile.picture} alt={profile.name} sx={{ width: 32, height: 32 }} />
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

export default TheAppbar;
