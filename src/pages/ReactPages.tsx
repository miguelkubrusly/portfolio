import React from "react";
import ProjectCard from "../components/ProjectCard";

const ReactPages: React.FC = () => {
  // Lista de projetos hospedados. Substitua com seus projetos reais.
  const projetos = [
    {
      nome: "Meu Portfólio React",
      descricao:
        "Um portfólio pessoal criado com React e Tailwind CSS, apresentando meus projetos e habilidades.",
      linkSite: "https://seu-portfolio.com",
      linkCodigo: "https://github.com/seu-usuario/portfolio-react",
      imagem: "https://via.placeholder.com/400x300.png?text=Meu+Portfólio", // Substitua pela URL da imagem do projeto
    },
    {
      nome: "Blog em React",
      descricao:
        "Um blog totalmente funcional desenvolvido em React, com funcionalidades de CRUD e autenticação de usuários.",
      linkSite: "https://seu-blog.com",
      linkCodigo: "https://github.com/seu-usuario/blog-react",
      imagem: "https://via.placeholder.com/400x300.png?text=Blog+em+React",
    },
    {
      nome: "Dashboard de Analytics",
      descricao:
        "Um dashboard interativo criado com React e D3.js para visualizar dados de maneira intuitiva.",
      linkSite: "https://seu-dashboard.com",
      linkCodigo: "https://github.com/seu-usuario/dashboard-analytics",
      imagem:
        "https://via.placeholder.com/400x300.png?text=Dashboard+Analytics",
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">React</h1>
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
