"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let id: number;
    const start = Date.now();
    const update = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / 1800) * 100);
      setProgress(p);
      if (p < 100) {
        id = requestAnimationFrame(update);
      } else {
        setTimeout(() => setDone(true), 300);
      }
    };
    id = requestAnimationFrame(update);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} style={{ position: "fixed", inset: 0, zIndex: 4000, background: "#050505", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "var(--white)" }}>
          <div style={{ textAlign: "center", marginBottom: "1.4rem" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", letterSpacing: "0.01em" }}>Barber<span style={{ color: "var(--gold)", fontStyle: "italic" }}>Silva</span></div>
            <div style={{ marginTop: "0.5rem", color: "var(--muted)", letterSpacing: "0.26em", fontSize: "0.65rem" }}>MUITO ALÉM DA BARBA</div>
          </div>
          <div style={{ width: "260px", marginTop: "1.5rem" }}>
            <div style={{ height: "1px", width: "100%", background: "rgba(255,255,255,0.12)", overflow: "hidden", marginBottom: "0.4rem" }}><motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} style={{ height: "100%", background: "var(--gold)" }} /></div>
            <div style={{ color: "var(--gold-light)", fontSize: "0.8rem", fontWeight: 500 }}>{Math.round(progress)}%</div>
          </div>
          <div style={{ marginTop: "2rem", fontSize: "1.1rem", color: "var(--muted)" }}>✂️</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
