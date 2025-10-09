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
  TextField,
  Stack,
  Divider
} from '@mui/material';
import { ArrowForward, Edit, AccountTree, CheckCircle, Cancel, Assignment, QuestionMark } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step6Synthisis() {
  const [showExercise1Answers, setShowExercise1Answers] = useState(false);
  const [showExercise2Answers, setShowExercise2Answers] = useState(false);
  
  // État pour l'exercice de complétion de texte
  const [contextAnswers, setContextAnswers] = useState({
    who: '',
    hospital: '',
    rate: '',
    consequences: '',
    objective: '',
    question: ''
  });

  // État pour l'exercice de correspondance
  const [matchingItems, setMatchingItems] = useState([
    { id: 1, type: 'objectif', text: "Évaluer l'impact d'un programme d'éducation à la santé sur l'observance du traitement chez les patients diabétiques", matched: false },
    { id: 2, type: 'question', text: "Le programme éducatif améliore-t-il l'observance thérapeutique des patients diabétiques ?", matched: false },
    { id: 3, type: 'hypothese', text: "Les patients bénéficiant du programme auront une observance supérieure à ceux ne le suivant pas", matched: false }
  ]);

  const [orderedMatching, setOrderedMatching] = useState([]);
  const [isMatchingCorrect, setIsMatchingCorrect] = useState(false);

  const correctAnswers = {
    who: 'OMS',
    hospital: 'Rabat',
    rate: '25',
    consequences: 'fractures, hospitalisations, perte d\'autonomie',
    objective: 'Évaluer l\'efficacité d\'un programme d\'exercices d\'équilibre à domicile',
    question: 'Un programme d\'exercices d\'équilibre réduit-il le nombre de chutes chez les personnes âgées ?'
  };

  const handleInputChange = (field, value) => {
    setContextAnswers(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const checkContextAnswers = () => {
    const score = Object.keys(correctAnswers).reduce((acc, key) => {
      if (contextAnswers[key].toLowerCase().includes(correctAnswers[key].toLowerCase()) || 
          correctAnswers[key].toLowerCase().includes(contextAnswers[key].toLowerCase())) {
        return acc + 1;
      }
      return acc;
    }, 0);
    
    return score >= 4; // Au moins 4 bonnes réponses sur 6
  };

  // Fonctions pour l'exercice de correspondance
  const handleMatchingDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleMatchingDrop = (e) => {
    e.preventDefault();
    const itemData = JSON.parse(e.dataTransfer.getData('text/plain'));
    
    if (!orderedMatching.find(item => item.id === itemData.id)) {
      const newOrderedItems = [...orderedMatching, itemData];
      setOrderedMatching(newOrderedItems);
      
      setMatchingItems(prev => prev.filter(item => item.id !== itemData.id));
      
      if (newOrderedItems.length === 3) {
        const correctOrder = ['objectif', 'question', 'hypothese'];
        const currentOrder = newOrderedItems.map(item => item.type);
        setIsMatchingCorrect(JSON.stringify(currentOrder) === JSON.stringify(correctOrder));
      }
    }
  };

  const resetMatchingExercise = () => {
    setMatchingItems([
      { id: 1, type: 'objectif', text: "Évaluer l'impact d'un programme d'éducation à la santé sur l'observance du traitement chez les patients diabétiques", matched: false },
      { id: 2, type: 'question', text: "Le programme éducatif améliore-t-il l'observance thérapeutique des patients diabétiques ?", matched: false },
      { id: 3, type: 'hypothese', text: "Les patients bénéficiant du programme auront une observance supérieure à ceux ne le suivant pas", matched: false }
    ]);
    setOrderedMatching([]);
    setIsMatchingCorrect(false);
  };

  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase conceptuelle — Étape 6
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Rédiger le contexte, les objectifs, les questions et les hypothèses de recherche
      </Typography>

      <Alert severity="info" icon={<Edit />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        Rédiger la synthèse écrite de la phase conceptuelle de ton projet de recherche, en présentant :
        <List dense sx={{ mt: 1 }}>
          <ListItem>
            <ListItemText primary="• Le contexte (scientifique, professionnel, social ou institutionnel)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Le but général et les objectifs spécifiques" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Les questions de recherche" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Les hypothèses issues du modèle conceptuel" />
          </ListItem>
        </List>
        <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
          💬 Cette étape sert à poser le cadre complet du projet — elle permet à un lecteur, un formateur ou un comité d'éthique de comprendre pourquoi et comment ton étude est justifiée.
        </Typography>
      </Alert>

      <section aria-labelledby="context-heading">
        <Typography id="context-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📖 1. Le contexte de la recherche
        </Typography>
        
        <Typography paragraph>
          Le contexte décrit où, pourquoi et dans quel environnement ton étude prend place.
          Il relie ton idée de recherche à la réalité du terrain (soins, formation, santé publique, etc.) et à la littérature scientifique.
        </Typography>

        <Typography variant="h6" component="h4" sx={{ mt: 3, mb: 2 }}>
          🔹 Le contexte comporte trois dimensions :
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Dimension</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Exemple</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>A. Contexte général / scientifique</TableCell>
                <TableCell>Présente la situation du phénomène dans le monde, ou dans la littérature.</TableCell>
                <TableCell>Les chutes représentent une cause majeure d'hospitalisation chez les personnes âgées dans le monde. L'OMS estime qu'une personne sur trois de plus de 65 ans chute chaque année.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>B. Contexte local / professionnel</TableCell>
                <TableCell>Situe le problème dans ton milieu ou ton pays.</TableCell>
                <TableCell>Dans notre service de gériatrie à Rabat, 25 % des patients hospitalisés ont présenté une chute en 2023 malgré les protocoles de prévention.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>C. Justification / intérêt de la recherche</TableCell>
                <TableCell>Explique pourquoi il est nécessaire de mener l'étude (lacune identifiée).</TableCell>
                <TableCell>Peu d'études locales ont évalué l'efficacité des exercices d'équilibre chez les personnes âgées vivant à domicile. Cette étude vise à combler cette lacune et à proposer un programme adapté.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="success" sx={{ my: 3 }}>
          <AlertTitle>💬 Astuce</AlertTitle>
          • Commence par des données factuelles (statistiques, références OMS, études récentes)
          <br />• Termine par la justification logique de ton projet
        </Alert>
      </section>

      <section aria-labelledby="purpose-heading">
        <Typography id="purpose-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📜 2. Le but de la recherche (Purpose)
        </Typography>

        <Typography paragraph>
          Le but général ou objectif principal exprime l'intention globale de ton étude.
          Il répond à la question : Pourquoi cette recherche est-elle entreprise ?
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 4, backgroundColor: "background.default" }}>
          <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
            💡 Formulation type
          </Typography>
          <Typography paragraph sx={{ fontStyle: 'italic', mb: 2 }}>
            "L'objectif de cette étude est de…"
            <br />ou
            <br />"Cette recherche vise à…"
          </Typography>
          
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Exemples :</Typography>
          <List dense>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Évaluer l'efficacité d'un programme d'exercices d'équilibre sur la réduction des chutes chez les personnes âgées vivant à domicile." />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Explorer les facteurs organisationnels associés au stress professionnel chez les infirmiers en milieu hospitalier." />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
              <ListItemText primary="Décrire la perception des étudiants infirmiers concernant l'utilisation des outils numériques en apprentissage clinique." />
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: "grey.50" }}>
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            <strong>📘 OMS (2003) :</strong> Un bon objectif doit être mesurable, réaliste, limité dans le temps et pertinent pour la santé publique ou la pratique clinique.
          </Typography>
        </Paper>
      </section>

      <section aria-labelledby="specific-objectives-heading">
        <Typography id="specific-objectives-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🎯 3. Les objectifs spécifiques
        </Typography>

        <Typography paragraph>
          Les objectifs spécifiques détaillent les étapes pratiques nécessaires pour atteindre le but général.
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 4, backgroundColor: "info.light" }}>
          <Typography variant="h6" component="h4" sx={{ mb: 2, color: "info.contrastText" }}>
            💬 Exemple
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: "info.contrastText" }}>
            Objectif général : Évaluer l'efficacité d'un programme d'exercices d'équilibre.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: "info.contrastText" }}>
            Objectifs spécifiques :
          </Typography>
          <List dense sx={{ color: "info.contrastText" }}>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" sx={{ color: "info.contrastText" }} /></ListItemIcon>
              <ListItemText primary="Décrire les caractéristiques sociodémographiques des participants." />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" sx={{ color: "info.contrastText" }} /></ListItemIcon>
              <ListItemText primary="Mesurer l'effet du programme sur l'équilibre postural après 3 et 6 mois." />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" sx={{ color: "info.contrastText" }} /></ListItemIcon>
              <ListItemText primary="Comparer le nombre de chutes entre le groupe intervention et le groupe contrôle." />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" sx={{ color: "info.contrastText" }} /></ListItemIcon>
              <ListItemText primary="Identifier les facteurs associés à l'adhésion au programme." />
            </ListItem>
          </List>
        </Paper>
      </section>

      <section aria-labelledby="research-questions-heading">
        <Typography id="research-questions-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ❓ 4. Les questions de recherche
        </Typography>

        <Typography paragraph>
          Les questions de recherche sont la traduction directe du problème en interrogations scientifiques.
          Elles servent de fil conducteur à la méthodologie.
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Type de question</strong></TableCell>
                <TableCell><strong>Exemple</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Descriptive</TableCell>
                <TableCell>Quelle est la fréquence des chutes chez les personnes âgées vivant seules ?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Comparative</TableCell>
                <TableCell>Le programme d'exercices réduit-il le taux de chutes par rapport aux soins habituels ?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Corrélationnelle</TableCell>
                <TableCell>Existe-t-il une relation entre la peur de tomber et la force musculaire ?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Qualitative</TableCell>
                <TableCell>Comment les infirmières perçoivent-elles les obstacles à la prévention des chutes ?</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="info" sx={{ my: 3 }}>
          <AlertTitle>📘 Conseil pratique</AlertTitle>
          • Une question principale correspond au but général
          <br />• Les questions secondaires découlent des objectifs spécifiques
        </Alert>
      </section>

      <section aria-labelledby="hypotheses-heading">
        <Typography id="hypotheses-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🔬 5. Les hypothèses de recherche
        </Typography>

        <Typography paragraph>
          Les hypothèses sont les réponses provisoires à tes questions de recherche, formulées de manière testable.
          Elles découlent du modèle conceptuel élaboré à l'étape 5.
        </Typography>

        <TableContainer component={Paper} sx={{ my: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Exemple d'hypothèse</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Hypothèse principale</TableCell>
                <TableCell>Les personnes âgées suivant un programme d'exercices d'équilibre auront un taux de chutes inférieur à celles n'en suivant pas.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hypothèse secondaire</TableCell>
                <TableCell>Une plus grande adhésion au programme est associée à une amélioration plus importante de l'équilibre postural.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hypothèse nulle (H₀)</TableCell>
                <TableCell>Le programme d'exercices n'a aucun effet significatif sur le taux de chutes.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="warning" sx={{ my: 3 }}>
          <AlertTitle>💡 Règle d'or</AlertTitle>
          Une hypothèse doit être claire, mesurable et correspondre à une relation représentée dans ton modèle conceptuel.
        </Alert>
      </section>

      <section aria-labelledby="exercises-heading">
        <Typography id="exercises-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          ✏️ 6. Activités interactives
        </Typography>

        {/* Exercice 1 : Compléter le contexte */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🧩 Exercice 1 : Compléter le contexte
            </Typography>
            <Typography paragraph>
              Lis le texte ci-dessous et complète les parties manquantes :
            </Typography>

            <Paper elevation={1} sx={{ p: 3, backgroundColor: 'grey.50', my: 2 }}>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                Les chutes chez les personnes âgées sont fréquentes. Selon l'
                <TextField
                  size="small"
                  placeholder="Organisation"
                  value={contextAnswers.who}
                  onChange={(e) => handleInputChange('who', e.target.value)}
                  sx={{ mx: 1, width: '120px' }}
                />
                , une personne sur trois de plus de 65 ans chute chaque année. Dans notre hôpital de
                <TextField
                  size="small"
                  placeholder="Ville"
                  value={contextAnswers.hospital}
                  onChange={(e) => handleInputChange('hospital', e.target.value)}
                  sx={{ mx: 1, width: '100px' }}
                />
                , le taux de chutes atteint
                <TextField
                  size="small"
                  placeholder="%"
                  value={contextAnswers.rate}
                  onChange={(e) => handleInputChange('rate', e.target.value)}
                  sx={{ mx: 1, width: '60px' }}
                />
                %. Ce phénomène entraîne des conséquences graves telles que
                <TextField
                  size="small"
                  placeholder="Conséquences"
                  value={contextAnswers.consequences}
                  onChange={(e) => handleInputChange('consequences', e.target.value)}
                  sx={{ mx: 1, width: '200px' }}
                />
                . Peu d'études ont évalué l'efficacité des programmes d'exercices à domicile, d'où l'intérêt de cette étude.
              </Typography>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                → Objectif :
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={2}
                placeholder="Formulez l'objectif de cette étude..."
                value={contextAnswers.objective}
                onChange={(e) => handleInputChange('objective', e.target.value)}
                sx={{ mb: 2 }}
              />
              
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                → Question de recherche :
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={2}
                placeholder="Formulez la question de recherche..."
                value={contextAnswers.question}
                onChange={(e) => handleInputChange('question', e.target.value)}
              />
            </Paper>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => setShowExercise1Answers(!showExercise1Answers)}
              >
                {showExercise1Answers ? 'Masquer les réponses' : 'Vérifier mes réponses'}
              </Button>
            </Box>

            <Collapse in={showExercise1Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: checkContextAnswers() ? 'success.light' : 'warning.light' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {checkContextAnswers() ? '🎉 Bien joué !' : '📝 Réponses suggérées :'}
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary={`Organisation : ${correctAnswers.who}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Ville : ${correctAnswers.hospital}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Taux : ${correctAnswers.rate}%`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Conséquences : ${correctAnswers.consequences}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Objectif : ${correctAnswers.objective}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Question : ${correctAnswers.question}`} />
                  </ListItem>
                </List>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>

        {/* Exercice 2 : Correspondance objectifs ↔ questions ↔ hypothèses */}
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              🎮 Exercice 2 : Correspondance objectifs ↔ questions ↔ hypothèses
            </Typography>
            <Typography paragraph>
              Glisse et dépose les éléments dans le bon ordre logique (Objectif → Question → Hypothèse) :
            </Typography>

            <Grid container spacing={3}>
              {/* Zone des éléments à glisser */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Éléments à ordonner :
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
                    {matchingItems.map((item) => (
                      <Chip
                        key={item.id}
                        label={item.text}
                        draggable
                        onDragStart={(e) => handleMatchingDragStart(e, item)}
                        sx={{
                          cursor: 'grab',
                          '&:active': { cursor: 'grabbing' },
                          backgroundColor: item.type === 'objectif' ? 'primary.light' : 
                                         item.type === 'question' ? 'secondary.light' : 'warning.light',
                          color: 'white',
                          height: 'auto',
                          '& .MuiChip-label': {
                            whiteSpace: 'normal',
                            textAlign: 'left',
                            padding: '8px 12px'
                          }
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
                  Ordre logique (glisse ici) :
                </Typography>
                <Paper
                  elevation={1}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleMatchingDrop}
                  sx={{
                    p: 2,
                    minHeight: 200,
                    backgroundColor: isMatchingCorrect ? 'success.light' : 'background.paper',
                    border: '2px dashed',
                    borderColor: isMatchingCorrect ? 'success.main' : 'primary.main',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Stack spacing={1}>
                    {orderedMatching.map((item, index) => (
                      <Box key={item.id} sx={{ textAlign: 'center' }}>
                        <Chip
                          label={`${index + 1}. ${item.text}`}
                          sx={{
                            backgroundColor: item.type === 'objectif' ? 'primary.main' : 
                                           item.type === 'question' ? 'secondary.main' : 'warning.main',
                            color: 'white',
                            width: '100%',
                            height: 'auto',
                            '& .MuiChip-label': {
                              whiteSpace: 'normal',
                              textAlign: 'left',
                              padding: '8px 12px'
                            }
                          }}
                          size="medium"
                        />
                        {index < orderedMatching.length - 1 && (
                          <Typography variant="h5" sx={{ my: 0.5, color: 'primary.main' }}>
                            ↓
                          </Typography>
                        )}
                      </Box>
                    ))}
                    {orderedMatching.length === 0 && (
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ textAlign: 'center', fontStyle: 'italic', py: 4 }}
                      >
                        Glisse les éléments ici dans l'ordre logique
                      </Typography>
                    )}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>

            {/* Feedback et contrôles */}
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              {isMatchingCorrect && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  <AlertTitle>🎉 Parfait !</AlertTitle>
                  Tu as trouvé l'ordre logique correct : <strong>Objectif → Question → Hypothèse</strong>
                  <br />Cette séquence respecte la démarche scientifique !
                </Alert>
              )}
              
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={resetMatchingExercise}
                >
                  Recommencer
                </Button>
                
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => setShowExercise2Answers(!showExercise2Answers)}
                >
                  {showExercise2Answers ? 'Masquer l\'explication' : 'Voir l\'explication'}
                </Button>
              </Stack>
            </Box>

            <Collapse in={showExercise2Answers}>
              <Paper elevation={1} sx={{ p: 2, mt: 3, backgroundColor: 'info.light' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: 'info.contrastText' }}>
                  💡 Explication de l'ordre logique :
                </Typography>
                <List dense sx={{ color: 'info.contrastText' }}>
                  <ListItem>
                    <ListItemIcon><Assignment sx={{ color: 'info.contrastText' }} /></ListItemIcon>
                    <ListItemText primary="1. OBJECTIF : Ce que tu veux accomplir avec ton étude" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><QuestionMark sx={{ color: 'info.contrastText' }} /></ListItemIcon>
                    <ListItemText primary="2. QUESTION : Comment tu formules ton objectif sous forme d'interrogation" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><AccountTree sx={{ color: 'info.contrastText' }} /></ListItemIcon>
                    <ListItemText primary="3. HYPOTHÈSE : Ta réponse provisoire à la question, que tu vas tester" />
                  </ListItem>
                </List>
              </Paper>
            </Collapse>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="writing-structure-heading">
        <Typography id="writing-structure-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          📘 7. Structure de rédaction finale
        </Typography>

        <Typography paragraph>
          Voici la structure type pour la section "Phase conceptuelle" dans ton protocole :
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 3, backgroundColor: "warning.light" }}>
          <Typography variant="h6" component="h4" sx={{ mb: 2, color: "warning.contrastText" }}>
            🩺 Exemple de plan
          </Typography>
          <List sx={{ color: "warning.contrastText" }}>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" sx={{ color: "warning.contrastText" }} /></ListItemIcon>
              <ListItemText 
                primary="1. Contexte" 
                secondary="Présentation du problème de santé global et local, données statistiques et références, justification scientifique et pratique"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" sx={{ color: "warning.contrastText" }} /></ListItemIcon>
              <ListItemText 
                primary="2. But et objectifs" 
                secondary="Objectif général, objectifs spécifiques"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" sx={{ color: "warning.contrastText" }} /></ListItemIcon>
              <ListItemText 
                primary="3. Questions de recherche" 
                secondary="Question principale, questions secondaires"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" sx={{ color: "warning.contrastText" }} /></ListItemIcon>
              <ListItemText 
                primary="4. Hypothèses" 
                secondary="Hypothèse principale, hypothèses secondaires, hypothèse nulle (si applicable)"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><ArrowForward fontSize="small" sx={{ color: "warning.contrastText" }} /></ListItemIcon>
              <ListItemText 
                primary="5. Modèle conceptuel" 
                secondary="Diagramme reliant les variables"
              />
            </ListItem>
          </List>
        </Paper>
      </section>

      <section aria-labelledby="guidelines-heading">
        <Typography id="guidelines-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          🧱 8. À retenir
        </Typography>

        <Grid container spacing={3} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: '100%', backgroundColor: "success.light" }}>
              <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 'semibold', color: "success.contrastText" }}>
                Bonnes pratiques ✅
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Décrire le contexte avec des données récentes et locales" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Justifier clairement la pertinence de la recherche" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Lier contexte, objectifs, questions et hypothèses" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Formuler les hypothèses à partir du modèle conceptuel" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Utiliser un style scientifique clair et concis" />
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
                  <ListItemText primary="Copier-coller une introduction générique" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Présenter un sujet sans lien avec la pratique de santé" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Écrire ces éléments de manière isolée ou contradictoire" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Introduire de nouvelles variables non étudiées" />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText primary="Employer des phrases vagues ou trop longues" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>🚀 Prochaine étape : Phase méthodologique</AlertTitle>
        Tu as maintenant :
        <br />• un problème défini
        <br />• un contexte argumenté  
        <br />• des objectifs et questions clairs
        <br />• des hypothèses et un modèle cohérent
        <br />
        <br />👉 Tu es prêt à passer à la Phase Méthodologique, où tu décriras comment tu vas tester ces hypothèses sur le terrain :
        choix du type d'étude, population, instruments, collecte et analyse des données.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/hypotheses-model" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            PRÉCÉDENT : Hypothèses et modèle conceptuel
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
