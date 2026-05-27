"use client";

import { motion } from "motion/react";
import { TextSpotlight } from "@/components/ui/text-spotlight";
import ExpandableCards from "@/components/ui/expandable-cards";
import { MotionGrid } from "@/components/ui/motion-grid";
import {
  Shield,
  Radar,
  UserCheck,
  Camera,
  ScanSearch,
} from "lucide-react";

export function ServicesSection() {
  const cards = [
    {
      id: 1,
      title: "Security Consulting",
      primaryIcon: Shield,
    },
    {
      id: 2,
      title: "Risk Surveys & Security Audits",
      primaryIcon: ScanSearch,
    },
    {
      id: 3,
      title: "Corporate & Law Enforcement Training",
      primaryIcon: UserCheck,
    },
    {
      id: 4,
      title: "Threat & Vulnerability Assessments",
      primaryIcon: Radar,
    },
    {
      id: 5,
      title: "Security Technology Advisory & Systems Integration",
      primaryIcon: Camera,
    },
  ];

  const formattedCards = cards.map((card) => ({
    id: card.id,
    content: (isExpanded: boolean) => {
      const PrimaryIcon = card.primaryIcon;

      return (
        <div
          className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur-xl select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-[32px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent"
          style={{
            background: "linear-gradient(135deg, rgba(8,12,24,0.15), rgba(0,16,40,0.06))",
          }}
        >
          <div className="absolute inset-0 bg-[#60a5fa]/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_36%),radial-gradient(circle_at_12%_85%,rgba(59,130,246,0.12),transparent_40%)] pointer-events-none" />

          <div className="absolute inset-0 pointer-events-none opacity-35 group-hover:opacity-45 transition-opacity duration-300">
            <MotionGrid
              direction="left"
              speed="3.8s"
               opacity={0.1}
              enableGlow={true}
              lineColor="96, 165, 250"
              className="w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f4a]/7 via-[#0b1f4a]/4 to-[#061735]/14" />
            </MotionGrid>
          </div>

          <motion.div
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0,
              y: isExpanded ? 0 : -22,
              scale: isExpanded ? 1 : 0.95,
            }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: isExpanded ? 0.08 : 0 }}
          >
            <h4 className="text-base sm:text-2xl font-bold font-neue-montreal text-white/90 tracking-wide uppercase text-center leading-tight max-w-[34ch] px-5 sm:px-8">
              {card.title}
            </h4>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            initial={false}
            animate={{
              opacity: isExpanded ? 0 : 1,
              scale: isExpanded ? 0.78 : 1,
              y: isExpanded ? 10 : 0,
            }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-blue-200/40 bg-blue-100/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_28px_rgba(147,197,253,0.24)]">
              <PrimaryIcon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-50" />
            </div>
          </motion.div>
        </div>
      );
    },
  }));

  return (
    <section id="services" className="relative w-full py-24 md:py-36 z-10 overflow-hidden bg-transparent scroll-mt-24">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Title Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <TextSpotlight
            textClassName="text-[40px] sm:text-[50px] font-black font-helvetica tracking-[0.1em] bg-gradient-to-b from-white/90 via-white/70 to-white/30 bg-clip-text text-transparent uppercase"
            text="SERVICES OVERVIEW"
            spotlightColor="34, 211, 238"
            animateOnPhone={true}
          />
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px w-full max-w-[200px] bg-blue-500/50 mt-6 origin-center"
          />
        </div>

        {/* Expandable Cards Container */}
        <div className="w-full max-w-7xl h-[600px] sm:h-[500px]">
          <ExpandableCards cards={formattedCards} defaultExpanded={3} />
        </div>
      </div>
    </section>
  );
}
