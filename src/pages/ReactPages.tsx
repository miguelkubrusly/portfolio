import React from "react";
import ProjectCard from "../components/ProjectCard";

const ReactPages: React.FC = () => {
  const projetos = [
    {
      nome: "Component Showcase",
      descricao:
        "Um dashboard interativo com uma mostra de diversos componentes reutilizáveis criados e estilizados artesanalmente criado com TailwindCSS.",
      linkSite: "https://components-showcase-app.vercel.app/",
      linkCodigo: "https://github.com/miguelkubrusly/components-showcase-app",
      imagem: "../../resources/showcase.png",
    },
    {
      nome: "Location Search",
      descricao:
        "Uma página de geolocalização com ferramenta de busca, criado com Leaflet.",
      linkSite: "https://location-search-app-alpha.vercel.app/",
      linkCodigo: "https://github.com/miguelkubrusly/location-search-app",
      imagem: "../../resources/map.png",
    },
    {
      nome: "Car Catalog",
      descricao:
        "Um gestor de carro para milionários! Inclui barra de busca com match parcial (versão estática).",
      linkSite: "https://car-catalog-app-theta.vercel.app/",
      linkCodigo: "https://github.com/miguelkubrusly/car-catalog-app",
      imagem: "../../resources/cars.png",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4 text-green-500 tracking-tight">
        React
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, index) => (
          <ProjectCard
            key={index}
            nome={projeto.nome}
            descricao={projeto.descricao}
            linkSite={projeto.linkSite}
            linkCodigo={projeto.linkCodigo}
            imagem={projeto.imagem}
          />
        ))}
      </div>
    </div>
  );
};

export default ReactPages;
