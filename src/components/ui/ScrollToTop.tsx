"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", left: "1.5rem", bottom: "1.5rem", width: "44px", height: "44px", borderRadius: "10px", border: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--muted)", zIndex: 1500 }}>
      ↑
    </button>
  );
}
