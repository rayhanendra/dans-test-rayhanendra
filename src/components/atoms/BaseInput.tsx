import React from 'react';
import { Public, Work } from '@mui/icons-material';
import { Box, InputAdornment, InputLabel, TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  control: Control<FieldValues> | Control<any>;
};

const BaseInput = ({ name, label, placeholder, control }: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <InputLabel
        htmlFor={name}
        sx={{
          color: '#828282',
          fontWeight: 600,
        }}
      >
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <TextField
              id={name}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              size="small"
              fullWidth
              InputProps={
                name === 'job'
                  ? {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Work
                            sx={{
                              color: '#828282',
                            }}
                          />
                        </InputAdornment>
                      ),
                    }
                  : name === 'location'
                  ? {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Public
                            sx={{
                              color: '#828282',
                            }}
                          />
                        </InputAdornment>
                      ),
                    }
                  : {}
              }
              sx={{
                backgroundColor: 'white',
              }}
            />
          );
        }}
      />
    </Box>
  );
};

export default BaseInput;
