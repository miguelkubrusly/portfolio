import React from "react";
import RepoCard from "../components/RepoCard";

const Repositorios: React.FC = () => {
  const repositorios = [
    {
      nome: "portfolio-react",
      descricao: "Meu portfólio pessoal criado com React e Tailwind CSS.",
      link: "https://github.com/seu-usuario/portfolio-react",
    },
  ];

  return (
    <section className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-500 tracking-tight">
        Repositórios
      </h1>
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
