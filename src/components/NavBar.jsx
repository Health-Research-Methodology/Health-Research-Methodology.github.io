import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Health Research Guide
        </Typography>
        <Button color="inherit" component={NavLink} to="/" end>
          Accueil
        </Button>
        <Button color="inherit" component={NavLink} to="/introduction">
          Introduction
        </Button>
        <Button color="inherit" component={NavLink} to="/conceptuelle">
          Conceptuelle
        </Button>
        <Button color="inherit" component={NavLink} to="/methodologique">
          Méthodologique
        </Button>
        <Button color="inherit" component={NavLink} to="/empirique">
          Empirique
        </Button>
        <Button color="inherit" component={NavLink} to="/analytique">
          Analytique
        </Button>
        <Button color="inherit" component={NavLink} to="/diffusion">
          Diffusion
        </Button>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
}