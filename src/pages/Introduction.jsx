import StepNavigation from "../components/StepNavigation";
import { Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';

export default function Introduction() {
  return (
    <Paper elevation={0} sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Introduction à la recherche scientifique en santé
      </Typography>

      <Typography paragraph>
        La recherche scientifique en santé est une démarche systématique et
        organisée visant à produire de nouvelles connaissances ou à vérifier des
        hypothèses existantes. Elle constitue le socle de{" "}
        <strong>l’Evidence-Based Practice</strong>, essentielle pour améliorer la
        qualité des soins, développer de nouvelles méthodes et contribuer à la
        formation des professionnels de santé.
      </Typography>
      
      <StepNavigation />

      <Box component="section" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pourquoi faire de la recherche en santé ?
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Améliorer la qualité des soins et la prise en charge des patients" />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Évaluer l’efficacité des interventions, techniques ou programmes" />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Fournir des données factuelles aux décideurs et praticiens" />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Développer l’innovation et renforcer la formation continue" />
          </ListItem>
        </List>
      </Box>

      <Box component="section" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Les grandes phases du processus de recherche
        </Typography>
        <List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary={<span><strong>Phase conceptuelle</strong> : identifier un problème de santé, définir les objectifs et hypothèses</span>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary={<span><strong>Phase méthodologique</strong> : élaborer un protocole, choisir le design, la population et les instruments</span>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary={<span><strong>Phase empirique</strong> : collecter les données sur le terrain conformément au protocole</span>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary={<span><strong>Phase analytique</strong> : transformer les données brutes en résultats interprétables</span>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary={<span><strong>Phase de diffusion</strong> : valoriser et partager les résultats (rapports, articles, congrès)</span>} />
          </ListItem>
        </List>
      </Box>

      <Box component="section" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Objectifs pédagogiques
        </Typography>
        <Typography paragraph>À la fin de ce guide, vous serez capables de :</Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Utiliser les outils de recherche scientifique pour trouver et analyser des articles pertinents" />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Définir des objectifs, variables et hypothèses dans un protocole de recherche" />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Utiliser et interpréter les statistiques descriptives et inférentielles" />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary={<span>Rédiger un protocole et un article scientifique en suivant la structure <em>IMRaD</em></span>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Diffuser vos résultats auprès de la communauté scientifique" />
          </ListItem>
        </List>
      </Box>

      <Typography paragraph sx={{ mt: 4, fontStyle: 'italic', color: 'text.secondary' }}>
        « La recherche en santé est le moteur de l’innovation et le garant de
        pratiques cliniques fondées sur des preuves. »
      </Typography>
    </Paper>
  );
}
