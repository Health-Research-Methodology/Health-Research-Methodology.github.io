import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function OverviewResearch() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Aperçu de la recherche scientifique
      </Typography>
      <Typography paragraph>
        La recherche scientifique est une démarche systématique et organisée qui vise à
        produire de nouvelles connaissances ou à vérifier des hypothèses existantes.
        En santé, elle constitue le socle de l’Evidence-Based Practice.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Rigueur, objectivité et reproductibilité" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Production et validation de connaissances" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Application pour améliorer la santé et les soins" />
        </ListItem>
      </List>
    </Paper>
  );
}
