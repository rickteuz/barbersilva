"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Anos de Estrada" },
  { value: "5K+", label: "Clientes Atendidos" },
  { value: "4.9", label: "Avaliação Google" },
  { value: "100%", label: "Satisfação" },
];

export default function StatsSection() {
  return (
    <section className="section" style={{ background: "var(--black)", paddingBottom: "4rem", paddingTop: "4rem", perspective: "1500px" }}>
      <div className="container">
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "2rem",
          transformStyle: "preserve-3d"
        }}>
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30, rotateX: 30, z: -50 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="section-card"
              style={{ 
                padding: "2.5rem", 
                textAlign: "center",
                background: "linear-gradient(to bottom, var(--surface-2), var(--black))"
              }}
            >
              <div style={{ 
                fontSize: "3rem", 
                fontWeight: 800, 
                color: "var(--orange)", 
                fontFamily: "var(--font-display)",
                marginBottom: "0.5rem",
                textShadow: "0 10px 20px rgba(255,107,0,0.1)"
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: "0.75rem", 
                fontWeight: 700, 
                textTransform: "uppercase", 
                letterSpacing: "0.2em", 
                color: "var(--muted)" 
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
