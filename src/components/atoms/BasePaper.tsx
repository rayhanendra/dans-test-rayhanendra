import React from 'react';
import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const BasePaper = ({ children }: Props) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '300px',
          border: 5,
          borderImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0)) 1',
          zIndex: -1,
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 100%)',
        }}
      ></Box>
      <Box
        sx={{
          padding: 3,
          margin: 0.6,
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 100%)',
          borderTop: 5,
          borderColor: 'rgba(0, 0, 0, 0.08)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BasePaper;
