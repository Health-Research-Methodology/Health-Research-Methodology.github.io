import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SkipLink from "./components/SkipLink";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Overview from "./pages/Overview";

import Theory from "./pages/theory/Theory";
import OverviewResearch from "./pages/theory/OverviewResearch";
import PurposeResearch from "./pages/theory/PurposeResearch";
import PhilosophyResearch from "./pages/theory/PhilosophyResearch";
import EthicsResearch from "./pages/theory/EthicsResearch";
import ProcessIntro from "./pages/theory/ProcessIntro";
import WritingOverview from "./pages/theory/WritingOverview";
import FonctionsResearch from "./pages/theory/FonctionsResearch";

import Conceptuelle from "./pages/phases/conceptuelle/Conceptuelle";
import BrainstormIdeas from "./pages/phases/conceptuelle/Step1BrainstormIdeas";
import Step2FormulateProblem from "./pages/phases/conceptuelle/Step2FormulateProblem";
import Step3LitteratureReview from "./pages/phases/conceptuelle/step3LitteratureReview";
import Step4VariablesDesign from "./pages/phases/conceptuelle/Step4VariablesDesign";
import Step5HypothsisModelConceptuel from "./pages/phases/conceptuelle/Step5HypothsisModelConceptuel";
import InterestingHealthVariables from "./pages/phases/conceptuelle/InterestingHealthVariables";


import Methodologique from "./pages/phases/methodologique/Methodologique";
import Step7TypeEtude from "./pages/phases/methodologique/step7TypeEtude";
import Step8PopulationEchantillon from "./pages/phases/methodologique/step8PopulationEchantillon";
import Empirique from "./pages/phases/empirique/Empirique";
import Analytique from "./pages/phases/analytique/Analytique";
import Diffusion from "./pages/diffusion/Diffusion";
import "./a11y.css";


import { Container, Typography } from '@mui/material';

// ... (keep existing imports)

export default function App() {
  return (
    <>
      <SkipLink />
      <NavBar />
      <Container component="main" id="main" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/overview-research" element={<OverviewResearch />} />
          <Route path="/purpose-research" element={<PurposeResearch />} />
          <Route path="/philosophy-research" element={<PhilosophyResearch />} />
          <Route path="/ethics-research" element={<EthicsResearch />} />
          <Route path="/process-intro" element={<ProcessIntro />} />
          <Route path="/writing-overview" element={<WritingOverview />} />
          <Route path="/fonctions-research" element={<FonctionsResearch />} />
          <Route path="/conceptuelle" element={<Conceptuelle />} />

       
<Route path="/conceptuelle/brainstorm" element={<BrainstormIdeas />} />
<Route path="/conceptuelle/formulate-problem" element={<Step2FormulateProblem />} />
<Route path="/conceptuelle/literature-review" element={<Step3LitteratureReview />} />
<Route path="/conceptuelle/variables-design" element={<Step4VariablesDesign />} />
<Route path="/conceptuelle/hypotheses-model" element={<Step5HypothsisModelConceptuel />} />

          <Route path="/methodologique" element={<Methodologique />} />
          <Route path="/methodologique/type-etude" element={<Step7TypeEtude />} />
          <Route path="/methodologique/population-echantillon" element={<Step8PopulationEchantillon />} />
          <Route path="/empirique" element={<Empirique />} />
          <Route path="/analytique" element={<Analytique />} />
          <Route path="/diffusion" element={<Diffusion />} />
        </Routes>
      </Container>
      <Container component="footer" sx={{ mt: 'auto', py: 2, borderTop: '1px solid #ddd' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2025 Health Research Guide • Mohamed El Hajji, Open source (MIT)
        </Typography>
      </Container>
    </>
  );
}