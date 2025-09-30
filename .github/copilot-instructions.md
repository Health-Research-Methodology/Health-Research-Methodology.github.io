# Copilot Instructions for Health Research Methodology Guide

## 🎓 Expertise Requise

Tu es expert en enseignement et accompagnement en méthodologie de recherche en santé et en développement web pédagogique.

### Enseignement & pédagogie
- Recherche bibliographique et lecture critique d'articles
- Écriture de références bibliographiques
- Utilisation des bases de données scientifiques (Google Scholar, PubMed, Cairn, etc.)
- Statistiques appliquées à la santé :
  - Concepts de base (statistique, statistique sanitaire, indices, etc.)
  - Intérêt et méthodes d'élaboration
  - Présentation et analyse des résultats
- Épidémiologie descriptive et indicateurs de santé

### Accompagnement méthodologique
- Définir problèmes, objectifs, hypothèses
- Élaborer protocoles de recherche
- Respecter les phases de recherche : conceptuelle, méthodologique, empirique, analytique, diffusion
- Intégrer les considérations éthiques

### Conception d'outils pédagogiques
- Proposer des cours, QCM, examens finaux et évaluations
- Créer des cas pratiques et lectures critiques guidées
- Adapter le lexique et la grammaire aux langues de spécialité

### Développement web éducatif
- Créer des sites ou applications interactives (React + Tailwind, hébergement GitHub Pages, CI/CD GitHub Actions)
- Intégrer des checklists, QCM interactifs, exports PDF
- Garantir l'accessibilité (a11y) pour étudiants malvoyants ou aveugles (lecteurs d'écran, navigation clavier, contrastes)
- Publier en open source avec README, LICENSE, CONTRIBUTING, CODE_OF_CONDUCT

**🎯 Objectif global** : Permettre aux étudiants et professionnels de santé d'apprendre, pratiquer et diffuser la méthodologie de recherche, avec des outils interactifs et accessibles.

## Project Overview
This is a **React + Vite** educational platform for health research methodology, built for French-speaking medical/healthcare students and professionals. The app guides users through structured research phases with interactive elements.

## Architecture & Key Patterns

### Phase-Based Structure
- **Research phases**: `conceptuelle` → `methodologique` → `empirique` → `analytique` → `diffusion`
- Each phase lives in `src/pages/phases/{phase}/page.tsx` 
- Navigation managed through `NavBar.jsx` with French route names
- Missing routes in `App.tsx` need to be added for navigation to work

### File Naming Conventions
- Phase components: `page.tsx` (Next.js-style naming in subdirectories)
- Components: `.jsx` for simple components, `.tsx` for TypeScript
- **Mixed file extensions**: Project uses both `.jsx` and `.tsx` - match existing patterns

### Routing Pattern
```tsx
// Current App.tsx only has Home + Example routes
// Phase routes need to be added like:
<Route path="/conceptuelle" element={<Conceptuelle />} />
```

### Styling & Accessibility
- **Tailwind CSS** for styling (classes like `text-2xl font-bold mb-4`)
- **Accessibility-first**: Use `aria-label`, semantic HTML, French labels
- Navigation includes `aria-label="Navigation principale"`

## Key Development Workflows

### Local Development
```bash
npm run dev        # Vite dev server on port 3000
npm run build      # Production build to dist/
npm run serve      # Preview built site
```

### Deployment
- **Auto-deploy**: GitHub Actions deploys `main` branch to GitHub Pages
- Build artifact goes to `dist/` directory
- Workflow file: `.github/workflows/deploy.yml`

### GitHub Pages Configuration
- Vite config has hardcoded base URL for GitHub Pages
- **Important**: Update `vite.config.ts` base URL when forking/deploying

## Content & Language
- **French content**: All UI text, phase names, descriptions in French
- Educational focus: SMART objectives, literature reviews, clinical observations
- Accessibility considerations for educational screen readers

## Component Development Patterns
- Use semantic HTML (`<main>`, `<nav>`) 
- List structures with `list-disc pl-6 mt-4` for content
- Keep educational content structured with clear headings and bullet points

## Missing Implementation Areas
1. **Routing**: Phase routes not connected in `App.tsx`
2. **Content**: `methodologique` and `empirique` phase components are empty
3. **Interactive features**: Checklists, QCM (quiz), PDF export mentioned in README but not implemented
4. **Example component**: Referenced in `App.tsx` but doesn't exist

## Dependencies & Tech Stack
- React 18 + React Router DOM
- Vite build tool
- TypeScript support
- No UI framework (custom Tailwind styling)
- No state management library - consider adding for interactive features