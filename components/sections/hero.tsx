"use client";

import { MotionGrid } from "@/components/ui/motion-grid";
import GlobeWireframe from "@/components/ui/globe-wireframe";
import NavbarFlow from "@/components/ui/navbar-flow";
import ScrollXHeading from "@/components/heading";
import ThemeSwitchIcon from "@/components/demos/themeswitchicon";
import { FlipWords } from "@/components/ui/flip-words";

export function HeroSection() {
  const flipWords = [
    "HIGH-RISK ENVIRONMENTS",
    "GLOBAL ORGANIZATIONS",
    "CRITICAL INFRASTRUCTURE",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MotionGrid
        direction="left"
        speed="3s"
        opacity={0.15}
        enableGlow={true}
        lineColor="6, 182, 212"
        className="w-full h-full absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/90 via-[#0b1129]/70 to-[#001c49]/90" />
      </MotionGrid>

      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.5)_40%,transparent_70%)] pointer-events-none" />

      <div className="fixed top-[3%] left-0 right-0 z-50">
        <NavbarFlow
          emblem={
            <ScrollXHeading className="w-auto! h-4! sm:h-5! whitespace-nowrap" />
          }
          links={[
            { text: "Servicios" },
            { text: "Proceso" },
            { text: "Tecnología" },
            { text: "Contacto" },
          ]}
          rightComponent={<ThemeSwitchIcon />}
          showConnections={false}
        />
      </div>

      <div className="absolute top-[25%] sm:top-[30%] right-[5%] sm:right-[10%] z-10 max-w-[280px] sm:max-w-[320px]">
        <div className="flex flex-col gap-1 sm:gap-2">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/80 uppercase">
            PROTECTING CRITICAL OPERATIONS
          </p>
          <FlipWords
            words={flipWords}
            duration={2500}
            className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase"
          />
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/80 uppercase">
            THROUGH INTELLIGENCE-LED SECURITY SOLUTIONS
          </p>
        </div>
      </div>

      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute bottom-[-81%] left-1/2 w-full max-w-[1350px] aspect-square overflow-hidden rounded-t-full -translate-x-1/2">
          <GlobeWireframe
            className="w-full h-full opacity-80 sm:opacity-100"
            variant="solid"
            scale={0.9}
            autoRotate={true}
            autoRotateSpeed={-0.15}
            enableInteraction={false}
          />
        </div>
      </div>
    </section>
  );
}
