"use client";

import { AboutHero } from "@/components/sections/about-hero";
import { GlareServices } from "@/components/sections/glare-services";
import TypeAnimationDemo from "@/components/sections/type-animation-demo";

export default function GlareCardDemo() {
  return (
    <div className="mt-[120px] flex flex-col">
      <AboutHero />
      <TypeAnimationDemo />
      <GlareServices />
    </div>
  );
}
