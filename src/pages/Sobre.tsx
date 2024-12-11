import React from "react";

const Sobre: React.FC = () => {
  return (
    <section className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-500 tracking-tight">
        Sobre
      </h1>
      <p className="text-base font-normal leading-relaxed text-green-300 p-4 bg-gray-900 bg-opacity-50 rounded-sm shadow-inner">
        Sou uma pessoa movida por lógica, aprendizado constante...
      </p>
    </section>
  );
};

export default Sobre;
