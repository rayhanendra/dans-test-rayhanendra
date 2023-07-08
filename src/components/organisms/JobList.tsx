import React, { Fragment } from 'react';
import { Box, Divider, List, ListItem, ListItemButton, Typography } from '@mui/material';

import { useQuery } from '@tanstack/react-query';
import jobServices from '../../services/job.services';

const JobList = () => {
  const { data: jobs, isLoading } = useJobsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <List disablePadding>
      {jobs.map((item: IJob, index: string) => (
        <Fragment key={index}>
          <ListItem disableGutters disablePadding>
            <ListItemButton
              sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5 }}
              disableGutters
              disableRipple
              disableTouchRipple
            >
              <Box>
                <Typography variant="body1" fontWeight={600} color={'primary'}>
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  <Typography variant="body2" fontWeight={500} color={'GrayText'}>
                    {item.company}
                    {' - '}
                    <Typography component={'span'} variant="inherit" color={'green'}>
                      {item.type}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <Typography variant="body1" fontWeight={500} color={'GrayText'}>
                  {item.location}
                </Typography>
                <Typography variant="body2" fontWeight={400} color={'GrayText'}>
                  {item.created_at}
                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

const useJobsQuery = () =>
  useQuery({
    queryKey: ['jobs'],
    queryFn: jobServices.getJobs,
    select(data) {
      const items = data?.data
        ?.map((item: IJob) => {
          if (!item) return null;

          return {
            id: item.id ?? '',
            title: item.title ?? '',
            company: item.company ?? '',
            type: item.type ?? '',
            location: item.location ?? '',
            created_at: item.created_at ?? '',
          };
        })
        .filter(Boolean);

      return items;
    },
    keepPreviousData: true,
  });

export default JobList;
