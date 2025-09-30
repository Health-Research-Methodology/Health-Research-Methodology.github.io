import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Link as MuiLink,
  Alert,
  AlertTitle,
  Grid,
} from "@mui/material";
import { ArrowForward, Science, CheckCircleOutline } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function PurposeResearch() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Conducting Health Research
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Purpose of Health Research
      </Typography>

      <Typography paragraph>
        Chaque société et chaque professionnel de santé a ses propres croyances sur les meilleures pratiques de soins. Mais comment savoir si ces croyances sont justes ? Suffit-il qu’un expert affirme quelque chose pour que cela devienne vrai ? Ou que son expérience personnelle confirme une hypothèse ?
      </Typography>

      <Typography paragraph>
        Prenons un exemple : certains praticiens pensent que donner une information détaillée et répétée à un patient augmente son adhésion au traitement. D’autres estiment au contraire qu’une information trop abondante risque de décourager et de diminuer l’adhésion. Ces deux croyances sont opposées : laquelle est correcte ?
      </Typography>

      <Alert severity="info" icon={<Science />} sx={{ my: 3 }}>
        <AlertTitle>Le rôle de la recherche</AlertTitle>
        La recherche en santé apporte des réponses à ce type de questions. Elle utilise la méthode scientifique pour comparer différentes pratiques et produire des données fiables.
      </Alert>

      <Paper elevation={2} sx={{ p: 3, my: 4, backgroundColor: "background.default" }}>
        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
          Exemple concret
        </Typography>
        <Typography paragraph>
          Un protocole de recherche pourrait poser la question : L’adhésion au traitement est-elle meilleure chez les patients recevant une éducation thérapeutique intensive comparée à ceux recevant une information minimale ?
        </Typography>
        <List>
          <ListItem><ListItemText primary={<strong>Groupe 1 :</strong>} secondary="information détaillée et répétée" /></ListItem>
          <ListItem><ListItemText primary={<strong>Groupe 2 :</strong>} secondary="information minimale" /></ListItem>
          <ListItem><ListItemText primary={<strong>Groupe contrôle :</strong>} secondary="suivi standard sans intervention éducative spécifique" /></ListItem>
        </List>
        <Typography paragraph sx={{ mt: 2 }}>
          Après plusieurs semaines, les résultats (observance, mesures biologiques, satisfaction des patients) permettent de déterminer quelle approche est la plus efficace.
        </Typography>
      </Paper>

      <Typography variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
        Objectifs principaux de la recherche en santé
      </Typography>
      <Typography paragraph>
        La recherche en santé a pour finalité de développer de nouvelles connaissances pour améliorer la pratique clinique et la santé publique. Elle peut s’intéresser à :
      </Typography>
      <List>
        {[
          { title: "Prévention", desc: "Quelles interventions réduisent le mieux les comportements à risque ?" },
          { title: "Soins", desc: "Quels traitements sont les plus efficaces pour une pathologie donnée ?" },
          { title: "Diagnostic", desc: "Quelles techniques permettent de détecter plus tôt et plus précisément une maladie ?" },
          { title: "Organisation des services", desc: "Quels modèles de soins améliorent l’accès et l’équité ?" },
          { title: "Facteurs sociaux et comportementaux", desc: "Comment les habitudes de vie influencent-elles la santé ?" },
        ].map(item => (
          <ListItem key={item.title} alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary={<strong>{item.title}</strong>} secondary={item.desc} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
        Importance pour la pratique
      </Typography>
      <Typography paragraph>
        En collectant des données scientifiques sur ces questions, la recherche permet de :
      </Typography>
      <List>
        {[
          "Offrir des soins fondés sur des preuves (Evidence-Based Practice)",
          "Réduire les inégalités de santé",
          "Adapter les politiques de santé aux besoins réels de la population",
          "Développer des innovations thérapeutiques et organisationnelles",
          "Soutenir la formation continue des professionnels",
        ].map(text => (
          <ListItem key={text}>
            <ListItemIcon><CheckCircleOutline fontSize="small" color="success" /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Box sx={{ my: 4, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Exemple de recherche publiée</Typography>
        <Typography variant="body2" component="cite">
          Brika, M., Lucile, K., Sofiane, L., Grégoire, S., Alycia, T., Sophéa, V., & Play, M. C. (2025). Lien entre les facteurs anthropométriques et la puissance du membre inférieur chez le sujet sain: une étude descriptive. Kinésithérapie, la Revue.
        </Typography>
      </Box>

      <Typography variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
        Conclusion
      </Typography>
      <Typography paragraph>
        Quel que soit le type de recherche menée (clinique, épidémiologique, opérationnelle, qualitative), sa finalité est de produire des données fiables permettant d’améliorer les pratiques, d’élaborer des politiques de santé adaptées et de répondre aux besoins de la population.
      </Typography>
      
      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>Rigueur et intégrité</AlertTitle>
        Une recherche de qualité doit être conduite avec rigueur et intégrité : ne pas « couper les coins » pour aller plus vite, vérifier la validité des méthodes et la fiabilité des résultats, et interpréter les données avec prudence.
        <Typography sx={{ mt: 1, fontWeight: 'bold' }}>
          Une recherche mal conduite peut faire plus de mal qu’absence de recherche.
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
          <MuiLink component={NavLink} to="/philosophy-research" sx={{ display: 'flex', alignItems: 'center' }}>
            NEXT : Philosophy of Research
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
