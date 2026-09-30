"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Clube Fortuna", href: "#clube" },
  { label: "Galeria", href: "#galeria" },
  { label: "Time", href: "#time" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("#hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header style={{ 
      position: "fixed", 
      inset: "0 0 auto", 
      zIndex: 2000, 
      padding: solid ? "0.8rem 1.5rem" : "1.5rem 1.5rem", 
      backdropFilter: solid ? "blur(20px)" : "none", 
      background: solid ? "rgba(5,5,5,0.85)" : "transparent", 
      borderBottom: solid ? "1px solid rgba(255,255,255,0.05)" : "none", 
      transition: "all 0.4s var(--ease-smooth)" 
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>
          FORTUNA<span style={{ color: "var(--brand-teal)", fontStyle: "italic" }}>.</span>
        </a>
        
        <nav className="desktop-only" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {links.map((link, i) => (
            <motion.a 
              key={link.href} 
              href={link.href} 
              initial={{ opacity: 0, y: -20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              style={{ 
                color: active === link.href ? "var(--orange)" : "rgba(255,255,255,0.6)", 
                fontSize: "0.7rem", 
                textTransform: "uppercase", 
                letterSpacing: "0.2em", 
                fontWeight: 600,
                position: "relative",
                transition: "color 0.3s ease"
              }}
            >
              {link.label}
              {active === link.href && (
                <motion.span 
                  layoutId="nav-indicator" 
                  style={{ 
                    position: "absolute", 
                    left: "50%", 
                    bottom: -8, 
                    width: "4px", 
                    height: "4px", 
                    borderRadius: "50%",
                    background: "var(--orange)",
                    x: "-50%"
                  }} 
                />
              )}
            </motion.a>
          ))}
          <a href="https://wa.me/5531984291818" className="btn-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.65rem" }}>
            AGENDAR
          </a>
        </nav>
        
        <button onClick={() => setOpen((prev) => !prev)} style={{ border: "none", background: "transparent", color: "#fff", fontSize: "1.5rem", display: "none" }} className="mobile-toggle">
          {open ? "✕" : "☰"}
        </button>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            style={{ 
              position: "fixed", 
              inset: "0", 
              top: "70px",
              background: "var(--black)", 
              zIndex: 2100, 
              padding: "2rem" 
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>{link.label}</a>
              ))}
              <a href="https://wa.me/5531984291818" className="btn-primary" style={{ width: "100%", textAlign: "center", marginTop: "1rem" }}>Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`@media (max-width:992px){.desktop-only{display:none;} .mobile-toggle{display:block;}}`}</style>
    </header>
  );
}
