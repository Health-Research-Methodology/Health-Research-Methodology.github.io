import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Alert,
  AlertTitle,
  Link as MuiLink,
} from "@mui/material";
import {
  CheckCircle,
  Cancel,
  Gavel,
  Group,
  Public,
  TrendingUp,
  ArrowForward,
  Psychology,
  FactCheck,
  VerifiedUser,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function PhilosophyResearch() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Philosophy of Research
      </Typography>
      <Typography paragraph sx={{ color: "text.secondary" }}>
        La recherche scientifique exige des preuves objectives pour soutenir ses conclusions. Une recherche valide doit reposer sur des données observables, vérifiables et reproductibles.
      </Typography>
      <Typography paragraph>
        Au-delà de la méthode, la recherche repose sur une vision épistémologique : comprendre le monde, tester des hypothèses et générer des connaissances utiles. En santé, cela implique de concilier rigueur scientifique et respect des patients.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        Qu’est-ce qui peut être considéré comme preuve ?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Alert severity="error" icon={<Cancel />}>
            <AlertTitle>Autorité</AlertTitle>
            « Selon le Professeur X... » - L'avis d'un expert n'est pas une preuve en soi.
          </Alert>
        </Grid>
        <Grid item xs={12} md={6}>
          <Alert severity="error" icon={<Cancel />}>
            <AlertTitle>Tradition</AlertTitle>
            « Dans notre communauté... » - Les traditions doivent être validées scientifiquement.
          </Alert>
        </Grid>
        <Grid item xs={12} md={6}>
          <Alert severity="error" icon={<Cancel />}>
            <AlertTitle>Bon sens</AlertTitle>
            « Réduire son alimentation... » - Le bon sens peut être trompeur.
          </Alert>
        </Grid>
        <Grid item xs={12} md={6}>
          <Alert severity="success" icon={<CheckCircle />}>
            <AlertTitle>Observation</AlertTitle>
            « Dans une étude... » - Seule l'observation systématique et contrôlée fournit des preuves.
          </Alert>
        </Grid>
      </Grid>

      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        Principes fondamentaux de la recherche scientifique
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon><FactCheck color="primary" /></ListItemIcon>
          <ListItemText primary="Empirique" secondary="Les réponses sont trouvées par des observations systématiques, directes ou indirectes." />
        </ListItem>
        <ListItem>
          <ListItemIcon><VerifiedUser color="primary" /></ListItemIcon>
          <ListItemText primary="Vérifiable" secondary="Les résultats doivent être reproductibles par d’autres chercheurs, avec des méthodes clairement décrites." />
        </ListItem>
        <ListItem>
          <ListItemIcon><Gavel color="primary" /></ListItemIcon>
          <ListItemText primary="Contrôlée" secondary="Limiter les biais, réduire les erreurs et écarter les explications alternatives." />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        Fondements épistémologiques
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={<strong>Déduction :</strong>} secondary="Aller du général au particulier (ex. tester une théorie générale sur un patient)." />
        </ListItem>
        <ListItem>
          <ListItemText primary={<strong>Induction :</strong>} secondary="Partir du particulier vers le général (ex. observer un phénomène et formuler une règle)." />
        </ListItem>
        <ListItem>
          <ListItemText primary={<strong>Hasard et probabilité :</strong>} secondary="Accepter l’incertitude et quantifier le risque (ex. p-value, IC95%)." />
        </ListItem>
        <ListItem>
          <ListItemText primary={<strong>Valeurs :</strong>} secondary="Adopter la rigueur, la transparence et la reproductibilité." />
        </ListItem>
      </List>

      <Paper elevation={2} sx={{ p: 3, my: 4 }}>
        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
          Planification : la clé du succès
        </Typography>
        <Typography paragraph>
          Une recherche sérieuse se planifie bien avant la collecte pour garantir des données fiables. Cela inclut de définir le problème, choisir les instruments, et prévoir la logistique et l'éthique.
        </Typography>
      </Paper>

      <Alert severity="info" icon={<Psychology />} sx={{ my: 3 }}>
        <AlertTitle>Conclusion</AlertTitle>
        La philosophie de la recherche en santé combine preuves empiriques, vision épistémologique, rigueur et éthique. Seule une recherche bien planifiée peut améliorer la qualité des soins et les politiques de santé.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/overview-research" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            Return to Steps : Overview of Scientific Research
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/ethics-research" sx={{ display: 'flex', alignItems: 'center' }}>
            NEXT : Ethical Considerations of Conducting Research
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
