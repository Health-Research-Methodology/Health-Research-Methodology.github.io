export default function WritingOverview() {
  return (
    <section className="max-w-5xl mx-auto leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Aperçu de la rédaction d’une étude</h1>
      <p className="mb-4">
        Rédiger une étude scientifique implique de suivre une structure standardisée
        reconnue internationalement : le modèle <strong>IMRaD</strong>
        (Introduction, Méthodes, Résultats, Discussion).
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Introduction</strong> : problématique, objectifs, hypothèses</li>
        <li><strong>Méthodes</strong> : design, population, instruments, collecte</li>
        <li><strong>Résultats</strong> : analyses statistiques ou qualitatives</li>
        <li><strong>Discussion</strong> : interprétation, limites, implications</li>
        <li><strong>Conclusion</strong> : synthèse et perspectives</li>
      </ul>
    </section>
  );
}
