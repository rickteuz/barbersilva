"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    let raf: number;
    const animate = () => {
      setRing((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.12,
        y: prev.y + (mouse.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [mouse]);

  useEffect(() => {
    const onHover = () => setHover(true);
    const onLeave = () => setHover(false);
    document.querySelectorAll("button,a,[role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      document.querySelectorAll("button,a,[role='button']").forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div style={{ position: "fixed", left: mouse.x - 4, top: mouse.y - 4, width: 8, height: 8, borderRadius: "50%", background: "var(--gold)", zIndex: 2000, pointerEvents: "none", transform: hover ? "scale(0.5)" : "scale(1)", transition: "transform .15s ease" }} />
      <div style={{ position: "fixed", left: ring.x - 20, top: ring.y - 20, width: 40, height: 40, borderRadius: "50%", border: `1px solid ${hover ? "rgba(201,168,76,0.95)" : "rgba(201,168,76,0.7)"}`, zIndex: 1999, pointerEvents: "none", transform: hover ? "scale(1.2)" : "scale(1)", transition: "transform .15s ease" }} />
    </>
  );
}
