import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-600">
        <p>
          Entre em contato:{" "}
          <a
            href="mailto:meuemail@example.com"
            className="text-blue-500 hover:underline"
          >
            meuemail@example.com
          </a>
        </p>
        <p className="mt-2 text-sm">
          Este site foi criado do zero por mim, com React, em menos de 12 horas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
