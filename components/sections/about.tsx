"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import WavyButton from "@/components/ui/wavy-button";
import { motion, useScroll, useTransform } from "motion/react";

export function AboutSection() {
  return (
    <section className="relative w-full z-10 bg-transparent">
      <HeroParallax products={products} header={<AboutHeader />} />
    </section>
  );
}

const AboutHeader = () => {
  const { scrollY } = useScroll();
  const titleOpacity = useTransform(scrollY, [300, 750], [0, 1]);

  return (
    <div className="max-w-7xl relative mx-auto pt-48 pb-20 md:pt-60 md:pb-32 px-4 w-full left-0 top-0 z-50 pointer-events-none">
      <div className="pointer-events-auto max-w-5xl">
        <motion.h1 
          style={{ opacity: titleOpacity }}
          className="text-[55px] md:text-[85px] font-black font-helvetica text-white tracking-[0.02em] leading-[1.05] mb-14 drop-shadow-2xl uppercase"
        >
          Global Risk <br /> 
          Intelligence
        </motion.h1>
        
        <p className="text-3xl md:text-5xl font-neue-montreal-medium text-white/80 leading-tight mb-18 tracking-wide">
          Strategic security solutions for complex environments
        </p>
        
        <div className="relative pl-8 border-l-4 border-blue-500/50">
          <p className="text-2xl md:text-3xl font-neue-montreal-light text-white/85 leading-relaxed max-w-4xl">
            Founded in Miami with a strong presence across the Americas, Secrisk International delivers intelligence-led security and risk management services for organizations operating in high-risk and rapidly evolving environments.
          </p>
        </div>

        <div className="mt-12">
          <WavyButton variant="outline" size="lg" className="text-xl px-10 py-4 bg-blue-500/10 border border-blue-500/30 text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all">
            About Secrisk ↘
          </WavyButton>
        </div>
      </div>
    </div>
  );
};

export const products = [
  {
    title: "Intelligence & Strategy",
    link: "#services",
    thumbnail: "/1.jpg",
  },
  {
    title: "Operational Security",
    link: "#services",
    thumbnail: "/2.png",
  },
  {
    title: "Risk Analysis",
    link: "#services",
    thumbnail: "/3.jpg",
  },
  {
    title: "Critical Infrastructure Protection",
    link: "#services",
    thumbnail: "/4.jpg",
  },
  {
    title: "Threat Evaluation",
    link: "#services",
    thumbnail: "/5.jpg",
  },
  {
    title: "Crisis Management",
    link: "#services",
    thumbnail: "/6.jpg",
  },
  {
    title: "Global Intelligence",
    link: "#services",
    thumbnail: "/7.jpg",
  },
  {
    title: "Tactical Response",
    link: "#services",
    thumbnail: "/8.jpg",
  },
  {
    title: "Surveillance Technology",
    link: "#services",
    thumbnail: "/9.jpg",
  },
  {
    title: "Executive Protection",
    link: "#services",
    thumbnail: "/10.jpg",
  },
  {
    title: "Strategic Risk Advisory",
    link: "#services",
    thumbnail: "/11.jpg",
  },
  {
    title: "Security Auditing",
    link: "#services",
    thumbnail: "/1.jpg",
  },
  {
    title: "Specialized Training",
    link: "#services",
    thumbnail: "/2.png",
  },
  {
    title: "Corporate Investigations",
    link: "#services",
    thumbnail: "/3.jpg",
  },
  {
    title: "Geopolitical Monitoring",
    link: "#services",
    thumbnail: "/4.jpg",
  },
];
