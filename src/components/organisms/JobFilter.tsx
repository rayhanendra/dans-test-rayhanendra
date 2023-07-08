import React from 'react';
import { Box, Button } from '@mui/material';
import BaseInput from '../atoms/BaseInput';
import BaseInpuCheckbox from '../atoms/BaseInpuCheckbox';
import { FieldValues, useForm } from 'react-hook-form';

type Props = {
  setFilter: (filter: any) => void;
};

const JobFilter = ({ setFilter }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      job: '',
      location: '',
      full_time: false,
    },
  });

  const onSubmit = (data: FieldValues) => {
    setFilter(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          mb: 2,
          width: '100%',
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'space-between',
          alignItems: 'end',
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            gap: 2,
            flexBasis: '80%',
          }}
        >
          <BaseInput name="job" label="Job Description" placeholder="Filter by title" control={control} />
          <BaseInput name="location" label="Location" placeholder="Filter by location" control={control} />
        </Box>
        <Box
          sx={{
            flexBasis: '20%',
          }}
        >
          <BaseInpuCheckbox name="full_time" label="Full Time Only" control={control} />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{
            height: '40px',
            px: 4,
            fontWeight: 600,
          }}
        >
          Search
        </Button>
      </Box>
    </form>
  );
};

export default JobFilter;
