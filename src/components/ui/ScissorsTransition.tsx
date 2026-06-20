"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScissorsTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Blades rotation: they start "closed" or "open" and meet/cross
  const topBladeRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-45, 0, 45]);
  const bottomBladeRotate = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]);
  
  // Opacity for smooth entry/exit
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={containerRef}
      style={{ 
        height: "50vh", 
        position: "relative", 
        overflow: "hidden", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 50
      }}
    >
      <motion.div style={{ opacity, width: "100%", height: "100%", position: "relative" }}>
        {/* Top Blade */}
        <motion.div 
          style={{ 
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "150vw",
            height: "4px",
            background: "var(--orange)",
            originX: 0.5,
            x: "-50%",
            rotate: topBladeRotate,
            boxShadow: "0 0 20px rgba(255, 107, 0, 0.5)"
          }}
        />
        {/* Bottom Blade */}
        <motion.div 
          style={{ 
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "150vw",
            height: "4px",
            background: "var(--orange)",
            originX: 0.5,
            x: "-50%",
            rotate: bottomBladeRotate,
            boxShadow: "0 0 20px rgba(255, 107, 0, 0.5)"
          }}
        />
        
        {/* Center Pivot Point (Decorative) */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "20px",
          height: "20px",
          background: "var(--black)",
          border: "2px solid var(--orange)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1
        }} />
      </motion.div>
    </div>
  );
}
