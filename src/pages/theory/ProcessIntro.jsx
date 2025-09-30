import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function ProcessIntro() {
  return (
    <Box component="section" sx={{ maxWidth: "max-content", mx: "auto", p: 2 }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Introduction au processus de recherche
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Le processus de recherche scientifique suit une suite logique d’étapes
        permettant de passer d’une idée à une conclusion validée. En santé, il
        s’organise autour de cinq grandes phases.
      </Typography>
      <List>
        {[
          "Phase conceptuelle : identification du problème et formulation des hypothèses",
          "Phase méthodologique : élaboration du protocole",
          "Phase empirique : collecte des données",
          "Phase analytique : traitement et interprétation",
          "Phase de diffusion : communication des résultats",
        ].map((text) => (
          <ListItem key={text} disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <ArrowForward color="secondary" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
