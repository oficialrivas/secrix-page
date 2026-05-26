"use client";

import { motion } from "motion/react";
import ExpandableCards from "@/components/ui/expandable-cards";
import { TextSpotlight } from "@/components/ui/text-spotlight";

const services = [
  {
    id: 1,
    title: "Security Consulting",
    description: "Strategic advisory services that align security programs with organizational risk, governance, and operational objectives. We design tailored security frameworks that strengthen resilience and support decision-making in complex environments.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    id: 2,
    title: "Risk Surveys & Security Audits",
    description: "Comprehensive assessments that identify vulnerabilities across facilities, operations, and supply chains. Our audits provide actionable recommendations and prioritized mitigation strategies aligned with international best practices.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: 3,
    title: "Corporate & Law Enforcement Training",
    description: "Specialized training programs designed to strengthen organizational readiness and crisis response capabilities. From executive security awareness to emergency preparedness, our programs equip teams to operate confidently in high-risk environments.",
    image: "https://images.unsplash.com/photo-1582136017258-20ab9a4fba4d?w=800&q=80",
  },
  {
    id: 4,
    title: "Threat & Vulnerability Assessments",
    description: "Intelligence-led evaluations of emerging and persistent threats impacting people, assets, and operations. We analyze physical, operational, and geopolitical risks to develop targeted mitigation strategies.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80",
  },
  {
    id: 5,
    title: "Security Technology Advisory",
    description: "Secrisk provides strategic advisory and project management services for organizations implementing advanced security technologies. We oversee the full lifecycle of security system deployments—including video surveillance, access control, and fire detection systems—from design and vendor selection to installation oversight and final commissioning.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
];

export function ServicesSection() {
  return (
    <section className="relative w-full py-24 z-10 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
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

        <div className="w-full max-w-7xl h-[600px] sm:h-[500px]">
          <ExpandableCards cards={services} defaultExpanded={3} />
        </div>
      </div>
    </section>
  );
}
