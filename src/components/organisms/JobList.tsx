import React, { Fragment } from 'react';
import { Box, Button, Divider, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import jobServices from '../../services/job.services';
import { useInView } from 'react-intersection-observer';
import BaseLoader from '../atoms/BaseLoader';
import { useNavigate } from 'react-router-dom';

const JobList = () => {
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useJobsQuery();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const handleNavigate = (id: string) => {
    navigate(`/detail/${id}`);
  };

  if (status === 'loading') return <BaseLoader />;

  return (
    <>
      <List disablePadding>
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((item: IJob, index: string) => (
              <Fragment key={index}>
                <ListItem disableGutters disablePadding>
                  <ListItemButton
                    disableGutters
                    disableRipple
                    disableTouchRipple
                    sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5 }}
                    onClick={handleNavigate.bind(null, item.id)}
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
          </Fragment>
        ))}
      </List>
      {(isFetching || isFetchingNextPage) && <BaseLoader />}
      {!hasNextPage ?? (
        <Typography variant="body2" fontWeight={400} color={'GrayText'}>
          Nothing more to load
        </Typography>
      )}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
        }}
        ref={ref}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        <Typography variant="body2" fontWeight={600} color={'white'}>
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'More Jobs' : 'Nothing more to load'}
        </Typography>
      </Button>
    </>
  );
};

const useJobsQuery = () =>
  useInfiniteQuery({
    queryKey: ['jobs'],
    queryFn: async ({ pageParam = 1 }) => await jobServices.getJobs(pageParam).then((res) => res.data),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data?.length === 0) return undefined;
      return pages.length + 1;
    },
    select(data) {
      return {
        // Note: filter null value
        pages: data.pages.map((page) =>
          page
            .map((item: IJob) => {
              if (!item) return null;
              return {
                id: item.id,
                title: item?.title ?? '',
                company: item.company,
                type: item.type,
                location: item.location,
                created_at: item.created_at,
              };
            })
            .filter(Boolean),
        ),
        pageParams: data.pageParams,
      };
    },
  });

export default JobList;
