"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)", color: "#fff", padding: "6rem 0 2rem", perspective: "1500px" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "4rem" }}>
        <motion.div 
          initial={{ opacity: 0, y: 20, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          style={{ gridColumn: "span 1" }}
        >
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>
            BARBER<span style={{ color: "var(--orange)", fontStyle: "italic" }}>SILVA</span>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: "300px" }}>
            Muito além da barba, cabelo e bigode. Uma experiência de excelência para o homem contemporâneo.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div style={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--orange)", marginBottom: "1.5rem" }}>Navegar</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
            <li><a href="#hero" style={{ color: "var(--muted)", fontSize: "0.9rem", transition: "color 0.3s" }}>Início</a></li>
            <li><a href="#sobre" style={{ color: "var(--muted)", fontSize: "0.9rem", transition: "color 0.3s" }}>Sobre nós</a></li>
            <li><a href="#servicos" style={{ color: "var(--muted)", fontSize: "0.9rem", transition: "color 0.3s" }}>Serviços</a></li>
            <li><a href="#clube" style={{ color: "var(--muted)", fontSize: "0.9rem", transition: "color 0.3s" }}>Clube BS</a></li>
            <li><a href="#galeria" style={{ color: "var(--muted)", fontSize: "0.9rem", transition: "color 0.3s" }}>Galeria</a></li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--orange)", marginBottom: "1.5rem" }}>Contato</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
            <li style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Rua Rio Congo, 181, Novo Riacho · Contagem</li>
            <li style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Seg–Sex: 09h às 20h | Sáb: 08h às 17h</li>
            <li><a href="https://wa.me/5531984291818" style={{ color: "var(--orange)", fontWeight: 700, fontSize: "0.9rem" }}>Agendar pelo WhatsApp</a></li>
          </ul>
        </motion.div>
      </div>
      
      <div className="container" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "4rem", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", flexWrap: "wrap", gap: "1rem" }}>
        <span>© 2025 Barber Silva · Todos os direitos reservados</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="https://hashgrowth.com.br" target="_blank" rel="noreferrer" style={{ color: "var(--white)", opacity: 0.6 }}>Design by Hash Growth</a>
        </div>
      </div>
    </footer>
  );
}
