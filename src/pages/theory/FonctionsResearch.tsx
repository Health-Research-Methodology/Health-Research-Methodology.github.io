import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { Science } from '@mui/icons-material';

const FonctionsResearch = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Fonctions et Niveaux de la Recherche en Santé
      </Typography>

      <Paper elevation={3} sx={{ p: 2, my: 2 }}>
        <Typography variant="body1" paragraph>
          La recherche scientifique en santé désigne l’ensemble des processus systématiques mis en œuvre pour produire de nouvelles connaissances sur la santé, avec pour but final de comprendre les problèmes sanitaires et d’y apporter des solutions. Au cœur de cette démarche se trouve la méthodologie de recherche, véritable pierre angulaire qui encadre chaque étude scientifique. La méthodologie se définit comme l’ensemble structuré des méthodes et techniques utilisées pour recueillir et analyser des données de manière objective et rigoureuse. En suivant une démarche scientifique formalisée (de la formulation des questions jusqu’à l’analyse des résultats), le chercheur garantit la rigueur de son travail et la reproductibilité des résultats obtenus : un bon protocole permet en effet à d’autres de reproduire l’étude et de vérifier la validité des conclusions. Par ailleurs, la méthodologie intègre des considérations éthiques essentielles : le respect des participants, l’honnêteté intellectuelle et la responsabilité sociale. Comme le souligne un cours en éthique de la recherche, celle-ci impose aux scientifiques des responsabilités morales et sociétales quant à l’impact de leurs travaux sur la société et l’environnement. En somme, grâce à une méthodologie solide, la recherche en santé se déroule avec structuration scientifique, rigueur, transparence et éthique, gages de confiance dans les connaissances générées.
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Les fonctions de la recherche en santé
      </Typography>

      <Typography variant="body1" paragraph>
        La recherche est indispensable pour faire progresser la santé. L’Organisation mondiale de la Santé (OMS) la définit comme « l’acquisition de connaissances dans le but de comprendre les problèmes de santé et de mieux y remédier ». Cette définition met en évidence que la recherche embrasse plusieurs fonctions complémentaires, qui vont de la compréhension d’un problème à l’évaluation des solutions mises en place. D’après l’OMS, on peut distinguer cinq grandes fonctions de la recherche en santé :
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <Science />
          </ListItemIcon>
          <ListItemText
            primary="Mesurer un problème de santé"
            secondary="Quantifier l’ampleur d’un phénomène (prévalence d’une maladie, incidence d’un événement sanitaire, etc.) afin de le documenter objectivement. Par exemple, des études épidémiologiques mesurent le taux d’accidents vasculaires cérébraux (AVC) dans une population et son évolution dans le temps."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Science />
          </ListItemIcon>
          <ListItemText
            primary="Comprendre les causes du problème"
            secondary="Identifier les facteurs et mécanismes à l’origine du problème de santé. Il s’agit d’investiguer pourquoi et comment le phénomène se produit (facteurs biologiques, environnementaux, comportementaux…). Par exemple, la recherche a établi que l’hypertension artérielle, le tabagisme ou la sédentarité sont des causes majeures augmentant le risque d’AVC."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Science />
          </ListItemIcon>
          <ListItemText
            primary="Élaborer des solutions potentielles"
            secondary="Sur la base des connaissances, concevoir des interventions pour résoudre ou prévenir le problème. Cela peut être le développement d’un nouveau médicament, d’un protocole thérapeutique, d’un programme de prévention ou d’une innovation technologique en santé."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Science />
          </ListItemIcon>
          <ListItemText
            primary="Mettre en œuvre des actions concrètes"
            secondary="Traduire les résultats de recherche en politiques, mesures ou produits applicables sur le terrain. Autrement dit, il s’agit d’intégrer les solutions proposées dans la pratique (soins, organisation du système de santé, réglementation...)."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Science />
          </ListItemIcon>
          <ListItemText
            primary="Évaluer l’efficacité des solutions"
            secondary="Une fois une intervention mise en place, la recherche doit en analyser les effets réels. Cela inclut le suivi des résultats (bénéfices pour la santé, effets indésirables, rapport coût-efficacité) et l’ajustement des actions en fonction des preuves recueillies."
          />
        </ListItem>
      </List>

      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        Ces fonctions se déploient en cycle d’apprentissage continu. En produisant de la connaissance nouvelle, la recherche nourrit les décisions de santé publique et l’innovation médicale, permettant de résoudre des problèmes concrets et d’améliorer les pratiques cliniques ou organisationnelles. Cette conclusion de recherche, traduite en plaidoyer de santé publique, illustre comment la science aide à trouver des solutions pratiques à un problème de terrain. De manière générale, la recherche scientifique apporte une contribution majeure pour préserver la santé et combattre les maladies en fournissant les bases rationnelles à la décision médicale ou politique.
      </Typography>
    </Box>
  );
};

export default FonctionsResearch;
