import { ThemeOptions } from '@mui/material/styles';

// Thème clair accessible
export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0D47A1', // Bleu foncé pour un contraste élevé
    },
    secondary: {
      main: '#C62828', // Rouge foncé
    },
    background: {
      default: '#f7f9fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#5f6368',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.2rem', fontWeight: 700 },
    h2: { fontSize: '1.8rem', fontWeight: 700 },
    h3: { fontSize: '1.5rem', fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
};

// Thème sombre accessible
export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#64B5F6', // Bleu clair pour le mode sombre
    },
    secondary: {
      main: '#E57373', // Rouge clair
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#e1e3e6',
      secondary: '#9aa0a6',
    }
  },
  typography: lightTheme.typography, // Utilise la même typographie
  components: lightTheme.components, // Utilise les mêmes surcharges de composants
};
