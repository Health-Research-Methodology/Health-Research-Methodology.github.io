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
  Link as MuiLink
} from '@mui/material';
import { ArrowForward, Lightbulb, Search, Edit } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function BrainstormIdeas() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase conceptuelle — Étape 1
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Brainstorm des idées de recherche
      </Typography>

      <Typography paragraph>
        L'objectif de la recherche en santé est d'améliorer la pratique des soins et la santé des populations. 
        Essayez de penser à un sujet de recherche qui aura un impact pratique sur l'amélioration de vos propres soins, 
        l'apprentissage de vos étudiants en santé, ou la santé en général dans votre établissement ou communauté.
      </Typography>

      <Alert severity="info" icon={<Lightbulb />} sx={{ my: 3 }}>
        <AlertTitle>Objectif du brainstorming</AlertTitle>
        L'objectif du brainstorming est de créer une grande liste d'idées, alors n'éliminez aucune idée à ce stade. 
        Notez toute idée, peu importe qu'elle puisse paraître irréaliste ou impraticable.
      </Alert>

      <section aria-labelledby="brainstorming-heading">
        <Typography id="brainstorming-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          Exercice de brainstorming
        </Typography>
        
        <List 
          sx={{ my: 2 }}
          aria-label="Étapes de l'exercice de brainstorming"
        >
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
          <ListItemText 
            primary={<strong>Énumérez trois à cinq problèmes que vous observez en santé</strong>}
            secondary="Ex: infections nosocomiales, non-observance thérapeutique, burnout du personnel..."
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
          <ListItemText 
            primary={<strong>Pour chaque problème identifié, réfléchissez à deux choses</strong>}
            secondary="Qu'est-ce qui doit être compris à propos du problème ? Comment pensez-vous que le problème peut être résolu ?"
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
          <ListItemText 
            primary={<strong>Listez une ou deux façons pratiques d'améliorer la santé</strong>}
            secondary="Par les professionnels de santé, gestionnaires, ou éducateurs en santé dans votre contexte"
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
          <ListItemText 
            primary={<strong>Que voulez-vous mieux comprendre ?</strong>}
            secondary="À propos des patients, des soins, des pratiques professionnelles, ou de l'apprentissage en santé ?"
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
          <ListItemText 
            primary={<strong>Comment améliorer les résultats de santé ?</strong>}
            secondary="En général ou dans un domaine spécifique (cardiologie, gériatrie, prévention...)"
          />
        </ListItem>
      </List>
      </section>

      <Paper elevation={2} sx={{ p: 3, my: 4, backgroundColor: "background.default" }} role="region" aria-labelledby="example-heading">
        <Typography id="example-heading" variant="h6" component="h3" sx={{ mb: 2 }}>
          Exemple de liste en soins infirmiers
        </Typography>
        <List aria-label="Exemple détaillé en soins infirmiers">
          <ListItem alignItems="flex-start">
            <ListItemText 
              primary={<strong>Problèmes identifiés</strong>}
              secondary="Chutes fréquentes en gériatrie, faible adhésion aux protocoles d'hygiène des mains, épuisement professionnel"
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText 
              primary={<strong>Compréhension et solutions</strong>}
              secondary="Chutes : Les facteurs de risque spécifiques à notre unité doivent être mieux compris. Je pense que les chutes pourraient être réduites avec un programme de prévention multifactoriel."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText 
              primary={<strong>Amélioration des soins</strong>}
              secondary="L'observance de l'hygiène des mains pourrait être améliorée si les soignants recevaient un feedback en temps réel."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText 
              primary={<strong>Meilleure compréhension</strong>}
              secondary="Je veux mieux comprendre les perceptions des infirmières sur les barrières à l'application des protocoles."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText 
              primary={<strong>Amélioration des résultats</strong>}
              secondary="Je pense que les patients apprendraient mieux l'autogestion si nous utilisions des outils éducatifs interactifs."
            />
          </ListItem>
        </List>
      </Paper>

      <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic' }}>
        Passez quelques jours ou quelques semaines à réfléchir à cette liste de cinq questions 
        jusqu'à avoir une grande liste d'idées sur des sujets de recherche potentiels.
      </Typography>

      <section aria-labelledby="refining-heading">
        <Typography id="refining-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          Affiner votre liste
        </Typography>
        
        <Typography paragraph>
          Une fois que vous avez une grande liste d'idées potentielles, vous pouvez commencer à les affiner. 
          Lors de cette sélection, réfléchissez à trois questions clés :
        </Typography>

        <List aria-label="Critères d'évaluation des idées de recherche">
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
          <ListItemText 
            primary={<strong>Faisabilité avec vos ressources</strong>}
            secondary="Avec le temps et les ressources disponibles, est-il possible de mener cette étude ? Beaucoup d'idées sont excellentes mais peuvent présenter des difficultés pratiques pour collecter des données scientifiques significatives."
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
          <ListItemText 
            primary={<strong>Contribution significative à la pratique</strong>}
            secondary="L'étude doit suggérer une façon pratique d'améliorer la santé/les soins ET la réponse ne doit pas être évidente. Si la réponse est prévisible, ce n'est pas une bonne étude de recherche."
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ mt: 0.5 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon>
          <ListItemText 
            primary={<strong>Originalité</strong>}
            secondary="Cette question de recherche a-t-elle déjà été répondue ? Beaucoup de recherches en santé ont déjà été menées. Efforcez-vous de développer un sujet de recherche unique ou qui apporte un angle nouveau."
          />
        </ListItem>
      </List>
      </section>

      <section aria-labelledby="literature-heading">
        <Typography id="literature-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          Revue de littérature préliminaire
        </Typography>
        
        <Typography paragraph>
          Une fois que vous avez identifié trois sujets de recherche réalisables, effectuez une recherche 
          dans la littérature pour trouver des études similaires. Cela vous aidera à :
        </Typography>

        <List aria-label="Bénéfices de la revue de littérature préliminaire">
        <ListItem>
          <ListItemIcon><Search fontSize="small" color="success" /></ListItemIcon>
          <ListItemText primary="Comprendre les recherches existantes dans ce domaine" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Search fontSize="small" color="success" /></ListItemIcon>
          <ListItemText primary="Identifier les méthodes et instruments déjà développés" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Search fontSize="small" color="success" /></ListItemIcon>
          <ListItemText primary="Planifier vos méthodes et rédiger votre revue de littérature" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Search fontSize="small" color="success" /></ListItemIcon>
          <ListItemText primary="Affiner votre question de recherche pour qu'elle soit unique" />
        </ListItem>
      </List>
      </section>

      <section aria-labelledby="picot-heading">
        <Typography id="picot-heading" variant="h5" component="h3" sx={{ mt: 4, mb: 2 }}>
          Outil PICOT pour structurer votre idée
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Une fois vos idées affinées, utilisez le cadre PICOT pour structurer votre question de recherche :
        </Typography>
        <Paper 
          elevation={1} 
          sx={{ 
            p: 3, 
            backgroundColor: "grey.100", 
            fontFamily: 'monospace', 
            fontSize: '0.875rem',
            overflow: 'auto'
          }}
          role="region"
          aria-label="Gabarit PICOT à compléter"
        >
          <Typography component="pre" sx={{ m: 0, whiteSpace: 'pre-wrap' }}>
{`P (Population) : ................................................
I (Intervention/Exposition) : ...................................
C (Comparateur) : ...............................................
O (Outcome/Résultat) : ..........................................
T (Temps/Type d'étude) : ........................................`}
          </Typography>
        </Paper>
      </section>

      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>Prochaine étape</AlertTitle>
        Après avoir structuré vos idées avec le cadre PICOT, vous serez prêt à passer à l'identification 
        des variables clés et du design de votre étude.
      </Alert>

      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowForward sx={{ transform: 'rotate(180deg)', mr: 1 }} />
            Retour à la Phase conceptuelle
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/formulate-problem" sx={{ display: 'flex', alignItems: 'center' }}>
            SUIVANT : Formuler le problème de recherche
            <ArrowForward sx={{ ml: 1 }} />
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}