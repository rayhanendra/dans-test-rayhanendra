import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  control: Control<FieldValues> | Control<any>;
};

const BaseInpuCheckbox = ({ name, label, control }: Props) => {
  return (
    <FormControlLabel
      sx={{
        width: '100%',
      }}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)} />
          )}
        />
      }
      label={
        <Typography variant="body2" fontWeight={600} color={'GrayText'}>
          {label}
        </Typography>
      }
    />
  );
};

export default BaseInpuCheckbox;
