import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav aria-label="Navigation principale">
      <ul className="flex gap-4 bg-blue-700 text-white p-4">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/conceptuelle">Conceptuelle</Link></li>
        <li><Link to="/methodologique">Méthodologique</Link></li>
        <li><Link to="/empirique">Empirique</Link></li>
        <li><Link to="/analytique">Analytique</Link></li>
        <li><Link to="/diffusion">Diffusion</Link></li>
      </ul>
    </nav>
  );
}
