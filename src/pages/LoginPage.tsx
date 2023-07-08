import React from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import type { CredentialResponse } from '@react-oauth/google';
import { useAuthStore, useUser } from '../store/authStore';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { user, responseMessage, errorMessage, handleLogout } = useLoginPage();

  return (
    <Box
      sx={{
        background: 'linear-gradient(160deg, rgba(255,255,255,1) 0%, #4283BD 100%)',
        height: '100vh',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 20,
        }}
      >
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '32px',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            Login to Github Jobs
          </Typography>

          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          {user && (
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}

const useLoginPage = () => {
  const navigate = useNavigate();

  const user = useUser();
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const responseMessage = (response: CredentialResponse) => {
    login(response);
    navigate('/');
  };

  const errorMessage = () => {
    console.log('Login Failed');
  };

  const handleLogout = () => {
    logout();
    googleLogout();
  };

  return {
    user,
    responseMessage,
    errorMessage,
    handleLogout,
  };
};

export default LoginPage;
