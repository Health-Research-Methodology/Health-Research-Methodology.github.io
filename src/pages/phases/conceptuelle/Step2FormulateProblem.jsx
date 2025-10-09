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
  Chip
} from '@mui/material';
import { ArrowForward, Lightbulb, Search, CheckCircle, Cancel, Warning } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step2FormulateProblem() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase conceptuelle — Étape 2
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Formuler le problème de recherche
      </Typography>

      <Alert severity="info" icon={<Lightbulb />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        Transformer une idée issue du brainstorming (étape 1) en un problème de recherche clair, précis et faisable, 
        centré sur un besoin réel de santé. C'est ici que votre idée devient une question scientifique à explorer.
      </Alert>

      <section aria-labelledby="understanding-heading">
        <Typography id="understanding-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📖 1. Comprendre ce qu'est un problème de recherche
        </Typography>
        
        <Typography paragraph>
          Un problème de recherche décrit une situation à améliorer ou à comprendre dans le domaine de la santé.
          Il naît d'un écart entre ce que l'on sait (littérature existante) et ce qu'on observe sur le terrain.
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 4, backgroundColor: "background.default" }}>
          <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
            💡 Exemple infirmier
          </Typography>
          <Typography paragraph>
            <strong>Idée issue du brainstorming :</strong> "Les patients ne respectent pas les régimes diabétiques."
          </Typography>
          <Typography paragraph>
            <strong>→ Problème de recherche formulé :</strong><br />
            "Quels sont les facteurs qui influencent l'observance du régime alimentaire chez les patients diabétiques suivis en ambulatoire ?"
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="steps-heading">
        <Typography id="steps-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🔍 2. Étapes pour formuler votre problème
        </Typography>

        <List aria-label="Étapes de formulation du problème de recherche">
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary={<strong>Choisissez 1 idée de votre liste de brainstorming.</strong>}
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary={<strong>Décrivez le contexte :</strong>}
              secondary="où et chez qui ce problème se manifeste-t-il ?"
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary={<strong>Identifiez la cause possible ou les questions non résolues.</strong>}
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary={<strong>Cherchez les informations déjà connues</strong>}
              secondary="(recherche rapide dans la littérature)."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary={<strong>Repérez la lacune :</strong>}
              secondary="que reste-t-il à comprendre ou à améliorer ?"
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText 
              primary={<strong>Rédigez un énoncé de problème clair, de préférence sous forme de question :</strong>}
              secondary="Comment… ? Pourquoi… ? Quel est l'effet de… sur… ?"
            />
          </ListItem>
        </List>

        <Typography variant="h6" component="h4" sx={{ mt: 4, mb: 2 }}>
          🧩 Exemples :
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><Search fontSize="small" color="success" /></ListItemIcon>
            <ListItemText primary="Pourquoi le taux d'infections urinaires reste-t-il élevé malgré les protocoles d'hygiène ?" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Search fontSize="small" color="success" /></ListItemIcon>
            <ListItemText primary="Quel est l'effet d'un programme de relaxation sur le stress professionnel des infirmiers ?" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Search fontSize="small" color="success" /></ListItemIcon>
            <ListItemText primary="Comment améliorer la communication entre soignants et familles en service de pédiatrie ?" />
          </ListItem>
        </List>
      </section>

      <section aria-labelledby="tool-heading">
        <Typography id="tool-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧠 3. Outil pratique : reformuler votre problème
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Étape</strong></TableCell>
                <TableCell><strong>Exemple</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Observation</TableCell>
                <TableCell>Les infirmiers semblent souvent stressés.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Analyse</TableCell>
                <TableCell>Le stress professionnel nuit à la qualité des soins.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Question de recherche</TableCell>
                <TableCell>Quels sont les facteurs organisationnels associés au stress des infirmiers en réanimation ?</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="success" sx={{ my: 3 }}>
          <AlertTitle>🔧 Astuce : utilisez le schéma QQOQCP</AlertTitle>
          <strong>Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?</strong><br />
          pour vous assurer que votre problème est bien défini.
        </Alert>
      </section>

      <section aria-labelledby="exercise-heading">
        <Typography id="exercise-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ✏️ 4. Exercice : Choisir le bon énoncé de problème
        </Typography>

        <Typography paragraph>
          <strong>🧩 Exercice :</strong> Sélectionnez la meilleure formulation parmi les propositions :
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Proposition</strong></TableCell>
                <TableCell><strong>Bonne formulation ?</strong></TableCell>
                <TableCell><strong>Pourquoi</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>A. Les chutes sont un problème fréquent chez les personnes âgées.</TableCell>
                <TableCell><Chip icon={<Cancel />} label="❌" color="error" size="small" /></TableCell>
                <TableCell>Trop vague, pas de question à explorer.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>B. Quels facteurs contribuent aux chutes chez les personnes âgées en unité de gériatrie ?</TableCell>
                <TableCell><Chip icon={<CheckCircle />} label="✅" color="success" size="small" /></TableCell>
                <TableCell>Spécifique, orienté vers une recherche possible.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>C. Les chutes sont liées à l'âge avancé.</TableCell>
                <TableCell><Chip icon={<Warning />} label="⚠️" color="warning" size="small" /></TableCell>
                <TableCell>Hypothèse non vérifiée, pas formulée comme un problème de recherche.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Paper elevation={1} sx={{ p: 3, backgroundColor: "info.light", color: "info.contrastText" }}>
          <Typography variant="h6" gutterBottom>
            💬 Mini-défi
          </Typography>
          <Typography>
            Reformulez votre propre idée (issue du brainstorming) en un énoncé de problème en 1 phrase claire.
            Assurez-vous qu'elle répond aux critères d'une bonne question de recherche.
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="guidelines-heading">
        <Typography id="guidelines-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧱 5. À retenir
        </Typography>

        <Grid container spacing={3} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%', backgroundColor: "success.light" }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold', color: "success.contrastText" }}>
                À faire ✅
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Définir un problème précis et faisable" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Identifier une lacune dans les connaissances" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Vérifier que la question est liée à la pratique" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="S'appuyer sur la littérature pour justifier l'intérêt" />
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
                  <ListItemText primary="Choisir un thème vague" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Copier un sujet déjà traité sans angle nouveau" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Formuler une question impossible à étudier" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Se fier uniquement à l'intuition" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>🚀 Prochaine étape</AlertTitle>
        Une fois le problème de recherche clairement défini, vous pourrez passer à la revue de la littérature (Étape 3) :
        <br />→ pour comprendre ce que les chercheurs ont déjà découvert sur votre sujet,
        <br />→ et situer votre propre recherche dans ce contexte.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/brainstorm" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            PRÉCÉDENT : Brainstorm des idées
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/literature-review" sx={{ display: 'flex', alignItems: 'center' }}>
            SUIVANT : Revue de la littérature
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
