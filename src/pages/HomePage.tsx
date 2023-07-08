import React from 'react';
import { Divider, Typography } from '@mui/material';
import BasePaper from '../components/atoms/BasePaper';
import JobList from '../components/organisms/JobList';
import JobFilter from '../components/organisms/JobFilter';

function HomePage() {
  const [filter, setFilter] = React.useState({
    job: '',
    location: '',
    full_time: false,
  });

  return (
    <>
      <JobFilter setFilter={setFilter} />
      <BasePaper>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
          Job List
        </Typography>
        <Divider />
        <JobList filter={filter} />
      </BasePaper>
    </>
  );
}

export default HomePage;
