import React from "react";

interface RepoCardProps {
  nome: string;
  descricao: string;
  link: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ nome, descricao, link }) => {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{nome}</h2>
      <p className="text-gray-700 mb-4">{descricao}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Ver no GitHub
      </a>
    </div>
  );
};

export default RepoCard;
