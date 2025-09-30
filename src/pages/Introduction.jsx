import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircleOutline, ArrowForward } from "@mui/icons-material";
import StepNavigation from "../components/StepNavigation";

export default function Introduction() {
  return (
    <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, maxWidth: "max-content", mx: "auto" }}>
      <Typography
        variant="h1"
        sx={{ mb: 2, textAlign: "center" }}
      >
        Introduction à la recherche scientifique en santé
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
        La recherche scientifique en santé est une démarche systématique et
        organisée visant à produire de nouvelles connaissances ou à vérifier des
        hypothèses existantes. Elle constitue le socle de{" "}
        <strong>l’Evidence-Based Practice</strong>, essentielle pour améliorer la
        qualité des soins, développer de nouvelles méthodes et contribuer à la
        formation des professionnels de santé.
      </Typography>

      <StepNavigation />

      <Box component="section" sx={{ my: 4 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Pourquoi faire de la recherche en santé ?
        </Typography>
        <List>
          {[
            "Améliorer la qualité des soins et la prise en charge des patients",
            "Évaluer l’efficacité des interventions, techniques ou programmes",
            "Fournir des données factuelles aux décideurs et praticiens",
            "Développer l’innovation et renforcer la formation continue",
          ].map((text) => (
            <ListItem key={text} disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleOutline color="primary" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box component="section" sx={{ my: 4 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Les grandes phases du processus de recherche
        </Typography>
        <List>
          {[
            {
              phase: "Phase conceptuelle",
              desc: "identifier un problème de santé, définir les objectifs et hypothèses",
            },
            {
              phase: "Phase méthodologique",
              desc: "élaborer un protocole, choisir le design, la population et les instruments",
            },
            {
              phase: "Phase empirique",
              desc: "collecter les données sur le terrain conformément au protocole",
            },
            {
              phase: "Phase analytique",
              desc: "transformer les données brutes en résultats interprétables",
            },
            {
              phase: "Phase de diffusion",
              desc: "valoriser et partager les résultats (rapports, articles, congrès)",
            },
          ].map((item) => (
            <ListItem key={item.phase} disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <ArrowForward color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span>
                    <strong>{item.phase}</strong> : {item.desc}
                  </span>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box component="section" sx={{ my: 4 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Objectifs pédagogiques
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          À la fin de ce guide, vous serez capables de :
        </Typography>
        <List>
          {[
            "Utiliser les outils de recherche scientifique pour trouver et analyser des articles pertinents",
            "Définir des objectifs, variables et hypothèses dans un protocole de recherche",
            "Utiliser et interpréter les statistiques descriptives et inférentielles",
            <span>Rédiger un protocole et un article scientifique en suivant la structure <em>IMRaD</em></span>,
            "Diffuser vos résultats auprès de la communauté scientifique",
          ].map((text, index) => (
             <ListItem key={index} disableGutters>
               <ListItemIcon sx={{ minWidth: 32 }}>
                 <CheckCircleOutline color="primary" />
               </ListItemIcon>
               <ListItemText primary={text} />
             </ListItem>
          ))}
        </List>
      </Box>

      <Typography
        variant="body2"
        sx={{ mt: 4, fontStyle: "italic", textAlign: "center", color: "text.secondary" }}
      >
        « La recherche en santé est le moteur de l’innovation et le garant de
        pratiques cliniques fondées sur des preuves. »
      </Typography>
    </Paper>
  );
}
