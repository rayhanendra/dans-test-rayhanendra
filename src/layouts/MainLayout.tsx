import React from 'react';
import { Outlet } from 'react-router-dom';
import TheAppbar from '../components/molecules/TheAppbar';
import { Container } from '@mui/material';

const MainLayout = () => {
  return (
    <>
      <TheAppbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
