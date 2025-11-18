import React from "react";
import { motion } from "framer-motion";

// Componente de Moldura com Foto + Texto (sem música)
function FotoCard({ imagem, texto }) {
  return (
    <Protected>
    <motion.div
      className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-4 flex gap-4 items-center hover:shadow-2xl transition"
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={imagem}
        alt="foto"
        className="w-32 h-32 object-cover rounded-xl border-4 border-pink-300 shadow-md"
      />
      <p className="text-pink-900 text-lg font-light w-64">{texto}</p>
    </motion.div>
  );
}

// Página principal com fotos
// Tela protegida por senha
function Protected({ children }) {
  const [senha, setSenha] = React.useState("");
  const [autorizado, setAutorizado] = React.useState(false);

  const senhaCorreta = "formyprinces@kaori";

  const tentarEntrar = () => {
    if (senha === senhaCorreta) setAutorizado(true);
    else alert("Senha incorreta, amorzinho 😢");
  };

  if (!autorizado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 via-rose-100 to-white p-10 text-center">
        <h1 className="text-3xl font-bold text-pink-800 mb-4">
          🔒 Área protegida
        </h1>

        <p className="text-pink-900 mb-4 text-lg">Digite a senha para entrar, meu amor ❤️</p>

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="p-3 rounded-xl shadow-md border border-pink-300 focus:outline-none text-center"
          placeholder="Digite a senha..."
        />

        <button
          onClick={tentarEntrar}
          className="mt-4 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl shadow-lg transition"
        >
          Entrar
        </button>
      </div>
    </Protected>
  );
  }

  return children;
}

export default function App() {
  const fotos = [
    {
      imagem: "/foto1.jpg",
      texto: "Você ficou lindissima com a minha camisa do Led.",
    },
    {
      imagem: "/foto2.jpg",
      texto: "Amo o carinho que você tem pelas suas calebs, a sua dedicação, eu admiro.",
    },
    {
      imagem: "/foto3.jpg",
      texto: "Quando você fica espontânea assim, você não faz ideia do quanto eu gosto.",
    },
    {
      imagem: "/foto4.jpg",
      texto: "Você sempre está bonita no estilo de trabalho e sei que você é uma ótima profissional.",
    },
    {
      imagem: "/foto5.jpg",
      texto: "É uma grande honra ser o seu futuro marido, quero continuar sempre ao seu lado.",
    },
    {
      imagem: "/foto6.jpg",
      texto: "Não posso deixar passar despercebido suas coisinhas engraçadas.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-rose-100 to-white p-10 flex flex-col items-center gap-6">
      <motion.h1
        className="text-4xl font-bold text-pink-800 mb-6 drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Para Kaori, O Perfume que floresce かおり ❤️
      </motion.h1>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        {fotos.map((f, i) => (
          <FotoCard key={i} imagem={f.imagem} texto={f.texto} />
        ))}
      </div>

      {/* Vídeo especial 1 */}
      <div className="mt-10 w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-2xl text-pink-800 font-semibold mb-4">Eu sei que vai entender porque escolhi esse vídeo ❤️</h2>
        <video controls className="rounded-2xl shadow-xl w-full bg-white/60 backdrop-blur-sm">
          <source src="/video1.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      {/* Vídeo especial 2 */}
      <div className="mt-10 w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-2xl text-pink-800 font-semibold mb-4">Bastidores, você é minha inspiração Amorzinho ❤️</h2>
        <video controls className="rounded-2xl shadow-xl w-full bg-white/60 backdrop-blur-sm">
          <source src="/video2.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      
    </div>
  );
}

// Página separada para o grande texto
export function TextoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-100 to-pink-200 p-10 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold text-pink-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Um Texto Só Nosso ❤️
      </motion.h1>

      <textarea
        className="w-full max-w-3xl h-[70vh] p-4 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm text-gray-700 text-lg"
        placeholder="Escreva aqui o seu grande texto..."
      />

      <a
        href="/"
        className="mt-6 text-pink-900 underline text-lg hover:text-pink-600 transition"
      >
        Voltar ao início
      </a>
    </div>
  );
}
