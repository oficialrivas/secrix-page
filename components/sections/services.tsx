"use client";

import { motion } from "motion/react";
import { GlowingCard } from "@/components/ui/glowing-card";

export function ServicesSection() {
  const cards = [
    "Security Consulting",
    "Risk Surveys & Security Audits",
    "Corporate & Law Enforcement Training",
    "Threat & Vulnerability Assessments",
    "Security Technology Advisory & Systems Integration",
  ];

  return (
    <section id="services" className="relative w-full pt-24 pb-36 md:pt-36 md:pb-48 z-10 overflow-hidden bg-transparent scroll-mt-24">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Title Section */}
        <div className="flex flex-col items-center mb-16 pb-8 text-center">
          <h2 className="text-[52px] sm:text-[64px] font-neue-montreal-medium tracking-[0.1em] text-white uppercase leading-none">
            SERVICES
          </h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px w-full max-w-[200px] bg-[#d5b439]/55 mt-6 origin-center"
          />
        </div>

        <div className="w-full max-w-7xl grid grid-cols-1 gap-7 md:gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {cards.map((title, index) => (
            <GlowingCard
              key={title}
              title={title}
              className={`min-h-[230px] sm:col-span-1 lg:col-span-2 ${index >= 3 ? "mt-4 md:mt-6" : ""} ${index === 3 ? "lg:col-start-2" : ""} ${index === 4 ? "lg:col-start-4" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
