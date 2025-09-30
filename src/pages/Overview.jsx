import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import StepNavigation from "../components/StepNavigation";

export default function Overview() {
  return (
    <Box
      component="section"
      aria-labelledby="overview-title"
      sx={{ maxWidth: "max-content", mx: "auto", px: 2, py: 4 }}
    >
      <Typography
        variant="h1"
        id="overview-title"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Aperçu du processus de recherche en santé
      </Typography>

      {/* Table des matières */}
      <StepNavigation />

      <Typography variant="body1" sx={{ mb: 4, mt: 4 }}>
        Le processus de recherche scientifique en santé suit une logique en{" "}
        <strong>cinq grandes phases</strong>. Chaque phase joue un rôle essentiel
        pour garantir la rigueur, la validité et la diffusion des résultats.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          {
            title: "1. Conceptuelle",
            description:
              "Identification du problème de santé, formulation des objectifs, variables et hypothèses.",
          },
          {
            title: "2. Méthodologique",
            description:
              "Élaboration du protocole : type d’étude, population, instruments, éthique et plan logistique.",
          },
          {
            title: "3. Empirique",
            description:
              "Mise en œuvre sur le terrain : recrutement, collecte de données, suivi qualité et traçabilité.",
          },
          {
            title: "4. Analytique",
            description:
              "Préparation, analyse statistique et qualitative des données, interprétation et discussion.",
          },
        ].map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h2" sx={{ mb: 1.5, fontSize: "1.5rem" }}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h2" sx={{ mb: 1.5, fontSize: "1.5rem" }}>
              5. Diffusion
            </Typography>
            <Typography variant="body2">
              Rédaction scientifique (IMRaD), présentation des résultats,
              publications, posters et valorisation dans la pratique.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h2" sx={{ mb: 2, fontSize: "1.8rem" }}>
          Objectif général du guide
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Permettre aux étudiants et professionnels de santé de{" "}
          <strong>
            concevoir, réaliser, analyser et diffuser un projet de recherche
          </strong>{" "}
          de manière rigoureuse, éthique et accessible.
        </Typography>

        <Typography variant="h2" sx={{ mb: 2, fontSize: "1.8rem" }}>
          Objectifs spécifiques
        </Typography>
        <List>
          {[
            "Utiliser les bases de données pour rechercher des articles",
            "Rédiger des références bibliographiques selon les normes",
            "Définir les concepts de base en statistique et en épidémiologie",
            "Mettre en œuvre un protocole de recherche sur le terrain",
            "Analyser et interpréter les résultats avec un esprit critique",
            "Diffuser les résultats auprès de la communauté scientifique",
          ].map((text, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleOutline color="primary" />
              </ListItemIcon>
              <Typography variant="body1">{text}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
