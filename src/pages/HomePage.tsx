import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import BasePaper from '../components/atoms/BasePaper';
import JobList from '../components/organisms/JobList';

function HomePage() {
  return (
    <>
      <BasePaper>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
          Job List
        </Typography>
        <Divider />
        <JobList />
      </BasePaper>
    </>
  );
}

export default HomePage;
