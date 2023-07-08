import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#4283BD',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F9F9F9',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: '#fff',
            background: 'linear-gradient(to bottom, #73B2E0 0%, #5CA1D3 50%, #4283BD 100%)',
            textTransform: 'none',
          },
        },
      ],
    },
  },
});

export default theme;
