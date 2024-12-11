import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 mt-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-green-400 font-black">
        <p className="mb-2 italic">
          Entre em contato:{" "}
          <a
            href="mailto:miguel@kubrusly.com"
            className="hover:underline decoration-green-400"
          >
            miguel@kubrusly.com{" "}
          </a>
        </p>{" "}
        <p className="mb-2 italic">Telefone: +55(21)99292-5274 </p>
        <p className="text-sm font-light text-green-300">
          Este site foi criado por mim, com React, em menos de 12 horas
          incluindo deployment :)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
