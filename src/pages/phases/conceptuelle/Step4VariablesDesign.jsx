import React, { useState } from 'react';
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
  Card,
  CardContent,
  Button,
  Collapse
} from '@mui/material';
import { ArrowForward, Science, Assessment, CheckCircle, Cancel, Psychology, Timeline } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step4VariablesDesign() {
  const [showExercise1Answers, setShowExercise1Answers] = useState(false);
  const [showExercise2Answers, setShowExercise2Answers] = useState(false);

  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase conceptuelle — Étape 4
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Identifier les variables clés et le design de recherche
      </Typography>

      <Alert severity="info" icon={<Science />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        Apprendre à :
        <List dense sx={{ mt: 1 }}>
          <ListItem>
            <ListItemText primary="• Identifier les variables clés de ta recherche (ce que tu vas observer, mesurer ou comparer)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Choisir un design de recherche (le plan logique qui permettra de répondre à ta question de recherche)" />
          </ListItem>
        </List>
        <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
          💬 C'est l'étape où ton idée devient une étude structurée :
          <br />tu passes du "quoi" (problème) et du "pourquoi" (revue de littérature) au "comment" (variables et design).
        </Typography>
      </Alert>

      <section aria-labelledby="variables-heading">
        <Typography id="variables-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📖 1. Qu'est-ce qu'une variable ?
        </Typography>
        
        <Typography paragraph>
          Une variable est un élément mesurable ou observable qui varie d'un individu à l'autre dans ton étude.
          Les variables traduisent les concepts issus de ta phase de conceptualisation en données concrètes à recueillir.
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          🩺 Types de variables (selon OMS, 2003 & ESNO, 2023)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Définition</strong></TableCell>
                <TableCell><strong>Exemple (prévention des chutes)</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Variable indépendante</TableCell>
                <TableCell>Facteur étudié, que le chercheur contrôle ou observe pour en voir les effets.</TableCell>
                <TableCell>Programme d'exercices d'équilibre</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Variable dépendante</TableCell>
                <TableCell>Résultat ou effet attendu du facteur étudié.</TableCell>
                <TableCell>Nombre de chutes en 6 mois</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Variable de confusion</TableCell>
                <TableCell>Facteurs extérieurs pouvant influencer le résultat.</TableCell>
                <TableCell>Âge, état de santé, médicaments</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Variable de contrôle</TableCell>
                <TableCell>Facteurs maintenus constants pour limiter le biais.</TableCell>
                <TableCell>Lieu (même unité), protocole identique</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="success" sx={{ my: 3 }}>
          <AlertTitle>📌 Astuce</AlertTitle>
          Chaque flèche de ton futur modèle conceptuel correspond à une relation entre ces variables.
        </Alert>
      </section>

      <section aria-labelledby="picot-variables-heading">
        <Typography id="picot-variables-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧠 2. Identifier tes variables à partir de ta question PICOT
        </Typography>

        <Typography paragraph>
          Ta question PICOT (vue à l'étape 2) t'aide directement à repérer les variables à étudier.
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Élément PICOT</strong></TableCell>
                <TableCell><strong>Type de variable correspondante</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>P (Population)</TableCell>
                <TableCell>Variable descriptive (âge, sexe, pathologie, etc.)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>I (Intervention)</TableCell>
                <TableCell>Variable indépendante</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>C (Comparaison)</TableCell>
                <TableCell>Condition témoin / groupe contrôle</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>O (Outcome/Résultat)</TableCell>
                <TableCell>Variable dépendante</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>T (Temps ou type d'étude)</TableCell>
                <TableCell>Variable temporelle (durée, suivi, avant-après, etc.)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Paper elevation={2} sx={{ p: 3, my: 4, backgroundColor: "background.default" }}>
          <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
            💡 Exemple
          </Typography>
          <Typography paragraph sx={{ fontStyle: 'italic' }}>
            "Chez les personnes âgées (P), un programme d'exercices d'équilibre (I), comparé à l'absence d'intervention (C), 
            réduit-il le nombre de chutes (O) sur 6 mois (T) ?"
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Variables identifiées :</Typography>
          <List dense>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Indépendante → programme d'exercices" />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Dépendante → nombre de chutes" />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Confondantes → âge, état de santé, type de sol, etc." />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Temporelle → durée du suivi : 6 mois" />
            </ListItem>
          </List>
        </Paper>
      </section>

      <section aria-labelledby="operational-definition-heading">
        <Typography id="operational-definition-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📊 3. Définir opérationnellement chaque variable
        </Typography>

        <Typography paragraph>
          Chaque concept doit être défini de façon mesurable et vérifiable, pour assurer la validité et la fiabilité de ta recherche.
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Concept</strong></TableCell>
                <TableCell><strong>Définition théorique</strong></TableCell>
                <TableCell><strong>Définition opérationnelle</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Équilibre</TableCell>
                <TableCell>Capacité à maintenir une posture stable</TableCell>
                <TableCell>Score au test de Tinetti</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Chute</TableCell>
                <TableCell>Perte d'équilibre involontaire entraînant un contact avec le sol</TableCell>
                <TableCell>Nombre de chutes signalées par le patient sur 6 mois</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Adhérence au programme</TableCell>
                <TableCell>Participation active aux séances prévues</TableCell>
                <TableCell>% de séances effectuées / prévues</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="warning" sx={{ my: 3 }}>
          <AlertTitle>💬 Cette étape est cruciale</AlertTitle>
          C'est ici que tu assures la mesurabilité de tes concepts, en choisissant des instruments valides 
          (questionnaires, grilles, tests cliniques, etc.).
        </Alert>
      </section>

      <section aria-labelledby="research-design-heading">
        <Typography id="research-design-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ⚙️ 4. Choisir le design de recherche adapté
        </Typography>

        <Typography paragraph>
          Le design de recherche est le plan général qui détermine comment tu vas tester la relation entre tes variables.
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          🔹 Types de design courants en santé (OMS, Chap. 2 et 4)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Catégorie</strong></TableCell>
                <TableCell><strong>Type de design</strong></TableCell>
                <TableCell><strong>Quand l'utiliser</strong></TableCell>
                <TableCell><strong>Exemple</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell rowSpan={4}>Observationnel</TableCell>
                <TableCell>Étude descriptive</TableCell>
                <TableCell>Pour décrire un phénomène sans tester d'hypothèse</TableCell>
                <TableCell>Décrire la fréquence des chutes dans un service</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Étude transversale</TableCell>
                <TableCell>Pour observer un phénomène à un moment donné</TableCell>
                <TableCell>Mesurer la peur de tomber chez 100 seniors</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Étude cas-témoins</TableCell>
                <TableCell>Pour comparer deux groupes (malades vs non-malades)</TableCell>
                <TableCell>Comparer les habitudes d'exercice entre ceux qui chutent et ceux qui ne chutent pas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Étude de cohorte</TableCell>
                <TableCell>Pour suivre un groupe dans le temps</TableCell>
                <TableCell>Suivre 200 personnes âgées pendant 1 an pour mesurer l'impact de l'exercice</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={2}>Expérimental</TableCell>
                <TableCell>Essai contrôlé randomisé (ECR)</TableCell>
                <TableCell>Pour tester une intervention et établir une causalité</TableCell>
                <TableCell>Comparer un groupe "programme d'exercices" vs "groupe témoin"</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quasi-expérimental</TableCell>
                <TableCell>Quand la randomisation n'est pas possible</TableCell>
                <TableCell>Comparer deux unités hospitalières avec et sans programme</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Qualitatif</TableCell>
                <TableCell>Entretien / observation</TableCell>
                <TableCell>Pour explorer des perceptions ou expériences</TableCell>
                <TableCell>Comprendre comment les patients perçoivent la prévention des chutes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: "grey.50" }}>
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            <strong>📘 Selon ESNO (2023)</strong>, le choix du design doit être justifié par :
            la nature de la question, la faisabilité éthique et pratique, et la validité scientifique du plan.
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="exercise-heading">
        <Typography id="exercise-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ✏️ 5. Activité interactive proposée
        </Typography>

        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧩 Exercice 1 : Identifier les variables
            </Typography>
            <Typography paragraph>
              Associez les éléments de cette question de recherche avec le bon type de variable :
            </Typography>
            <Typography paragraph sx={{ fontStyle: 'italic', backgroundColor: 'grey.100', p: 2, borderRadius: 1 }}>
              "Une formation en hygiène des mains réduit-elle le taux d'infections nosocomiales dans une unité de soins intensifs ?"
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Élément</strong></TableCell>
                    <TableCell><strong>Type de variable</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Formation en hygiène</TableCell>
                    <TableCell>
                      <Collapse in={showExercise1Answers}>
                        <Chip icon={<CheckCircle />} label="Variable indépendante ✅" color="success" size="small" />
                      </Collapse>
                      {!showExercise1Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Taux d'infections</TableCell>
                    <TableCell>
                      <Collapse in={showExercise1Answers}>
                        <Chip icon={<CheckCircle />} label="Variable dépendante ✅" color="success" size="small" />
                      </Collapse>
                      {!showExercise1Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unité de soins</TableCell>
                    <TableCell>
                      <Collapse in={showExercise1Answers}>
                        <Chip icon={<CheckCircle />} label="Contexte / variable de contrôle ✅" color="success" size="small" />
                      </Collapse>
                      {!showExercise1Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => setShowExercise1Answers(!showExercise1Answers)}
              >
                {showExercise1Answers ? 'Masquer les réponses' : 'Voir les réponses'}
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🎮 Exercice 2 : Choisir le design approprié
            </Typography>
            <Typography paragraph>
              Associez la question de recherche au type de design le plus adapté :
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Question</strong></TableCell>
                    <TableCell><strong>Type de design</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>A. Quel est le taux d'épuisement professionnel chez les infirmiers ?</TableCell>
                    <TableCell>
                      <Collapse in={showExercise2Answers}>
                        <Chip label="Étude descriptive" color="primary" size="small" />
                      </Collapse>
                      {!showExercise2Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>B. Les exercices de relaxation réduisent-ils le stress ?</TableCell>
                    <TableCell>
                      <Collapse in={showExercise2Answers}>
                        <Chip label="Essai contrôlé randomisé" color="primary" size="small" />
                      </Collapse>
                      {!showExercise2Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>C. Quels facteurs organisationnels favorisent le stress professionnel ?</TableCell>
                    <TableCell>
                      <Collapse in={showExercise2Answers}>
                        <Chip label="Étude transversale analytique" color="primary" size="small" />
                      </Collapse>
                      {!showExercise2Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>D. Comment les infirmières perçoivent-elles leur charge de travail ?</TableCell>
                    <TableCell>
                      <Collapse in={showExercise2Answers}>
                        <Chip label="Étude qualitative" color="primary" size="small" />
                      </Collapse>
                      {!showExercise2Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => setShowExercise2Answers(!showExercise2Answers)}
              >
                {showExercise2Answers ? 'Masquer les réponses' : 'Voir les réponses'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="guidelines-heading">
        <Typography id="guidelines-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧱 6. À retenir
        </Typography>

        <Grid container spacing={3} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%', backgroundColor: "success.light" }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold', color: "success.contrastText" }}>
                Ce qu'il faut faire ✅
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Identifier clairement les variables à mesurer" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Définir chaque variable de manière opérationnelle" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Choisir un design cohérent avec ta question" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Vérifier la faisabilité et l'éthique du plan" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Contrôler les biais et variables confondantes" />
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
                  <ListItemText primary="Choisir trop de variables non essentielles" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary='Employer des termes flous ("bon moral", "bonne santé")' />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Imiter un design sans justification" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Choisir un plan impossible à réaliser" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Ignorer les facteurs extérieurs qui influencent les résultats" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>🚀 Prochaine étape : Étape 5 – Formuler les hypothèses et le modèle conceptuel</AlertTitle>
        Maintenant que tu as identifié tes variables et ton design :
        <br />• Tu peux formuler tes hypothèses (les liens attendus entre variables).
        <br />• Puis représenter ces liens sous forme de modèle conceptuel (schéma logique).
        <br />👉 Ce sera la dernière grande étape de la phase conceptuelle avant de passer à la phase méthodologique.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/literature-review" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            PRÉCÉDENT : Revue de la littérature
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/hypotheses-model" sx={{ display: 'flex', alignItems: 'center' }}>
            SUIVANT : Hypothèses et modèle conceptuel
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
