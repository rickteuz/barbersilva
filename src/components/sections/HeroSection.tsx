'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BlurText from '../ui/BlurText';

export default function HeroSection() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <section ref={ref} id="hero" className="relative w-full h-dvh flex flex-col items-center justify-center overflow-hidden bg-[#0d0f0d]">
      {/* Background Image com parallax e overlay */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 will-change-transform"
        style={{
          backgroundImage: "url('/images/fortuna/ambiente-3.webp')",
          y: shouldReduceMotion ? undefined : yBg,
          scale: shouldReduceMotion ? 1.04 : scaleBg
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-[#0d0f0d]/65" />

      {/* Radial glow subtle */}
      <div className="absolute left-1/2 top-1/2 z-10 size-[min(42rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f3a26]/25 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 mx-auto mt-16 flex w-full max-w-5xl -translate-y-6 flex-col items-center justify-center px-6 text-center md:translate-y-0">
        <BlurText
          text="Estilo de homens fortes"
          delay={100}
          animateBy="words"
          direction="bottom"
          className="max-w-4xl justify-center text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-[#fff8f3] text-shadow-sm sm:text-6xl md:text-8xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a href="https://wa.me/5531984291818" className="btn-primary min-h-[56px] w-full px-8 text-base sm:w-auto md:text-lg">
            Agendar horário
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient na base para misturar com a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
