import React from "react";

interface ProjectCardProps {
  nome: string;
  descricao: string;
  linkSite: string;
  linkCodigo?: string;
  imagem?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  nome,
  descricao,
  linkSite,
  linkCodigo,
  imagem,
}) => {
  return (
    <div className="bg-gray-900 border border-gray-700 shadow hover:shadow-xl transition-transform duration-100 hover:scale-105 overflow-hidden">
      {imagem && (
        <img
          src={imagem}
          alt={`${nome} screenshot`}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-extrabold text-white">{nome}</h2>
        <p className="text-green-300 mt-2 leading-relaxed font-normal">
          {descricao}
        </p>
        <div className="mt-4 flex space-x-4">
          <a
            href={linkSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-100 hover:text-green-200 hover:underline font-medium"
          >
            Visitar Site
          </a>
          {linkCodigo && (
            <a
              href={linkCodigo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-green-200 hover:underline font-medium"
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
