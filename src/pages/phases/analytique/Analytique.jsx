import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function Analytique() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Phase Analytique
      </Typography>
      <Typography variant="body1" paragraph>
        L'analyse est le cœur de votre recherche. C'est ici que les données brutes se transforment en résultats interprétables.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Préparation des données" secondary="Codage, saisie et nettoyage des données collectées." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Statistiques descriptives" secondary="Calcul des moyennes, médianes, fréquences, IC95%, et valeurs p." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tests d’hypothèse" secondary="Application de modèles statistiques pour tester vos hypothèses de recherche." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Analyse qualitative" secondary="Codage thématique, analyse de contenu, et triangulation des données." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Interprétation" secondary="Analyse des biais, des limites, et évaluation de la validité interne et externe des résultats." />
        </ListItem>
      </List>
    </Paper>
  );
}