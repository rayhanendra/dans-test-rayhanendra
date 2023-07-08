import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
let theme = createTheme({
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
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    h5: {
      color: '#344245',
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
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: '#fff',
            background: 'linear-gradient(to bottom, #C4D0D9 0%, #A9B7C2 30%, #89A2AF 100%)',
            textTransform: 'none',
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          border: '3px solid #E0E0E0',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
