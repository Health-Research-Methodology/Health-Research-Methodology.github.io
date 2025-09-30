import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light', // Default to light mode
    primary: {
      main: '#1976d2', // A strong blue for good contrast
    },
    secondary: {
      main: '#dc004e', // A strong pink for secondary actions
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#424242',
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // Use rem units for scalability
    htmlFontSize: 16,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: '2px solid #1976d2',
            outlineOffset: '2px',
            borderRadius: '2px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: '2px solid #1976d2',
            outlineOffset: '2px',
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica", "Arial", sans-serif',
    htmlFontSize: 16,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: '2px solid #90caf9',
            outlineOffset: '2px',
            borderRadius: '2px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: '2px solid #90caf9',
            outlineOffset: '2px',
          },
        },
      },
    },
  },
});

export default theme;
