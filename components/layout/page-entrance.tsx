"use client";

import { motion } from "motion/react";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export function PageEntrance({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}
