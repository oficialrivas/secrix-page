"use client";

import { motion } from "motion/react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function ContactSection() {
  const typewriterWords = [
    {
      text: "CONTACT",
      className: "text-white/90 font-black font-helvetica tracking-[0.1em] text-[32px] sm:text-[40px] md:text-[50px]",
    },
    {
      text: "OUR",
      className: "text-white/90 font-black font-helvetica tracking-[0.1em] text-[32px] sm:text-[40px] md:text-[50px]",
    },
    {
      text: "EXPERTS",
      className: "text-cyan-400 font-black font-helvetica tracking-[0.1em] text-[32px] sm:text-[40px] md:text-[50px]",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-36 overflow-hidden z-10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="-ml-2">
              <TypewriterEffectSmooth words={typewriterWords} />
            </div>
            
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SpotlightCard
                className="w-full p-8 sm:p-10 backdrop-blur-xl rounded-[32px] shadow-2xl shadow-black/40 border border-white/[0.06] relative after:absolute after:inset-0 after:rounded-[32px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent after:pointer-events-none"
                spotlightColor="34, 211, 238"
                style={{
                  background: "linear-gradient(135deg, rgba(8,12,24,0.3), rgba(0,16,40,0.1))",
                }}
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <h5 className="text-sm font-neue-montreal uppercase tracking-widest text-cyan-500/70 mb-2">Headquarters</h5>
                    <p className="text-lg font-neue-montreal-light text-white/80 leading-relaxed">
                      Two Datran Center<br />
                      9130 South Dadeland Blvd<br />
                      Suite 1902<br />
                      Miami, FL 33156
                    </p>
                  </div>
                  <div className="h-px w-full bg-white/[0.05]" />
                  <div>
                    <p className="text-sm font-neue-montreal-light text-white/50">
                      Secrisk International<br />
                      Global Security & Risk Management
                    </p>
                    <p className="text-xs font-neue-montreal-light text-white/30 mt-4">
                      Copyright © 2026 SecRisk International - All Rights Reserved.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
