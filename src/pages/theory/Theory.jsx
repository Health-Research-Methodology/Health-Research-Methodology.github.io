import { NavLink } from "react-router-dom";

const theoryLinks = [
  { path: "/overview-research", label: "Aperçu de la recherche scientifique" },
  { path: "/purpose-research", label: "Finalité de la recherche en santé" },
  { path: "/philosophy-research", label: "Philosophie de la recherche" },
  { path: "/ethics-research", label: "Considérations éthiques" },
  { path: "/process-intro", label: "Introduction au processus de recherche" },
  { path: "/writing-overview", label: "Aperçu de la rédaction d’une étude" },
];

export default function Theory() {
  return (
    <section className="max-w-5xl mx-auto leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Ressources théoriques
      </h1>

      <p className="mb-4">
        Cette section regroupe les concepts de base nécessaires pour comprendre et
        pratiquer la recherche scientifique en santé. Vous pouvez parcourir chaque
        thème séparément.
      </p>

      <ul className="list-disc pl-6 space-y-3">
        {theoryLinks.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className="text-blue-700 dark:text-blue-300 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
