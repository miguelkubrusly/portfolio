import React from "react";

const Sobre: React.FC = () => {
  return (
    <section className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-500 tracking-tight">
        Sobre
      </h1>
      <p className="text-base font-normal leading-relaxed text-green-300 p-4 bg-gray-900 bg-opacity-50 rounded-sm shadow-inner">
        Sou uma pessoa movida por lógica, aprendizado constante e busca pela
        excelência. Minha formação acadêmica, que inclui passagens por Letras e
        Medicina, ensinou-me a valorizar tanto a estrutura quanto a compreensão
        humana e analítica dos problemas. Hoje, como estudante de Engenharia de
        Software, encontro na programação o espaço ideal para meu raciocínio
        lógico e minha curiosidade intelectual.
      </p>
      <p className="text-base font-normal leading-relaxed text-green-300 p-4 bg-gray-900 bg-opacity-50 rounded-sm shadow-inner">
        {" "}
        Sinto-me realizado ao transformar tarefas repetitivas em processos mais
        eficientes, aplicando métodos racionais para criar soluções que
        realmente façam a diferença. Acredito que respeito, honestidade e
        organização são a base de um ambiente de trabalho sólido — qualidades
        que busco levar comigo ao ingressar em um estágio onde possa aprender,
        crescer e contribuir.{" "}
      </p>
      <h2 className="text-xl font-bold text-green-400 mt-6 mb-2">
        Minhas Principais Habilidades Técnicas
      </h2>
      <ul className="list-disc list-inside text-green-300 p-4 bg-gray-900 bg-opacity-50 rounded-sm shadow-inner">
        <li>Linguagens: JavaScript/TypeScript, Python</li>
        <li>Frameworks/Bibliotecas: React, Django, Tailwind CSS, Bootstrap</li>
        <li>Ferramentas e Ambiente: Git, Bash, PowerShell</li>
      </ul>
    </section>
  );
};

export default Sobre;
