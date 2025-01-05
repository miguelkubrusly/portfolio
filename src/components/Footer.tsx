import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 mt-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-green-400 text-sm">
        <p className="mb-2 italic">
          Entre em contato:{" "}
          <a
            href="miguel.kubrusly@gmail.com"
            className="hover:underline decoration-green-400 font-black text-base"
          >
            miguel.kubrusly@gmail.com{" "}
          </a>
        </p>{" "}
        {/* <p className="mb-2 italic">Telefone: +55(21)99292-5274 </p> */}
        <p className="mb-2 italic">
          Github:{" "}
          <a
            href="https://github.com/miguelkubrusly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-green-400 font-black text-base"
          >
            github.com/miguelkubrusly
          </a>
        </p>
        <p className="mb-2 italic">
          Linkedin:{" "}
          <a
            href="https://www.linkedin.com/in/miguel-kubrusly/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-green-400 font-black text-base"
          >
            linkedin.com/in/miguel-kubrusly/
          </a>
        </p>
        <div className="max-w-[550px] mx-auto">
          <p className="text-xs text-green-300 font-bold mt-8">
            Este site foi criado com React em menos de 12 horas, incluindo
            deployment :D
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
