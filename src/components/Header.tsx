'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Agendar', href: '#app' },
];

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, transition: { duration: 0.16, ease: 'easeIn' as const } },
  reduced: { opacity: 1 },
};

const panelVariants = {
  closed: { y: '-5%', scale: 0.98 },
  open: { y: 0, scale: 1, transition: { duration: 0.34, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { y: '-3%', scale: 0.99, transition: { duration: 0.18, ease: 'easeIn' as const } },
  reduced: { y: 0, scale: 1 },
};

const navVariants = {
  closed: {},
  open: { transition: { delayChildren: 0.12, staggerChildren: 0.06 } },
  exit: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
  reduced: {},
};

const linkVariants = {
  closed: { opacity: 0, x: 18 },
  open: { opacity: 1, x: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, x: 8, transition: { duration: 0.12 } },
  reduced: { opacity: 1, x: 0 },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  const motionState = shouldReduceMotion ? 'reduced' : 'open';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/95 premium-shadow backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="relative z-50 flex-shrink-0" aria-label="Fortuna Barbearia - início">
          <Image src="/images/fortuna/logo-horizontal.png" alt="Fortuna Barbearia" width={260} height={90} className="hidden h-14 w-auto object-contain md:block" priority />
          <Image src="/images/fortuna/logo-seal.png" alt="" width={160} height={160} className="h-16 w-16 object-contain md:hidden" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium uppercase tracking-widest text-gray-300 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a href="https://wa.me/5531984291818" className="btn-primary min-h-[48px] px-6 text-sm" aria-label="Agendar horário pelo WhatsApp">
            Agendar horário
          </a>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-[#7b896f] md:hidden"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <motion.svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" aria-hidden="true" initial={false} animate={isMobileMenuOpen ? 'open' : 'closed'}>
            <motion.path variants={{ closed: { d: 'M4 7h16' }, open: { d: 'M6 6l12 12' } }} stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
            <motion.path variants={{ closed: { d: 'M4 12h16', opacity: 1 }, open: { d: 'M12 12h0', opacity: 0 } }} stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
            <motion.path variants={{ closed: { d: 'M4 17h16' }, open: { d: 'M6 18L18 6' } }} stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          </motion.svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navegação principal"
            initial={shouldReduceMotion ? false : 'closed'}
            animate={motionState}
            exit={shouldReduceMotion ? { opacity: 0 } : 'exit'}
            variants={overlayVariants}
            className="absolute inset-x-0 top-0 z-40 h-dvh bg-[#0d0f0d] px-6 md:hidden"
            style={{ paddingTop: 'max(7rem, calc(env(safe-area-inset-top) + 5rem))', paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
          >
            <motion.div
              variants={panelVariants}
              initial={shouldReduceMotion ? false : 'closed'}
              animate={motionState}
              exit={shouldReduceMotion ? { opacity: 0 } : 'exit'}
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(31,58,38,0.28),transparent_42%)]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex min-h-full flex-col">
              <motion.nav variants={navVariants} initial={shouldReduceMotion ? false : 'closed'} animate={motionState} exit={shouldReduceMotion ? undefined : 'exit'} className="mt-8 flex flex-col" aria-label="Navegação mobile">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={linkVariants} className="border-b border-white/10">
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex min-h-[68px] items-center justify-between py-4 text-left text-[clamp(2rem,9vw,3rem)] font-medium uppercase tracking-[0.08em] text-[#fff8f3] transition-colors hover:text-[#7b896f]"
                    >
                      <span>{link.label}</span>
                      <span className="h-2 w-2 rounded-full bg-[#7b896f] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.a variants={linkVariants} initial={shouldReduceMotion ? false : 'closed'} animate={motionState} exit={shouldReduceMotion ? undefined : 'exit'} href="https://wa.me/5531984291818" className="btn-primary mt-auto w-full">
                Agendar horário
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
