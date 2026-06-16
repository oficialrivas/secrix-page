"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { MotionGrid } from "@/components/ui/motion-grid";
import GlobeWireframe from "@/components/ui/globe-wireframe";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import WavyButton from "@/components/ui/wavy-button";
import { AvatarGroupWithTooltips } from "@/components/ui/avatar-group-with-tooltip";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineRetract, setLineRetract] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const fadeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center">
      <motion.div style={{ opacity: fadeOpacity }} className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)] pointer-events-none">
        <MotionGrid
          direction="left"
          speed="3s"
          opacity={0.15}
          enableGlow={true}
          lineColor="213, 180, 57"
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/90 via-[#0b1129]/70 to-[#001c49]/90" />
        </MotionGrid>
      </motion.div>

      <motion.div style={{ opacity: fadeOpacity }} className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.5)_40%,transparent_70%)]" />
      </motion.div>

      <SiteNavbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-[35%] sm:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center transform"
      >
        <h2 className="text-4xl md:text-6xl font-neue-montreal-medium text-white mb-4">
          Protect What Matters
        </h2>
        <p className="text-lg md:text-xl font-neue-montreal text-white/70 max-w-2xl mx-auto leading-relaxed">
          <span className="block">Intelligence-driven security solutions</span>
          <span className="block">that help organizations operate confidently in complex high-risk environments across the Americas.</span>
        </p>
      </motion.div>

      <motion.div
        style={{ x: springX, y: springY }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          mouseX.set(((e.clientX - cx) / rect.width) * 120);
          mouseY.set(((e.clientY - cy) / rect.height) * 300);
        }}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        className="absolute top-[33%] sm:top-[38%] right-[2.5%] sm:right-[7.5%] z-20 max-w-[280px] sm:max-w-[320px]"
      >
        <SpotlightCard
           className='w-60 h-34 backdrop-blur-xl animate-card rounded-[32px] shadow-2xl shadow-black/40 border border-[#f3de6c]/20 relative after:absolute after:inset-0 after:rounded-[32px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent after:pointer-events-none'
           spotlightColor='213, 180, 57'
          style={{
            background: 'linear-gradient(135deg, rgba(8,12,24,0.15), rgba(0,16,40,0.06))',
          }}
        >
          <div className='w-full h-full flex flex-col items-center justify-center text-center'>
            <p className='text-3xl sm:text-4xl font-neue-montreal-medium text-white/90 leading-none'>
              247+
            </p>
            <p className='text-xs sm:text-sm font-neue-montreal-light text-white/50 mt-1 leading-tight'>
              Risk Assessments Conducted
            </p>
          </div>
        </SpotlightCard>
      </motion.div>

      <div className="absolute top-[46%] sm:top-[50%] right-[2%] sm:right-[7%] z-10 max-w-[280px] sm:max-w-[320px] text-left">
        <p className="text-[59px] font-neue-montreal tracking-normal text-white uppercase leading-tight">
          Operational Security
        </p>
      </div>

      <div className="absolute top-[66%] sm:top-[70%] right-[1%] sm:right-[6%] z-10 text-left">
        <div className="flex flex-col max-w-[420px]">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-neue-montreal-light tracking-normal text-white/60 leading-snug">
              Turning risk into
            </span>
            <span className="text-xl sm:text-2xl font-neue-montreal-light tracking-normal text-white/60 leading-snug">
              operational advantage
            </span>
          </div>
          <WavyButton
            variant="outline"
            size="lg"
            className="mt-5 self-end rounded-full border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] text-2xl text-[#f9f1c9] shadow-[0_0_20px_rgba(213,180,57,0.2)] hover:border-[#f3de6c]/55 hover:bg-[rgba(12,20,42,0.88)]"
            animationDuration={0.4}
          >
            ↘
          </WavyButton>
        </div>
      </div>

      <div className="absolute top-[29%] left-[-1%] sm:left-[3%] z-10 max-w-[400px] text-left">
        <div className="flex flex-col">
          <p className="text-[34px] font-neue-montreal tracking-normal text-white/70 leading-tight uppercase">
            Global Risk
          </p>
          <p className="text-[34px] font-neue-montreal tracking-normal text-white/70 leading-tight uppercase">
            Intelligence
          </p>
          <p className="text-[22px] font-neue-montreal-light tracking-normal text-white/50 leading-snug mt-[39px] max-w-[280px]">
            Monitoring complex environments worldwide
          </p>
          <div
            className="mt-[19px] w-[220px] h-5 flex items-center justify-end"
            onMouseEnter={() => setLineRetract(true)}
            onMouseLeave={() => setLineRetract(false)}
          >
            <motion.div
              className="h-px w-full bg-[#f3de6c]/70 origin-left"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: lineRetract ? 0 : 1, opacity: 0.9 }}
              transition={{ duration: lineRetract ? 1.6 : 1.4, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-[40px] ml-[28px] w-fit">
            <SpotlightCard
              className="w-60 h-28 backdrop-blur-xl animate-card rounded-[32px] shadow-2xl shadow-black/40 border border-[#f3de6c]/20 relative after:absolute after:inset-0 after:rounded-[32px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent after:pointer-events-none"
              spotlightColor="213, 180, 57"
              style={{
                background: "linear-gradient(135deg, rgba(8,12,24,0.15), rgba(0,16,40,0.06))",
              }}
            >
              <div className="w-full h-full flex items-center justify-center px-3 text-center">
                <p className="text-[20px] font-neue-montreal-light text-white/75 leading-tight">
                  Precision through insight
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>

      <div className="absolute top-[81%] sm:top-[84%] left-[4%] sm:left-[6%] z-20">
        <div className="flex flex-col items-center gap-2.5">
          <p className="text-center font-neue-montreal-medium text-xl md:text-3xl tracking-[0.08em] leading-none text-white/90">Our Group</p>
          <AvatarGroupWithTooltips />
        </div>
      </div>

      <motion.div style={{ opacity: globeOpacity }} className="absolute inset-0 w-full h-full pointer-events-none [mask-image:linear-gradient(to_bottom,black_0%,black_75%,transparent_100%)]">
        <div className="absolute top-[50%] sm:top-[40%] left-1/2 w-full max-w-[1200px] aspect-square -translate-x-1/2">
          <GlobeWireframe
            className="w-full h-full opacity-80 sm:opacity-100"
            variant="solid"
            scale={0.9}
            autoRotate={true}
            autoRotateSpeed={-0.15}
            enableInteraction={false}
            sphereOutlineWidth={2}
          />
        </div>
      </motion.div>
    </section>
  );
}
