"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const photos = [
  { id: "corte-1", src: "/images/gallery/corte-1.jpg", category: "Cortes" },
  { id: "corte-2", src: "/images/gallery/corte-2.jpg", category: "Cortes" },
  { id: "barba-1", src: "/images/gallery/barba-1.jpg", category: "Barba" },
  { id: "ambiente-1", src: "/images/gallery/ambiente-1.jpg", category: "Ambiente" },
  { id: "equipe-1", src: "/images/gallery/equipe-1.jpg", category: "Equipe" },
  { id: "barba-2", src: "/images/gallery/barba-2.jpg", category: "Barba" },
];
const categories = ["Todos", "Cortes", "Barba", "Ambiente", "Equipe"];

function GalleryItem({ photo, onClick, index }: { photo: any, onClick: () => void, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // High-impact 3D parallax
  const y = useTransform(scrollYProgress, [0, 1], [50 * (index % 3 - 1), -50 * (index % 3 - 1)]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? 10 : -10, 0, index % 2 === 0 ? -10 : 10]);

  return (
    <motion.div 
      ref={ref}
      onClick={onClick}
      style={{ 
        y,
        rotateY,
        width: "100%", 
        marginBottom: "2rem", 
        cursor: "pointer", 
        position: "relative",
        overflow: "hidden",
        borderRadius: "15px",
        background: "var(--surface-2)",
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      whileHover={{ 
        y: -15, 
        rotateX: 5,
        rotateY: [null, -5, 5], 
        scale: 1.05,
        z: 30,
        transition: { duration: 0.4, ease: "easeOut" } 
      }}
    >
      <motion.img 
        src={photo.src} 
        alt={photo.id} 
        style={{ 
          width: "100%", 
          display: "block", 
          objectFit: "cover",
          scale
        }} 
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", transition: "opacity 0.3s" }} />
      
      <motion.div 
        style={{ 
          position: "absolute", 
          bottom: "1.5rem", 
          left: "1.5rem", 
          color: "#fff", 
          fontSize: "0.65rem", 
          fontWeight: 800, 
          textTransform: "uppercase", 
          letterSpacing: "0.2em",
          translateZ: "50px",
          background: "var(--orange)",
          padding: "0.4rem 1rem",
          borderRadius: "4px"
        }}
      >
        {photo.category}
      </motion.div>
    </motion.div>
  );
}

export default function GaleriaSection() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<string | null>(null);
  const visible = filter === "Todos" ? photos : photos.filter((p) => p.category === filter);

  return (
    <section id="galeria" className="section" style={{ background: "var(--black)", color: "#fff", perspective: "1500px" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="eyebrow">Nosso Portfólio</div>
          <h2 className="h2" style={{ marginBottom: "1.5rem" }}>A <span style={{ color: "var(--orange)", fontStyle: "italic" }}>Arte</span> em Movimento</h2>
          <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto" }}>Explore o cuidado técnico e estético que define o padrão Barber Silva.</p>
        </div>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "5rem" }}>
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)} 
              style={{ 
                border: "1px solid", 
                borderColor: filter === cat ? "var(--orange)" : "rgba(255,107,0,0.1)", 
                background: filter === cat ? "var(--orange)" : "transparent", 
                color: filter === cat ? "#fff" : "var(--muted)", 
                borderRadius: "10px", 
                padding: "0.6rem 1.5rem", 
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transition: "all 0.4s var(--ease-smooth)",
                cursor: "pointer"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div style={{ columnCount: 3, columnGap: "2rem", transformStyle: "preserve-3d" }}>
          {visible.map((photo, i) => (
            <GalleryItem key={photo.id} photo={photo} index={i} onClick={() => setSelected(photo.src)} />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity:0 }} 
            animate={{ opacity:1 }} 
            exit={{ opacity:0 }} 
            style={{ position:"fixed", inset:0, background:"rgba(5,5,5,0.98)", zIndex:2500, display:"flex", alignItems:"center", justifyContent:"center", padding: "2rem" }} 
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: 45 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: -45 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <img 
                src={selected} 
                alt="ampliada" 
                style={{ maxWidth:"100%", maxHeight:"90vh", borderRadius:"15px", boxShadow: "0 40px 100px rgba(0,0,0,0.8)" }} 
              />
            </motion.div>
            <button style={{ position: "absolute", top: "3rem", right: "3rem", background: "none", border: "none", color: "#fff", fontSize: "2.5rem", cursor: "pointer", opacity: 0.5 }}>×</button>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 992px) { .container .column-count { column-count: 2 !important; } }
        @media (max-width: 640px) { .container .column-count { column-count: 1 !important; } }
      `}</style>
    </section>
  );
}
