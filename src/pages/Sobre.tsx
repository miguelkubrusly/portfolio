import React from "react";

const Sobre: React.FC = () => {
  return (
    <section className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-500 tracking-tight">
        Sobre
      </h1>
      <p className="text-base font-normal leading-relaxed text-green-300 p-4 bg-gray-900 bg-opacity-50 rounded-sm shadow-inner">
        Sempre fui uma pessoa movida por lógica, aprendizado e busca pela
        excelência. Minha formação acadêmica, que inclui passagens por Letras e
        Medicina, ensinou-me a abordar problemas de forma analítica, metódica e
        sistemática. Hoje, como estudante de Engenharia de Software, encontro na
        programação o espaço ideal para desafiar meu raciocínio e curiosidade
        intelectual.
      </p>
      <p className="text-base font-normal leading-relaxed text-green-300 p-4 bg-gray-900 bg-opacity-50 rounded-sm shadow-inner">
        {" "}
        Sinto-me profundamente realizado ao transformar tarefas repetitivas em
        processos automáticos e exponencialmente mais eficientes. Mesmo quando
        trabalhava com edição de vídeo, a automatização por meio de macros de
        Windows e Mac já era parte do meu cotidiano. Agora, enquanto
        desenvolvedor, me sinto grato por poder exercitar o raciocínio lógico da
        programação em tempo integral.{" "}
      </p>
      <p className="text-base font-normal leading-relaxed text-green-300 p-4 bg-gray-900 bg-opacity-50 rounded-sm shadow-inner">
        {" "}
        Acredito que organização, boa comunicação e disciplina são a base de um
        ambiente de trabalho produtivo. Portanto, são qualidades que levarei
        comigo a qualquer meio profissional que eu ingresse.{" "}
      </p>
      <h2 className="text-xl font-bold text-green-400 mt-6 mb-2">
        Minhas Principais Habilidades Técnicas
      </h2>
      <ul className="list-disc list-inside text-green-300 p-4 bg-gray-900 bg-opacity-50 rounded-sm shadow-inner">
        <li>Linguagens: JavaScript/TypeScript, Python, HTML, CSS</li>
        <li>Frameworks/Bibliotecas: React, Django, Tailwind CSS, Bootstrap</li>
        <li>Ferramentas e Ambiente: Git, Bash, PowerShell</li>
      </ul>
    </section>
  );
};

export default Sobre;
