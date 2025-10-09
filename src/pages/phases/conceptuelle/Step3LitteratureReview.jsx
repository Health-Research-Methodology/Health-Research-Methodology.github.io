import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Paper,
  Alert,
  AlertTitle,
  Grid,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { ArrowForward, Lightbulb, Search, CheckCircle, Cancel, LibraryBooks, Assessment } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step3LitteratureReview() {
  const steps = [
    'Définir la question de recherche',
    'Trouver les mots-clés',
    'Choisir les bases de données',
    'Appliquer des filtres',
    'Lire et trier',
    'Analyser les résultats',
    'Synthétiser'
  ];

  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase conceptuelle — Étape 3
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Revue de la littérature
      </Typography>

      <Alert severity="info" icon={<LibraryBooks />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        Savoir chercher, sélectionner, lire et analyser les articles scientifiques pertinents pour comprendre l'état actuel des connaissances sur votre sujet.
        <br /><br />
        La revue de la littérature vous permet de :
        <List dense sx={{ mt: 1 }}>
          <ListItem>
            <ListItemText primary="• Situer votre étude dans le contexte scientifique existant" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Identifier les lacunes ou contradictions dans les recherches précédentes" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Justifier votre problème de recherche et votre futur choix méthodologique" />
          </ListItem>
        </List>
        <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
          💬 En bref : avant de commencer une recherche, il faut savoir ce que les autres ont déjà découvert.
        </Typography>
      </Alert>

      <section aria-labelledby="definition-heading">
        <Typography id="definition-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📖 1. Qu'est-ce qu'une revue de littérature ?
        </Typography>
        
        <Typography paragraph>
          C'est une synthèse critique et organisée des études antérieures sur votre sujet de recherche.
          Elle ne consiste pas à empiler des résumés, mais à analyser, comparer et interpréter les résultats publiés.
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          Une bonne revue de littérature :
        </Typography>
        <List aria-label="Caractéristiques d'une bonne revue de littérature">
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Rassemble les données probantes issues d'études scientifiques" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Identifie les points communs, divergences et zones d'incertitude" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Met en évidence ce qu'on ne sait pas encore et où votre recherche peut apporter une contribution" />
          </ListItem>
        </List>

        <Paper elevation={2} sx={{ p: 3, my: 4, backgroundColor: "background.default" }}>
          <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
            💡 Exemple infirmier
          </Typography>
          <Typography paragraph>
            Si votre sujet porte sur la prévention des escarres, votre revue de littérature décrira :
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="• les méthodes préventives déjà testées," />
            </ListItem>
            <ListItem>
              <ListItemText primary="• leur efficacité (ou non)," />
            </ListItem>
            <ListItem>
              <ListItemText primary="• et les populations sur lesquelles elles ont été étudiées." />
            </ListItem>
          </List>
          <Typography paragraph sx={{ mt: 2 }}>
            Vous pourrez ainsi conclure :<br />
            <em>"Peu d'études ont évalué l'usage des matelas à air alterné chez les patients gériatriques à domicile."</em>
            <br />→ C'est votre niche scientifique.
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="steps-heading">
        <Typography id="steps-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🔍 2. Étapes de la revue de littérature
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Étape</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
                <TableCell><strong>Exemple pratique</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1️⃣ Définir la question de recherche</TableCell>
                <TableCell>Utiliser le cadre PICOT pour orienter la recherche</TableCell>
                <TableCell>P : personnes âgées ; I : exercices d'équilibre ; C : soins habituels ; O : chutes ; T : 6 mois</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2️⃣ Trouver les mots-clés</TableCell>
                <TableCell>Identifier les termes MeSH (Medical Subject Headings) et synonymes</TableCell>
                <TableCell>"Falls", "Balance training", "Elderly", "Nursing home"</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3️⃣ Choisir les bases de données</TableCell>
                <TableCell>PubMed, Google Scholar, CINAHL, Cairn, ScienceDirect, etc.</TableCell>
                <TableCell>Rechercher : "fall prevention elderly balance exercises"</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4️⃣ Appliquer des filtres</TableCell>
                <TableCell>Période (≤ 10 ans), langue, type d'étude (essai clinique, revue systématique)</TableCell>
                <TableCell>Filtrer par : 2015–2025, français/anglais, human, nursing</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5️⃣ Lire et trier</TableCell>
                <TableCell>Lire le titre, le résumé, puis la méthodologie pour juger la pertinence</TableCell>
                <TableCell>Écarter les études hors contexte (ex. : études sur enfants)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6️⃣ Analyser les résultats</TableCell>
                <TableCell>Noter les éléments clés : objectifs, échantillon, résultats, limites</TableCell>
                <TableCell>"L'étude de Smith (2020) montre une baisse de 25 % des chutes après 8 semaines d'exercices."</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>7️⃣ Synthétiser</TableCell>
                <TableCell>Regrouper les résultats en thèmes (efficacité, limites, conditions, etc.)</TableCell>
                <TableCell>Thème 1 : exercices physiques ; Thème 2 : éducation des patients</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={{ mt: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                Référence: « Schardt, Connie, et al. “Utilization of the PICO framework to improve searching PubMed for clinical questions.” BMC medical informatics and decision making 7 (2007): 1-6. »<br />
            </Typography> 
      </section>
      <section aria-labelledby="reading-heading">
        <Typography id="reading-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧠 3. Lire un article scientifique efficacement (selon ESNO, 2023)
        </Typography>

        <List aria-label="Méthode de lecture efficace d'articles scientifiques">
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary="🔹 Lis d'abord le titre et le résumé (abstract)"
              secondary="→ cela te dit si l'étude est pertinente."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary="🔹 Analyse ensuite la structure IMRAD :"
              secondary={
                <Box component="div" sx={{ mt: 1 }}>
                  <Typography variant="body2">• I – Introduction : Contexte et justification de l'étude.</Typography>
                  <Typography variant="body2">• M – Méthodes : Type d'étude, population, outils, biais.</Typography>
                  <Typography variant="body2">• R – Résultats : Données principales (graphiques, tableaux).</Typography>
                  <Typography variant="body2">• A/D – Analyse et Discussion : Interprétation, comparaison avec d'autres études.</Typography>
                </Box>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary="🔹 Enfin, vérifie :"
              secondary={
                <Box component="div" sx={{ mt: 1 }}>
                  <Typography variant="body2">• La validité (plan d'étude, taille de l'échantillon).</Typography>
                  <Typography variant="body2">• Les biais possibles (financement, échantillon non représentatif).</Typography>
                  <Typography variant="body2">• Les limites reconnues par les auteurs.</Typography>
                </Box>
              }
            />
          </ListItem>
        </List>

        <Alert severity="success" sx={{ my: 3 }}>
          <AlertTitle>🩺 Astuce infirmière</AlertTitle>
          Privilégiez les revues systématiques et méta-analyses, qui représentent le plus haut niveau de preuve scientifique (pyramide de l'évidence).
        </Alert>
      </section>

      <section aria-labelledby="exercise-heading">
        <Typography id="exercise-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ✏️ 4. Exercice : "Je sélectionne les bonnes sources"
        </Typography>

        <Typography paragraph>
          <strong>🎮 Exercice :</strong> Lis ces titres et identifie ceux qui conviennent pour une revue de littérature sur la prévention des chutes :
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Titre d'article</strong></TableCell>
                <TableCell><strong>Pertinent ?</strong></TableCell>
                <TableCell><strong>Pourquoi</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>A. L'impact des programmes de renforcement musculaire sur les chutes chez les seniors</TableCell>
                <TableCell><Chip icon={<CheckCircle />} label="✅" color="success" size="small" /></TableCell>
                <TableCell>Sujet directement lié à la prévention des chutes.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>B. Les troubles du sommeil chez les adolescents</TableCell>
                <TableCell><Chip icon={<Cancel />} label="❌" color="error" size="small" /></TableCell>
                <TableCell>Hors sujet.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>C. Effet de l'activité physique sur la mobilité des personnes âgées fragiles</TableCell>
                <TableCell><Chip icon={<CheckCircle />} label="✅" color="success" size="small" /></TableCell>
                <TableCell>Sujet pertinent et complémentaire.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>D. Méthodes d'enseignement de la marche chez les enfants handicapés</TableCell>
                <TableCell><Chip icon={<Cancel />} label="❌" color="error" size="small" /></TableCell>
                <TableCell>Population non concernée.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Paper elevation={1} sx={{ p: 3, backgroundColor: "info.light", color: "info.contrastText" }}>
          <Typography variant="h6" gutterBottom>
            🧩 Activité complémentaire
          </Typography>
          <Typography>
            Associez chaque élément PICOT avec les bons mots-clés de recherche :
            <br />• P → Elderly, Seniors
            <br />• I → Exercise program, Balance training
            <br />• C → Standard care, Control group
            <br />• O → Falls, Fall prevention
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="synthesis-heading">
        <Typography id="synthesis-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📋 5. Synthèse : Comment présenter votre revue de littérature
        </Typography>

        <Typography paragraph>
          Une fois vos sources sélectionnées et analysées, rédigez une revue structurée en trois parties :
        </Typography>

        <List aria-label="Structure de présentation de la revue de littérature">
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary={<strong>Introduction</strong>}
              secondary="présente votre sujet et la justification de votre recherche."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary={<strong>Corps du texte</strong>}
              secondary="regroupe les études par thèmes (ou chronologiquement)."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary={<strong>Conclusion</strong>}
              secondary="résume les tendances générales, les contradictions et la lacune identifiée que votre étude comblera."
            />
          </ListItem>
        </List>

        <Paper elevation={2} sx={{ p: 3, my: 4, backgroundColor: "background.default" }}>
          <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
            💬 Exemple de conclusion
          </Typography>
          <Typography paragraph>
            <em>"Les études montrent que les exercices d'équilibre réduisent le risque de chutes, mais la plupart concernent les seniors en institution. Peu de données existent pour les personnes âgées vivant à domicile, justifiant une étude spécifique."</em>
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="guidelines-heading">
        <Typography id="guidelines-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧱 6. À retenir
        </Typography>

        <Grid container spacing={3} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%', backgroundColor: "success.light" }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold', color: "success.contrastText" }}>
                Bonnes pratiques ✅
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Rechercher dans des bases de données fiables (PubMed, CINAHL, Cairn)" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Lire les abstracts avant de télécharger les articles" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Analyser les résultats et limites des études" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Citer correctement les sources (APA ou Vancouver)" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Identifier la lacune scientifique" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%', backgroundColor: "error.light" }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold', color: "error.contrastText" }}>
                À éviter ❌
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Utiliser uniquement Google ou Wikipédia" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Collecter trop d'articles sans tri" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Copier les conclusions sans esprit critique" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Oublier la bibliographie ou citer de mémoire" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Faire une simple description sans analyse" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>🚀 Prochaine étape : Étape 4 – Identifier les variables clés et le design de recherche</AlertTitle>
        Grâce à votre revue de littérature, vous saurez :
        <br />• Quelles variables (concepts mesurables) sont les plus importantes.
        <br />• Quels types d'études ont été utilisés auparavant.
        <br />• Et vous pourrez maintenant concevoir votre propre design de recherche.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/formulate-problem" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            PRÉCÉDENT : Formuler le problème de recherche
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/variables-design" sx={{ display: 'flex', alignItems: 'center' }}>
            SUIVANT : Variables et design de recherche
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
