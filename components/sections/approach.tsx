"use client";

import { motion } from "motion/react";
import { AnimatedTextGenerate } from "@/components/ui/animated-textgenerate";

export function ApproachSection() {
  const summary =
    "SECRISK combines intelligence-led strategy, advanced technology, and operational excellence to protect corporations, institutions, and high-profile individuals operating in complex and high-risk environments.";

  return (
    <section className="relative w-full py-24 md:py-36 bg-transparent z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <h2 className="text-4xl md:text-6xl font-black font-helvetica tracking-[0.08em] text-white uppercase mb-8 text-center">
            Strategic Security Summary
          </h2>

          <AnimatedTextGenerate
            className="max-w-5xl mx-auto mt-12 md:mt-16"
            textClassName="text-xl md:text-3xl font-neue-montreal-light text-white text-center"
            text={summary}
            blurEffect
            speed={1}
            highlightWords={[
              "advanced technology",
              "operational excellence",
              "protect corporations",
              "institutions",
              "high-profile individuals",
              "complex and high-risk environments",
            ]}
            highlightClassName="text-white/70"
          />
        </motion.div>
      </div>
    </section>
  );
}
