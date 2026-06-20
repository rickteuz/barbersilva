'use client';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="w-full relative flex items-center justify-center py-12 bg-transparent -my-12 z-20 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative"
      >
        <motion.div 
          initial={{ left: "0%", opacity: 0 }}
          whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 -translate-y-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#d97706] to-transparent shadow-[0_0_15px_#d97706]"
        />
      </motion.div>
    </div>
  );
}
