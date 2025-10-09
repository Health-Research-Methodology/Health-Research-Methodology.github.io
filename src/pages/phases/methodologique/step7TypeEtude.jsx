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
  Collapse,
  Stack,
  Divider,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@mui/material';
import { 
  ArrowForward, 
  Science, 
  Timeline, 
  Group,
  Assignment,
  CheckCircle,
  Cancel,
  Quiz,
  Psychology,
  AccessTime,
  Visibility
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step7TypeEtude() {
  const [showExercise1Answers, setShowExercise1Answers] = useState(false);
  const [showExercise2Answers, setShowExercise2Answers] = useState(false);
  const [showExercise3Answers, setShowExercise3Answers] = useState(false);
  
  // État pour l'exercice 1 - Choix du design
  const [exercise1Answers, setExercise1Answers] = useState({
    questionA: '',
    questionB: '',
    questionC: '',
    questionD: ''
  });

  // État pour l'exercice 2 - PICOT vers Design
  const [exercise2Answer, setExercise2Answer] = useState('');
  const [exercise2Justification, setExercise2Justification] = useState('');

  // État pour l'exercice 3 - Statique vs Dynamique
  const [exercise3Answers, setExercise3Answers] = useState({
    cas1: '',
    cas2: '',
    cas3: ''
  });

  const exercise1Questions = [
    {
      id: 'questionA',
      question: "Quel est le taux d'épuisement professionnel des infirmiers en 2025 ?",
      correctAnswer: 'Descriptive transversale',
      options: ['Descriptive transversale', 'ECR', 'Cohorte', 'Cas-témoins']
    },
    {
      id: 'questionB',
      question: "Le nouveau protocole de lavage des mains réduit-il les infections ?",
      correctAnswer: 'ECR (ou quasi-expérimental)',
      options: ['Descriptive transversale', 'ECR (ou quasi-expérimental)', 'Cohorte', 'Cas-témoins']
    },
    {
      id: 'questionC',
      question: "L'exposition au bruit augmente-t-elle le risque de surdité ? (suivi 5 ans)",
      correctAnswer: 'Cohorte',
      options: ['Descriptive transversale', 'ECR', 'Cohorte', 'Cas-témoins']
    },
    {
      id: 'questionD',
      question: "Le cancer X est-il associé au pesticide Y ? (maladie rare)",
      correctAnswer: 'Cas-témoins',
      options: ['Descriptive transversale', 'ECR', 'Cohorte', 'Cas-témoins']
    }
  ];

  const exercise3Cases = [
    {
      id: 'cas1',
      case: '"Photo" unique d\'un service',
      correctAnswer: 'Statique',
      options: ['Statique', 'Dynamique fermée (cohorte)', 'Dynamique ouverte']
    },
    {
      id: 'cas2',
      case: 'Suivi d\'un groupe inclus au départ',
      correctAnswer: 'Dynamique fermée (cohorte)',
      options: ['Statique', 'Dynamique fermée (cohorte)', 'Dynamique ouverte']
    },
    {
      id: 'cas3',
      case: 'Mortalité d\'une ville sur 1 an',
      correctAnswer: 'Dynamique ouverte',
      options: ['Statique', 'Dynamique fermée (cohorte)', 'Dynamique ouverte']
    }
  ];

  const handleExercise1Change = (questionId, value) => {
    setExercise1Answers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleExercise3Change = (casId, value) => {
    setExercise3Answers(prev => ({
      ...prev,
      [casId]: value
    }));
  };

  const checkExercise1Score = () => {
    let score = 0;
    exercise1Questions.forEach(q => {
      if (exercise1Answers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const checkExercise3Score = () => {
    let score = 0;
    exercise3Cases.forEach(c => {
      if (exercise3Answers[c.id] === c.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const resetExercise1 = () => {
    setExercise1Answers({
      questionA: '',
      questionB: '',
      questionC: '',
      questionD: ''
    });
  };

  const resetExercise3 = () => {
    setExercise3Answers({
      cas1: '',
      cas2: '',
      cas3: ''
    });
  };

  return (
    <Box component="section" sx={{ maxWidth: "900px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase méthodologique — Étape 7
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Choisir le type d'étude et le plan de recherche
      </Typography>

      <Alert severity="info" icon={<Science />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        <Typography paragraph>
          Savoir transformer ta question (PICOT) en design d'étude adapté, en tenant compte :
        </Typography>
        <List dense sx={{ mt: 1 }}>
          <ListItem>
            <ListItemText primary="• du degré de contrôle (observationnel vs expérimental)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• de la temporalité (transversal vs longitudinal)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• du sens de la démarche (cohorte « directe » vs cas-témoins « à rebours »)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• du type de population (statique vs dynamique ; fermée/cohorte vs ouverte)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• de la faisabilité/éthique (randomisation possible ?)" />
          </ListItem>
        </List>
      </Alert>

      <section aria-labelledby="panorama-heading">
        <Typography id="panorama-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📊 1) Panorama des types d'études
        </Typography>
        
        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          A. Deux grandes familles
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.light' }}>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>Famille</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>Idée clé</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>Quand l'utiliser</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ backgroundColor: 'info.light' }}>
                <TableCell><strong>Non-expérimentale (observationnelle)</strong></TableCell>
                <TableCell>On observe la réalité telle qu'elle se présente (pas de manipulation du facteur)</TableCell>
                <TableCell>Quand l'intervention n'est pas possible (éthique, pratique) ou pour décrire/associer</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'secondary.light' }}>
                <TableCell><strong>Expérimentale</strong></TableCell>
                <TableCell>On manipule le facteur (intervention) et on compare des groupes</TableCell>
                <TableCell>Pour évaluer un effet causal d'un traitement/programme</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          B. Détail côté observationnel
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'success.light' }}>
                <TableCell sx={{ fontWeight: 'bold', color: 'success.contrastText' }}>Sous-type</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'success.contrastText' }}>Temporalité</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'success.contrastText' }}>But principal</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'success.contrastText' }}>Exemple santé</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Descriptive</strong></TableCell>
                <TableCell>Transversale (prévalence) ou longitudinale (incidence, mortalité, tendances)</TableCell>
                <TableCell>Décrire fréquence/profil (personne-lieu-temps)</TableCell>
                <TableCell>Prévalence des escarres en gériatrie une semaine donnée</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell rowSpan={4}><strong>Étiologique</strong></TableCell>
                <TableCell>Transversal (exposition et maladie au même moment)</TableCell>
                <TableCell>Explorer associations (chronologie limitée)</TableCell>
                <TableCell>Tabagisme ↔ HTA chez des travailleurs (mesure unique)</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell>Longitudinal</TableCell>
                <TableCell>Établir le sens exposition→événement</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'warning.light' }}>
                <TableCell>→ Cohorte (directe)</TableCell>
                <TableCell>Départ sur l'exposition (E+ vs E−) → suivre la maladie</TableCell>
                <TableCell>Exposés au bruit vs non exposés → surdité</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'error.light' }}>
                <TableCell>→ Cas-témoins (à rebours)</TableCell>
                <TableCell>Départ sur la maladie (cas vs témoins) → remonter à l'exposition</TableCell>
                <TableCell>Cancer broncho-pulmonaire (cas) vs autres (témoins) → tabagisme</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="info" sx={{ my: 3 }}>
          <AlertTitle>💡 À retenir</AlertTitle>
          <strong>Prospectif / rétrospectif / ambispectif :</strong> selon que l'exposition/événement ont déjà eu lieu au début de l'étude.
        </Alert>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          C. Côté expérimental
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'secondary.light' }}>
                <TableCell sx={{ fontWeight: 'bold', color: 'secondary.contrastText' }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'secondary.contrastText' }}>Affectation</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'secondary.contrastText' }}>Atout</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'secondary.contrastText' }}>Exemple</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ backgroundColor: 'success.light' }}>
                <TableCell><strong>Essai randomisé (ECR)</strong></TableCell>
                <TableCell>Randomisation (hasard)</TableCell>
                <TableCell>Meilleur contrôle des facteurs confondants → preuve forte</TableCell>
                <TableCell>Programme d'exercices vs soins usuels</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'warning.light' }}>
                <TableCell><strong>Quasi-expérimental</strong></TableCell>
                <TableCell>Sans randomisation (groupes naturels)</TableCell>
                <TableCell>Faisable quand randomiser est impossible</TableCell>
                <TableCell>Unité A avec protocole vs Unité B sans protocole</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>

      <section aria-labelledby="populations-heading">
        <Typography id="populations-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          👥 2) Populations : statique vs dynamique (cohorte)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.light' }}>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>Concept</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>Définition</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>Utilité pour le design</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ backgroundColor: 'info.light' }}>
                <TableCell><strong>Statique</strong></TableCell>
                <TableCell>Individus observés à un même moment</TableCell>
                <TableCell>Typique transversal (prévalence)</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'warning.light' }}>
                <TableCell><strong>Dynamique – ouverte</strong></TableCell>
                <TableCell>Entrées/sorties possibles au fil du temps</TableCell>
                <TableCell>Mortalité annuelle d'une ville (entrées/sorties)</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'success.light' }}>
                <TableCell><strong>Dynamique – fermée = cohorte</strong></TableCell>
                <TableCell>Groupe fixé après inclusion ; suivi dans le temps</TableCell>
                <TableCell>Cohorte (incidence, survie, temps-événement)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>

      <section aria-labelledby="decision-tree-heading">
        <Typography id="decision-tree-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🌳 3) Comment choisir ? (Arbre de décision rapide)
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 3, backgroundColor: "warning.light" }}>
          <Typography variant="h6" component="h4" sx={{ mb: 2, color: "warning.contrastText" }}>
            🎯 Ta question vise…
          </Typography>
          
          <Stack spacing={3} sx={{ color: "warning.contrastText" }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                1. Décrire une fréquence/profil
              </Typography>
              <Typography variant="body2">
                → <strong>Descriptive</strong> (transversale si "photo", longitudinale si "évolution/tendance")
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                2. Tester une relation expo↔événement
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Chronologie connue/exigeante ?</strong>
              </Typography>
              <Typography variant="body2" sx={{ ml: 2 }}>
                • <strong>Oui</strong> → Longitudinal
                <br />→ Expo rare ou suivi possible → <strong>Cohorte</strong>
                <br />→ Maladie rare/rapide/peu coûteux → <strong>Cas-témoins</strong>
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, mt: 1 }}>
                • <strong>Non</strong> / mesure unique possible → <strong>Transversal</strong> (attention à la causalité)
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                3. Évaluer l'effet d'une intervention
              </Typography>
              <Typography variant="body2">
                → <strong>Expérimental</strong> (ECR si possible, sinon quasi-expérimental)
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                4. Faisabilité & éthique
              </Typography>
              <Typography variant="body2">
                • Randomiser possible, consentement ok, logistique ok → <strong>ECR</strong>
                <br />• Randomiser impossible (éthique/terrain) mais intervention implantable → <strong>Quasi-expérimental</strong>
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </section>

      <section aria-labelledby="picot-design-heading">
        <Typography id="picot-design-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🔗 4) Relier PICOT → design
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'secondary.light' }}>
                <TableCell sx={{ fontWeight: 'bold', color: 'secondary.contrastText' }}>Élément PICOT</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'secondary.contrastText' }}>Impact design</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>P</strong> Population (statique vs dynamique)</TableCell>
                <TableCell>Transversal (statique) / Cohorte (dynamique fermée)</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>I/C</strong> Intervention/Comparateur</TableCell>
                <TableCell>Si intervention assignée → expérimental</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>O</strong> Outcome (prévalence vs incidence/survie)</TableCell>
                <TableCell>Prévalence → transversal, Incidence/survie → cohorte</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>T</strong> Temps</TableCell>
                <TableCell>Suivi = longitudinal ; instantané = transversal</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>

      <section aria-labelledby="examples-heading">
        <Typography id="examples-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          💼 5) Exemples-guides (santé)
        </Typography>

        <Grid container spacing={2} sx={{ my: 3 }}>
          {[
            {
              example: "Prévalence des escarres en service X en mars",
              design: "Descriptive transversale",
              reason: "(population statique)",
              color: "info"
            },
            {
              example: "Exercices d'équilibre ↓ chutes sur 6 mois",
              design: "ECR (idéal)",
              reason: "sinon quasi-expérimental",
              color: "success"
            },
            {
              example: "Tabac → cancer poumon (maladie rare)",
              design: "Cas-témoins",
              reason: "",
              color: "error"
            },
            {
              example: "Exposition pro au bruit → surdité (suivi annuel)",
              design: "Cohorte",
              reason: "(prospective/rétrospective selon données)",
              color: "warning"
            },
            {
              example: "Tendance mortalité cardio sur 20 ans",
              design: "Étude de tendance",
              reason: "(longitudinale, séries temporelles)",
              color: "secondary"
            }
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 2, fontWeight: 'medium' }}>
                    {item.example}
                  </Typography>
                  <Chip 
                    label={item.design} 
                    color={item.color} 
                    sx={{ mb: 1 }}
                  />
                  {item.reason && (
                    <Typography variant="body2" color="text.secondary">
                      {item.reason}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      <section aria-labelledby="plan-heading">
        <Typography id="plan-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📋 6) Plan de recherche : ce qu'il faut fixer maintenant
        </Typography>

        <List sx={{ my: 3 }}>
          {[
            "Type d'étude choisi (et justification)",
            "Population (critères d'inclusion/exclusion) & cadre (statique/dynamique ; cohorte fermée si suivi)",
            "Unités de comparaison (exposés/non exposés ; cas/témoins ; groupe intervention/témoin)",
            "Temporalité (transversal / longitudinal ; prospectif / rétrospectif / ambispectif)",
            "Stratégies anti-biais (randomisation, appariement cas-témoins, ajustements, standardisation)",
            "Principes éthiques (consentement, confidentialité)",
            "Faisabilité (durée, ressources, accès aux données)"
          ].map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </section>

      <section aria-labelledby="exercises-heading">
        <Typography id="exercises-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ✏️ Activités interactives
        </Typography>

        {/* Exercice 1 */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🎮 Exercice 1 — « Je choisis le bon design »
            </Typography>
            <Typography paragraph>
              Associe chaque question au type d'étude approprié :
            </Typography>

            <Stack spacing={3}>
              {exercise1Questions.map((q, index) => (
                <Box key={q.id}>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
                    {String.fromCharCode(65 + index)}. {q.question}
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={exercise1Answers[q.id]}
                      onChange={(e) => handleExercise1Change(q.id, e.target.value)}
                      row
                    >
                      {q.options.map((option, optionIndex) => (
                        <FormControlLabel
                          key={optionIndex}
                          value={option}
                          control={<Radio />}
                          label={option}
                          sx={{ mr: 2 }}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  {index < exercise1Questions.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))}
            </Stack>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={resetExercise1}
                >
                  Réinitialiser
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => setShowExercise1Answers(!showExercise1Answers)}
                >
                  {showExercise1Answers ? 'Masquer les réponses' : 'Vérifier mes réponses'}
                </Button>
              </Stack>
            </Box>

            <Collapse in={showExercise1Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: checkExercise1Score() >= 3 ? 'success.light' : 'warning.light' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkExercise1Score() >= 3 ? `🎉 Excellent ! Score: ${checkExercise1Score()}/4` : `📝 Score: ${checkExercise1Score()}/4 - Réponses correctes :`}
                </Typography>
                <Stack spacing={1}>
                  {exercise1Questions.map((q, index) => (
                    <Typography key={q.id} variant="body2">
                      <strong>{String.fromCharCode(65 + index)}.</strong> {q.correctAnswer} ✅
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 2 */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧩 Exercice 2 — « PICOT → Design »
            </Typography>
            <Typography paragraph>
              Pour P : personnes âgées à domicile ; I : exercices ; C : soins usuels ; O : chutes ; T : 6 mois
            </Typography>
            <Typography paragraph sx={{ fontWeight: 'medium' }}>
              → Propose le meilleur design, puis justifie (randomisation possible ? éthique ?)
            </Typography>

            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Design proposé"
                value={exercise2Answer}
                onChange={(e) => setExercise2Answer(e.target.value)}
                placeholder="Ex: ECR, quasi-expérimental, cohorte..."
              />
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Justification"
                value={exercise2Justification}
                onChange={(e) => setExercise2Justification(e.target.value)}
                placeholder="Explique pourquoi ce design est approprié..."
              />
            </Stack>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => setShowExercise2Answers(!showExercise2Answers)}
              >
                {showExercise2Answers ? 'Masquer la réponse modèle' : 'Voir la réponse modèle'}
              </Button>
            </Box>

            <Collapse in={showExercise2Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: 'info.light' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: 'info.contrastText' }}>
                  💡 Réponse modèle :
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'info.contrastText' }}>
                  <strong>Design proposé :</strong> ECR (Essai Contrôlé Randomisé)
                </Typography>
                <Typography variant="body2" sx={{ color: 'info.contrastText' }}>
                  <strong>Justification :</strong> 
                  <br />• <strong>Intervention testable :</strong> Programme d'exercices vs soins usuels
                  <br />• <strong>Randomisation éthique :</strong> Les deux groupes bénéficient de soins (pas de privation)
                  <br />• <strong>Outcome mesurable :</strong> Nombre de chutes sur 6 mois
                  <br />• <strong>Population définie :</strong> Personnes âgées à domicile (critères d'inclusion/exclusion clairs)
                  <br />• <strong>Faisabilité :</strong> Durée raisonnable (6 mois), intervention standardisable
                </Typography>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 3 */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧠 Exercice 3 — « Statique ou dynamique ? »
            </Typography>
            <Typography paragraph>
              Identifie le type de population pour chaque cas :
            </Typography>

            <Stack spacing={3}>
              {exercise3Cases.map((c, index) => (
                <Box key={c.id}>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
                    Cas {index + 1} : {c.case}
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={exercise3Answers[c.id]}
                      onChange={(e) => handleExercise3Change(c.id, e.target.value)}
                    >
                      {c.options.map((option, optionIndex) => (
                        <FormControlLabel
                          key={optionIndex}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  {index < exercise3Cases.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))}
            </Stack>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={resetExercise3}
                >
                  Réinitialiser
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => setShowExercise3Answers(!showExercise3Answers)}
                >
                  {showExercise3Answers ? 'Masquer les réponses' : 'Vérifier mes réponses'}
                </Button>
              </Stack>
            </Box>

            <Collapse in={showExercise3Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: checkExercise3Score() === 3 ? 'success.light' : 'warning.light' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkExercise3Score() === 3 ? `🎉 Parfait ! Score: ${checkExercise3Score()}/3` : `📝 Score: ${checkExercise3Score()}/3 - Réponses correctes :`}
                </Typography>
                <Stack spacing={1}>
                  {exercise3Cases.map((c, index) => (
                    <Typography key={c.id} variant="body2">
                      <strong>Cas {index + 1}:</strong> {c.correctAnswer} ✅
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="guidelines-heading">
        <Typography id="guidelines-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧱 À retenir
        </Typography>

        <Grid container spacing={3} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%', backgroundColor: "success.light" }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold', color: "success.contrastText" }}>
                Faire ✅
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Aligner design ↔ question ↔ temporalité" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Préciser statique/dynamique ; transversal/longitudinal" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Justifier ECR vs quasi-expérimental" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Prévoir contrôle des biais (appariement, ajustement)" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Vérifier faisabilité (taille, durée, accès)" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%', backgroundColor: "error.light" }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold', color: "error.contrastText" }}>
                Éviter ❌
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Choisir un design « à la mode » sans lien avec PICOT" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Mélanger incidence (longitudinal) & prévalence (transversal)" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Randomiser sans vérifier l'éthique/consentement" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Ignorer confondants et sélection des témoins" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Un plan irréaliste pour les ressources disponibles" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>🚀 Prochaine étape (Étape 8)</AlertTitle>
        <strong>Population, échantillonnage et taille d'échantillon :</strong> définir précisément qui inclure/exclure, comment sélectionner (méthodes d'échantillonnage), et estimer le n nécessaire (puissance).
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/methodologique" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            PRÉCÉDENT : Phase méthodologique
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/methodologique/population-echantillonnage" sx={{ display: 'flex', alignItems: 'center' }}>
            SUIVANT : Étape 8 - Population et échantillonnage
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
