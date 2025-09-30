import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Link as MuiLink,
  Alert,
  AlertTitle,
  Divider,
} from "@mui/material";
import { ArrowForward, QuestionAnswer, Rule, Science } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function ProcessIntro() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Introduction to the Research Process
      </Typography>
      <Typography paragraph sx={{ color: "text.secondary" }}>
        La recherche scientifique en santé suit une suite logique d’étapes qui
        permettent de passer d’une idée initiale à une conclusion validée.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, my: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Du questionnement à la planification
        </Typography>
        <Typography paragraph>
          Un chercheur peut partir de questions telles que :
        </Typography>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <QuestionAnswer fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="« Ce traitement améliore-t-il la qualité de vie des patients ? »" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <QuestionAnswer fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="« Cette campagne de prévention réduit-elle réellement la consommation de tabac ? »" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <QuestionAnswer fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="« Quels sont les facteurs sociaux qui influencent l’adhésion au traitement du VIH ? »" />
          </ListItem>
        </List>
        <Typography paragraph sx={{ mt: 2 }}>
          À partir de là, il doit soigneusement planifier son projet : design de
          l’étude, mesures des variables, et méthodes d’échantillonnage.
        </Typography>
      </Paper>

      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        Les cinq grandes phases
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={<strong>1. Phase conceptuelle</strong>}
            secondary="Identifier le problème, formuler les objectifs et hypothèses, et justifier la pertinence de l’étude."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<strong>2. Phase méthodologique</strong>}
            secondary="Élaborer le protocole, définir les variables, le type d'étude, la population, les instruments et l'éthique."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<strong>3. Phase empirique</strong>}
            secondary="Mettre en œuvre le protocole sur le terrain, collecter les données avec rigueur et contrôler la qualité."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<strong>4. Phase analytique</strong>}
            secondary="Traiter les données, réaliser les analyses, interpréter les résultats et identifier les limites."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<strong>5. Phase de diffusion</strong>}
            secondary="Rédiger le rapport/article, suivre les standards (IMRaD), et présenter les résultats pour valoriser la recherche."
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        Les étapes intermédiaires (détail pratique)
      </Typography>
      <List>
        {[
          "Formulation du problème : Qu’étudier et pourquoi ?",
          "Revue de littérature : Quelles connaissances existent déjà ?",
          "Objectifs : Que veut-on démontrer ou vérifier ?",
          "Méthodologie : Comment collecter les données ?",
          "Plan de travail : Qui fait quoi, et quand ?",
          "Budget : Quelles ressources sont nécessaires ?",
          "Administration et valorisation : Comment assurer le suivi et la diffusion ?",
          "Résumé de la proposition : Comment présenter le projet ?",
        ].map((text, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Rule color="action" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Alert severity="info" icon={<Science />} sx={{ my: 4 }}>
        <AlertTitle>Conclusion</AlertTitle>
        Chaque étape exige temps et rigueur. La recherche en santé est une
        entreprise exigeante mais passionnante qui transforme une idée en
        connaissances validées, capables d’améliorer la pratique clinique et la
        santé publique.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink
            component={NavLink}
            to="/overview-research"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ArrowForward sx={{ transform: "rotate(180deg)", mr: 1 }} />
            Return to Steps : Overview of Scientific Research
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink
            component={NavLink}
            to="/writing-overview"
            sx={{ display: "flex", alignItems: "center" }}
          >
            NEXT : Overview of Writing a Research Study
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
