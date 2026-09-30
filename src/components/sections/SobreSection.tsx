'use client';

import { motion } from 'framer-motion';

export default function SobreSection() {
  return (
    <section id="sobre" className="w-full bg-black relative z-10">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] rounded-xl overflow-hidden premium-shadow"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 tempo-do-rico"
              style={{ backgroundImage: "url('/images/sobre-historia.jpeg')" }}
            />
            {/* Overlay sutil para garantir que não fique muito claro */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[#7b896f] font-semibold tracking-widest uppercase mb-4 text-sm">A identidade Fortuna</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Presença, técnica e personalidade.
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                A Fortuna nasceu para transformar o cuidado masculino em uma experiência de presença. Cada detalhe da casa combina preto profundo, dourado e o verde elétrico da nossa identidade.
              </p>
              <p>
                Aqui, técnica clássica encontra uma estética contemporânea: atendimento próximo, acabamento preciso e um ambiente que tem a nossa assinatura.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white mb-1">+5k</span>
                <span className="text-sm text-[#7b896f] uppercase tracking-wider">Experiência autoral</span>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white mb-1">5★</span>
                <span className="text-sm text-[#7b896f] uppercase tracking-wider">Cuidado em cada detalhe</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
