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
          Como programador em formação, sinto cada vez mais entusiasmo ao ver
          código tornar-se realidade, e me fascina compreender o potencial sem
          limites que há para transformar o mundo nessa área. Domino Python,
          JavaScript, HTML e CSS, além de trabalhar com Git, Bash, PowerShell e
          ter no React meu principal framework. Também exploro Django, Vue e
          Numpy, mantendo-me atento a novas ferramentas e tendências. Identifico
          no estudo constante não apenas uma forma de crescimento profissional e
          individual, mas um verdadeiro prazer.
        </p>
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Por conta disso, meu interesse pelo desenvolvimento vai além do
          básico. Áreas complexas onde criatividade, conhecimento e matemática
          se misturam me atraem: inteligência artificial, segurança, machine
          learning, desenvolvimento de jogos, análise de dados, finanças, etc.
          Sei que cada uma dessas áreas individualmente pode ocupar uma vida
          inteira de estudos. Entretanto, não consigo deixar de ambicionar
          conhecê-las profundamente algum dia.
        </p>
        <p className="text-base font-normal leading-relaxed text-green-300 mb-4">
          Considero o bom trabalho em equipe como uma habilidade imprescindível
          a toda e qualquer profissão, mas, especialmente, na engenharia de
          grandes aplicativos. Assim, como desenvolvedor em maturação, busco
          times que valorizem aprendizado mútuo e companheirismo, e levo comigo
          comunicação clara, respeito e um constante desejo de evoluir.
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
