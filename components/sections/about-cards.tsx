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
  Building2,
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
  backgroundImage?: string;
}[] = [
  {
    title: "About Secrisk",
    description:
      "Founded in 2002 and headquartered in Miami, Secrisk is an international security and risk management firm serving complex environments across the Americas and beyond.",
    backgroundImage: "/panoramica.png",
    icon: <Shield />,
    variant: "glass",
    iconBorder: "border-[#d5b439]/30 bg-[#d5b439]/10",
    iconColor: "text-[#d5b439]",
    titleColor: "text-white",
    descColor: "text-white/70",
  },
  {
    title: "Regional Presence",
    description:
      "With headquarters in Miami and regional offices in Mexico, Brazil, Peru, Ecuador, Venezuela, Colombia, Argentina, and the Dominican Republic.",
    icon: <Building2 />,
    variant: "light",
    iconBorder: "border-[#70663c]/35 bg-[#d5b439]/12",
    iconColor: "text-[#70663c]",
    titleColor: "text-black",
    descColor: "text-black/70",
  },
  {
    title: "Integrated Protection",
    description:
      "We combine strategic risk advisory, protective services, crisis management, investigations, training, and security technologies to safeguard people, assets, operations, and reputations.",
    icon: <UserCheck />,
    variant: "glass",
    iconBorder: "border-[#d5b439]/30 bg-[#d5b439]/10",
    iconColor: "text-[#d5b439]",
    titleColor: "text-white",
    descColor: "text-white/70",
  },
  {
    title: "Intelligence-Led",
    description:
      "We leverage intelligence analysis and situational awareness to identify emerging threats and guide strategic security decisions.",
    icon: <Radar />,
    variant: "light",
    iconBorder: "border-[#70663c]/35 bg-[#d5b439]/12",
    iconColor: "text-[#70663c]",
    titleColor: "text-black",
    descColor: "text-black/70",
  },
  {
    title: "Technology-Driven",
    description:
      "Advanced security technologies, surveillance systems, and operational tools enhance visibility, control, and proactive risk mitigation.",
    icon: <Camera />,
    variant: "glass",
    iconBorder: "border-[#d5b439]/30 bg-[#d5b439]/10",
    iconColor: "text-[#d5b439]",
    titleColor: "text-white",
    descColor: "text-white/70",
  },
  {
    title: "Operational Excellence",
    description:
      "Our experienced teams deliver discreet, professional, and practical security solutions across high-risk and complex environments worldwide.",
    icon: <AlertTriangle />,
    variant: "light",
    iconBorder: "border-[#70663c]/35 bg-[#d5b439]/12",
    iconColor: "text-[#70663c]",
    titleColor: "text-black",
    descColor: "text-black/70",
  },
  {
    title: "Clients We Support",
    description:
      "We support multinational corporations, financial institutions, family offices, critical infrastructure operators, public sector entities, and high-profile individuals.",
    icon: <Search />,
    variant: "glass",
    iconBorder: "border-[#d5b439]/30 bg-[#d5b439]/10",
    iconColor: "text-[#d5b439]",
    titleColor: "text-white",
    descColor: "text-white/70",
  },
];

export function AboutCards() {
  const cards = cardData.map((card) => ({
    variant: card.variant,
    backgroundImage: card.backgroundImage,
    content: (
      <CardContent className="relative flex flex-col items-center justify-center h-full overflow-hidden not-prose text-inherit px-8 md:px-16">
        <div className={`relative z-10 mb-6 p-4 rounded-2xl border ${card.iconBorder} backdrop-blur-sm`}>
          <span className={`w-10 h-10 ${card.iconColor}`}>
            {card.icon}
          </span>
        </div>
        <h2 className={`relative z-10 text-4xl sm:text-5xl md:text-6xl font-black font-helvetica mb-4 uppercase tracking-wide ${card.titleColor}`}>
          {card.title}
        </h2>
        <p className={`relative z-10 text-xl md:text-2xl font-neue-montreal-light max-w-2xl leading-relaxed ${card.descColor}`}>
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
