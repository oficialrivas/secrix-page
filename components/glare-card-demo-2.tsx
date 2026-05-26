"use client";

import { AboutHero } from "@/components/sections/about-hero";
import { GlareServices } from "@/components/sections/glare-services";
import TypeAnimationDemo from "@/components/sections/type-animation-demo";
import TypewriterEffectSmoothDemo from "@/components/typewriter-effect-demo-1";

export default function GlareCardDemo() {
  return (
    <div className="mt-[120px] flex flex-col">
      <TypewriterEffectSmoothDemo />
      <AboutHero className="mt-16 md:mt-24" />
      <TypeAnimationDemo />
      <GlareServices />
    </div>
  );
}
