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
    <div className="bg-gray-900 border border-gray-700 shadow hover:shadow-xl transition-transform duration-100 hover:scale-105 overflow-hidden flex flex-col">
      <a
        href={linkSite}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visitar o site do projeto ${nome}`}
      >
        {imagem && (
          <img
            src={imagem}
            alt={`Captura de tela do projeto ${nome}, mostrando a interface principal.`}
            className="w-full h-40 object-cover object-top"
          />
        )}
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-white">{nome}</h2>
            <p className="text-green-300 mt-2 leading-relaxed font-normal">
              {descricao}
            </p>
          </div>
          <div className="flex flex-row space-x-4 pt-4">
            <a
              href={linkSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-green-200 hover:underline font-medium"
              aria-label={`Visitar o site do projeto ${nome}`}
            >
              Visitar Site
            </a>
            {linkCodigo && (
              <a
                href={linkCodigo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-100 hover:text-green-200 hover:underline font-medium"
                aria-label={`Acessar o código fonte do projeto ${nome} no GitHub`}
              >
                Código no GitHub
              </a>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
