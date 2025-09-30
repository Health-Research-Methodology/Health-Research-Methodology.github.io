import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function PhilosophyResearch() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Philosophie de la recherche
      </Typography>
      <Typography paragraph>
        La recherche repose sur une vision épistémologique : comprendre le monde, tester
        des hypothèses et générer des connaissances utiles. En santé, cela implique de
        concilier rigueur scientifique et respect des patients.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={<span><strong>Déduction</strong> : du général au particulier</span>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<span><strong>Induction</strong> : du particulier au général</span>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<span><strong>Hasard et probabilité</strong> : prise en compte de l’incertitude</span>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<span><strong>Valeurs</strong> : rigueur, transparence, reproductibilité</span>} />
        </ListItem>
      </List>
    </Paper>
  );
}
