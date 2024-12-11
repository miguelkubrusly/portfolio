import React from "react";

interface RepoCardProps {
  nome: string;
  descricao: string;
  link: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ nome, descricao, link }) => {
  return (
    <div className="p-4 border border-gray-700 bg-gray-900 shadow hover:shadow-xl transition-transform duration-100 hover:scale-105">
      <h2 className="text-xl font-extrabold mb-2 text-white">{nome}</h2>
      <p className="text-green-300 mb-4 leading-relaxed font-normal">
        {descricao}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-200 hover:text-green-100 hover:underline"
        aria-label={`Acessar o repositório ${nome} no GitHub`}
      >
        Ver no GitHub
      </a>
    </div>
  );
};

export default RepoCard;
