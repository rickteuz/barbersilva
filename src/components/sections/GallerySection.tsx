'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/gallery/ambiente-1.jpg',
  '/images/gallery/corte-1.jpg',
  '/images/mockup-app.png',
  '/images/gallery/barba-1.jpg',
  '/images/gallery/equipe-1.jpg',
  '/images/gallery/corte-2.jpg',
  '/images/clipper-gold.png',
  '/images/gallery/ambiente-2.jpg',
  '/images/gallery/barba-2.jpg',
  '/images/gallery/corte-3.jpg',
  '/images/gallery/corte-4.jpg',
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Duplicando as imagens para garantir o fluxo infinito perfeito sem cortes bruscos
  const carouselImages = [...images, ...images];

  return (
    <section id="galeria" className="w-full bg-[#050505] relative z-10 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#d97706] font-semibold tracking-widest uppercase mb-4 text-sm"
        >
          Nossa Arte
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          A experiência Barber Silva
        </motion.h3>
      </div>

      <div className="relative w-[100vw] left-1/2 -ml-[50vw] overflow-hidden flex items-center">
        {/* Sombras laterais para dar fade in/out no carrossel */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

        {/* Container animado (Marquee) */}
        <div className="flex w-max animate-marquee gap-6 px-3">
          {carouselImages.map((src, idx) => {
            const isMockup = src.includes('.png');
            return (
              <div 
                key={idx} 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className={`w-[280px] sm:w-[350px] aspect-[4/5] flex-shrink-0 rounded-2xl overflow-hidden premium-shadow group relative cursor-pointer ${isMockup ? 'bg-[#111]' : ''}`}
              >
                <div 
                  className={`w-full h-full bg-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] contrast-125 ${activeIndex === idx ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'} ${isMockup ? 'bg-contain bg-no-repeat p-4' : 'bg-cover'}`}
                  style={{ backgroundImage: `url('${src}')` }}
                ></div>
                <div className={`absolute inset-0 transition-colors duration-700 ${activeIndex === idx ? 'bg-transparent' : 'bg-black/40 group-hover:bg-transparent'}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
