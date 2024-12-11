import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-cyan-300 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo ou Título */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-semibold text-gray-800">
              Meu Portfólio
            </Link>
          </div>
          {/* Menu de Navegação */}
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-500">
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/desenvolvimento"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link
                  to="/audiovisual"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Audiovisual
                </Link>
              </li>
              <li>
                <Link
                  to="/repositorios"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Repositórios
                </Link>
              </li>
              <li>
                <Link to="/react" className="text-gray-700 hover:text-blue-500">
                  React
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
