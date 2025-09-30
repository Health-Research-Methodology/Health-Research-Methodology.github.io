import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      aria-label={`Activer le mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
