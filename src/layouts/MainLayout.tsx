import React from 'react';
import { Outlet } from 'react-router-dom';
import TheAppbar from '../components/molecules/TheAppbar';
import { Container } from '@mui/material';

const MainLayout = () => {
  return (
    <div>
      <TheAppbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
