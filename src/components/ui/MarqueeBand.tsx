"use client";

import { motion } from "framer-motion";

const items = [
  "EXPERIÊNCIA PREMIUM",
  "CORTE DE CABELO",
  "BARBOTERAPIA",
  "CLUBE DE ASSINATURA",
  "ALTO PADRÃO",
  "SOFISTICAÇÃO",
  "TRADIÇÃO",
];

export default function MarqueeBand({ inverted = false }: { inverted?: boolean }) {
  return (
    <div 
      style={{ 
        background: inverted ? "var(--white)" : "var(--orange)", 
        padding: "1.5rem 0", 
        overflow: "hidden", 
        whiteSpace: "nowrap",
        display: "flex",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        zIndex: 5,
        position: "relative",
        transform: "skewY(-1deg)",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        animate={{ x: inverted ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "4rem", alignItems: "center" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div 
            key={i} 
            style={{ 
              color: inverted ? "var(--black)" : "var(--white)", 
              fontSize: "1.2rem", 
              fontWeight: 900, 
              letterSpacing: "0.2em",
              fontFamily: "var(--font-display)",
              display: "flex",
              alignItems: "center",
              gap: "2rem"
            }}
          >
            {item}
            <span style={{ fontSize: "2rem", opacity: 0.3 }}>•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
