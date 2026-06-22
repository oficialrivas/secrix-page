"use client";

import { AnimatedText } from "@/components/ui/animated-shiny-text";
import { GlobeInteractive } from "@/components/ui/cobe-globe-interactive";
import { motion } from "motion/react";

export function MapDemoSection() {
  return (
    <section className="relative w-full pb-16 sm:pb-20 md:pb-32 pt-2 sm:pt-4 md:pt-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatedText
              text="Global Intelligence Network"
              gradientColors="linear-gradient(90deg, rgba(255,255,255,0.92), rgba(255,255,255,1), rgba(255,255,255,0.92))"
              gradientAnimationDuration={1.8}
              hoverEffect={false}
              className="py-0"
              textClassName="whitespace-nowrap text-center font-neue-montreal-medium text-[1.5rem] xs:text-[1.75rem] sm:text-[2.25rem] md:text-5xl tracking-wide leading-tight"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.55, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="mx-auto max-w-3xl pt-8 sm:pt-10 text-sm sm:text-base md:text-lg font-neue-montreal-light leading-relaxed text-white/55 md:pt-12 md:text-xl"
          >
            We map operational connections across critical regions to anticipate risk,
            coordinate response, and sustain continuity with strategic precision.
          </motion.p>
        </div>
        <div className="mx-auto mt-10 sm:mt-14 flex max-w-3xl justify-center md:mt-16">
          <div className="relative w-full max-w-[34rem]">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(213,180,57,0.16),transparent_62%)] blur-2xl" />
            <GlobeInteractive className="relative z-10 mx-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
