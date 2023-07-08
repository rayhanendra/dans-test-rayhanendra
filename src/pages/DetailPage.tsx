import React from 'react';
import BasePaper from '../components/atoms/BasePaper';
import { Box, Button, Divider, Grid, Link, Typography } from '@mui/material';
import parse from 'html-react-parser';
import { ChevronLeft } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import jobServices from '../services/job.services';
import BaseLoader from '../components/atoms/BaseLoader';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useJobDetailQuery(id as string);

  if (isLoading) return <BaseLoader />;

  if (!data) return null;

  return (
    <>
      <Button
        sx={{ textTransform: 'none' }}
        onClick={() => {
          navigate('/');
        }}
      >
        <ChevronLeft />
        <Typography fontWeight={600}>Back</Typography>
      </Button>
      <BasePaper>
        <Typography variant="body2" fontWeight={500} color={'GrayText'}>
          {data.type} / {data.location}
        </Typography>
        <Typography variant="h5" fontWeight={600} color={''} gutterBottom>
          {data.title}
        </Typography>
        <Divider
          sx={{
            mt: 2,
          }}
        />
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                overflow: 'hidden',
              }}
            >
              {parse(data.description)}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  border: '5px solid #f5f5f5',
                }}
              >
                <Box>
                  <Box sx={{ p: 1 }}>
                    <Typography variant="body1" fontWeight={600}>
                      {data.company}
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <img src={data.company_logo} alt={data.company} />
                <Link href={data.company_url}>{data.company_url}</Link>
              </Box>

              <Box
                sx={{
                  backgroundColor: 'lightyellow',
                  borderRadius: 2,
                  border: '5px solid #f5f5f5',
                }}
              >
                <Box>
                  <Box sx={{ p: 1 }}>
                    <Typography variant="body1" fontWeight={600}>
                      How to Apply
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <Box
                  sx={{
                    px: 1,
                    overflow: 'hidden',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word',
                    hyphens: 'auto',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {parse(data.how_to_apply)}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </BasePaper>
    </>
  );
}

const useJobDetailQuery = (id: string) => {
  return useQuery({
    queryKey: ['jobDetail', id],
    queryFn: async () => await jobServices.getJobDetail(id),
    select(data) {
      const item: IJobDetail = {
        id: data.data.id,
        type: data.data.type,
        url: data.data.url,
        created_at: data.data.created_at,
        company: data.data.company,
        company_url: data.data.company_url,
        location: data.data.location,
        title: data.data.title,
        description: data.data.description,
        how_to_apply: data.data.how_to_apply,
        company_logo: data.data.company_logo,
      };

      return item;
    },
  });
};

export default DetailPage;
