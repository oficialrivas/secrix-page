"use client";

import React from "react";
import { CardContent } from "@/components/ui/card";
import ParallaxCards from "@/components/ui/parallaxcards";
import {
  Radar,
  Shield,
  Search,
  AlertTriangle,
  UserCheck,
  Camera,
} from "lucide-react";

const cardData: {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: "glass" | "light";
  iconBorder: string;
  iconColor: string;
  titleColor: string;
  descColor: string;
}[] = [
  {
    title: "Global Intelligence",
    description:
      "Real-time threat monitoring and strategic intelligence across complex environments in the Americas and beyond.",
    icon: <Radar />,
    variant: "glass",
    iconBorder: "border-[#d5b439]/30 bg-[#d5b439]/10",
    iconColor: "text-[#d5b439]",
    titleColor: "text-white",
    descColor: "text-white/70",
  },
  {
    title: "Operational Security",
    description:
      "Comprehensive protective services for corporations, institutions, and high-profile individuals operating in high-risk environments.",
    icon: <Shield />,
    variant: "light",
    iconBorder: "border-[#70663c]/35 bg-[#d5b439]/12",
    iconColor: "text-[#70663c]",
    titleColor: "text-black",
    descColor: "text-black/70",
  },
  {
    title: "Risk Assessment",
    description:
      "Systematic evaluation of threats and vulnerabilities to strengthen organizational resilience and decision-making.",
    icon: <Search />,
    variant: "glass",
    iconBorder: "border-[#d5b439]/30 bg-[#d5b439]/10",
    iconColor: "text-[#d5b439]",
    titleColor: "text-white",
    descColor: "text-white/70",
  },
  {
    title: "Crisis Management",
    description:
      "Rapid response protocols and strategic guidance when critical incidents threaten operations or reputation.",
    icon: <AlertTriangle />,
    variant: "light",
    iconBorder: "border-[#70663c]/35 bg-[#d5b439]/12",
    iconColor: "text-[#70663c]",
    titleColor: "text-black",
    descColor: "text-black/70",
  },
  {
    title: "Executive Protection",
    description:
      "Specialized security detail and travel risk management for high-profile principals and their families.",
    icon: <UserCheck />,
    variant: "glass",
    iconBorder: "border-[#d5b439]/30 bg-[#d5b439]/10",
    iconColor: "text-[#d5b439]",
    titleColor: "text-white",
    descColor: "text-white/70",
  },
  {
    title: "Tech Integration",
    description:
      "Advanced security technology advisory, systems integration, and surveillance solutions for modern enterprises.",
    icon: <Camera />,
    variant: "light",
    iconBorder: "border-[#70663c]/35 bg-[#d5b439]/12",
    iconColor: "text-[#70663c]",
    titleColor: "text-black",
    descColor: "text-black/70",
  },
];

export function AboutCards() {
  const cards = cardData.map((card) => ({
    variant: card.variant,
    content: (
      <CardContent className="flex flex-col items-center justify-center h-full not-prose text-inherit px-8 md:px-16">
        <div className={`mb-6 p-4 rounded-2xl border ${card.iconBorder} backdrop-blur-sm`}>
          <span className={`w-10 h-10 ${card.iconColor}`}>
            {card.icon}
          </span>
        </div>
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black font-helvetica mb-4 uppercase tracking-wide ${card.titleColor}`}>
          {card.title}
        </h2>
        <p className={`text-xl md:text-2xl font-neue-montreal-light max-w-2xl leading-relaxed ${card.descColor}`}>
          {card.description}
        </p>
      </CardContent>
    ),
  }));

  return (
    <section className="relative w-full bg-transparent z-10">
      <ParallaxCards cards={cards} height="100vh" />
    </section>
  );
}
