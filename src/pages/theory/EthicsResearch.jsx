import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

export default function EthicsResearch() {
  return (
    <Box component="section" sx={{ maxWidth: "max-content", mx: "auto", p: 2 }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Considérations éthiques
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        L’éthique est au cœur de la recherche en santé. Elle protège les
        participants, garantit la confidentialité et assure que les bénéfices
        l’emportent sur les risques.
      </Typography>
      <List>
        {[
          "Consentement libre et éclairé",
          "Confidentialité et anonymisation des données",
          "Droit de retrait sans conséquence",
          "Équilibre bénéfice/risque",
          "Validation par un comité d’éthique",
        ].map((text) => (
          <ListItem key={text} disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckCircleOutline color="primary" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
