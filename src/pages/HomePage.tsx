import React from 'react';
import { Box, Divider, List, ListItem, ListItemButton, Typography } from '@mui/material';
import BasePaper from '../components/atoms/BasePaper';

function HomePage() {
  const data = [
    {
      id: 1,
      title: 'Data Engineer',
      company: 'Google',
      type: 'Remote',
      location: 'Jakarta',
      created_at: '2021-10-10',
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Facebook',
      type: 'Remote',
      location: 'Jakarta',
      created_at: '2021-10-10',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Facebook',
      type: 'Remote',
      location: 'Jakarta',
      created_at: '2021-10-10',
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Facebook',
      type: 'Remote',
      location: 'Jakarta',
      created_at: '2021-10-10',
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'Facebook',
      type: 'Remote',
      location: 'Jakarta',
      created_at: '2021-10-10',
    },
    {
      id: 6,
      title: 'Data Scientist',
      company: 'Facebook',
      type: 'Remote',
      location: 'Jakarta',
      created_at: '2021-10-10',
    },
  ];

  return (
    <div>
      <BasePaper>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
          Job List
        </Typography>
        <Divider />

        <List disablePadding>
          {data.map((item) => (
            <>
              <ListItem key={item.id} disableGutters disablePadding>
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
                    <Typography variant="body2" fontWeight={500} color={'GrayText'}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                        }}
                      >
                        {item.company}
                        {' - '}
                        <Typography variant="inherit" fontWeight={'inherit'} color={'green'}>
                          {item.type}
                        </Typography>
                      </Box>
                    </Typography>
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
            </>
          ))}
        </List>
      </BasePaper>
    </div>
  );
}

export default HomePage;
