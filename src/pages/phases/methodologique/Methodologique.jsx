import { Typography, Paper, List, ListItem, ListItemText, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

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
          <ListItemText 
            primary={<Link component={NavLink} to="/methodologique/type-etude">Type d'étude et plan de recherche</Link>}
            secondary="Choisir le plan de recherche approprié : observationnel (cohorte, cas-témoins), expérimental (essai contrôlé randomisé), qualitatif ou mixte." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/methodologique/population-echantillon">Population, échantillonnage et taille d'échantillon</Link>}
            secondary="Définir la population cible, les critères d'inclusion/exclusion, la méthode d'échantillonnage et calculer la taille d'échantillon." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Instruments de mesure"
            secondary="Assurer la validité et la fiabilité des instruments, et réaliser un pré-test ou une étude pilote." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Procédures de collecte et de qualité"
            secondary="Détailler le plan de collecte des données et les mesures d'assurance qualité." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Considérations éthiques"
            secondary="Obtenir l'approbation d'un comité d'éthique, préparer les formulaires de consentement et garantir la confidentialité des données." 
          />
        </ListItem>
      </List>
    </Paper>
  );
}