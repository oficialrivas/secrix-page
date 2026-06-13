"use client";

import { Marquee } from "@/components/ui/marquee";

export function MarqueeBandSection() {
  return (
    <section className="relative w-full py-8 md:py-12">
      <Marquee
        text="GLOBAL INTELLIGENCE • RISK ANALYSIS • OPERATIONAL SECURITY"
        repeat={5}
        duration={22}
        fontSize="md"
        strokeWidth="1.5px"
        strokeColor="rgba(255, 255, 255, 0.72)"
        className="py-6 md:py-8"
      />
    </section>
  );
}
