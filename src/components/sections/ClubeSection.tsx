'use client';

import { motion } from 'framer-motion';

export default function ClubeSection() {
  return (
    <section id="clube" className="w-full bg-black relative z-10 py-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d97706]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-[#d97706] font-semibold tracking-widest uppercase mb-4 text-sm">Assinatura Exclusiva</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Clube Barber Silva
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Garanta seu estilo impecável o mês inteiro pagando um valor fixo. Sem surpresas, com prioridade de agendamento e descontos em produtos exclusivos.
            </p>
            
            <ul className="space-y-4 mb-10 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-[#d97706] text-xl">✓</span> Cortes ilimitados ou fixos (conforme plano)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#d97706] text-xl">✓</span> Prioridade na fila de agendamento
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#d97706] text-xl">✓</span> 15% OFF em toda linha de cosméticos
              </li>
            </ul>

            <a href="#" className="btn-primary">
              Quero ser do Clube
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 bg-gradient-to-br from-white/10 to-white/5 p-[1px] rounded-3xl premium-shadow group"
          >
            <div className="bg-black/40 backdrop-blur-xl rounded-[23px] p-10 h-full flex flex-col justify-center items-center text-center relative overflow-hidden transition-all duration-500 group-hover:bg-black/30">
              <div className="absolute inset-0 bg-gradient-to-b from-[#d97706]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d97706] to-transparent opacity-50" />
              
              <h4 className="text-3xl font-extrabold text-white mb-6">Plano Black</h4>
              
              <p className="text-gray-400 mb-8">O plano definitivo para quem não abre mão de estar sempre com o visual alinhado.</p>
              
              <div className="w-full bg-[#111] p-4 rounded-lg">
                <p className="text-white font-medium">Corte + Barba Ilimitados</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
