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
  Stepper,
  Step,
  StepLabel,
  Stack
} from '@mui/material';
import { ArrowForward, Psychology, Schema, CheckCircle, Cancel, TrendingUp, AccountTree } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step5HypothsisModelConceptuel() {
  const [showExercise1Answers, setShowExercise1Answers] = useState(false);
  const [showExercise2Answers, setShowExercise2Answers] = useState(false);
  
  // État pour l'exercice de glisser-déposer
  const [draggedItems, setDraggedItems] = useState([
    { id: 1, text: "Programme d'éducation à la santé", isCorrect: false },
    { id: 2, text: "Amélioration des connaissances des patients", isCorrect: false },
    { id: 3, text: "Meilleure observance du traitement", isCorrect: false },
    { id: 4, text: "Diminution des complications", isCorrect: false }
  ]);
  
  const [orderedItems, setOrderedItems] = useState([]);
  const [isOrderCorrect, setIsOrderCorrect] = useState(false);
  
  const correctOrder = [1, 2, 3, 4]; // L'ordre correct des IDs

  const hypothesisSteps = [
    'Relis ta question de recherche (PICOT)',
    'Identifie les variables',
    'Exprime la relation attendue',
    'Précise le sens de la relation'
  ];

  // Fonctions pour le glisser-déposer
  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const itemData = JSON.parse(e.dataTransfer.getData('text/plain'));
    
    // Ajouter l'élément à la zone de dépôt s'il n'y est pas déjà
    if (!orderedItems.find(item => item.id === itemData.id)) {
      const newOrderedItems = [...orderedItems, itemData];
      setOrderedItems(newOrderedItems);
      
      // Retirer l'élément de la liste des éléments à glisser
      setDraggedItems(prev => prev.filter(item => item.id !== itemData.id));
      
      // Vérifier si l'ordre est correct
      checkOrder(newOrderedItems);
    }
  };

  const handleRemoveFromOrder = (itemToRemove) => {
    // Remettre l'élément dans la liste des éléments à glisser
    setDraggedItems(prev => [...prev, itemToRemove].sort((a, b) => a.id - b.id));
    
    // Retirer l'élément de la zone ordonnée
    const newOrderedItems = orderedItems.filter(item => item.id !== itemToRemove.id);
    setOrderedItems(newOrderedItems);
    
    // Vérifier si l'ordre est correct
    checkOrder(newOrderedItems);
    setIsOrderCorrect(false);
  };

  const checkOrder = (items) => {
    if (items.length === 4) {
      const currentOrder = items.map(item => item.id);
      setIsOrderCorrect(JSON.stringify(currentOrder) === JSON.stringify(correctOrder));
    }
  };

  const resetExercise = () => {
    setDraggedItems([
      { id: 1, text: "Programme d'éducation à la santé", isCorrect: false },
      { id: 2, text: "Amélioration des connaissances des patients", isCorrect: false },
      { id: 3, text: "Meilleure observance du traitement", isCorrect: false },
      { id: 4, text: "Diminution des complications", isCorrect: false }
    ]);
    setOrderedItems([]);
    setIsOrderCorrect(false);
  };

  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase conceptuelle — Étape 5
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Formuler les hypothèses et le modèle conceptuel
      </Typography>

      <Alert severity="info" icon={<Psychology />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        Apprendre à :
        <List dense sx={{ mt: 1 }}>
          <ListItem>
            <ListItemText primary="• Formuler des hypothèses de recherche à partir des variables identifiées" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Construire un modèle conceptuel, c'est-à-dire un schéma visuel représentant les relations entre ces variables" />
          </ListItem>
        </List>
        <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
          💬 C'est ici que tu passes de la réflexion théorique à la structure logique de ta recherche :
          <br />tu montres ce que tu veux démontrer et comment les éléments sont liés.
        </Typography>
      </Alert>

      <section aria-labelledby="hypothesis-heading">
        <Typography id="hypothesis-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📖 1. Qu'est-ce qu'une hypothèse de recherche ?
        </Typography>
        
        <Typography paragraph>
          Une hypothèse est une proposition vérifiable qui prédit une relation entre deux ou plusieurs variables.
          Elle traduit ton raisonnement scientifique en une affirmation testable.
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          🔹 Types d'hypothèses
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Définition</strong></TableCell>
                <TableCell><strong>Exemple</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Hypothèse descriptive</TableCell>
                <TableCell>Énonce une observation attendue.</TableCell>
                <TableCell>Les infirmiers de nuit présentent un niveau de fatigue plus élevé que ceux de jour.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hypothèse relationnelle (corrélation)</TableCell>
                <TableCell>Prédit un lien entre deux variables sans établir de cause.</TableCell>
                <TableCell>Il existe une corrélation entre le stress professionnel et la qualité du sommeil.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hypothèse causale</TableCell>
                <TableCell>Prédit un effet direct d'une variable sur une autre.</TableCell>
                <TableCell>Un programme d'exercices d'équilibre réduit le nombre de chutes chez les personnes âgées.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hypothèse nulle (H₀)</TableCell>
                <TableCell>Suppose qu'il n'existe aucune relation entre les variables.</TableCell>
                <TableCell>Le programme d'exercices n'a pas d'effet sur le nombre de chutes.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hypothèse alternative (H₁)</TableCell>
                <TableCell>Suppose qu'il existe une relation significative.</TableCell>
                <TableCell>Le programme d'exercices diminue le nombre de chutes.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: "grey.50" }}>
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            <strong>📘 Selon l'OMS et ESNO</strong>, toute hypothèse doit être :
            claire et formulée sans ambiguïté, cohérente avec la littérature, testable avec les outils et le design choisis.
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="formulation-steps-heading">
        <Typography id="formulation-steps-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧩 2. Étapes pour formuler une hypothèse
        </Typography>

        <Stepper orientation="vertical" sx={{ my: 3 }}>
          {hypothesisSteps.map((step, index) => (
            <Step key={index} active={true}>
              <StepLabel>
                <Typography variant="h6" component="h4">
                  {index + 1}️⃣ {step}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Paper elevation={2} sx={{ p: 3, my: 4, backgroundColor: "background.default" }}>
          <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
            💡 Exemple pratique
          </Typography>
          
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            1️⃣ Question PICOT :
          </Typography>
          <Typography paragraph sx={{ fontStyle: 'italic', mb: 2 }}>
            "Chez les personnes âgées (P), un programme d'exercices d'équilibre (I), comparé à l'absence d'intervention (C), 
            réduit-il le nombre de chutes (O) sur 6 mois (T) ?"
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            2️⃣ Variables identifiées :
          </Typography>
          <List dense sx={{ mb: 2 }}>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Indépendante : programme d'exercices" />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Dépendante : nombre de chutes" />
            </ListItem>
          </List>

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            3️⃣ Relation attendue :
          </Typography>
          <Typography paragraph sx={{ mb: 2 }}>
            Les personnes âgées suivant un programme d'exercices d'équilibre auront moins de chutes que celles n'en suivant pas.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            4️⃣ Sens de la relation :
          </Typography>
          <Typography paragraph>
            → négative (diminution des chutes)
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="study-types-heading">
        <Typography id="study-types-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ⚙️ 3. Formulation pratique selon ton type d'étude
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Type d'étude</strong></TableCell>
                <TableCell><strong>Exemple d'hypothèse</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Quantitative (expérimentale)</TableCell>
                <TableCell>L'application d'un protocole d'hygiène des mains réduit le taux d'infections nosocomiales de 30 %.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Observationnelle (corrélation)</TableCell>
                <TableCell>Le stress professionnel est positivement corrélé au taux d'erreurs médicamenteuses.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Qualitative (exploratoire)</TableCell>
                <TableCell>Les infirmières perçoivent la surcharge de travail comme un obstacle à la qualité des soins. (ici, on parle de question de recherche, pas d'hypothèse formelle)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="info" sx={{ my: 3 }}>
          <AlertTitle>🧠 Astuce</AlertTitle>
          Chaque flèche dans ton futur modèle conceptuel correspondra à une hypothèse.
        </Alert>
      </section>

      <section aria-labelledby="conceptual-model-heading">
        <Typography id="conceptual-model-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧠 4. Qu'est-ce qu'un modèle conceptuel ?
        </Typography>

        <Typography paragraph>
          Un modèle conceptuel (ou cadre conceptuel) est une représentation visuelle de la logique de ta recherche.
          Il relie les concepts et variables entre eux sous forme de flèches et de boîtes.
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          🔹 Fonctions du modèle conceptuel :
        </Typography>

        <List aria-label="Fonctions du modèle conceptuel">
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Représenter les hypothèses de manière graphique" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Guider le choix des indicateurs et méthodes de collecte" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Clarifier pour le lecteur la structure de ton raisonnement" />
          </ListItem>
        </List>

        <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: "grey.50" }}>
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            <strong>📘 Selon le guide OMS (2003, ch. 1.5) :</strong>
            "Le modèle conceptuel sert de feuille de route intellectuelle reliant les concepts, les hypothèses et le plan d'étude."
          </Typography>
        </Paper>

        <Typography variant="h6" component="h4" sx={{ mt: 4, mb: 2 }}>
          🩺 Exemple de modèle conceptuel (prévention des chutes)
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 3, backgroundColor: "info.light" }}>
          <Box sx={{ textAlign: 'center', color: 'info.contrastText' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Programme d'exercices d'équilibre (VI)
            </Typography>
            <Typography variant="h4" component="div" sx={{ my: 1 }}>↓</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Amélioration de la force musculaire (variable intermédiaire)
            </Typography>
            <Typography variant="h4" component="div" sx={{ my: 1 }}>↓</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Amélioration de l'équilibre postural (variable dépendante)
            </Typography>
            <Typography variant="h4" component="div" sx={{ my: 1 }}>↓</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'success.main' }}>
              Réduction du nombre de chutes (Résultat attendu)
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic' }}>
            Variables modératrices possibles : âge, sexe, état de santé.
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="exercises-heading">
        <Typography id="exercises-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ✏️ 5. Activités interactives proposées
        </Typography>

        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🎮 Exercice 1 : Identifier les hypothèses valides
            </Typography>
            <Typography paragraph>
              Coche les hypothèses scientifiquement formulées :
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Proposition</strong></TableCell>
                    <TableCell><strong>Correct ?</strong></TableCell>
                    <TableCell><strong>Justification</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>A. "Les exercices d'équilibre sont bons pour les personnes âgées."</TableCell>
                    <TableCell>
                      <Collapse in={showExercise1Answers}>
                        <Chip icon={<Cancel />} label="❌" color="error" size="small" />
                      </Collapse>
                      {!showExercise1Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                    <TableCell>
                      <Collapse in={showExercise1Answers}>
                        <Typography variant="body2">Trop vague, non mesurable.</Typography>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>B. "Un programme d'exercices hebdomadaire diminue le nombre de chutes chez les personnes âgées."</TableCell>
                    <TableCell>
                      <Collapse in={showExercise1Answers}>
                        <Chip icon={<CheckCircle />} label="✅" color="success" size="small" />
                      </Collapse>
                      {!showExercise1Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                    <TableCell>
                      <Collapse in={showExercise1Answers}>
                        <Typography variant="body2">Relation claire, mesurable et testable.</Typography>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>C. "Les chutes sont plus fréquentes chez les femmes."</TableCell>
                    <TableCell>
                      <Collapse in={showExercise1Answers}>
                        <Chip label="⚠️" color="warning" size="small" />
                      </Collapse>
                      {!showExercise1Answers && <Typography variant="body2" color="text.secondary">Cliquez sur "Voir les réponses" ci-dessous</Typography>}
                    </TableCell>
                    <TableCell>
                      <Collapse in={showExercise1Answers}>
                        <Typography variant="body2">Hypothèse descriptive, pas testable sans précision de contexte.</Typography>
                      </Collapse>
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
              🧩 Exercice 2 : Construire ton modèle conceptuel
            </Typography>
            <Typography paragraph>
              Glisse et dépose les éléments dans le bon ordre pour former le modèle conceptuel :
            </Typography>

            <Grid container spacing={3}>
              {/* Zone des éléments à glisser */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Éléments disponibles :
                </Typography>
                <Paper 
                  elevation={1} 
                  sx={{ 
                    p: 2, 
                    minHeight: 200, 
                    backgroundColor: 'grey.50',
                    border: '2px dashed',
                    borderColor: 'grey.300'
                  }}
                >
                  <Stack spacing={1}>
                    {draggedItems.map((item) => (
                      <Chip
                        key={item.id}
                        label={item.text}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                        sx={{
                          cursor: 'grab',
                          '&:active': { cursor: 'grabbing' },
                          backgroundColor: 'primary.light',
                          color: 'primary.contrastText',
                          '&:hover': { backgroundColor: 'primary.main' }
                        }}
                        size="medium"
                      />
                    ))}
                  </Stack>
                </Paper>
              </Grid>

              {/* Zone de dépôt pour ordonner */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Modèle conceptuel (glisse ici dans l'ordre) :
                </Typography>
                <Paper
                  elevation={1}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  sx={{
                    p: 2,
                    minHeight: 200,
                    backgroundColor: isOrderCorrect ? 'success.light' : 'background.paper',
                    border: '2px dashed',
                    borderColor: isOrderCorrect ? 'success.main' : 'primary.main',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Stack spacing={1}>
                    {orderedItems.map((item, index) => (
                      <Box key={item.id} sx={{ textAlign: 'center' }}>
                        <Chip
                          label={item.text}
                          onDelete={() => handleRemoveFromOrder(item)}
                          sx={{
                            backgroundColor: 'secondary.light',
                            color: 'secondary.contrastText',
                            width: '100%',
                            justifyContent: 'space-between'
                          }}
                          size="medium"
                        />
                        {index < orderedItems.length - 1 && (
                          <Typography variant="h5" sx={{ my: 0.5, color: 'primary.main' }}>
                            ↓
                          </Typography>
                        )}
                      </Box>
                    ))}
                    {orderedItems.length === 0 && (
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ textAlign: 'center', fontStyle: 'italic', py: 4 }}
                      >
                        Glisse les éléments ici dans le bon ordre
                      </Typography>
                    )}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>

            {/* Feedback et contrôles */}
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              {isOrderCorrect && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  <AlertTitle>🎉 Excellent !</AlertTitle>
                  Tu as trouvé l'ordre correct ! Le modèle conceptuel montre bien la logique :
                  <br /><strong>Programme d'éducation → ↑ Connaissances → ↑ Observance → ↓ Complications</strong>
                </Alert>
              )}
              
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={resetExercise}
                >
                  Recommencer
                </Button>
                
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => setShowExercise2Answers(!showExercise2Answers)}
                >
                  {showExercise2Answers ? 'Masquer la solution' : 'Voir la solution'}
                </Button>
              </Stack>
            </Box>

            {/* Solution détaillée */}
            <Collapse in={showExercise2Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: 'info.light' }}>
                <Typography variant="subtitle2" sx={{ textAlign: 'center', color: 'info.contrastText', fontWeight: 'bold', mb: 2 }}>
                  Solution complète :
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', color: 'info.contrastText', lineHeight: 2 }}>
                  <strong>1.</strong> Programme d'éducation à la santé
                  <br />↓
                  <br /><strong>2.</strong> Amélioration des connaissances des patients
                  <br />↓
                  <br /><strong>3.</strong> Meilleure observance du traitement
                  <br />↓
                  <br /><strong>4.</strong> Diminution des complications
                </Typography>
                <Typography variant="caption" sx={{ 
                  display: 'block', 
                  textAlign: 'center', 
                  mt: 2, 
                  fontStyle: 'italic', 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  p: 1, 
                  borderRadius: 1 
                }}>
                  <strong>Logique :</strong> L'éducation améliore les connaissances, ce qui améliore l'observance, ce qui diminue les complications.
                </Typography>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="construction-tips-heading">
        <Typography id="construction-tips-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📋 6. Conseils pour construire ton modèle conceptuel
        </Typography>

        <List aria-label="Conseils pour construire un modèle conceptuel">
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Commence par les variables principales (VI et VD)" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Ajoute les variables intermédiaires (mécanismes ou médiateurs)" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Indique les facteurs modérateurs (âge, sexe, contexte)" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Utilise des flèches directionnelles pour montrer les liens" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Garde le schéma simple et lisible : 3 à 7 concepts maximum" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
            <ListItemText primary="Vérifie que chaque flèche correspond à une hypothèse claire" />
          </ListItem>
        </List>
      </section>

      <section aria-labelledby="guidelines-heading">
        <Typography id="guidelines-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧱 7. À retenir
        </Typography>

        <Grid container spacing={3} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%', backgroundColor: "success.light" }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold', color: "success.contrastText" }}>
                À faire ✅
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Formuler des hypothèses claires et testables" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Vérifier la cohérence avec la littérature" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Construire un modèle simple et cohérent" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Utiliser un langage neutre et scientifique" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Lier chaque hypothèse à une mesure concrète" />
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
                  <ListItemText primary='Employer des termes vagues ("améliore", "impacte") sans précision' />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Énoncer une hypothèse contredite par les études précédentes" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Ajouter trop de variables ou flèches illogiques" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Employer un ton affirmatif sans preuve" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Énoncer des liens impossibles à tester" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>🚀 Prochaine phase : La méthodologique</AlertTitle>
        Une fois ton modèle conceptuel établi :
        <br />• Tu peux passer à la phase méthodologique,
        <br />• où tu expliqueras comment tu vas tester tes hypothèses :
        <br />→ choix du type d'étude, population, échantillonnage, instruments de mesure, collecte et analyse des données.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/variables-design" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            PRÉCÉDENT : Variables et design de recherche
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/methodologique" sx={{ display: 'flex', alignItems: 'center' }}>
            SUIVANT : Phase méthodologique
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
