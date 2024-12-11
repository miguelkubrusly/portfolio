import React from "react";

const Desenvolvimento: React.FC = () => {
  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-500 tracking-tight">
        Desenvolvimento
      </h1>
      <div className="bg-gray-900 bg-opacity-50 p-4 rounded-sm shadow-inner">
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Como programador em formação...
        </p>
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Meu interesse pelo desenvolvimento vai além do básico...
        </p>
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Sou pragmático, detalhista e vejo no estudo...
        </p>
      </div>
    </section>
  );
};

export default Desenvolvimento;
