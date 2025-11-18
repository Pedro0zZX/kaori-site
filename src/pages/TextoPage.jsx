import { motion } from "framer-motion";

export default function TextoPage() {
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
