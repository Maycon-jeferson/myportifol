"use client"; // Diretiva para garantir que o componente é tratado como um cliente

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

// Corrigir a importação do Typewriter com o dynamic e garantir que seja um componente de função.
const Typewriter = dynamic(() => import('react-simple-typewriter').then(mod => mod.Typewriter), { ssr: false });

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Garante que o componente só vai ser renderizado no cliente
  }, []);

  return (
    <section
      className={`
        flex flex-col items-center justify-start pt-16 p-8
        min-h-[40vh]
        bg-gray-900
        md:bg-gradient-to-b md:from-gray-900 md:via-gray-800 md:to-gray-900
      `}
    >
      <div className={`
        bg-gray-900 w-full max-w-2xl flex flex-col items-center p-8
        md:bg-gray-800 md:rounded-3xl md:shadow-2xl
      `}>
        
        <div className="relative w-40 h-40 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg">
          <img 
            src="/perfil.jpg"
            alt="Foto de perfil"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-2 mt-6 font-sans text-center">
          <div className="h-20 flex items-center justify-center">
            <h1 className="text-3xl font-extrabold text-cyan-400">
              {isClient && (
                <Typewriter
                  words={[
                    'Programador FullStack _', 
                    'Estudante em Engenharia de Software _'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              )}
            </h1>
          </div>

          <p className="text-lg font-medium text-gray-300 mt-2">
            Criando soluções inovadoras para o futuro 🚀
          </p>
        </div>

        <div className="mt-6 text-center">
          <div className="flex gap-4">
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400"
            >
              <FaWhatsapp size={30} />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400"
            >
              <FaGithub size={30} />
            </a>

            {/* Gmail Icon */}
            <a
              href="mailto:seuemail@gmail.com"
              className="text-cyan-500 hover:text-cyan-400"
            >
              <FaEnvelope size={30} />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/seu-perfil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
Bibliotecas usadas:

1. `react`: Biblioteca principal para construção de interfaces no React.
2. `next/dynamic`: Usado para carregamento dinâmico de componentes, especificamente para evitar SSR (Server-Side Rendering) com o componente `Typewriter`.
3. `react-icons/fa`: Pacote de ícones para React com ícones populares como WhatsApp, GitHub, Gmail e Instagram.
4. `react-simple-typewriter`: Componente de animação de escrita (typewriter effect) para criar animações no texto.

O que foi feito para evitar SSR:

- A diretiva `"use client"` foi adicionada no topo do arquivo para garantir que o componente seja renderizado no lado do cliente.
- O componente `Typewriter` foi carregado dinamicamente com `next/dynamic` e configurado com `{ ssr: false }` para evitar que ele seja renderizado no servidor. Isso é necessário porque o `Typewriter` depende de hooks (`useState`, `useEffect`), que só funcionam no lado do cliente. Ao definir `ssr: false`, o Next.js garante que o componente seja apenas renderizado no cliente, evitando erros de hidratação.
*/