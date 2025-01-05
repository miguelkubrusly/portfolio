import { useState } from "react";
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
  const [selectedCertificate, setSelectedCertificate] = useState<{
    nome: string;
    src: string;
  } | null>(null);

  const closeModal = () => setSelectedCertificate(null);

  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-500 tracking-tight">
        Desenvolvimento
      </h1>
      <div className="bg-gray-900 bg-opacity-50 p-4 rounded-sm shadow-inner">
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Como programador em formação, sinto grande entusiasmo ao ver código
          tornar-se realidade, e ao entender o potencial que há na programação
          para transformar o mundo. Domino Python, JavaScript, HTML e CSS, além
          de trabalhar com Git, Bash, PowerShell e ter no React meu principal
          framework. Também exploro Django, Vue e Numpy, mantendo-me atento a
          novas ferramentas e tendências. Vejo no estudo não apenas um meio de
          crescimento, mas um verdadeiro prazer.
        </p>
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Meu interesse pelo desenvolvimento vai além do básico: atraem-me a
          inteligência artificial, a segurança, o machine learning, os jogos e
          as finanças, áreas complexas onde criatividade, conhecimento e
          raciocínio matemático se confundem. Sei que cada uma dessas áreas
          individualmente pode ocupar uma vida inteira de estudos, mas não
          consigo deixar de ambicionar conhecê-las profundamente algum dia.
        </p>
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Considero o bom trabalho em equipe como uma habilidade imprescindível
          a qualquer profissão, mas, na engenharia de grandes aplicativos, essa
          realidade não poderia ser mais enfatizada. Por isso, busco integrar
          equipes que valorizem aprendizado mútuo e companheirismo, e levo
          comigo comunicação clara, respeito entre colegas e um constante desejo
          de evoluir. Sou pragmático e detalhista, e anseio para contribuir com
          produtos de qualidade e times em constante progresso.
        </p>
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2">
        {CERTIFICATES.map((cert) => (
          <Certificate
            key={cert.nome}
            nome={cert.nome}
            src={cert.src}
            instituicao={cert.instituicao}
            onClick={() => {
              setSelectedCertificate({ nome: cert.nome, src: cert.src });
            }}
          />
        ))}
      </div>
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 scale-150"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-sm shadow-lg relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">
              {selectedCertificate.nome}
            </h2>
            <img
              src={selectedCertificate.src}
              alt={`Certificado de ${selectedCertificate.nome}`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Desenvolvimento;
