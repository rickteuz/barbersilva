"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      href="#"
      onClick={(e) => e.preventDefault()}
      style={{ position: "fixed", right: "1.5rem", bottom: "1.5rem", width: "56px", height: "56px", background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1500, boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
      aria-label="Agendar no WhatsApp"
    >
      <span style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "700" }}>💬</span>
    </motion.a>
  );
}
