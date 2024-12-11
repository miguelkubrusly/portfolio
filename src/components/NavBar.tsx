import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-extrabold text-green-500 tracking-tight hover:underline decoration-green-500"
            >
              Meu Portfólio
            </Link>
          </div>
          <div>
            <ul className="flex space-x-6">
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
                  to="/audiovisual"
                  className="text-green-200 font-semibold text-lg hover:text-green-300 hover:underline"
                >
                  Audiovisual
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
