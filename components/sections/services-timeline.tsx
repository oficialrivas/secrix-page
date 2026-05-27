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
  priceLabel: string;
  summary: string;
  highlights: string[];
  deliverables: string[];
};

const services: ServiceItem[] = [
  {
    id: "01",
    badge: "Core",
    title: "Security Consulting",
    subtitle: "Strategic security planning for executive teams",
    priceLabel: "Phase 01",
    summary: "Define a practical security roadmap aligned to operations and growth.",
    highlights: ["Scope", "Risk", "Impact", "Timeline"],
    deliverables: [
      "Executive risk briefing",
      "Control gap analysis",
      "Priority action matrix",
      "Implementation milestones",
    ],
  },
  {
    id: "02",
    badge: "Field",
    title: "Risk Surveys & Audits",
    subtitle: "On-site and remote vulnerability review",
    priceLabel: "Phase 02",
    summary: "Audit your physical and digital posture with measurable findings.",
    highlights: ["Sites", "Systems", "People", "Evidence"],
    deliverables: [
      "Facility risk survey",
      "Security controls benchmark",
      "Compliance deviations",
      "Corrective action plan",
    ],
  },
  {
    id: "03",
    badge: "Training",
    title: "Corporate & Law Enforcement Training",
    subtitle: "Operational readiness for high-pressure scenarios",
    priceLabel: "Phase 03",
    summary: "Train teams to respond quickly, consistently, and safely.",
    highlights: ["Drills", "Playbooks", "Leaders", "Response"],
    deliverables: [
      "Incident response simulation",
      "Threat escalation protocols",
      "Role-based workshops",
      "After-action recommendations",
    ],
  },
  {
    id: "04",
    badge: "Intel",
    title: "Threat & Vulnerability Assessments",
    subtitle: "Continuous threat mapping for critical assets",
    priceLabel: "Phase 04",
    summary: "Identify adversary paths before they become incidents.",
    highlights: ["OSINT", "Exposure", "Criticality", "Monitoring"],
    deliverables: [
      "Threat landscape report",
      "Attack surface priorities",
      "High-risk scenario mapping",
      "Mitigation sequence",
    ],
  },
  {
    id: "05",
    badge: "Tech",
    title: "Systems Integration Advisory",
    subtitle: "Security technology architecture and deployment",
    priceLabel: "Phase 05",
    summary: "Integrate tools, workflows, and teams into one operational system.",
    highlights: ["Design", "Integration", "Testing", "Handover"],
    deliverables: [
      "Technology stack blueprint",
      "Integration workflow map",
      "Performance validation",
      "Operational handover kit",
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
            <p className="text-3xl font-neue-montreal-medium text-white/90 leading-none md:text-4xl">
              {item.priceLabel}
            </p>
            <CardFlipTitle className="mt-2 text-base font-neue-montreal text-white/80 md:text-lg">
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
            <div key={deliverable} className="flex items-start gap-3">
              <Box className="mt-1 h-5 w-5 text-cyan-300" />
              <div>
                <h4 className="font-semibold text-white/85">Deliverable</h4>
                <p className="text-sm text-white/60">{deliverable}</p>
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent px-6 pb-24 pt-8 md:pb-32"
    >
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h1 className="mt-12 bg-gradient-to-b from-white via-blue-100/90 to-blue-200/60 bg-clip-text text-4xl font-neue-montreal-medium uppercase tracking-[0.08em] text-transparent md:text-6xl">
          Servicios
        </h1>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute bottom-0 left-[22px] top-0 w-px bg-blue-200/20 md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className="absolute left-[22px] top-0 w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-blue-600 shadow-[0_0_18px_rgba(56,189,248,0.7)] md:left-1/2 md:-translate-x-1/2"
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
                <div className="absolute left-[22px] top-6 z-20 h-3 w-3 -translate-x-1/2 rounded-full border border-cyan-200/80 bg-cyan-300 shadow-[0_0_16px_rgba(56,189,248,0.9)] md:left-1/2" />

                <div className={isRight ? "md:col-start-2" : "md:col-start-1"}>
                  <div className="mb-3 ml-10 flex items-center gap-3 md:ml-0">
                    <span className="rounded-full border border-blue-200/30 bg-blue-900/40 px-2 py-1 text-xs font-semibold text-blue-100/80">
                      {item.id}
                    </span>
                    <p className="text-sm uppercase tracking-[0.14em] text-blue-100/65">
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
