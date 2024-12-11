import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 mt-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-green-300">
        <p className="mb-2 italic">
          Entre em contato:{" "}
          <a
            href="mailto:meuemail@example.com"
            className="hover:underline decoration-green-300"
          >
            meuemail@example.com
          </a>
        </p>
        <p className="text-sm font-light">
          Este site foi criado do zero por mim, com React, em menos de 12 horas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
