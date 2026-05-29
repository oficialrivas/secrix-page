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
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d5b439]/10 to-[#d5b439]/35" />
        
        {/* Center Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-4 md:mx-6 flex items-center gap-3 px-5 py-2 rounded-full border border-[#d5b439]/20 bg-[#060a16]/90 backdrop-blur-xl shadow-[0_0_20px_rgba(213,180,57,0.1)] pointer-events-auto"
        >
          {/* Left pulsing indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f3de6c] opacity-45"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d5b439]"></span>
          </span>
          
          {number && (
            <span className="text-[10px] font-mono tracking-widest text-[#f3de6c]/75 font-semibold">
              {number}
            </span>
          )}
          
          {number && label && (
            <span className="text-[#d5b439]/35 text-xs font-mono">/</span>
          )}
          
          {label && (
            <span className="text-[10px] font-mono tracking-[0.25em] text-white/95 uppercase font-medium">
              {label}
            </span>
          )}
          
          {/* Right pulsing indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f3de6c] opacity-45"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d5b439]"></span>
          </span>
        </motion.div>
        
        {/* Right Line with Fading Gradient */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#d5b439]/35 via-[#d5b439]/10 to-transparent" />
      </div>
    </div>
  );
}
