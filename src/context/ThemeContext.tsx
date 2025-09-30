import { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';

const ThemeContext = createContext({
  toggleTheme: () => {},
  mode: 'light',
});

export const useTheme = () => useContext(ThemeContext);

export const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (storedTheme as 'light' | 'dark') || (prefersDarkMode ? 'dark' : 'light');
  });

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  const theme = useMemo(() => (mode === 'light' ? createTheme(lightTheme) : createTheme(darkTheme)), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
