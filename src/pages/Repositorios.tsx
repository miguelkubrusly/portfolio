import React from "react";
import RepoCard from "../components/RepoCard";

const Repositorios: React.FC = () => {
  const repositorios = [
    {
      nome: "portfolio-react",
      descricao: "Meu portfólio pessoal criado com React e Tailwind CSS.",
      link: "https://github.com/seu-usuario/portfolio-react",
    },
    // Outros repositórios...
  ];

  return (
    <section className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Repositórios</h1>
      <div className="grid gap-6">
        {repositorios.map((repo) => (
          <RepoCard
            key={repo.nome}
            nome={repo.nome}
            descricao={repo.descricao}
            link={repo.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Repositorios;
