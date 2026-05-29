"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  CardFlip,
  CardFlipFront,
  CardFlipBack,
  CardFlipHeader,
  CardFlipFooter,
  CardFlipTitle,
  CardFlipDescription,
  CardFlipContent,
} from "@/components/ui/card-flip";
import { Box } from "lucide-react";

type ServiceItem = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  deliverables: { label: string; text: string }[];
};

const services: ServiceItem[] = [
  {
    id: "01",
    badge: "Global",
    title: "Global Security & Risk Solutions",
    subtitle: "Integrated security and risk management for complex environments",
    summary:
      "We combine strategic advisory, intelligence, protective services, and technology to safeguard people, assets, and operations.",
    highlights: ["Strategy", "Intelligence", "Protection", "Resilience"],
    deliverables: [
      { label: "Framework", text: "Integrated security and risk framework design" },
      { label: "Alignment", text: "Regional threat and exposure alignment" },
      { label: "Continuity", text: "Business continuity and resilience guidance" },
      { label: "Governance", text: "Leadership-level governance recommendations" },
    ],
  },
  {
    id: "02",
    badge: "Audit",
    title: "Risk Surveys & Security Audits",
    subtitle: "Comprehensive vulnerability reviews across sites and operations",
    summary:
      "We identify vulnerabilities in facilities, processes, and supply chains through objective and structured assessments.",
    highlights: ["Facilities", "Operations", "Supply Chain", "Compliance"],
    deliverables: [
      { label: "Inspection", text: "Site inspections and operational security review" },
      { label: "Analysis", text: "Threat analysis and control effectiveness evaluation" },
      { label: "Reporting", text: "Structured vulnerability and gap reporting" },
      { label: "Roadmap", text: "Prioritized mitigation and improvement roadmap" },
    ],
  },
  {
    id: "03",
    badge: "Advisory",
    title: "Security Consulting",
    subtitle: "Strategic advisory aligned with governance and business goals",
    summary:
      "Our consulting services strengthen enterprise security programs while supporting sustainable growth and operational stability.",
    highlights: ["Governance", "Planning", "Risk", "Leadership"],
    deliverables: [
      { label: "Strategy", text: "Security strategy and program development" },
      { label: "Crisis", text: "Crisis management and contingency planning" },
      { label: "Assessment", text: "Operational risk and security posture assessments" },
      { label: "Advisory", text: "Executive advisory for strategic decisions" },
    ],
  },
  {
    id: "04",
    badge: "Intel",
    title: "Threat & Vulnerability Assessments",
    subtitle: "Intelligence-led assessments across physical and geopolitical risks",
    summary:
      "We evaluate exposure affecting personnel, infrastructure, operations, and reputation to guide targeted mitigation.",
    highlights: ["Threats", "Exposure", "Infrastructure", "Reputation"],
    deliverables: [
      { label: "Threats", text: "Regional condition and adversarial threat analysis" },
      { label: "Mapping", text: "Facility and operational vulnerability mapping" },
      { label: "Priorities", text: "Risk prioritization for critical assets" },
      { label: "Mitigation", text: "Actionable mitigation strategy guidance" },
    ],
  },
  {
    id: "05",
    badge: "Investigations",
    title: "Intelligence & Investigations",
    subtitle: "Evidence-based investigations and intelligence support",
    summary:
      "We provide investigative and intelligence services that help organizations manage operational, financial, and reputational risk.",
    highlights: ["Due Diligence", "Fraud", "Loss", "Recovery"],
    deliverables: [
      { label: "Diligence", text: "Enhanced due diligence and investigative research" },
      { label: "Fraud", text: "Fraud and loss investigations with clear reporting" },
      { label: "Claims", text: "Insurance and reinsurance claims support" },
      { label: "Recovery", text: "Asset tracing and recovery coordination" },
    ],
  },
  {
    id: "06",
    badge: "Tech",
    title: "Security Technology Advisory & Systems Integration",
    subtitle: "Independent advisory and project management for security infrastructure",
    summary:
      "We oversee end-to-end technology deployments to ensure systems are integrated, reliable, and aligned with operations.",
    highlights: ["Design", "Vendors", "Integration", "Commissioning"],
    deliverables: [
      { label: "Architecture", text: "Security technology architecture and system design" },
      { label: "Vendors", text: "Vendor selection and procurement support" },
      { label: "Integration", text: "Installation oversight and integration validation" },
      { label: "Commissioning", text: "Testing, commissioning, and quality assurance" },
    ],
  },
  {
    id: "07",
    badge: "Training",
    title: "Corporate & Law Enforcement Training",
    subtitle: "Specialized programs for readiness in complex environments",
    summary:
      "Our structured, scenario-based programs build operational capability for security professionals and law enforcement teams.",
    highlights: ["Protection", "Investigations", "Intelligence", "Response"],
    deliverables: [
      { label: "Protection", text: "Executive protection and high-liability operations training" },
      { label: "Instruction", text: "Investigative techniques and intelligence analysis instruction" },
      { label: "Prevention", text: "Kidnap and ransom prevention programs" },
      { label: "Simulation", text: "Scenario-based simulations and operational seminars" },
    ],
  },
];

function TimelineCard({ item }: { item: ServiceItem }) {
  const [selectedSize] = useState(item.highlights[0]);

  return (
    <CardFlip className="w-full max-w-xl select-none">
      <CardFlipFront
        className="relative flex h-auto flex-col justify-between rounded-[32px] border border-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur-xl after:pointer-events-none after:absolute after:inset-0 after:rounded-[32px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent"
        style={{
          background: "linear-gradient(135deg, rgba(8,12,24,0.15), rgba(0,16,40,0.06))",
        }}
      >
        <CardFlipHeader className="pt-8">
          <span className="w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">
            {item.badge}
          </span>
        </CardFlipHeader>

        <CardFlipContent className="flex min-h-[190px] flex-1 items-center justify-center overflow-auto px-8 text-center">
          <div className="w-full">
            <CardFlipTitle className="text-2xl font-neue-montreal-medium text-white/90 leading-tight md:text-3xl">
              {item.title}
            </CardFlipTitle>
            <p className="mt-2 text-xs font-neue-montreal-light text-white/50 leading-tight md:text-sm">
              {item.summary}
            </p>
            <p className="mt-5 text-xs font-neue-montreal-light uppercase tracking-[0.14em] text-white/45">
              {selectedSize}
            </p>
          </div>
        </CardFlipContent>

        <CardFlipFooter className="justify-end pb-7">
          <div className="h-px w-28 bg-white/55" />
        </CardFlipFooter>
      </CardFlipFront>

      <CardFlipBack
        className="relative flex h-full flex-col rounded-[32px] border border-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur-xl after:pointer-events-none after:absolute after:inset-0 after:rounded-[32px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent"
        style={{
          background: "linear-gradient(135deg, rgba(8,12,24,0.15), rgba(0,16,40,0.06))",
        }}
      >
        <CardFlipHeader className="pt-8">
          <CardFlipTitle className="text-white">{item.title}</CardFlipTitle>
          <CardFlipDescription className="text-white/55">{item.subtitle}</CardFlipDescription>
        </CardFlipHeader>

        <CardFlipContent className="flex-1 space-y-4 overflow-auto">
          {item.deliverables.map((deliverable) => (
            <div key={`${item.id}-${deliverable.label}`} className="flex items-start gap-3">
              <Box className="mt-1 h-5 w-5 text-[#d5b439]/90" />
              <div>
                <h4 className="font-semibold text-white/85">{deliverable.label}</h4>
                <p className="text-sm text-white/60">{deliverable.text}</p>
              </div>
            </div>
          ))}
        </CardFlipContent>

        <CardFlipFooter className="border-t border-white/10">
          <p className="mt-4 text-xs text-white/45">{item.summary}</p>
        </CardFlipFooter>
      </CardFlipBack>
    </CardFlip>
  );
}

export function ServicesTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 20%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const { scrollYProgress: bgScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgOpacity = useTransform(bgScrollProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent px-6 pb-24 pt-8 md:pb-32"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(8,12,24,0.15), rgba(0,16,40,0.06))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
      </motion.div>

      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h1 className="mt-12 text-4xl font-neue-montreal-medium uppercase tracking-[0.08em] text-white md:text-6xl">
          Services
        </h1>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute bottom-0 left-[22px] top-0 w-px bg-[#d5b439]/20 md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className="absolute left-[22px] top-0 w-px bg-gradient-to-b from-[#f3de6c]/80 via-[#d5b439]/70 to-[#70663c]/70 shadow-[0_0_16px_rgba(213,180,57,0.45)] md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-12 md:space-y-16">
          {services.map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12"
              >
                <div className="absolute left-[22px] top-6 z-20 h-3 w-3 -translate-x-1/2 rounded-full border border-[#f3de6c]/70 bg-[#d5b439] shadow-[0_0_12px_rgba(213,180,57,0.55)] md:left-1/2" />

                <div className={isRight ? "md:col-start-2" : "md:col-start-1"}>
                  <div className="mb-3 ml-10 flex items-center gap-3 md:ml-0">
                    <span className="rounded-full border border-[#f3de6c]/35 bg-[#70663c]/28 px-2 py-1 text-xs font-semibold text-[#f3de6c]/90">
                      {item.id}
                    </span>
                    <p className="text-sm uppercase tracking-[0.14em] text-[#f3de6c]/65">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="ml-10 md:ml-0">
                    <TimelineCard item={item} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
