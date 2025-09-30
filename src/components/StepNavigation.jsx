import { NavLink } from "react-router-dom";
import { Paper, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const steps = [
  { id: "intro", label: "Introduction", path: "/introduction" },
  { id: "overview", label: "Aperçu", path: "/overview" },
  { id: "conceptuelle", label: "Phase 1 – Conceptuelle", path: "/conceptuelle" },
  { id: "methodologique", label: "Phase 2 – Méthodologique", path: "/methodologique" },
  { id: "empirique", label: "Phase 3 – Empirique", path: "/empirique" },
  { id: "analytique", label: "Phase 4 – Analytique", path: "/analytique" },
  { id: "diffusion", label: "Phase 5 – Diffusion", path: "/diffusion" },
];

export default function StepNavigation() {
  return (
    <Paper elevation={2} sx={{ my: 4, p: 2, bgcolor: 'grey.100' }}>
      <Typography variant="h6" component="h2" sx={{ mb: 1, fontWeight: 'bold' }}>
        Étapes du processus
      </Typography>
      <List component="nav" aria-label="Navigation par étapes">
        {steps.map((step) => (
          <ListItem key={step.id} disablePadding>
            <ListItemButton
              component={NavLink}
              to={step.path}
              sx={{
                borderRadius: 1,
                '&.active': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
              }}
            >
              <ListItemText primary={step.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
