'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Carlos Mendes',
    text: 'A melhor experiência em barbearia que já tive. O ambiente é incrível e o corte do Henrique é impecável.',
    role: 'Cliente Black',
  },
  {
    name: 'Roberto Dantas',
    text: 'Profissionalismo do início ao fim. O app facilita muito o agendamento e não há atrasos.',
    role: 'Cliente Mensal',
  },
  {
    name: 'Lucas Ferreira',
    text: 'Virou minha barbearia oficial. A toalha quente na barba é um serviço que faz toda a diferença.',
    role: 'Cliente',
  }
];

export default function DepoimentosSection() {
  return (
    <section id="depoimentos" className="w-full bg-[#050505] relative z-10 py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#7b896f] font-semibold tracking-widest uppercase mb-4 text-sm"
          >
            A Voz da Experiência
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Quem conhece, recomenda
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl premium-shadow flex flex-col h-full hover:bg-white/10 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#fff8f3]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 text-lg italic leading-relaxed flex-grow">
                "{test.text}"
              </p>
              <div className="mt-8">
                <h5 className="text-white font-bold text-xl">{test.name}</h5>
                <span className="text-[#7b896f] text-sm">{test.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
