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
    <div className="max-w-7xl relative mx-auto pt-56 pb-20 md:pt-72 md:pb-32 px-4 w-full left-0 top-0 z-50 pointer-events-none">
      <div className="pointer-events-auto w-full">
        <div className="flex flex-row items-start justify-between gap-14 xl:gap-20">
          <div className="flex-[0.9]">
            <motion.h1 
              style={{ opacity: titleOpacity }}
              className="text-[55px] md:text-[85px] font-black font-helvetica text-white tracking-[0.02em] leading-[1.05] mb-18 drop-shadow-2xl uppercase"
            >
              Global Risk <br /> 
              Intelligence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-3xl md:text-5xl font-neue-montreal-medium text-white/80 leading-tight mb-22 tracking-wide"
            >
              Strategic security solutions for complex environments
            </motion.p>
          </div>

          <div className="flex-[4.6] pt-8 pl-6 md:pl-8">
            <div className="relative border-l-4 border-[#f3de6c]/50 pl-6 md:pl-7">
              <motion.p
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="max-w-[72ch] text-2xl font-neue-montreal-light leading-[1.65] text-white/85 md:text-[1.7rem]"
              >
                Founded in Miami with a strong presence across the Americas, Secrisk International delivers intelligence-led security and risk management services for organizations operating in high-risk and rapidly evolving environments.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
              className="mt-16"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center rounded-full border border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] px-10 py-7 text-xl font-neue-montreal-medium text-[#f9f1c9] shadow-[0_0_20px_rgba(213,180,57,0.2)] transition-all hover:border-[#f3de6c]/55 hover:bg-[rgba(12,20,42,0.88)] hover:text-white"
                >
                  About Secrisk
                </motion.button>
              </Link>
            </motion.div>
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
