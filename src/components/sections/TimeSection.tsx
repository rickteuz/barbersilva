'use client';

import { motion } from 'framer-motion';

export default function TimeSection() {
  return (
    <section id="equipe" className="w-full bg-[#050505] relative z-10 py-32 overflow-hidden">
      {/* Marca d'água de fundo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[15rem] lg:text-[20rem] font-bold text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none hidden md:block">
        MASTER
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Coluna da Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-5 relative group"
          >
            {/* Efeito de brilho atrás da foto */}
            <div className="absolute -inset-4 bg-[#1f3a26]/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden premium-shadow bg-[#0a0a0a] border border-white/10">
              {/* Foto do Henrique em PB com hover revelando a cor */}
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 scale-105 group-hover:scale-100"
                style={{ backgroundImage: "url('/images/sobre-historia.jpeg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              
              {/* Crachá flutuante */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Agenda Aberta
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="col-span-1 lg:col-span-7 lg:pl-10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#7b896f]/30 bg-[#1f3a26]/30 mb-6">
              <span className="text-[#7b896f] font-semibold tracking-widest uppercase text-xs">
                Nossa Autoridade
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              A excelência por trás da <span className="text-[#fff8f3]">lâmina</span>.
            </h3>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
              Com anos de dedicação à arte da barbearia clássica e moderna, Henrique Silva não apenas corta cabelo — ele esculpe identidades.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Na Fortuna, a missão é clara: elevar o padrão do atendimento masculino, combinando técnica impecável e uma experiência de relaxamento que transforma o seu dia.
            </p>

            <blockquote className="relative p-6 bg-white/5 border border-white/10 rounded-2xl mb-10 backdrop-blur-sm">
              <div className="absolute -top-4 -left-3 text-4xl text-[#7b896f]/40 font-serif">"</div>
              <p className="text-xl text-gray-200 italic font-serif leading-relaxed relative z-10">
                O cabelo e a barba são a moldura do seu rosto. Meu trabalho é garantir que essa moldura seja, todos os dias, uma obra de arte.
              </p>
            </blockquote>
            
            <div className="flex items-center gap-6">
              <div>
                <p className="font-serif italic text-3xl md:text-4xl text-white">Henrique Silva</p>
                <p className="text-sm text-[#7b896f] uppercase tracking-widest mt-2 font-bold">Master Barber</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
