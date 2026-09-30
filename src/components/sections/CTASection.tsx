'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="w-full bg-[#1f3a26] relative z-10 py-24 overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black rounded-full blur-[150px] opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 text-shadow-sm leading-tight"
        >
          Pronto para elevar o seu nível?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-white/90 text-xl md:text-2xl mb-12"
        >
          Agende agora e viva a experiência Fortuna.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <a href="https://wa.me/5531984291818" className="inline-flex items-center justify-center bg-[#fff8f3] text-[#0d0f0d] font-bold rounded-md hover:bg-[#7b896f] transition-colors shadow-2xl min-h-[56px] px-10 text-lg group">
            Agendar Horário
            <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
