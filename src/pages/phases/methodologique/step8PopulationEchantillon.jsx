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
  FormLabel,
  Slider,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';
import { 
  ArrowForward, 
  Groups, 
  Calculate, 
  Science,
  Assignment,
  CheckCircle,
  Cancel,
  Quiz,
  Psychology,
  Functions,
  People,
  Timeline
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step8PopulationEchantillon() {
  const [showExercise1Answers, setShowExercise1Answers] = useState(false);
  const [showExercise2Answers, setShowExercise2Answers] = useState(false);
  const [showExercise3Answers, setShowExercise3Answers] = useState(false);
  
  // État pour l'exercice 1 - Plan d'échantillonnage
  const [exercise1Answers, setExercise1Answers] = useState({
    cas1: '',
    cas2: '',
    cas3: ''
  });

  // État pour l'exercice 2 - Calculs
  const [exercise2Inputs, setExercise2Inputs] = useState({
    prevalence_d: 0.05,
    prevalence_N: 1500,
    nonResponse: 20,
    prop1: 25,
    prop2: 15,
    power: 80
  });
  const [exercise2Results, setExercise2Results] = useState({
    nBase: 0,
    nCorr: 0,
    nFinal: 0,
    nPerGroup: 0
  });

  // État pour l'exercice 3 - Type de population
  const [exercise3Answers, setExercise3Answers] = useState({
    audit: '',
    cohorte: '',
    mortalite: ''
  });

  const exercise1Cases = [
    {
      id: 'cas1',
      case: 'Prévalence HAPI dans 12 hôpitaux',
      correctAnswer: 'Grappes à 2 degrés',
      options: ['Aléatoire simple', 'Stratifié', 'Grappes à 2 degrés', 'Systématique']
    },
    {
      id: 'cas2',
      case: 'Efficacité d\'une formation dans 1 service',
      correctAnswer: 'Aléatoire simple (si liste)',
      options: ['Aléatoire simple (si liste)', 'Stratifié', 'En grappes', 'Par quotas']
    },
    {
      id: 'cas3',
      case: 'Étudiants par niveau dans 4 IFSI',
      correctAnswer: 'Stratifié (niveau) + aléatoire',
      options: ['Aléatoire simple', 'Stratifié (niveau) + aléatoire', 'En grappes', 'De convenance']
    }
  ];

  const exercise3Cases = [
    {
      id: 'audit',
      case: 'Audit "un jour donné"',
      correctAnswer: 'Statique/transversal',
      options: ['Statique/transversal', 'Dynamique fermée', 'Dynamique ouverte']
    },
    {
      id: 'cohorte',
      case: 'Suivi 12 mois d\'une cohorte',
      correctAnswer: 'Dynamique fermée',
      options: ['Statique/transversal', 'Dynamique fermée', 'Dynamique ouverte']
    },
    {
      id: 'mortalite',
      case: 'Mortalité annuelle d\'une ville',
      correctAnswer: 'Dynamique ouverte',
      options: ['Statique/transversal', 'Dynamique fermée', 'Dynamique ouverte']
    }
  ];

  const handleExercise1Change = (casId, value) => {
    setExercise1Answers(prev => ({
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

  const calculateSampleSizes = () => {
    const { prevalence_d, prevalence_N, nonResponse, prop1, prop2, power } = exercise2Inputs;
    
    // Calcul 1: Prévalence (p=0.5, d=5%)
    const Z = 1.96;
    const p = 0.5;
    const d = prevalence_d;
    const nBase = Math.ceil((Z * Z * p * (1 - p)) / (d * d));
    
    // Correction population finie
    const nCorr = Math.ceil(nBase / (1 + (nBase - 1) / prevalence_N));
    
    // Ajustement non-réponse
    const nFinal = Math.ceil(nCorr / (1 - nonResponse / 100));
    
    // Calcul 2: Deux proportions
    const p1 = prop1 / 100;
    const p2 = prop2 / 100;
    const pBar = (p1 + p2) / 2;
    const Zbeta = power === 80 ? 0.84 : 1.28;
    
    const numerator = Math.pow(Z * Math.sqrt(2 * pBar * (1 - pBar)) + Zbeta * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2)), 2);
    const denominator = Math.pow(p1 - p2, 2);
    const nPerGroup = Math.ceil(numerator / denominator);
    
    setExercise2Results({
      nBase,
      nCorr,
      nFinal,
      nPerGroup
    });
  };

  const checkExercise1Score = () => {
    let score = 0;
    exercise1Cases.forEach(c => {
      if (exercise1Answers[c.id] === c.correctAnswer) {
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
      cas1: '',
      cas2: '',
      cas3: ''
    });
  };

  const resetExercise3 = () => {
    setExercise3Answers({
      audit: '',
      cohorte: '',
      mortalite: ''
    });
  };

  return (
    <Box component="section" sx={{ maxWidth: "1000px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase méthodologique — Étape 8
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Population, Échantillonnage, Taille d'échantillon
      </Typography>

      <Alert severity="info" icon={<Groups />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        <Typography paragraph>
          Définir <strong>qui sera étudié</strong> (population/cadre d'étude), <strong>comment les participants seront sélectionnés</strong> (plan d'échantillonnage) et <strong>combien en inclure</strong> (calcul de la taille d'échantillon) pour garantir des résultats valides, reproductibles et généralisables.
        </Typography>
      </Alert>

      <section aria-labelledby="concepts-heading">
        <Typography id="concepts-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📚 1) Concepts clés (clairs et opérationnels)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.light' }}>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>Terme</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>Définition pratique</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.contrastText' }}>Exemple santé</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Population cible</strong></TableCell>
                <TableCell>Ensemble théorique auquel on souhaite généraliser les résultats</TableCell>
                <TableCell>Tous les ≥65 ans vivant à domicile d'une région</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Population accessible / cadre d'étude</strong></TableCell>
                <TableCell>Sous-ensemble réellement accessible</TableCell>
                <TableCell>Les dossiers patients suivis par 5 centres de santé</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Critères d'inclusion/exclusion</strong></TableCell>
                <TableCell>Règles d'éligibilité pour garantir comparabilité/sécurité</TableCell>
                <TableCell>Inclusion : ≥65 ans, marche autonome ; Exclusion : démence sévère</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Unité d'échantillonnage</strong></TableCell>
                <TableCell>Élément tiré au sort (personne, ménage, service…)</TableCell>
                <TableCell>Patient ; ou "service" en sondage en grappes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Population statique</strong></TableCell>
                <TableCell>"Photo" d'un groupe à un moment donné</TableCell>
                <TableCell>Enquête transversale un jour donné</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Population dynamique</strong></TableCell>
                <TableCell>Groupe suivi dans le temps (entrées/sorties possibles)</TableCell>
                <TableCell>Cohorte sur 12 mois</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Cohorte (fermée)</strong></TableCell>
                <TableCell>Dynamique mais fermée après inclusion ; on suit les mêmes individus</TableCell>
                <TableCell>Suivi 6 mois de tous les inclus au départ</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="success" sx={{ my: 3 }}>
          <AlertTitle>💡 Règle d'or</AlertTitle>
          Définis d'abord la <strong>population cible</strong> → puis le <strong>cadre d'échantillonnage réaliste</strong> → puis les <strong>critères</strong>.
        </Alert>
      </section>

      <section aria-labelledby="plans-heading">
        <Typography id="plans-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🎯 2) Plans d'échantillonnage (choisir selon l'objectif et le terrain)
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          A. Probabilistes (représentativité statistique)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'success.light' }}>
                <TableCell sx={{ fontWeight: 'bold', color: 'success.contrastText' }}>Plan</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'success.contrastText' }}>Comment</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'success.contrastText' }}>Quand l'utiliser</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Aléatoire simple</strong></TableCell>
                <TableCell>Tirage au sort direct dans une liste complète</TableCell>
                <TableCell>Petite population avec liste fiable</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Systématique</strong></TableCell>
                <TableCell>1er tirage au hasard, puis 1 sur k</TableCell>
                <TableCell>Flux régulier (ex. dossiers, admissions)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Stratifié</strong></TableCell>
                <TableCell>Tirage séparé par strates (âge, sexe, service)</TableCell>
                <TableCell>Assurer la présence de sous-groupes clés</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>En grappes (clusters)</strong></TableCell>
                <TableCell>Tirer des groupes (écoles, services), puis tous/quelques individus</TableCell>
                <TableCell>Territoires étendus ; logistique limitée</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>À plusieurs degrés</strong></TableCell>
                <TableCell>Combinaison (ex. districts → centres → patients)</TableCell>
                <TableCell>Enquêtes populationnelles</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          B. Non probabilistes (quand la randomisation est impossible)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'warning.light' }}>
                <TableCell sx={{ fontWeight: 'bold', color: 'warning.contrastText' }}>Plan</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'warning.contrastText' }}>Comment</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'warning.contrastText' }}>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>De convenance</strong></TableCell>
                <TableCell>Qui est disponible</TableCell>
                <TableCell>Rapide mais biais de sélection</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Par quotas</strong></TableCell>
                <TableCell>Remplir des quotas par catégories</TableCell>
                <TableCell>Approche descriptive, prudence pour l'inférence</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Raisonné (purposive)</strong></TableCell>
                <TableCell>Sélection experte de cas typiques</TableCell>
                <TableCell>Études qualitatives, exploratoires</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell><strong>Boule de neige</strong></TableCell>
                <TableCell>Réseaux/chaines (populations difficiles d'accès)</TableCell>
                <TableCell>Biais d'homophilie, à déclarer</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="info" sx={{ my: 3 }}>
          <AlertTitle>⚖️ À retenir</AlertTitle>
          <strong>Priorité aux plans probabilistes</strong> pour l'inférence. Les non probabilistes restent utiles (pilotes, qualitatif, terrain contraint) mais déclare leurs limites.
        </Alert>
      </section>

      <section aria-labelledby="etapes-heading">
        <Typography id="etapes-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📋 3) Étapes pour définir "Population & Échantillon"
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 3, backgroundColor: "info.light" }}>
          <List sx={{ color: "info.contrastText" }}>
            {[
              "Écris ta question PICOT (Étapes 2–6)",
              "Décris la population cible (qui, où, quand)",
              "Précise le cadre d'étude (bases de sondage, registres, services)",
              "Fixe inclusion/exclusion (cliniques, géo-temporelles, sécurité)",
              "Choisis le plan d'échantillonnage (probabiliste si possible)",
              "Anticipe non-réponse/attrition (taux attendu, relances)",
              "Calcule la taille d'échantillon (voir section 4)",
              "Documente la logistique (qui tire ? comment ? traçabilité ?)"
            ].map((step, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Chip label={index + 1} size="small" sx={{ backgroundColor: 'info.contrastText', color: 'info.main' }} />
                </ListItemIcon>
                <ListItemText primary={step} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </section>

      <section aria-labelledby="formules-heading">
        <Typography id="formules-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📐 4) Taille d'échantillon — principes & formules utiles
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          Paramètres communs
        </Typography>

        <Grid container spacing={2} sx={{ my: 2 }}>
          {[
            { param: "Risque α", value: "5% par défaut, Zα/2=1,96", color: "primary" },
            { param: "Puissance 1−β", value: "80% → Zβ=0,84 ; 90% → 1,28", color: "secondary" },
            { param: "Effet recherché Δ", value: "Différence minimale cliniquement pertinente", color: "warning" },
            { param: "Variabilité", value: "Écart-type σ, proportion p", color: "info" },
            { param: "Type de plan", value: "Individuel vs grappes → design effect", color: "success" },
            { param: "Ajustements", value: "Non-réponse, attrition, correction population finie", color: "error" }
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={1} sx={{ backgroundColor: `${item.color}.light`, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: `${item.color}.contrastText`, mb: 1 }}>
                    {item.param}
                  </Typography>
                  <Typography variant="body2" sx={{ color: `${item.color}.contrastText` }}>
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" component="h4" sx={{ mt: 4, mb: 2 }}>
          A. Estimer une prévalence (en transversal)
        </Typography>

        <Paper elevation={1} sx={{ p: 3, my: 2, backgroundColor: 'grey.50' }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            n = Z² × p(1-p) / d²
          </Typography>
          <Typography variant="body2" paragraph>
            • <strong>p</strong> : proportion attendue (si inconnue, 0,5 = pire cas)
            <br />• <strong>d</strong> : précision (marge d'erreur), ex. 0,05
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            <strong>Exemple :</strong> Z=1,96, p=0,5, d=0,05 ⇒ n ≈ 384
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <strong>Correction population finie</strong> (si N est petit) : n_corr = n / (1 + (n-1)/N)
          </Typography>
        </Paper>

        <Typography variant="h6" component="h4" sx={{ mt: 4, mb: 2 }}>
          B. Comparer deux proportions (ECR, quasi-exp, cohorte, cas-témoins)
        </Typography>

        <Paper elevation={1} sx={{ p: 3, my: 2, backgroundColor: 'grey.50' }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontSize: '0.9rem' }}>
            n/gpe ≈ (Zα/2√[2p̄(1-p̄)] + Zβ√[p₁(1-p₁)+p₂(1-p₂)])² / (p₁-p₂)²
          </Typography>
          <Typography variant="body2" paragraph>
            • <strong>p₁, p₂</strong> : proportions attendues (contrôle vs intervention)
            <br />• <strong>p̄ = (p₁+p₂)/2</strong>
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            <strong>Exemple (prévention des chutes) :</strong> p₁=0,30 (témoin) vs p₂=0,21 (-30% relatif), α=5%, puissance=80% → ≈ 367 / groupe.
            <br />Avec 10% de pertes : ≈ 408 / groupe.
          </Typography>
        </Paper>

        <Typography variant="h6" component="h4" sx={{ mt: 4, mb: 2 }}>
          C. Comparer deux moyennes (score d'équilibre, etc.)
        </Typography>

        <Paper elevation={1} sx={{ p: 3, my: 2, backgroundColor: 'grey.50' }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            n/gpe ≈ 2(Zα/2 + Zβ)² × σ² / Δ²
          </Typography>
          <Typography variant="body2">
            • <strong>σ</strong> : écart-type (pilote/littérature)
            <br />• <strong>Δ</strong> : différence minimale cliniquement pertinente
          </Typography>
        </Paper>

        <Typography variant="h6" component="h4" sx={{ mt: 4, mb: 2 }}>
          D. Sondage en grappes (écoles, services)
        </Typography>

        <Paper elevation={1} sx={{ p: 3, my: 2, backgroundColor: 'grey.50' }}>
          <Typography variant="body2" paragraph>
            <strong>Effet de plan :</strong> DEFF = 1 + (m-1) × ICC
            <br />• <strong>m</strong> : taille moyenne de grappe
            <br />• <strong>ICC</strong> : corrélation intra-grappe (0,01–0,05 en pratique)
          </Typography>
          <Typography variant="body2">
            <strong>Échantillon effectif :</strong> n_final = n_théorique × DEFF
            <br />Puis gonfle pour la non-réponse (ex. n/0,85 si 15% de non-réponse)
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="exemples-heading">
        <Typography id="exemples-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          💼 5) Exemples-guides (rapides)
        </Typography>

        <Grid container spacing={3} sx={{ my: 3 }}>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ height: '100%', backgroundColor: 'success.light' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'success.contrastText', mb: 2 }}>
                  ✅ Exemple 1 — Enquête de prévalence
                </Typography>
                <Typography variant="body2" sx={{ color: 'success.contrastText' }}>
                  <strong>Objectif :</strong> prévalence des escarres (d=5%, p inconnu → 0,5)
                  <br />n ≈ 384
                  <br />Population finie N=1200 → n_corr ≈ 291
                  <br />Non-réponse 10% → ≈ 324 à recruter
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ height: '100%', backgroundColor: 'info.light' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'info.contrastText', mb: 2 }}>
                  ✅ Exemple 2 — ECR exercices vs soins usuels
                </Typography>
                <Typography variant="body2" sx={{ color: 'info.contrastText' }}>
                  <strong>Objectif :</strong> deux proportions
                  <br />Contrôle p₁=0,30 ; Intervention p₂=0,21
                  <br />α=5%, 80% puissance
                  <br />≈ 367 par groupe ; pertes 10% → ≈ 408 par groupe
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ height: '100%', backgroundColor: 'warning.light' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'warning.contrastText', mb: 2 }}>
                  ✅ Exemple 3 — Clusters (services)
                </Typography>
                <Typography variant="body2" sx={{ color: 'warning.contrastText' }}>
                  <strong>Objectif :</strong> services hospitaliers
                  <br />n théorique = 384 ; m=20, ICC=0,02
                  <br />DEFF = 1+(19×0,02) = 1,38
                  <br />n_final = 384×1,38 ≈ 530
                  <br />Réponse 85% → ≈ 624 à prévoir
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>

      <section aria-labelledby="checklist-heading">
        <Typography id="checklist-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ✅ 6) Check-list qualité (à mettre dans le protocole)
        </Typography>

        <List sx={{ my: 3 }}>
          {[
            "Population cible & cadre : clairement décrits",
            "Inclusion/Exclusion : justifiés (sécurité, comparabilité, équité)",
            "Plan d'échantillonnage : probabiliste si possible, traçable",
            "Taille d'échantillon : formule, hypothèses, sources (pilote/littérature)",
            "Ajustements : design effect, non-réponse, attrition",
            "Éthique : pas de critères discriminatoires injustifiés ; consentement adapté",
            "Logistique : qui tire ? procédure d'appel/remplacement ? suivi des pertes"
          ].map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircle color="success" />
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
              🎮 Exercice 1 — « Quel plan d'échantillonnage ? »
            </Typography>
            <Typography paragraph>
              Associe chaque objectif au plan d'échantillonnage approprié :
            </Typography>

            <Stack spacing={3}>
              {exercise1Cases.map((c, index) => (
                <Box key={c.id}>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
                    {c.case}
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={exercise1Answers[c.id]}
                      onChange={(e) => handleExercise1Change(c.id, e.target.value)}
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
                  {index < exercise1Cases.length - 1 && <Divider sx={{ mt: 2 }} />}
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
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: checkExercise1Score() === 3 ? 'success.light' : 'warning.light' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkExercise1Score() === 3 ? `🎉 Parfait ! Score: ${checkExercise1Score()}/3` : `📝 Score: ${checkExercise1Score()}/3 - Réponses correctes :`}
                </Typography>
                <Stack spacing={1}>
                  {exercise1Cases.map((c, index) => (
                    <Typography key={c.id} variant="body2">
                      <strong>{c.case} :</strong> {c.correctAnswer} ✅
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
              🧩 Exercice 2 — « Calcule vite ! »
            </Typography>
            <Typography paragraph>
              Utilise les paramètres ci-dessous pour calculer les tailles d'échantillon :
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Paramètres :
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>Précision prévalence (d) :</Typography>
                    <Slider
                      value={exercise2Inputs.prevalence_d * 100}
                      onChange={(e, value) => setExercise2Inputs(prev => ({ ...prev, prevalence_d: value / 100 }))}
                      min={1}
                      max={10}
                      step={0.5}
                      marks={[{value: 5, label: '5%'}]}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `${value}%`}
                    />
                  </Box>

                  <TextField
                    label="Population finie (N)"
                    type="number"
                    value={exercise2Inputs.prevalence_N}
                    onChange={(e) => setExercise2Inputs(prev => ({ ...prev, prevalence_N: parseInt(e.target.value) || 1500 }))}
                    fullWidth
                  />

                  <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>Taux de non-réponse :</Typography>
                    <Slider
                      value={exercise2Inputs.nonResponse}
                      onChange={(e, value) => setExercise2Inputs(prev => ({ ...prev, nonResponse: value }))}
                      min={0}
                      max={50}
                      step={5}
                      marks={[{value: 20, label: '20%'}]}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `${value}%`}
                    />
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="Proportion 1 (%)"
                        type="number"
                        value={exercise2Inputs.prop1}
                        onChange={(e) => setExercise2Inputs(prev => ({ ...prev, prop1: parseInt(e.target.value) || 25 }))}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Proportion 2 (%)"
                        type="number"
                        value={exercise2Inputs.prop2}
                        onChange={(e) => setExercise2Inputs(prev => ({ ...prev, prop2: parseInt(e.target.value) || 15 }))}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <FormControl fullWidth>
                    <InputLabel>Puissance</InputLabel>
                    <Select
                      value={exercise2Inputs.power}
                      onChange={(e) => setExercise2Inputs(prev => ({ ...prev, power: e.target.value }))}
                      label="Puissance"
                    >
                      <MenuItem value={80}>80%</MenuItem>
                      <MenuItem value={90}>90%</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Résultats :
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={calculateSampleSizes}
                  sx={{ mb: 2 }}
                  startIcon={<Calculate />}
                >
                  Calculer
                </Button>

                {exercise2Results.nBase > 0 && (
                  <Paper elevation={1} sx={{ p: 2, backgroundColor: 'success.light' }}>
                    <Typography variant="body2" sx={{ color: 'success.contrastText' }}>
                      <strong>Prévalence inconnue (p=0.5) :</strong>
                      <br />• n de base : {exercise2Results.nBase}
                      <br />• Avec correction finie : {exercise2Results.nCorr}
                      <br />• Avec non-réponse : {exercise2Results.nFinal}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2" sx={{ color: 'success.contrastText' }}>
                      <strong>Deux proportions ({exercise2Inputs.prop1}% vs {exercise2Inputs.prop2}%) :</strong>
                      <br />• n par groupe : {exercise2Results.nPerGroup}
                    </Typography>
                  </Paper>
                )}
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => setShowExercise2Answers(!showExercise2Answers)}
              >
                {showExercise2Answers ? 'Masquer l\'explication' : 'Voir l\'explication des formules'}
              </Button>
            </Box>

            <Collapse in={showExercise2Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: 'info.light' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: 'info.contrastText' }}>
                  💡 Formules utilisées :
                </Typography>
                <Typography variant="body2" sx={{ color: 'info.contrastText' }}>
                  <strong>1. Prévalence :</strong> n = Z² × p(1-p) / d² = 1,96² × 0,5 × 0,5 / d²
                  <br /><strong>2. Correction finie :</strong> n_corr = n / (1 + (n-1)/N)
                  <br /><strong>3. Non-réponse :</strong> n_final = n_corr / (1 - taux_non_réponse)
                  <br /><strong>4. Deux proportions :</strong> Formule complexe avec Z_α/2 et Z_β
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
              Identifie le type de population pour chaque situation :
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
                  {checkExercise3Score() === 3 ? `🎉 Excellent ! Score: ${checkExercise3Score()}/3` : `📝 Score: ${checkExercise3Score()}/3 - Réponses correctes :`}
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
                  <ListItemText primary="Définir population cible → cadre accessible" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Choisir un plan probabiliste si l'inférence est visée" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Justifier la taille (formule + hypothèses)" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Ajuster pour DEFF, non-réponse, attrition" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Documenter traçabilité & éthique" />
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
                  <ListItemText primary="Lancer l'enquête sans base de sondage claire" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Suréchantillonner par convenance" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Un « n » arbitraire (« parce que 100, c'est rond »)" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Oublier les pertes au suivi" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Critères d'exclusion non justifiés" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>🚀 Prochaine étape (Étape 9)</AlertTitle>
        <strong>Instruments de mesure & collecte des données :</strong> choix/validation des outils, procédures de recueil, pré-test/pilote, et plan de gestion de la qualité.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/methodologique/type-etude" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            PRÉCÉDENT : Étape 7 - Type d'étude
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/methodologique/instruments-collecte" sx={{ display: 'flex', alignItems: 'center' }}>
            SUIVANT : Étape 9 - Instruments de mesure
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
