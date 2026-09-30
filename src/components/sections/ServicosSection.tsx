'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Corte Clássico',
    desc: 'Corte tesoura ou máquina com acabamento impecável na navalha.',
  },
  {
    title: 'Barba Terapia',
    desc: 'Alinhamento completo, toalha quente e massagem facial relaxante.',
  },
  {
    title: 'Combo Silva',
    desc: 'Corte + Barba com atendimento premium completo.',
  },
  {
    title: 'Acabamento',
    desc: 'Manutenção do perfilado para manter o estilo impecável.',
  }
];

export default function ServicosSection() {
  return (
    <section id="servicos" className="w-full bg-[#050505] relative z-10 py-32 overflow-hidden">
      {/* Luzes de fundo para evidenciar o blur */}
      <div className="absolute top-1/4 left-0 size-[500px] bg-[#1f3a26]/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#7b896f] font-semibold tracking-widest uppercase mb-4 text-sm"
          >
            Nossa Especialidade
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Serviços Premium
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="group bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-2xl premium-shadow hover:bg-white/[0.06] hover:border-[#7b896f]/60 transition-all duration-200 flex flex-col justify-center relative overflow-hidden"
            >
              {/* Efeito hover de luz interna */}
              <div className="absolute inset-0 bg-[#1f3a26]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              
              <div className="flex justify-between items-end mb-4 border-b border-white/5 pb-4">
                <h4 className="text-2xl font-bold text-white">{svc.title}</h4>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed text-pretty">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a href="#" className="btn-primary">
            Ver Todos os Serviços
          </a>
        </motion.div>

      </div>
    </section>
  );
}
