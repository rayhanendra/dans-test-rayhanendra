import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const BaseLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default BaseLoader;
