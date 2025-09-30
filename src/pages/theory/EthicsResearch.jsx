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
  Divider,
} from "@mui/material";
import {
  Gavel,
  Group,
  Public,
  ArrowForward,
  Warning,
  CheckCircle,
  VerifiedUser,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function EthicsResearch() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Ethical Considerations in Health Research
      </Typography>
      <Typography paragraph sx={{ color: "text.secondary" }}>
        Les chercheurs en santé doivent respecter les principes éthiques du bien et du mal. L’OMS, la Déclaration d’Helsinki, et les comités nationaux fixent des standards que tout projet doit suivre.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, my: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Trois domaines principaux à considérer
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><Gavel color="primary" /></ListItemIcon>
            <ListItemText primary="Collecte et analyse des données" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Group color="primary" /></ListItemIcon>
            <ListItemText primary="Traitement des participants" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Public color="primary" /></ListItemIcon>
            <ListItemText primary="Responsabilité envers la société" />
          </ListItem>
        </List>
      </Paper>

      {/* 1. Data Collection */}
      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        1. Collecte et analyse des données
      </Typography>
      <Typography paragraph>
        La recherche en santé influence directement la pratique médicale. Une falsification peut avoir des conséquences graves.
      </Typography>
      <Alert severity="error" sx={{ my: 2 }}>
        <AlertTitle>Pratiques non éthiques</AlertTitle>
        <List dense>
          <ListItem><ListItemText primary={<strong>Fabrication :</strong>} secondary="Inventer des résultats ou compléter des réponses manquantes." /></ListItem>
          <ListItem><ListItemText primary={<strong>Falsification :</strong>} secondary="Annoncer plus de questionnaires que collectés, exclure des patients qui contredisent l'hypothèse, ou utiliser de mauvaises méthodes statistiques." /></ListItem>
        </List>
      </Alert>
      <Alert severity="success" sx={{ my: 2 }}>
        <AlertTitle>Pratiques acceptées</AlertTitle>
        <List dense>
          <ListItem><ListItemText primary="Utiliser des méthodes reconnues pour traiter les données manquantes." /></ListItem>
          <ListItem><ListItemText primary="Exclure un participant uniquement si le protocole n’a pas été respecté." /></ListItem>
          <ListItem><ListItemText primary="Toujours rapporter le nombre exact de participants et les raisons des exclusions." /></ListItem>
        </List>
      </Alert>

      <Divider sx={{ my: 4 }} />

      {/* 2. Treatment of Participants */}
      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        2. Traitement des participants
      </Typography>
      <Typography paragraph>
        La recherche impliquant des êtres humains exige de protéger leur dignité et leurs droits.
      </Typography>
      <List>
        {[
          { icon: <CheckCircle color="action" />, primary: "Consentement libre et éclairé", secondary: "Les participants doivent tout comprendre et pouvoir se retirer à tout moment." },
          { icon: <VerifiedUser color="action" />, primary: "Confidentialité et anonymisation", secondary: "Les données doivent être protégées et codées." },
          { icon: <Warning color="action" />, primary: "Équilibre bénéfice/risque", secondary: "Les bénéfices attendus doivent dépasser les risques potentiels." },
          { icon: <Gavel color="action" />, primary: "Comité d’éthique", secondary: "Tout protocole doit être validé par un comité indépendant." },
        ].map(item => (
          <ListItem key={item.primary}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.primary} secondary={item.secondary} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 4 }} />

      {/* 3. Responsibility to Society */}
      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        3. Responsabilité envers la société
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Utilité sociale" secondary="Les études doivent répondre à des problèmes réels de santé publique." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Justice et équité" secondary="L’accès aux bénéfices de la recherche doit être équitable." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Transparence et diffusion" secondary="Les résultats doivent être communiqués honnêtement, même s’ils sont négatifs." />
        </ListItem>
      </List>

      <Alert severity="info" sx={{ my: 4 }}>
        <AlertTitle>Conclusion</AlertTitle>
        Sans intégrité des données, la recherche est inutilisable. Sans respect des participants, elle perd sa légitimité. Sans responsabilité sociale, elle perd son sens.
        <Typography sx={{ mt: 1, fontWeight: 'bold' }}>
          Une recherche mal conduite peut nuire plus que l’absence de recherche.
        </Typography>
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/overview-research" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            Return to Steps : Overview of Scientific Research
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/process-intro" sx={{ display: 'flex', alignItems: 'center' }}>
            NEXT : Introduction to the Research Process
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
