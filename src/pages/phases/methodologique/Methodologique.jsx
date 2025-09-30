import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function Methodologique() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Phase Méthodologique
      </Typography>
      <Typography variant="body1" paragraph>
        Cette phase consiste à élaborer le protocole de recherche détaillé. C'est le plan directeur de votre étude.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Choix du devis de recherche" secondary="Observationnel (cohorte, cas-témoins), expérimental (essai contrôlé randomisé), qualitatif ou mixte." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Population et échantillonnage" secondary="Définir la population cible, les critères d’inclusion/exclusion et la méthode d’échantillonnage." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Instruments de mesure" secondary="Assurer la validité et la fiabilité des instruments, et réaliser un pré-test ou une étude pilote." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Procédures de collecte et de qualité" secondary="Détailler le plan de collecte des données et les mesures d'assurance qualité." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Considérations éthiques" secondary="Obtenir l'approbation d'un comité d'éthique, préparer les formulaires de consentement et garantir la confidentialité des données." />
        </ListItem>
      </List>
    </Paper>
  );
}