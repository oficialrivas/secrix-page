"use client";

import { motion } from "motion/react";

interface SectionDividerProps {
  label?: string;
  number?: string;
}

export function SectionDivider({ label, number }: SectionDividerProps) {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-16 flex items-center justify-center select-none pointer-events-none">
      <div className="w-full flex items-center justify-center relative">
        {/* Left Line with Fading Gradient */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/10 to-cyan-500/35" />
        
        {/* Center Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-4 md:mx-6 flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/15 bg-[#060a16]/90 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.08)] pointer-events-auto"
        >
          {/* Left pulsing indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          
          {number && (
            <span className="text-[10px] font-mono tracking-widest text-cyan-400/70 font-semibold">
              {number}
            </span>
          )}
          
          {number && label && (
            <span className="text-cyan-500/30 text-xs font-mono">/</span>
          )}
          
          {label && (
            <span className="text-[10px] font-mono tracking-[0.25em] text-white/95 uppercase font-medium">
              {label}
            </span>
          )}
          
          {/* Right pulsing indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
        </motion.div>
        
        {/* Right Line with Fading Gradient */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/35 via-cyan-500/10 to-transparent" />
      </div>
    </div>
  );
}
