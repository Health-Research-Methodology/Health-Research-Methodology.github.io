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
  Slider,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';
import { 
  ArrowForward, 
  Groups, 
  Calculate,
  CheckCircle
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Composant pour afficher une formule mathématique dans une boîte stylée
const FormulaBox = ({ formula, color = 'primary.main', size = 'large' }) => {
  const fontSize = size === 'large' ? '1.5rem' : size === 'medium' ? '1.2rem' : '1rem';
  
  return (
    <Box sx={{ 
      textAlign: 'center', 
      py: 2, 
      backgroundColor: 'white', 
      borderRadius: 1, 
      border: '2px solid', 
      borderColor: color, 
      mb: 2,
      '& .katex': {
        fontSize: fontSize
      }
    }}>
      <BlockMath math={formula} />
    </Box>
  );
};

// Composant pour les formules plus petites (ajustements)
const SmallFormulaBox = ({ formula }) => {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      py: 1, 
      backgroundColor: 'grey.100', 
      borderRadius: 1, 
      border: '1px solid', 
      borderColor: 'grey.300',
      '& .katex': {
        fontSize: '1rem'
      }
    }}>
      <BlockMath math={formula} />
    </Box>
  );
};

export default function Step8PopulationEchantillon() {
  const [showExercise1Answers, setShowExercise1Answers] = useState(false);
  const [showExercise2Answers, setShowExercise2Answers] = useState(false);
  const [showExercise3Answers, setShowExercise3Answers] = useState(false);
  const [showExercise4Answers, setShowExercise4Answers] = useState(false);
  const [showExercise5Answers, setShowExercise5Answers] = useState(false);

  // État pour l'exercice 1 - Plan d'échantillonnage
  const [exercise1Answers, setExercise1Answers] = useState({
    cas1: '',
    cas2: '',
    cas3: ''
  });

  // État pour l'exercice 2 - Calculs de tailles
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

  // État exercice 3 - Type de population
  const [exercise3Answers, setExercise3Answers] = useState({
    audit: '',
    cohorte: '',
    mortalite: ''
  });

  // Exercice 4 — systématique (k)
  const [sysInputs, setSysInputs] = useState({ N: 1200, n: 120, start: 7 });
  const [sysResult, setSysResult] = useState({ k: 10, sample: [] });

  // Exercice 5 — DEFF en grappes
  const [deffInputs, setDeffInputs] = useState({ n0: 384, m: 20, icc: 0.02, response: 85 });
  const [deffResult, setDeffResult] = useState({ deff: 1.38, nFinal: 624 });

  const exercise1Cases = [
    {
      id: 'cas1',
      case: 'Prévalence HAPI dans 12 hôpitaux',
      correctAnswer: 'Grappes à 2 degrés',
      options: ['Aléatoire simple', 'Stratifié', 'Grappes à 2 degrés', 'Systématique']
    },
    {
      id: 'cas2',
      case: "Efficacité d'une formation dans 1 service",
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
      case: "Suivi 12 mois d'une cohorte",
      correctAnswer: 'Dynamique fermée',
      options: ['Statique/transversal', 'Dynamique fermée', 'Dynamique ouverte']
    },
    {
      id: 'mortalite',
      case: 'Mortalité annuelle d’une ville',
      correctAnswer: 'Dynamique ouverte',
      options: ['Statique/transversal', 'Dynamique fermée', 'Dynamique ouverte']
    }
  ];

  const handleExercise1Change = (casId, value) => {
    setExercise1Answers(prev => ({ ...prev, [casId]: value }));
  };

  const handleExercise3Change = (casId, value) => {
    setExercise3Answers(prev => ({ ...prev, [casId]: value }));
  };

  const calculateSampleSizes = () => {
    const { prevalence_d, prevalence_N, nonResponse, prop1, prop2, power } = exercise2Inputs;
    const Z = 1.96; // 95%
    const p = 0.5;  // pire cas
    const d = prevalence_d;

    // Prévalence
    const nBase = Math.ceil((Z * Z * p * (1 - p)) / (d * d));
    const nCorr = Math.ceil(nBase / (1 + (nBase - 1) / Math.max(1, prevalence_N)));
    const nFinal = Math.ceil(nCorr / (1 - Math.min(99, Math.max(0, nonResponse)) / 100));

    // Deux proportions
    const p1 = Math.min(0.99, Math.max(0.01, prop1 / 100));
    const p2 = Math.min(0.99, Math.max(0.01, prop2 / 100));
    const pBar = (p1 + p2) / 2;
    const Zbeta = power === 90 ? 1.28 : 0.84;
    const num = Math.pow(Z * Math.sqrt(2 * pBar * (1 - pBar)) + Zbeta * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2)), 2);
    const den = Math.pow(p1 - p2, 2) || 1e-9;
    const nPerGroup = Math.ceil(num / den);

    setExercise2Results({ nBase, nCorr, nFinal, nPerGroup });
  };

  const checkExercise1Score = () => {
    let score = 0;
    exercise1Cases.forEach(c => { if (exercise1Answers[c.id] === c.correctAnswer) score += 1; });
    return score;
  };

  const checkExercise3Score = () => {
    let score = 0;
    exercise3Cases.forEach(c => { if (exercise3Answers[c.id] === c.correctAnswer) score += 1; });
    return score;
  };

  const resetExercise1 = () => setExercise1Answers({ cas1: '', cas2: '', cas3: '' });
  const resetExercise3 = () => setExercise3Answers({ audit: '', cohorte: '', mortalite: '' });

  // Calcul Exercice 4 — systématique
  const calcSystematic = () => {
    const N = Math.max(1, parseInt(sysInputs.N) || 1);
    const n = Math.max(1, parseInt(sysInputs.n) || 1);
    const start = Math.max(1, Math.min(N, parseInt(sysInputs.start) || 1));
    const k = Math.max(1, Math.floor(N / n));
    const sample = [];
    for (let val = start; val <= N; val += k) sample.push(val);
    setSysResult({ k, sample: sample.slice(0, n) });
  };

  // Calcul Exercice 5 — DEFF
  const calcDeff = () => {
    const n0 = Math.max(1, parseInt(deffInputs.n0) || 1);
    const m = Math.max(1, parseInt(deffInputs.m) || 1);
    const icc = Math.max(0, Math.min(1, parseFloat(deffInputs.icc) || 0));
    const response = Math.max(1, Math.min(100, parseInt(deffInputs.response) || 85));
    const deff = +(1 + (m - 1) * icc).toFixed(2);
    const nDesign = Math.ceil(n0 * deff);
    const nFinal = Math.ceil(nDesign / (response / 100));
    setDeffResult({ deff, nFinal });
  };

  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase méthodologique — Étape 8
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Population, Échantillonnage, Taille d'échantillon
      </Typography>

      <Alert severity="info" icon={<Groups />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        <Typography paragraph>
          Savoir comment <strong>choisir les participants</strong> d’une étude de recherche en santé pour que les résultats soient
          <strong> fiables</strong>, <strong>représentatifs</strong> et <strong>généralisables</strong> à la population cible.
        </Typography>
      </Alert>

      {/* 1) Logique & définitions */}
      <section aria-labelledby="logic-heading">
        <Typography id="logic-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧩 1) Comprendre la logique de l’échantillonnage
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Terme</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Définition simple</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Exemple santé</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Population cible</strong></TableCell>
                <TableCell>Groupe auquel on veut appliquer les résultats</TableCell>
                <TableCell>Tous les adultes d’une ville</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: (t) => t.palette.grey[50] }}>
                <TableCell><strong>Population accessible</strong></TableCell>
                <TableCell>Groupe qu’on peut effectivement atteindre</TableCell>
                <TableCell>Adultes suivis dans les CS d’Oujda</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Cadre d’échantillonnage</strong></TableCell>
                <TableCell>Liste utilisée pour tirer les participants</TableCell>
                <TableCell>Registre des patients du centre</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: (t) => t.palette.grey[50] }}>
                <TableCell><strong>Échantillon</strong></TableCell>
                <TableCell>Sous-groupe de la population étudié</TableCell>
                <TableCell>400 adultes tirés au sort</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="success" sx={{ my: 3 }}>
          <AlertTitle>💡 Règle d'or</AlertTitle>
          Définir d’abord la <strong>population d’étude</strong> (qui, où, quand) → le <strong>cadre</strong> → les <strong>critères d’inclusion/exclusion</strong>.
        </Alert>
      </section>

      {/* 2) Étapes à suivre */}
      <section aria-labelledby="etapes-heading">
        <Typography id="etapes-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧭 2) Étapes à suivre
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 3 }}>
          <List>
            {[
              "1️⃣ Définir la population d’étude : qui est concerné, où et quand ?",
              "2️⃣ Choisir la méthode d’échantillonnage : aléatoire, stratifié, grappes…",
              "3️⃣ Calculer la taille d’échantillon : combien de sujets sont nécessaires ?",
              "4️⃣ Tirer les participants selon la méthode choisie.",
              "5️⃣ Contrôler les biais (non-réponses, mauvaise représentativité)."
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

      {/* 3) Méthodes d'échantillonnage */}
      <section aria-labelledby="plans-heading">
        <Typography id="plans-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧮 3) Les grandes méthodes d’échantillonnage
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          A. Méthodes probabilistes (pour l’inférence)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Principe</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Exemple santé</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Aléatoire simple</strong></TableCell>
                <TableCell>Tirage pur au hasard</TableCell>
                <TableCell>100 patients sur 1 000 tirés via Excel</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: (t) => t.palette.grey[50] }}>
                <TableCell><strong>Stratifié</strong></TableCell>
                <TableCell>Strates homogènes (âge, sexe…) puis tirage dans chaque strate</TableCell>
                <TableCell>Étude diabète : 50 % hommes, 50 % femmes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Par grappes (clusters)</strong></TableCell>
                <TableCell>Tirage de groupes (écoles, services), puis inclusion de tous/quelques sujets</TableCell>
                <TableCell>10 écoles sélectionnées → tous les élèves</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: (t) => t.palette.grey[50] }}>
                <TableCell><strong>À plusieurs degrés</strong></TableCell>
                <TableCell>District → école → classe → élèves (PPS possible)</TableCell>
                <TableCell>Enquête OMS à deux degrés</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Paper elevation={0} sx={{ p: 2, borderLeft: '4px solid', borderColor: 'primary.main', bgcolor: (t)=>t.palette.grey[50] }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>🔎 Définitions-clés (théorie, niveau requis)</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Stratifié :</strong> diviser la population en <em>strates homogènes</em> et tirer au hasard dans chaque strate, souvent proportionnellement, pour <em>garantir la représentativité</em> des sous-groupes.
            <br/>
            <strong>OMS à deux degrés (PPS) :</strong> 1) tirage des grappes (ex. services, villages) <em>proportionnel à leur taille</em> ; 2) tirage aléatoire d’unités dans chaque grappe.
          </Typography>
        </Paper>

        <Typography variant="h6" component="h4" sx={{ mt: 4, mb: 2 }}>
          B. Méthodes non probabilistes (exploratoires)
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Principe</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Exemple santé</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>De convenance</strong></TableCell>
                <TableCell>Sujets les plus accessibles</TableCell>
                <TableCell>Patients venus en consultation</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: (t) => t.palette.grey[50] }}>
                <TableCell><strong>De volontaires</strong></TableCell>
                <TableCell>Participation libre (biais possible)</TableCell>
                <TableCell>Étude en ligne sur le stress</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Par quotas</strong></TableCell>
                <TableCell>Respect de proportions (âge, sexe)</TableCell>
                <TableCell>Enquête de satisfaction</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: (t) => t.palette.grey[50] }}>
                <TableCell><strong>Boule de neige</strong></TableCell>
                <TableCell>Chaque participant recrute un autre</TableCell>
                <TableCell>Usagers de drogues</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="info" sx={{ my: 3 }}>
          <AlertTitle>⚖️ À retenir</AlertTitle>
          <strong>Priorité aux plans probabilistes</strong> pour l’inférence. Les non probabilistes sont utiles pour pilotes/qualitatif, mais leurs limites doivent être <strong>déclarées</strong>.
        </Alert>
      </section>

      {/* 4) Taille d'échantillon */}
      <section aria-labelledby="formules-heading">
        <Typography id="formules-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📏 4) Calcul de la taille d’échantillon
        </Typography>

        <Paper elevation={1} sx={{ p: 3, my: 2, backgroundColor: (t)=>t.palette.grey[50] }}>
                    {/* Formule 1: Étude descriptive */}
          <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            A. Étude descriptive (estimation d'une proportion)
          </Typography>
          
          <FormulaBox 
            formula="n = Z_{\\alpha/2}^2 \\times p(1-p) / d^2"
            color="primary.main"
            size="large"
          />

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                <strong>Paramètres :</strong>
                <br/>• Z<sub>α/2</sub> : quantile normal (1,96 pour 95%)
                <br/>• p : proportion attendue (0,5 si inconnue)
                <br/>• d : marge d'erreur acceptée (ex. 0,05)
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                <strong>Exemple :</strong>
                <br/>Z=1,96, p=0,5, d=0,05
                <br/>⟹ n = (1,96)² × 0,5 × 0,5 / (0,05)²
                <br/>⟹ n ≈ 384 sujets
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
            <strong>Ajustements :</strong>
          </Typography>
          <Stack spacing={2} sx={{ mb: 3 }}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>1. Correction population finie :</strong>
              </Typography>
              <SmallFormulaBox formula="n_{corr} = \\frac{n}{1 + \\frac{n-1}{N}}" />
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>2. Majoration pour non-réponse :</strong>
              </Typography>
              <SmallFormulaBox formula="n_{final} = \\frac{n_{corr}}{1 - taux\_non\_réponse}" />
            </Box>
          </Stack>

          <Divider sx={{ my: 3 }}/>

          {/* Formule 2: Deux proportions */}
          <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            B. Comparaison de deux proportions (ECR, cohorte, cas-témoins)
          </Typography>
          
          <FormulaBox 
            formula="n_{par \\, groupe} = \\frac{\\left[Z_{\\alpha/2}\\sqrt{2\\bar{p}(1-\\bar{p})} + Z_{\\beta}\\sqrt{p_1(1-p_1) + p_2(1-p_2)}\\right]^2}{(p_1-p_2)^2}"
            color="secondary.main"
            size="medium"
          />

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                <strong>Paramètres :</strong>
                <br/>• Z<sub>α/2</sub> : risque α (1,96 pour 5%)
                <br/>• Z<sub>β</sub> : puissance (0,84 pour 80%)
                <br/>• p₁, p₂ : proportions dans chaque groupe
                <br/>• p̄ = (p₁+p₂)/2 : proportion poolée
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                <strong>Exemple :</strong>
                <br/>p₁=30% (contrôle), p₂=21% (intervention)
                <br/>α=5%, puissance=80%
                <br/>⟹ ≈ 367 sujets par groupe
                <br/>+10% pertes ⟹ ≈ 408/groupe
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }}/>

          {/* Formule 3: Deux moyennes */}
          <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            C. Comparaison de deux moyennes (variables continues)
          </Typography>
          
          <FormulaBox 
            formula="n_{par \\, groupe} = \\frac{2(Z_{\\alpha/2} + Z_{\\beta})^2 \\times \\sigma^2}{\\Delta^2}"
            color="success.main"
            size="large"
          />

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                <strong>Paramètres :</strong>
                <br/>• σ : écart-type (littérature/pilote)
                <br/>• Δ : différence cliniquement significative
                <br/>• Z<sub>α/2</sub>, Z<sub>β</sub> : comme précédemment
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                <strong>Exemple :</strong>
                <br/>Score d'équilibre : σ=15
                <br/>Δ=8 points (cliniquement pertinent)
                <br/>α=5%, puissance=80%
                <br/>⟹ ≈ 56 sujets par groupe
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }}/>

          {/* Formule 4: Sondage en grappes */}
          <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            D. Sondage en grappes (clusters)
          </Typography>
          
          <FormulaBox 
            formula="DEFF = 1 + (m-1) \\times ICC"
            color="warning.main"
            size="large"
          />

          <SmallFormulaBox formula="n_{ajusté} = n_{théorique} \\times DEFF" />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                <strong>Paramètres :</strong>
                <br/>• m : taille moyenne des grappes
                <br/>• ICC : corrélation intra-grappe (0,01–0,05)
                <br/>• DEFF : design effect (effet de plan)
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                <strong>Exemple :</strong>
                <br/>n théorique = 384
                <br/>m=20 patients/service, ICC=0,02
                <br/>DEFF = 1+(19×0,02) = 1,38
                <br/>⟹ n = 384×1,38 ≈ 530 sujets
              </Typography>
            </Grid>
          </Grid>

          <Alert severity="info" sx={{ mt: 2 }}>
            <Typography variant="body2">
              <strong>Note :</strong> Plus l'ICC est élevé ou les grappes sont grandes, plus il faut augmenter la taille d'échantillon par rapport à un sondage aléatoire simple.
            </Typography>
          </Alert>
        </Paper>
      </section>

      {/* 5) Exemples rapides */}
      <section aria-labelledby="exemples-heading">
        <Typography id="exemples-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧪 5) Exemples-guides (rapides)
        </Typography>

        <Grid container spacing={3} sx={{ my: 3 }}>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ✅ Enquête de prévalence
                </Typography>
                <Typography variant="body2">
                  d=5%, p inconnu → p=0,5 → n ≈ 384
                  <br/>N=1200 → n<sub>corr</sub> ≈ 291
                  <br/>Non-réponse 10% → ≈ 324 à recruter
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ✅ ECR (deux proportions)
                </Typography>
                <Typography variant="body2">
                  p₁=0,30 ; p₂=0,21 ; α=5% ; 80% puissance
                  <br/>≈ 367/groupe ; +10% pertes → ≈ 408/groupe
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ✅ Clusters (services)
                </Typography>
                <Typography variant="body2">
                  n=384 ; m=20 ; ICC=0,02 → DEFF=1,38
                  <br/>n×DEFF ≈ 530 ; réponse 85% → ≈ 624
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>

      {/* 6) Check-list */}
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

      {/* 7) Exercices interactifs */}
      <section aria-labelledby="exercises-heading">
        <Typography id="exercises-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ✏️ 7) Activités interactives
        </Typography>

        {/* Exercice 1 */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🎮 Exercice 1 — « Quel plan d'échantillonnage ? »
            </Typography>
            <Typography paragraph>
              Associe chaque objectif au plan approprié :
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
                <Button variant="outlined" color="secondary" onClick={resetExercise1}>
                  Réinitialiser
                </Button>
                <Button variant="contained" color="primary" onClick={() => setShowExercise1Answers(!showExercise1Answers)}>
                  {showExercise1Answers ? 'Masquer les réponses' : 'Vérifier mes réponses'}
                </Button>
              </Stack>
            </Box>

            <Collapse in={showExercise1Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: (t)=> (checkExercise1Score() === 3 ? t.palette.success.light : t.palette.warning.light) }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkExercise1Score() === 3 ? `🎉 Parfait ! Score: ${checkExercise1Score()}/3` : `📝 Score: ${checkExercise1Score()}/3 - Réponses correctes :`}
                </Typography>
                <Stack spacing={1}>
                  {exercise1Cases.map((c) => (
                    <Typography key={c.id} variant="body2">
                      <strong>{c.case} :</strong> {c.correctAnswer} ✅
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 2 — tailles */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧩 Exercice 2 — « Calcule vite ! »
            </Typography>
            <Typography paragraph>Utilise les paramètres ci-dessous :</Typography>

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
                  <Paper elevation={1} sx={{ p: 2 }}>
                    <Typography variant="body2">
                      <strong>Prévalence inconnue (p=0.5) :</strong>
                      <br />• n de base : {exercise2Results.nBase}
                      <br />• Avec correction finie : {exercise2Results.nCorr}
                      <br />• Avec non-réponse : {exercise2Results.nFinal}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2">
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
                {showExercise2Answers ? "Masquer l'explication" : "Voir l'explication des formules"}
              </Button>
            </Box>

            <Collapse in={showExercise2Answers}>
              <Paper elevation={1} sx={{ p: 3, mt: 3, backgroundColor: 'grey.50' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  💡 Formules utilisées :
                </Typography>
                
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>1. Prévalence :</Typography>
                    <Box sx={{ textAlign: 'center', py: 1, backgroundColor: 'white', borderRadius: 1, border: '1px solid', borderColor: 'primary.main' }}>
                      <BlockMath math="n = Z_{\\alpha/2}^2 \\times p(1-p) / d^2" />
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>2. Correction finie :</Typography>
                    <Box sx={{ textAlign: 'center', py: 1, backgroundColor: 'white', borderRadius: 1, border: '1px solid', borderColor: 'grey.400' }}>
                      <BlockMath math="n_{corr} = \\frac{n}{1 + \\frac{n-1}{N}}" />
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>3. Non-réponse :</Typography>
                    <Box sx={{ textAlign: 'center', py: 1, backgroundColor: 'white', borderRadius: 1, border: '1px solid', borderColor: 'grey.400' }}>
                      <BlockMath math="n_{final} = \\frac{n_{corr}}{1 - taux\_non\_réponse}" />
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>4. Deux proportions :</Typography>
                    <Box sx={{ textAlign: 'center', py: 1, backgroundColor: 'white', borderRadius: 1, border: '1px solid', borderColor: 'secondary.main' }}>
                      <BlockMath math="n_{groupe} = \\frac{\\left[Z_{\\alpha/2}\\sqrt{2\\bar{p}(1-\\bar{p})} + Z_{\\beta}\\sqrt{p_1(1-p_1) + p_2(1-p_2)}\\right]^2}{(p_1-p_2)^2}" />
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 3 — statique/dynamique */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧠 Exercice 3 — « Statique ou dynamique ? »
            </Typography>
            <Typography paragraph>Identifie le type de population :</Typography>

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
                <Button variant="outlined" color="secondary" onClick={resetExercise3}>
                  Réinitialiser
                </Button>
                <Button variant="contained" color="primary" onClick={() => setShowExercise3Answers(!showExercise3Answers)}>
                  {showExercise3Answers ? 'Masquer les réponses' : 'Vérifier mes réponses'}
                </Button>
              </Stack>
            </Box>

            <Collapse in={showExercise3Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: (t)=> (checkExercise3Score() === 3 ? t.palette.success.light : t.palette.warning.light) }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkExercise3Score() === 3 ? `🎉 Excellent ! Score: ${checkExercise3Score()}/3` : `📝 Score: ${checkExercise3Score()}/3 - Réponses correctes :`}
                </Typography>
                <Stack spacing={1}>
                  {exercise3Cases.map((c) => (
                    <Typography key={c.id} variant="body2">
                      <strong>{c.case} :</strong> {c.correctAnswer} ✅
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 4 — Systématique k */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧮 Exercice 4 — Systématique : calcule k et la séquence
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="N (taille du cadre)"
                  type="number"
                  value={sysInputs.N}
                  onChange={(e)=> setSysInputs(s=>({...s, N:e.target.value}))}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="n (taille souhaitée)"
                  type="number"
                  value={sysInputs.n}
                  onChange={(e)=> setSysInputs(s=>({...s, n:e.target.value}))}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Départ aléatoire"
                  type="number"
                  value={sysInputs.start}
                  onChange={(e)=> setSysInputs(s=>({...s, start:e.target.value}))}
                  fullWidth
                />
                <Button onClick={calcSystematic} variant="contained" sx={{ mt: 2 }} startIcon={<Calculate/>}>
                  Calculer k & sélection
                </Button>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper elevation={1} sx={{ p:2, height: '100%' }}>
                  <Typography variant="body2"><strong>k =</strong> {sysResult.k}</Typography>
                  <Divider sx={{ my: 1 }}/>
                  <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                    <strong>Séquence (aperçu) :</strong> {sysResult.sample.join(', ') || '—'}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button variant="outlined" onClick={()=> setShowExercise4Answers(!showExercise4Answers)}>
                {showExercise4Answers ? 'Masquer l’astuce' : 'Voir l’astuce'}
              </Button>
            </Box>
            <Collapse in={showExercise4Answers}>
              <Paper elevation={0} sx={{ p:2, mt:2, bgcolor: (t)=>t.palette.grey[50] }}>
                <Typography variant="body2">
                  <strong>Astuce :</strong> k ≈ N/n. Choisis un départ <em>vraiment</em> aléatoire entre 1 et k, et vérifie qu’il n’y a pas de périodicité cachée dans la liste.
                </Typography>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 5 — DEFF */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              📦 Exercice 5 — Clusters : calcule ton DEFF & taille ajustée
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Stack spacing={2}>
                  <TextField
                    label="n0 (théorique AAS)"
                    type="number"
                    value={deffInputs.n0}
                    onChange={(e)=> setDeffInputs(s=>({...s, n0:e.target.value}))}
                    fullWidth
                  />
                  <TextField
                    label="m (taille moyenne de grappe)"
                    type="number"
                    value={deffInputs.m}
                    onChange={(e)=> setDeffInputs(s=>({...s, m:e.target.value}))}
                    fullWidth
                  />
                  <TextField
                    label="ICC (0,01–0,05)"
                    type="number"
                    value={deffInputs.icc}
                    onChange={(e)=> setDeffInputs(s=>({...s, icc:e.target.value}))}
                    fullWidth
                  />
                  <TextField
                    label="Taux de réponse (%)"
                    type="number"
                    value={deffInputs.response}
                    onChange={(e)=> setDeffInputs(s=>({...s, response:e.target.value}))}
                    fullWidth
                  />
                  <Button onClick={calcDeff} variant="contained" startIcon={<Calculate/>}>
                    Calculer DEFF & n final
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={7}>
                <Paper elevation={1} sx={{ p:2, height:'100%' }}>
                  <Typography variant="body2"><strong>DEFF :</strong> {deffResult.deff}</Typography>
                  <Typography variant="body2"><strong>Taille finale (ajustée) :</strong> {deffResult.nFinal}</Typography>
                  <Divider sx={{ my: 1 }}/>
                  <Typography variant="body2">
                    <em>Rappel :</em> <InlineMath math="DEFF = 1 + (m-1) \times ICC" /> ; <InlineMath math="n_{design} = n_0 \times DEFF" /> ; <InlineMath math="n_{final} = n_{design} / (réponse/100)" />.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button variant="outlined" onClick={()=> setShowExercise5Answers(!showExercise5Answers)}>
                {showExercise5Answers ? 'Masquer le rappel' : 'Voir le rappel'}
              </Button>
            </Box>
            <Collapse in={showExercise5Answers}>
              <Paper elevation={0} sx={{ p:2, mt:2, bgcolor: (t)=>t.palette.grey[50] }}>
                <Typography variant="body2">
                  <strong>Interprétation :</strong> plus l’ICC est élevé ou les grappes sont grandes (m↑), plus DEFF augmente → il faut un échantillon plus grand qu’en AAS.
                </Typography>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>
      </section>

      {/* 8) À retenir */}
      <section aria-labelledby="guidelines-heading">
        <Typography id="guidelines-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧱 8) À retenir
        </Typography>

        <Grid container spacing={3} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold' }}>
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
            <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold' }}>
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
                  <ListItemText primary="Un « n » arbitraire (« parce que 100 »)" />
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
