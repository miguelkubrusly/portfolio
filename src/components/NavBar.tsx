import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="bg-gray-800 shadow"
      aria-label="Navegação principal do site"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="text-2xl font-extrabold text-green-800 tracking-tight hover:text-green-500 md:mr-4 mr-0"
            >
              MIGUEL KUBRUSLY
            </Link>
            <img
              src="resources/pacman-eating.png"
              alt="Pacman comendo"
              className="h-8 md:mb-2 scale-75 md:scale-100 mr-2"
            />
          </div>

          {/* Botão de menu (hamburger) no mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="text-green-200 hover:text-green-300 focus:outline-none focus:text-green-300"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Abrir menu</span>
              {/* Ícone de menu (hamburguer) */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    className="block"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="block"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu em telas médias ou maiores */}
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/desenvolvimento"
                  className="text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                >
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link
                  to="/repositorios"
                  className="text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                >
                  Repositórios
                </Link>
              </li>
              <li>
                <Link
                  to="/react"
                  className="text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                >
                  React
                </Link>
              </li>
              <li>
                <Link
                  to="/audiovisual"
                  className="text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                >
                  Audiovisual
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menu em telas pequenas (mobile) */}
      {menuOpen && (
        <div
          className="md:hidden"
          id="mobile-menu"
        >
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <li>
              <Link
                to="/"
                className="block text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/desenvolvimento"
                className="block text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Desenvolvimento
              </Link>
            </li>
            <li>
              <Link
                to="/repositorios"
                className="block text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Repositórios
              </Link>
            </li>
            <li>
              <Link
                to="/react"
                className="block text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                React
              </Link>
            </li>
            <li>
              <Link
                to="/audiovisual"
                className="block text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Audiovisual
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
