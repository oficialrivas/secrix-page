"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function AboutSection() {
  return (
    <section className="relative w-full z-10 bg-transparent">
      <HeroParallax products={products} header={<AboutHeader />} />
    </section>
  );
}

const AboutHeader = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-32 px-4 w-full left-0 top-0 z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <div className="inline-block mb-6 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-900/20 backdrop-blur-md shadow-[0_0_20px_rgba(0,28,73,0.3)]">
          <span className="text-white/80 text-sm font-neue-montreal-medium tracking-widest uppercase">
            Established 2002
          </span>
        </div>
        
        <h1 className="text-[50px] md:text-[90px] font-black font-helvetica text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 tracking-[0.02em] leading-[1.05] mb-12 drop-shadow-2xl">
          WHO WE ARE: <br /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-600">
            SECRISK
          </span>
        </h1>
        
        <div className="max-w-5xl relative">
          <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-blue-600 via-[#001c49] to-transparent rounded-full hidden md:block"></div>
          
          <div className="flex flex-col gap-8 md:pl-2">
            <p className="text-2xl md:text-4xl font-neue-montreal-medium text-white/95 leading-tight text-balance">
              Secrisk is an international security and risk management firm headquartered in Miami, Florida, with regional offices across the Americas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#0b1129]/60 border border-blue-500/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl shadow-black/50 hover:border-blue-500/20 transition-colors duration-500">
                <p className="text-lg md:text-xl font-neue-montreal-light text-white/80 leading-relaxed">
                  For nearly three decades, we have delivered integrated protection strategies across diverse, high-risk, and complex environments throughout the Americas and beyond.
                </p>
              </div>
              
              <div className="bg-[#0b1129]/60 border border-blue-500/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl shadow-black/50 hover:border-blue-500/20 transition-colors duration-500">
                <p className="text-lg md:text-xl font-neue-montreal-light text-white/80 leading-relaxed">
                  We support multinational corporations, financial institutions, family offices, critical infrastructure operators, high-profile individuals, and public sector entities.
                </p>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-neue-montreal-light text-white/80 leading-relaxed mt-4 max-w-4xl">
              Our multidisciplinary approach integrates strategic risk advisory, protective services, crisis management, investigative support, training, and advanced security technologies.
            </p>
            
            <p className="text-lg md:text-xl font-neue-montreal-light text-white/60 leading-relaxed max-w-4xl">
              Secrisk operates at the intersection of global insight and local expertise, providing actionable intelligence, proactive risk mitigation, and tailored security frameworks designed to anticipate emerging threats and respond decisively when it matters most.
            </p>
            
            <div className="mt-6 p-6 md:p-8 bg-gradient-to-r from-[#001c49]/40 to-transparent border-l-4 border-blue-500/50 rounded-r-2xl max-w-4xl">
              <p className="text-xl md:text-2xl font-neue-montreal-medium text-blue-200 leading-relaxed">
                "Our commitment to discretion, professionalism, and operational excellence has made us a trusted partner to clients navigating today’s evolving security landscape."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://www.aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
