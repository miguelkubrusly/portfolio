import React from "react";

interface ProjectCardProps {
  nome: string;
  descricao: string;
  linkSite: string;
  linkCodigo?: string;
  imagem?: string; // Opcional: URL da imagem do projeto
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  nome,
  descricao,
  linkSite,
  linkCodigo,
  imagem,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
      {imagem && (
        <img
          src={imagem}
          alt={`${nome} screenshot`}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{nome}</h2>
        <p className="text-gray-600 mt-2">{descricao}</p>
        <div className="mt-4 flex space-x-4">
          <a
            href={linkSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visitar Site
          </a>
          {linkCodigo && (
            <a
              href={linkCodigo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Código no GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
