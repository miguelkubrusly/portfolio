import React from "react";
import RepoCard from "../components/RepoCard";

const Repositorios: React.FC = () => {
  const REPOSITORIOS = [
    {
      nome: "portfolio",
      descricao: "Este portfólio, criado com React e Tailwind CSS.",
      link: "https://github.com/miguelkubrusly/portfolio",
    },
    {
      nome: "habit_tracker",
      descricao: "API de um projeto pessoal criado com Django e REST.",
      link: "https://github.com/miguelkubrusly/habit_tracker",
    },
    {
      nome: "image-search-app",
      descricao: "Site de busca de imagem criado com React.",
      link: "https://github.com/miguelkubrusly/image-search-app",
    },
    {
      nome: "personal-book-manager-app",
      descricao:
        "Cria uma lista de livros num back-end falso, com React e Tailwind CSS.",
      link: "https://github.com/miguelkubrusly/personal-book-manager-app",
    },
    {
      nome: "leetcode-exercises",
      descricao: "Meu repositório com exercícios do LeetCode.",
      link: "https://github.com/miguelkubrusly/leetcode-exercises",
    },
    {
      nome: "master-math-with-python",
      descricao:
        "Repositório de um curso de matemática universitária usando Python.",
      link: "https://github.com/miguelkubrusly/master-math-with-python",
    },
    {
      nome: "maria-camargo-website",
      descricao:
        "Site em construção: recriando em React um site profissional hospedado na Wix.",
      link: "https://github.com/miguelkubrusly/maria-camargo-website",
    },
    {
      nome: "descomplica",
      descricao:
        "Meu repositório para manter controle dos exercícios da faculdade.",
      link: "https://github.com/miguelkubrusly/descomplica",
    },
    {
      nome: "npm-registry-app",
      descricao:
        "Dashboard com busca de informações sobre módulos do NPM, usando API do NPM Registry.",
      link: "https://github.com/miguelkubrusly/npm-registry-app",
    },
  ];

  return (
    <section className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-500 tracking-tight">
        Repositórios
      </h1>
      <div className="grid gap-6">
        {REPOSITORIOS.map((repo) => (
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
