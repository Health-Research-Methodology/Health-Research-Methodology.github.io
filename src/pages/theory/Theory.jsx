import { NavLink } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link as MuiLink,
} from "@mui/material";

const theoryLinks = [
  { path: "/overview-research", label: "Aperçu de la recherche scientifique" },
  { path: "/purpose-research", label: "Finalité de la recherche en santé" },
  { path: "/philosophy-research", label: "Philosophie de la recherche" },
  { path: "/ethics-research", label: "Considérations éthiques" },
  { path: "/process-intro", label: "Introduction au processus de recherche" },
  { path: "/writing-overview", label: "Aperçu de la rédaction d’une étude" },
  { path: "/fonctions-research", label: "Fonctions et niveaux de recherche" },
];

export default function Theory() {
  return (
    <Box component="section" sx={{ maxWidth: "max-content", mx: "auto", p: 2 }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Ressources théoriques
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Cette section regroupe les concepts de base nécessaires pour comprendre
        et pratiquer la recherche scientifique en santé. Vous pouvez parcourir
        chaque thème séparément.
      </Typography>

      <List>
        {theoryLinks.map((item) => (
          <ListItem key={item.path} disablePadding>
            <MuiLink
              component={NavLink}
              to={item.path}
              sx={{
                color: "primary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item.label}
            </MuiLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
