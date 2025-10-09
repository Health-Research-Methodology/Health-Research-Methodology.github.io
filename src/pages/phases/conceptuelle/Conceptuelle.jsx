import { Typography, Paper, List, ListItem, ListItemText, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

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
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/brainstorm">Brainstorm des idées de recherche</Link>}
            secondary="Identifier un problème de santé pertinent et générer des idées" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/formulate-problem">Formuler le problème de recherche</Link>}
            secondary="Transformer une idée en problème de recherche clair et précis" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/literature-review">Revue de la littérature</Link>}
            secondary="Analyser les études existantes et identifier les lacunes scientifiques" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/variables-design">Variables et design de recherche</Link>}
            secondary="Identifier les variables clés et choisir le design de recherche approprié" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/hypotheses-model">Hypothèses et modèle conceptuel</Link>}
            secondary="Formuler les hypothèses de recherche et construire le modèle conceptuel" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/synthisis">Synthèse : Objectifs, questions et hypothèses</Link>}
            secondary="Formaliser les objectifs de recherche, les questions et les hypothèses finales" 
          />
        </ListItem>
        
       
      </List>
    </Paper>
  );
}