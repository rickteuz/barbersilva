'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Vocês atendem por ordem de chegada?',
    answer: 'Trabalhamos exclusivamente com horários agendados via App Barber para garantir que você não espere e tenha a melhor experiência possível.',
  },
  {
    question: 'Posso pagar a assinatura do Clube no cartão?',
    answer: 'Sim, o Clube Barber Silva possui recorrência automática via cartão de crédito, sem prender o limite do seu cartão.',
  },
  {
    question: 'Qual o tempo médio do serviço?',
    answer: 'Um corte clássico dura em média 45 minutos. O combo Barba e Cabelo leva em torno de 1h30min, garantindo atenção a cada detalhe.',
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-black relative z-10 py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#d97706] font-semibold tracking-widest uppercase mb-4 text-sm"
          >
            Esclarecimentos
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl font-bold text-white"
          >
            Dúvidas Frequentes
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className="bg-[#0a0a0a] rounded-xl overflow-hidden premium-shadow"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none min-h-[64px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-[#d97706] text-2xl flex-shrink-0"
                  >
                    ↓
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-6 text-gray-400 text-lg leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
