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
  Checkbox,
  FormGroup,
  Chip
} from '@mui/material';
import { 
  ArrowForward, 
  Assessment, 
  CheckCircle,
  Assignment,
  Science
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step9InstrumentsMesureCollecte() {
  const [showExercise1Answers, setShowExercise1Answers] = useState(false);
  const [showExercise2Answers, setShowExercise2Answers] = useState(false);
  const [showExercise3Answers, setShowExercise3Answers] = useState(false);
  const [showExercise4Answers, setShowExercise4Answers] = useState(false);
  
  // État pour l'exercice 1 - Associer variable ↔ instrument
  const [exercise1Answers, setExercise1Answers] = useState({
    peur: '',
    qualite: '',
    equilibre: '',
    adherence: ''
  });

  // État pour l'exercice 2 - Type de validité
  const [exercise2Answers, setExercise2Answers] = useState({
    panel: '',
    correlation: '',
    convergente: ''
  });

  // État pour l'exercice 3 - Test de fiabilité
  const [exercise3Answers, setExercise3Answers] = useState({
    questionnaire: '',
    mesure_repetee: '',
    deux_evaluateurs: ''
  });

  // État pour l'exercice 4 - SOP
  const [exercise4Order, setExercise4Order] = useState([]);
  const sopSteps = [
    'Formation des enquêteurs',
    'Calibration du matériel',
    'Ordre des tests standardisé',
    'Contrôle de saisie',
    'Sauvegarde sécurisée'
  ];

  const exercise1Options = {
    peur: ['FES-I', 'EQ-5D-5L', 'Tinetti', '% séances'],
    qualite: ['FES-I', 'EQ-5D-5L / SF-12', 'TUG', 'Échelle Morisky'],
    equilibre: ['% séances', 'EQ-5D-5L', 'Tinetti / TUG', 'Échelle Morisky'],
    adherence: ['FES-I', 'SF-12', 'Tinetti', '% séances / Échelle Morisky']
  };

  const exercise1CorrectAnswers = {
    peur: 'FES-I',
    qualite: 'EQ-5D-5L / SF-12',
    equilibre: 'Tinetti / TUG',
    adherence: '% séances / Échelle Morisky'
  };

  const exercise2Cases = [
    {
      id: 'panel',
      case: 'Panel d\'experts qui jugent la couverture des items',
      correctAnswer: 'Validité de contenu',
      options: ['Validité de contenu', 'Critérielle (concurrente)', 'Convergente/Discriminante']
    },
    {
      id: 'correlation',
      case: 'Corrélation forte avec un "gold standard" actuel',
      correctAnswer: 'Critérielle (concurrente)',
      options: ['Validité de contenu', 'Critérielle (concurrente)', 'Convergente/Discriminante']
    },
    {
      id: 'convergente',
      case: 'Corrélation avec échelles proches et pas avec non-liées',
      correctAnswer: 'Convergente/Discriminante',
      options: ['Validité de contenu', 'Critérielle (concurrente)', 'Convergente/Discriminante']
    }
  ];

  const exercise3Cases = [
    {
      id: 'questionnaire',
      case: 'Questionnaire multi-items',
      correctAnswer: 'α de Cronbach',
      options: ['α de Cronbach', 'Test–retest (ICC)', 'Inter-juge (ICC/Kappa)']
    },
    {
      id: 'mesure_repetee',
      case: 'Mesure répétée à 14 jours',
      correctAnswer: 'Test–retest (ICC)',
      options: ['α de Cronbach', 'Test–retest (ICC)', 'Inter-juge (ICC/Kappa)']
    },
    {
      id: 'deux_evaluateurs',
      case: 'Deux évaluateurs au même moment',
      correctAnswer: 'Inter-juge (ICC/Kappa)',
      options: ['α de Cronbach', 'Test–retest (ICC)', 'Inter-juge (ICC/Kappa)']
    }
  ];

  const handleExercise1Change = (variable, value) => {
    setExercise1Answers(prev => ({
      ...prev,
      [variable]: value
    }));
  };

  const handleExercise2Change = (casId, value) => {
    setExercise2Answers(prev => ({
      ...prev,
      [casId]: value
    }));
  };

  const handleExercise3Change = (casId, value) => {
    setExercise3Answers(prev => ({
      ...prev,
      [casId]: value
    }));
  };

  const handleSopStepToggle = (step) => {
    setExercise4Order(prev => {
      if (prev.includes(step)) {
        return prev.filter(s => s !== step);
      } else {
        return [...prev, step];
      }
    });
  };

  const checkExercise1Score = () => {
    let score = 0;
    Object.keys(exercise1CorrectAnswers).forEach(key => {
      if (exercise1Answers[key] === exercise1CorrectAnswers[key]) {
        score += 1;
      }
    });
    return score;
  };

  const checkExercise2Score = () => {
    let score = 0;
    exercise2Cases.forEach(c => {
      if (exercise2Answers[c.id] === c.correctAnswer) {
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

  const checkExercise4Score = () => {
    const correctOrder = [
      'Formation des enquêteurs',
      'Calibration du matériel',
      'Ordre des tests standardisé',
      'Contrôle de saisie',
      'Sauvegarde sécurisée'
    ];
    
    if (exercise4Order.length !== correctOrder.length) return 0;
    
    let score = 0;
    for (let i = 0; i < correctOrder.length; i++) {
      if (exercise4Order[i] === correctOrder[i]) {
        score += 1;
      }
    }
    return score;
  };

  const resetExercise1 = () => {
    setExercise1Answers({
      peur: '',
      qualite: '',
      equilibre: '',
      adherence: ''
    });
  };

  const resetExercise2 = () => {
    setExercise2Answers({
      panel: '',
      correlation: '',
      convergente: ''
    });
  };

  const resetExercise3 = () => {
    setExercise3Answers({
      questionnaire: '',
      mesure_repetee: '',
      deux_evaluateurs: ''
    });
  };

  const resetExercise4 = () => {
    setExercise4Order([]);
  };

  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase méthodologique — Étape 9
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Instruments de mesure & Collecte des données
      </Typography>

      <Alert severity="info" icon={<Assessment />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        <Typography paragraph>
          Choisir <strong>quoi mesurer</strong> et <strong>comment le mesurer</strong> (instruments/échelles), puis décrire comment la donnée sera recueillie, contrôlée et sécurisée pour qu'elle soit valide, fiable et exploitable.
        </Typography>
      </Alert>

      <section aria-labelledby="mapping-heading">
        <Typography id="mapping-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🗺️ 1) Du concept à la mesure (mapping variable → instrument)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Variable (de l'Étape 4–5)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Définition opérationnelle</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Instrument / Échelle</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Type d'échelle</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Équilibre postural</strong></TableCell>
                <TableCell>Capacité à maintenir la station</TableCell>
                <TableCell>Tinetti, Timed Up and Go</TableCell>
                <TableCell>Interval/ratio (temps, score)</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Chute</strong></TableCell>
                <TableCell>Événement contact sol non intentionnel</TableCell>
                <TableCell>Journal de chutes + vérif. dossier</TableCell>
                <TableCell>Binaire (oui/non), comptage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Adhérence</strong></TableCell>
                <TableCell>% séances effectuées</TableCell>
                <TableCell>Registre + appli de suivi</TableCell>
                <TableCell>Ratio (%)</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Peur de tomber</strong></TableCell>
                <TableCell>Perception de risque</TableCell>
                <TableCell>FES-I (Falls Efficacy Scale)</TableCell>
                <TableCell>Ordinale (Likert)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Qualité de vie</strong></TableCell>
                <TableCell>Perception de santé</TableCell>
                <TableCell>EQ-5D-5L, SF-12</TableCell>
                <TableCell>Ordinale/Index</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="success" sx={{ my: 3 }}>
          <AlertTitle>💡 Règle d'or</AlertTitle>
          Chaque variable doit avoir un <strong>instrument précis</strong>, un <strong>mode de calcul</strong> et un <strong>moment de mesure</strong> (baseline, M3, M6…).
        </Alert>
      </section>

      <section aria-labelledby="criteres-heading">
        <Typography id="criteres-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ✅ 2) Choisir un bon instrument : critères essentiels
        </Typography>

        <Grid container spacing={3} sx={{ my: 3 }}>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  🎯 Validité : mesure bien ce qu'il faut mesurer
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="De contenu (couvre les domaines)" />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="De construit (convergent/discriminant)" />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Critérielle (concurrente/prédictive)" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  🔄 Fiabilité : mesure constante
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Cohérence interne (α de Cronbach ≥ 0,70 souhaitable)" />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Test–retest, inter-juge (ICC/Kappa)" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  📊 Sensibilité & Faisabilité
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Capacité à détecter un changement (MID si connu)" />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Durée, coût, formation, matériel (calibration)" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  👥 Acceptabilité & Licences
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Charge pour le participant, langue/niveau de littératie" />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Autorisation d'usage, traduction / rétro-traduction" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          🩺 Diagnostic/criblage
        </Typography>
        <Typography variant="body2" paragraph>
          Calcule <strong>sensibilité</strong>, <strong>spécificité</strong>, <strong>VPP/VPN</strong>, <strong>AUC</strong> si pertinent.
        </Typography>
      </section>

      <section aria-labelledby="adaptation-heading">
        <Typography id="adaptation-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🌍 3) Adapter un questionnaire (traduction culturelle) – mini-SOP
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 3 }}>
          <List>
            {[
              "Demander l'autorisation à l'auteur",
              "Traduction directe (2 traducteurs) → synthèse",
              "Rétro-traduction par un autre traducteur",
              "Comité d'experts (équivalence sémantique/conceptuelle)",
              "Pré-test cognitif (5–10 pers.) : clarté, ambiguïtés",
              "Pilote (≥30–50) : α de Cronbach, test–retest, inter-juge",
              "Documentation des versions & décisions"
            ].map((step, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Chip label={index + 1} size="small" />
                </ListItemIcon>
                <ListItemText primary={step} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </section>

      <section aria-labelledby="standardisation-heading">
        <Typography id="standardisation-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📋 4) Standardiser la collecte (qui, quand, comment)
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          A. Procédures (SOP)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Question</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Éléments à définir</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Qui collecte ?</strong></TableCell>
                <TableCell>Profil, formation, aveuglement si possible</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Quand ?</strong></TableCell>
                <TableCell>Calendrier : T0, T1, … ; fenêtres de visite</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Où ?</strong></TableCell>
                <TableCell>Domicile, service, salle dédiée</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Comment ?</strong></TableCell>
                <TableCell>Papier CRF vs eCRF : REDCap/KoBo/ODK ; double saisie / contrôles automatiques</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Contrôle qualité</strong></TableCell>
                <TableCell>Calibration (balances, dynamomètres), duplication 10% mesures, audits de cohérence</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          B. Gestion des données
        </Typography>

        <List sx={{ my: 3 }}>
          {[
            "Dictionnaire de variables (nom, format, unités, valeurs autorisées, codes manquants)",
            "Plan de codage (items inversés, scores composites)",
            "Suivi des données manquantes (règles de relance ; codes NA/NR)",
            "Sécurité & RGPD : consentement, pseudonymisation, droits d'accès, chiffrement, plan d'archivage"
          ].map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          C. Pré-test / pilote de terrain
        </Typography>

        <Paper elevation={1} sx={{ p: 2, my: 2 }}>
          <Typography variant="body2">
            • Test complet du circuit (recrutement→mesure→saisie→contrôle)
            <br />• Chronométrer la passation ; noter les points de friction
            <br />• Ajuster SOP/CRF avant l'étude principale
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="modeles-heading">
        <Typography id="modeles-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📋 5) Modèles pratiques (copier-coller dans ton protocole)
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          A. Fiche variable (à répéter pour chaque variable)
        </Typography>

        <Paper elevation={1} sx={{ p: 3, my: 2, backgroundColor: 'grey.50' }}>
          <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
            <strong>Nom / code :</strong> …
            <br /><strong>Définition opérationnelle :</strong> …
            <br /><strong>Instrument / source :</strong> … (réf.)
            <br /><strong>Échelle & unité :</strong> …
            <br /><strong>Score/calcul :</strong> … (items inversés ?)
            <br /><strong>Moment(s) de mesure :</strong> T0 / T1 / T2 …
            <br /><strong>Responsable :</strong> …
            <br /><strong>Contrôles qualité :</strong> … (retest, double mesure…)
          </Typography>
        </Paper>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          B. Extrait de CRF (papier ou eCRF)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Visite</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Mesure TUG (sec)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Tinetti (0–28)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Chute depuis dernière visite (0/1)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Commentaires</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>001</TableCell>
                <TableCell>__/__/____</TableCell>
                <TableCell>T0 / T1 / T2</TableCell>
                <TableCell>___,_ sec</TableCell>
                <TableCell>___/28</TableCell>
                <TableCell>0 / 1</TableCell>
                <TableCell>_____________</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          C. Check-list séance de mesure
        </Typography>

        <List sx={{ my: 2 }}>
          {[
            "Matériel calibré & daté",
            "Consentement signé / identité vérifiée",
            "SOP à portée / ordre des tests respecté",
            "Items lus mot-à-mot (questionnaire)",
            "Double saisie ou contrôle automatique OK",
            "Sauvegarde / synchro effectuée"
          ].map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Checkbox />
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
              🎮 Exercice 1 — Associer variable ↔ instrument
            </Typography>
            <Typography paragraph>
              Choisissez l'instrument le plus adapté pour chaque variable :
            </Typography>

            <Stack spacing={3}>
              {[
                { id: 'peur', label: 'Peur de tomber' },
                { id: 'qualite', label: 'Qualité de vie générale' },
                { id: 'equilibre', label: 'Équilibre' },
                { id: 'adherence', label: 'Adhérence' }
              ].map((variable, index) => (
                <Box key={variable.id}>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
                    {variable.label} →
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={exercise1Answers[variable.id]}
                      onChange={(e) => handleExercise1Change(variable.id, e.target.value)}
                      row
                    >
                      {exercise1Options[variable.id].map((option, optionIndex) => (
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
                  {index < 3 && <Divider sx={{ mt: 2 }} />}
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
              <Paper elevation={1} sx={{ p: 2, mt: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkExercise1Score() === 4 ? `🎉 Parfait ! Score: ${checkExercise1Score()}/4` : `📝 Score: ${checkExercise1Score()}/4 - Réponses correctes :`}
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2"><strong>Peur de tomber :</strong> FES-I ✅</Typography>
                  <Typography variant="body2"><strong>Qualité de vie générale :</strong> EQ-5D-5L / SF-12 ✅</Typography>
                  <Typography variant="body2"><strong>Équilibre :</strong> Tinetti / TUG ✅</Typography>
                  <Typography variant="body2"><strong>Adhérence :</strong> % séances / Échelle Morisky ✅</Typography>
                </Stack>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 2 */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧩 Exercice 2 — Quel type de validité ?
            </Typography>
            <Typography paragraph>
              Classez ces actions selon le type de validité :
            </Typography>

            <Stack spacing={3}>
              {exercise2Cases.map((c, index) => (
                <Box key={c.id}>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
                    {c.case}
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={exercise2Answers[c.id]}
                      onChange={(e) => handleExercise2Change(c.id, e.target.value)}
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
                  {index < exercise2Cases.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))}
            </Stack>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={resetExercise2}
                >
                  Réinitialiser
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => setShowExercise2Answers(!showExercise2Answers)}
                >
                  {showExercise2Answers ? 'Masquer les réponses' : 'Vérifier mes réponses'}
                </Button>
              </Stack>
            </Box>

            <Collapse in={showExercise2Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkExercise2Score() === 3 ? `🎉 Excellent ! Score: ${checkExercise2Score()}/3` : `📝 Score: ${checkExercise2Score()}/3 - Réponses correctes :`}
                </Typography>
                <Stack spacing={1}>
                  {exercise2Cases.map((c, index) => (
                    <Typography key={c.id} variant="body2">
                      <strong>{c.case} :</strong> {c.correctAnswer} ✅
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 3 */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧪 Exercice 3 — Choisir le bon test de fiabilité
            </Typography>
            <Typography paragraph>
              Associez chaque situation au test de fiabilité approprié :
            </Typography>

            <Stack spacing={3}>
              {exercise3Cases.map((c, index) => (
                <Box key={c.id}>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
                    {c.case}
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={exercise3Answers[c.id]}
                      onChange={(e) => handleExercise3Change(c.id, e.target.value)}
                      row
                    >
                      {c.options.map((option, optionIndex) => (
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
              <Paper elevation={1} sx={{ p: 2, mt: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkExercise3Score() === 3 ? `🎉 Parfait ! Score: ${checkExercise3Score()}/3` : `📝 Score: ${checkExercise3Score()}/3 - Réponses correctes :`}
                </Typography>
                <Stack spacing={1}>
                  {exercise3Cases.map((c, index) => (
                    <Typography key={c.id} variant="body2">
                      <strong>{c.case} :</strong> {c.correctAnswer} ✅
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 4 */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧰 Exercice 4 — Construire une mini-SOP
            </Typography>
            <Typography paragraph>
              Sélectionnez les étapes dans le bon ordre pour une SOP de collecte :
            </Typography>

            <Typography variant="subtitle2" sx={{ mb: 2 }}>
              Étapes disponibles (sélectionnez dans l'ordre) :
            </Typography>

            <FormGroup>
              {sopSteps.map((step, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={exercise4Order.includes(step)}
                      onChange={() => handleSopStepToggle(step)}
                    />
                  }
                  label={`${exercise4Order.indexOf(step) + 1 || ''}. ${step}`}
                />
              ))}
            </FormGroup>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Ordre sélectionné :
              </Typography>
              {exercise4Order.length > 0 ? (
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {exercise4Order.map((step, index) => (
                    <Chip key={index} label={`${index + 1}. ${step}`} size="small" />
                  ))}
                </Stack>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Aucune étape sélectionnée
                </Typography>
              )}
            </Box>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={resetExercise4}
                >
                  Réinitialiser
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => setShowExercise4Answers(!showExercise4Answers)}
                >
                  {showExercise4Answers ? 'Masquer l\'ordre correct' : 'Voir l\'ordre correct'}
                </Button>
              </Stack>
            </Box>

            <Collapse in={showExercise4Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkExercise4Score() === 5 ? `🎉 Parfait ! Score: ${checkExercise4Score()}/5` : `📝 Score: ${checkExercise4Score()}/5 - Ordre correct :`}
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2">1. Formation des enquêteurs ✅</Typography>
                  <Typography variant="body2">2. Calibration du matériel ✅</Typography>
                  <Typography variant="body2">3. Ordre des tests standardisé ✅</Typography>
                  <Typography variant="body2">4. Contrôle de saisie ✅</Typography>
                  <Typography variant="body2">5. Sauvegarde sécurisée ✅</Typography>
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
            <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold' }}>
                Faire ✅
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Mapper chaque variable à un instrument validé" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Documenter validité/fiabilité et tester en pilote" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Standardiser la collecte (SOP, formation, aveuglement)" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Assurer contrôles qualité & sécurité des données" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Prévoir calendrier et traçabilité des mesures" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold' }}>
                Éviter ❌
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Mesurer 'au feeling' sans définition" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Utiliser un outil non adapté à la culture/langue" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Changer d'instrument en cours d'étude" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Oublier le dictionnaire de variables / codes manquants" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Passations inégales (biais d'observateur)" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>🚀 Prochaine étape (Étape 10)</AlertTitle>
        <strong>Plan d'analyse statistique :</strong> décrire précisément comment analyser les données (tests, modèles, gestion des manquants) pour répondre aux objectifs.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/methodologique/population-echantillon" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            PRÉCÉDENT : Étape 8 - Population et échantillonnage
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/methodologique/plan-analyse" sx={{ display: 'flex', alignItems: 'center' }}>
            SUIVANT : Étape 10 - Plan d'analyse statistique
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
