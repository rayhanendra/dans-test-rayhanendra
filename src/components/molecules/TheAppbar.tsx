import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const TheAppbar = () => {
  return (
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TheAppbar;
