'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BlurText from '../ui/BlurText';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image com parallax e overlay */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')",
          y: yBg 
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

      {/* Radial glow subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d97706]/10 blur-[120px] rounded-full pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center w-full max-w-4xl mx-auto mt-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#d97706] font-semibold tracking-widest uppercase mb-4 text-sm md:text-base"
        >
          Barber Silva
        </motion.p>
        
        <BlurText
          text="Muito além da barba, cabelo e bigode"
          delay={100}
          animateBy="words"
          direction="bottom"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 text-shadow-sm justify-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#" className="btn-primary w-full sm:w-auto text-lg">
            Agendar Horário
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient na base para misturar com a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
