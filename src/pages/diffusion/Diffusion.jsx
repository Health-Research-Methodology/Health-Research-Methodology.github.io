import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function Diffusion() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Phase de Diffusion
      </Typography>
      <Typography variant="body1" paragraph>
        La diffusion est l'étape finale où vous partagez vos découvertes avec la communauté scientifique et le public.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Rédaction de l'article" secondary="Suivre les normes de la revue ciblée (par exemple, IMRaD : Introduction, Méthodes, Résultats et Discussion)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Soumission et révision par les pairs" secondary="Préparer un manuscrit de haute qualité et répondre de manière constructive aux commentaires des évaluateurs." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Présentations orales et par affiches" secondary="Adapter le message aux différents publics lors de conférences et séminaires." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Vulgarisation scientifique" secondary="Rendre les résultats accessibles au grand public via des blogs, des vidéos ou des communiqués de presse." />
        </ListItem>
      </List>
    </Paper>
  );
}

