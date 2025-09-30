import StepNavigation from "../components/StepNavigation";

export default function Overview() {
  return (
    <section
      aria-labelledby="overview-title"
      className="max-w-5xl mx-auto leading-relaxed"
    >
      <h1
        id="overview-title"
        className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100"
      >
        Aperçu du processus de recherche en santé
      </h1>
  {/* Table des matières */}
      <StepNavigation />
      <p className="mb-4">
        Le processus de recherche scientifique en santé suit une logique en{" "}
        <strong>cinq grandes phases</strong>. Chaque phase joue un rôle essentiel
        pour garantir la rigueur, la validité et la diffusion des résultats.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">1. Conceptuelle</h2>
          <p>
            Identification du problème de santé, formulation des objectifs,
            variables et hypothèses.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">2. Méthodologique</h2>
          <p>
            Élaboration du protocole : type d’étude, population, instruments,
            éthique et plan logistique.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">3. Empirique</h2>
          <p>
            Mise en œuvre sur le terrain : recrutement, collecte de données,
            suivi qualité et traçabilité.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">4. Analytique</h2>
          <p>
            Préparation, analyse statistique et qualitative des données,
            interprétation et discussion.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">5. Diffusion</h2>
          <p>
            Rédaction scientifique (IMRaD), présentation des résultats,
            publications, posters et valorisation dans la pratique.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-3">
        Objectif général du guide
      </h2>
      <p className="mb-4">
        Permettre aux étudiants et professionnels de santé de{" "}
        <strong>
          concevoir, réaliser, analyser et diffuser un projet de recherche
        </strong>{" "}
        de manière rigoureuse, éthique et accessible.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Objectifs spécifiques
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Utiliser les bases de données pour rechercher des articles</li>
        <li>Rédiger des références bibliographiques selon les normes</li>
        <li>Définir les concepts de base en statistique et en épidémiologie</li>
        <li>Mettre en œuvre un protocole de recherche sur le terrain</li>
        <li>Analyser et interpréter les résultats avec un esprit critique</li>
        <li>Diffuser les résultats auprès de la communauté scientifique</li>
      </ul>
    </section>
  );
}
