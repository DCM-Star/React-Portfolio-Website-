import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">Danny Miguel</h1>
      <ul className="flex gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-gray-300 hover:text-white transition-colors"
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Contact & Credentials
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}