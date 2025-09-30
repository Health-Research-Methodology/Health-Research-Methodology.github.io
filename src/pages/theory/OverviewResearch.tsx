import { Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';

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

      <Box sx={{ my: 4, textAlign: 'center' }}>
        <img 
          src="/ebp-model.png" 
          alt="Modèle de l'Evidence-Based Practice" 
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} 
        />
      </Box>
      
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

      <Typography variant="h2" component="h2" sx={{ mt: 4, fontSize: '1.75rem' }}>
        Fonctions de la recherche scientifique
      </Typography>
      <Typography paragraph>
        La recherche en santé remplit plusieurs fonctions essentielles pour faire progresser les connaissances et les pratiques :
      </Typography>
      <List>
        <ListItem>
          <ListItemText 
            primary={<strong>Description</strong>} 
            secondary="Identifier et décrire des phénomènes de santé, comme la prévalence d'une maladie dans une population." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary={<strong>Explication</strong>} 
            secondary="Comprendre les causes et les relations entre différents facteurs (ex: lien entre tabagisme et cancer du poumon)." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary={<strong>Prédiction</strong>} 
            secondary="Anticiper l'apparition ou l'évolution de problèmes de santé en identifiant des facteurs de risque." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary={<strong>Contrôle et Intervention</strong>} 
            secondary="Développer et évaluer des interventions (traitements, programmes de prévention) pour améliorer la santé." 
          />
        </ListItem>
      </List>
    </Paper>
  );
}
