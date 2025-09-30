import { NavLink } from "react-router-dom";
import { Container, Typography, Box, Link, List, ListItem, ListItemText } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header principal */}
      <Box component="header" sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Conduire la Recherche en Santé
        </Typography>
        <Typography variant="h5" component="h2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
          Étapes pour Mener une Étude de Recherche
        </Typography>
      </Box>

      {/* Introduction générale */}
      <Box component="section" sx={{ mb: 4 }}>
        <Typography paragraph>
          La recherche en santé est une démarche <strong>systématique et organisée</strong> visant à produire de nouvelles connaissances ou à vérifier celles déjà existantes. Elle constitue un pilier essentiel de la <em>Evidence-Based Practice</em>, permettant d’améliorer la qualité des soins, de développer de nouvelles approches thérapeutiques et de renforcer la formation des professionnels de santé.
        </Typography>
        <Typography paragraph>
          Ce guide vous accompagne à travers les différentes étapes de la recherche scientifique : <strong>Conceptuelle → Méthodologique → Empirique → Analytique → Diffusion</strong>.
        </Typography>
        <Typography>
          Si vous débutez un projet de recherche, commencez par{" "}
          <Link component={NavLink} to="/overview-research" sx={{ textDecoration: 'underline' }}>
            l’Aperçu de la recherche scientifique
          </Link>{" "}
          pour bien comprendre les principes généraux avant d’aller plus loin.
        </Typography>
      </Box>

      {/* Section 1 : Overview */}
      <Box component="section" sx={{ mb: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          📘 Aperçu de la Recherche Scientifique
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/purpose-research">Objectif de la recherche en santé</Link>}
              secondary="Améliorer la qualité des soins et orienter les décisions" 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/philosophy-research">Philosophie de la recherche</Link>}
              secondary="Déduction, induction, probabilité et rigueur scientifique" 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/ethics-research">Considérations éthiques</Link>}
              secondary="Consentement, confidentialité, comités d’éthique" 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/process-intro">Introduction au Processus de Recherche</Link>}
              secondary="Phases : conceptuelle → diffusion" 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/writing-overview">Aperçu de la rédaction d'une étude</Link>}
              secondary="Structure IMRaD et normes de publication" 
            />
          </ListItem>
        </List>
      </Box>

      {/* Section 2 : Steps */}
      <Box component="section">
        <Typography variant="h4" component="h2" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          📝 Étapes de la Recherche Scientifique
        </Typography>
        <List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText 
              primary={<Link component={NavLink} to="/brainstorm">Brainstorming d'idées de recherche</Link>}
              secondary="Identifier un problème de santé pertinent" 
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText 
              primary={<Link component={NavLink} to="/variables">Identification des variables clés et du design</Link>}
              secondary="Choisir une méthode adaptée (observationnel, expérimental…)" 
            />
          </ListItem>
        </List>
      </Box>

      {/* Section 3 : Ressources */}
      <Box component="section" sx={{ mt: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          📚 Ressources utilisées
        </Typography>
        <Typography paragraph>
          Les ressources suivantes ont servi de base à l’élaboration de ce site :
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary={
                <Link href="https://www.sante.bj/sites/default/files/2021-01/Guide%20du%20formateur%20en%20m%C3%A9thodologie%20de%20la%20recherche%20en%20sant%C3%A9.pdf" target="_blank" rel="noopener">
                  Guide du formateur en méthodologie de la recherche en santé – Ministère de la Santé (Bénin, 2016)
                </Link>
              }
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Guide de formation aux méthodes de la recherche scientifique – Documents pédagogiques universitaires francophones"
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary={
                <Link href="https://apps.who.int/iris/handle/10665/44162" target="_blank" rel="noopener">
                  Scientific Publications Booklet – Rédaction et diffusion des publications scientifiques (OMS, 2009)
                </Link>
              }
            />
          </ListItem>
           <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Introduction à la recherche – Supports de cours en méthodologie et épistémologie"
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Mesures statistiques en épidémiologie – Bernard P.-M. & Lapointe C."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="La Biostatistique – Preprint – Concepts de base en statistique appliquée à la santé"
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
