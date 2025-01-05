import React from "react";

interface CertificateProps {
  nome: string;
  src: string;
  instituicao: string;
  onClick: () => void;
}

const Certificate: React.FC<CertificateProps> = ({
  nome,
  src,
  instituicao,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 p-4 border border-gray-700 rounded-sm shadow hover:shadow-lg transition-transform duration-100 hover:scale-105"
    >
      <h2 className="text-lg font-extrabold text-white mb-2">{nome}</h2>
      <p className="text-green-300 mb-4">{instituicao}</p>
      <img
        src={src}
        alt={`Certificado de ${nome}`}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Certificate;
