import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function WritingOverview() {
  return (
    <Box component="section" sx={{ maxWidth: "max-content", mx: "auto", p: 2 }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Aperçu de la rédaction d’une étude
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Rédiger une étude scientifique implique de suivre une structure
        standardisée reconnue internationalement : le modèle{" "}
        <strong>IMRaD</strong>
        (Introduction, Méthodes, Résultats, Discussion).
      </Typography>
      <List>
        {[
          {
            primary: "Introduction",
            secondary: "problématique, objectifs, hypothèses",
          },
          {
            primary: "Méthodes",
            secondary: "design, population, instruments, collecte",
          },
          {
            primary: "Résultats",
            secondary: "analyses statistiques ou qualitatives",
          },
          {
            primary: "Discussion",
            secondary: "interprétation, limites, implications",
          },
          { primary: "Conclusion", secondary: "synthèse et perspectives" },
        ].map((item) => (
          <ListItem key={item.primary} disableGutters>
            <ListItemText
              primary={
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  {item.primary}
                </Typography>
              }
              secondary={item.secondary}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
