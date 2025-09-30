import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function Empirique() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Phase Empirique
      </Typography>
      <Typography variant="body1" paragraph>
        Cette phase est la mise en œuvre pratique de votre protocole. C'est ici que vous collectez vos données.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Recrutement des participants" secondary="Appliquer rigoureusement les critères d'inclusion et d'exclusion." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Administration des instruments" secondary="Utiliser les instruments de mesure ou appliquer les interventions comme prévu dans le protocole." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Suivi de la qualité" secondary="Tenir un journal des écarts par rapport au protocole et effectuer des sauvegardes régulières des données." />
        </ListItem>
      </List>
    </Paper>
  );
}