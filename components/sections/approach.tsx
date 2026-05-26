"use client";

import { motion } from "motion/react";
import { AnimatedTextGenerate } from "@/components/ui/animated-textgenerate";

export function ApproachSection() {
  const summary =
    "SECRISK combines intelligence-led strategy, advanced technology, and operational excellence to protect corporations, institutions, and high-profile individuals operating in complex and high-risk environments.";

  return (
    <section className="relative w-full pt-10 pb-16 bg-transparent z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-5xl font-black font-helvetica tracking-[0.08em] text-white/90 uppercase mb-8 text-center">
            Strategic Security Summary
          </h2>

          <AnimatedTextGenerate
            className="max-w-5xl mx-auto"
            textClassName="text-lg md:text-2xl font-neue-montreal-light text-white/80 text-center"
            text={summary}
            blurEffect
            speed={1}
            highlightWords={["intelligence-led", "technology", "operational", "high-risk"]}
            highlightClassName="text-cyan-300 font-neue-montreal-medium"
            linkWords={["SECRISK", "security"]}
            linkHrefs={["/", "/"]}
            linkClassNames={[
              "underline decoration-cyan-400 hover:decoration-cyan-300 transition",
              "underline decoration-blue-400 hover:decoration-blue-300 transition",
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
