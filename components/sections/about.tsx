"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full z-10 bg-transparent">
      <HeroParallax products={products} header={<AboutHeader />} />
    </section>
  );
}

const AboutHeader = () => {
  const { scrollY } = useScroll();
  const titleOpacity = useTransform(scrollY, [300, 750], [0, 1]);

  return (
    <div className="max-w-7xl relative mx-auto pt-48 pb-20 md:pt-60 md:pb-32 px-4 w-full left-0 top-0 z-50 pointer-events-none">
      <div className="pointer-events-auto w-full">
        <div className="flex flex-row items-start justify-between gap-16 xl:gap-28">
          <div className="flex-[1]">
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
          </div>

          <div className="flex-[4] pt-6 pl-8 md:pl-12">
            <div className="relative pl-8 border-l-4 border-blue-500/50">
              <p className="text-2xl md:text-3xl font-neue-montreal-light text-white/85 leading-relaxed">
                Founded in Miami with a strong presence across the Americas, Secrisk International delivers intelligence-led security and risk management services for organizations operating in high-risk and rapidly evolving environments.
              </p>
            </div>

            <div className="mt-12">
              <Link href="/about">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center text-xl font-neue-montreal-medium px-10 py-7 bg-blue-500/10 border border-blue-500/30 text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all rounded-full"
                  >
                    About Secrisk
                  </motion.button>
              </Link>
            </div>
          </div>
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
