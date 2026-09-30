'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppSection() {
  return (
    <section id="app" className="w-full bg-black relative z-10 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="bg-gradient-to-b from-[#151515] to-[#050505] border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_2px_10px_rgba(255,255,255,0.05)] p-8 md:p-16 lg:p-20 relative overflow-hidden">
          {/* Luz laranja no fundo */}
          <div className="absolute -top-40 -right-40 size-96 bg-[#1f3a26] rounded-full blur-[120px] opacity-30 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[#7b896f] font-semibold tracking-widest uppercase mb-4 text-sm">Seu tempo, do seu jeito</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Agende de forma rápida pelo App Barber.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Sem ligações, sem espera. Escolha seu serviço e o melhor horário diretamente pelo celular. A experiência Fortuna começa antes mesmo de você chegar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4 bg-black/50 p-4 rounded-xl border border-white/5">
                  <div className="size-10 rounded-full bg-[#7b896f] flex items-center justify-center text-[#0d0f0d] font-bold">1</div>
                  <span className="text-white font-medium">Acesse o Link</span>
                </div>
                <div className="flex items-center gap-4 bg-black/50 p-4 rounded-xl border border-white/5">
                  <div className="size-10 rounded-full bg-[#7b896f] flex items-center justify-center text-[#0d0f0d] font-bold">2</div>
                  <span className="text-white font-medium">Escolha o Serviço</span>
                </div>
                <div className="flex items-center gap-4 bg-black/50 p-4 rounded-xl border border-white/5">
                  <div className="size-10 rounded-full bg-[#7b896f] flex items-center justify-center text-[#0d0f0d] font-bold">3</div>
                  <span className="text-white font-medium">Confirme</span>
                </div>
              </div>

              <div className="mt-12">
                <a href="#" className="btn-primary w-full sm:w-auto">
                  Agendar Agora
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex justify-center"
            >
              {/* Mockup 3D em CSS */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto w-[300px] h-[600px] z-20"
                style={{ perspective: "1000px" }}
              >
                <div 
                  className="w-full h-full rounded-[3rem] p-2 relative bg-[#1c1c1c]"
                  style={{ 
                    transform: "rotateY(-20deg) rotateX(10deg) rotateZ(5deg)",
                    transformStyle: "preserve-3d",
                    boxShadow: "-30px 30px 40px rgba(0,0,0,0.9), inset 0 0 0 2px #555, inset 0 0 0 6px #000",
                  }}
                >
                  {/* Botões laterais */}
                  <div className="absolute top-[120px] -left-1 w-1 h-12 bg-[#333] rounded-l-md" style={{ transform: "translateZ(-1px)" }}></div>
                  <div className="absolute top-[180px] -left-1 w-1 h-12 bg-[#333] rounded-l-md" style={{ transform: "translateZ(-1px)" }}></div>
                  <div className="absolute top-[140px] -right-1 w-1 h-16 bg-[#333] rounded-r-md" style={{ transform: "translateZ(-1px)" }}></div>

                  {/* Tela */}
                  <div 
                    className="w-full h-full bg-[#050505] rounded-[2.5rem] overflow-hidden relative border border-white/5"
                    style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
                  >
                    {/* Dynamic Island */}
                    <div 
                      className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 flex items-center justify-center shadow-[0_5px_10px_rgba(0,0,0,0.5)]"
                      style={{ transform: "translateZ(30px)" }}
                    >
                       <div className="w-2 h-2 rounded-full bg-blue-900/40 absolute right-3"></div>
                    </div>

                    {/* UI do App Simulada */}
                    <div 
                      className="w-full h-full flex flex-col pt-14 p-5 bg-gradient-to-b from-[#111] to-[#050505] relative z-10"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      
                      {/* Header App */}
                      <div className="flex justify-between items-center mb-6" style={{ transform: "translateZ(15px)" }}>
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shadow-lg"><div className="w-4 h-4 bg-white/30 rounded-full"></div></div>
                         <div className="w-8 h-8 rounded-full bg-white/10 shadow-lg"></div>
                      </div>

                      {/* Card principal */}
                      <div 
                        className="w-full h-40 rounded-2xl mb-6 border border-[#7b896f]/30 p-4 flex flex-col justify-end relative overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.5)] bg-cover bg-center"
                        style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d", backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9), transparent), url('/images/fortuna/ambiente-1.webp')" }}
                      >
                         <div className="absolute top-0 right-0 size-32 bg-[#1f3a26]/30 rounded-full blur-xl"></div>
                         <div className="w-1/2 h-3 bg-white/80 rounded-full mb-2" style={{ transform: "translateZ(10px)" }}></div>
                         <div className="w-1/3 h-3 bg-[#7b896f] rounded-full" style={{ transform: "translateZ(10px)" }}></div>
                      </div>

                      {/* Lista de Serviços Simulada */}
                      <div className="flex flex-col gap-3 mb-auto" style={{ transform: "translateZ(15px)" }}>
                        <div className="w-full h-16 bg-white/5 rounded-xl border border-white/5 p-3 flex items-center gap-3 shadow-md hover:bg-white/10 transition-colors">
                          <div className="w-10 h-10 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/images/fortuna/corte-1.webp')" }}></div>
                          <div className="flex-1"><div className="w-1/2 h-2 bg-white/40 rounded-full mb-2"></div><div className="w-1/3 h-2 bg-white/20 rounded-full"></div></div>
                        </div>
                        <div className="w-full h-16 bg-white/5 rounded-xl border border-white/5 p-3 flex items-center gap-3 shadow-md hover:bg-white/10 transition-colors">
                          <div className="w-10 h-10 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/images/fortuna/cliente-1.webp')" }}></div>
                          <div className="flex-1"><div className="w-1/2 h-2 bg-white/40 rounded-full mb-2"></div><div className="w-1/3 h-2 bg-white/20 rounded-full"></div></div>
                        </div>
                        <div className="w-full h-16 bg-white/5 rounded-xl border border-white/5 p-3 flex items-center gap-3 shadow-md hover:bg-white/10 transition-colors">
                          <div className="w-10 h-10 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/images/fortuna/corte-2.webp')" }}></div>
                          <div className="flex-1"><div className="w-1/2 h-2 bg-white/40 rounded-full mb-2"></div><div className="w-1/3 h-2 bg-white/20 rounded-full"></div></div>
                        </div>
                      </div>

                      {/* Botão flutuante */}
                      <div 
                        className="w-full h-14 bg-[#7b896f] rounded-full mt-4 flex items-center justify-center shadow-[0_15px_30px_rgba(31,58,38,0.4)]"
                        style={{ transform: "translateZ(35px)" }}
                      >
                        <div className="w-1/3 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      
                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full" style={{ transform: "translateZ(5px)" }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
