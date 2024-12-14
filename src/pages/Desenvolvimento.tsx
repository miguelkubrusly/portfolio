import React from "react";
import Certificate from "../components/Certificate";

const CERTIFICATES = [
  {
    nome: "Modern React with Redux [2024 Update]",
    src: "/resources/certificates/udemy/Modern-react-with-redux.jpg",
    instituicao: "Udemy",
  },
  {
    nome: "Learn Python 3",
    src: "/resources/certificates/codeacademy/python.png",
    instituicao: "CodeAcademy",
  },
  {
    nome: "Learn the Command Line",
    src: "/resources/certificates/codeacademy/bash.png",
    instituicao: "CodeAcademy",
  },
  {
    nome: "Front-End Web Developer",
    src: "/resources/certificates/descomplica/user-experience.png",
    instituicao: "Descomplica",
  },
];

const Desenvolvimento: React.FC = () => {
  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-500 tracking-tight">
        Desenvolvimento
      </h1>
      <div className="bg-gray-900 bg-opacity-50 p-4 rounded-sm shadow-inner">
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Como programador em formação, sinto grande entusiasmo ao ver código
          tornar-se soluções reais e úteis. Domino Python, JavaScript, HTML e
          CSS, além de trabalhar com Git, Bash, PowerShell e ter no React meu
          principal framework. Também exploro Django e Numpy, mantendo-me atento
          a novas ferramentas e tendências.
        </p>
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Meu interesse pelo desenvolvimento vai além do básico: atraem-me a
          automação, a segurança, o machine learning, os jogos e as finanças,
          áreas complexas onde a criatividade e o raciocínio matemático se
          alinham a desafios técnicos reais. Busco integrar equipes que
          valorizem aprendizado mútuo, comunicação clara e respeito entre
          colegas, ambientes onde possa evoluir enfrentando problemas concretos.
          Sou pragmático, detalhista e vejo no estudo não apenas um meio de
          crescimento, mas um verdadeiro prazer. Quero contribuir para produtos
          de qualidade e times em constante progresso.
        </p>
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2">
        {CERTIFICATES.map((cert) => (
          <Certificate
            key={cert.nome}
            nome={cert.nome}
            src={cert.src}
            instituicao={cert.instituicao}
          />
        ))}
      </div>
    </section>
  );
};

export default Desenvolvimento;
