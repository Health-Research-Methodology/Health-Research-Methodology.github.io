export default function ProcessIntro() {
  return (
    <section className="max-w-5xl mx-auto leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Introduction au processus de recherche</h1>
      <p className="mb-4">
        Le processus de recherche scientifique suit une suite logique d’étapes permettant
        de passer d’une idée à une conclusion validée. En santé, il s’organise autour de
        cinq grandes phases.
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Phase conceptuelle : identification du problème et formulation des hypothèses</li>
        <li>Phase méthodologique : élaboration du protocole</li>
        <li>Phase empirique : collecte des données</li>
        <li>Phase analytique : traitement et interprétation</li>
        <li>Phase de diffusion : communication des résultats</li>
      </ol>
    </section>
  );
}
