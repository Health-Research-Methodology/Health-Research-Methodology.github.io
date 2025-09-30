import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function Conceptuelle() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Phase Conceptuelle
      </Typography>
      <Typography variant="body1" paragraph>
        Cette phase initiale consiste à identifier et à formuler le problème de recherche. C'est le fondement de votre étude.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Identifier le problème de santé" secondary="Évaluer sa pertinence, sa faisabilité et son originalité." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Revue de littérature" secondary="Explorer les bases de données biomédicales (PubMed, etc.) et utiliser des cadres comme PRISMA si nécessaire." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Définir les variables clés" secondary="Identifier les variables indépendantes, dépendantes et confondantes." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Formuler les objectifs et hypothèses" secondary="Utiliser le format SMART pour les objectifs et définir clairement les hypothèses de recherche." />
        </ListItem>
      </List>
    </Paper>
  );
}