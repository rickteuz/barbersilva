'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/10 premium-shadow">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 relative z-50">
          <Image 
            src="/images/logo-barber.png" 
            alt="Barber Silva Logo" 
            width={100} 
            height={100} 
            className="w-auto h-16 object-contain mix-blend-screen"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#sobre" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">
            Sobre
          </Link>
          <Link href="#servicos" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">
            Serviços
          </Link>
          <Link href="#equipe" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">
            Equipe
          </Link>
          <Link href="#app" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">
            Agendar
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a href="#" className="btn-primary min-h-[48px] px-6 text-sm">
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-[100dvh] z-40 bg-[#050505] md:hidden pt-32 px-6 flex flex-col items-center gap-8"
          >
            <nav className="flex flex-col items-center gap-8 mt-10">
              <Link href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl uppercase tracking-widest font-medium">
                Sobre
              </Link>
              <Link href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl uppercase tracking-widest font-medium">
                Serviços
              </Link>
              <Link href="#equipe" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl uppercase tracking-widest font-medium">
                Equipe
              </Link>
              <Link href="#app" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl uppercase tracking-widest font-medium">
                Agendar
              </Link>
            </nav>
            <a href="#" className="btn-primary w-full mt-8 max-w-sm">
              Fale Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
