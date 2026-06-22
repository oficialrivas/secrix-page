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
        className="absolute top-[25%] sm:top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center transform"
      >
        <h2 className="text-2xl md:text-4xl font-neue-montreal-medium text-white mb-2">
          Protect What Matters
        </h2>
        <p className="text-sm md:text-base font-neue-montreal text-white/70 max-w-lg mx-auto leading-relaxed hidden md:block">
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
        className="absolute top-[35%] sm:top-[38%] right-[5%] sm:right-[10%] z-20 max-w-[280px] sm:max-w-[320px]"
      >
        <SpotlightCard
           className='w-40 sm:w-56 h-20 sm:h-30 backdrop-blur-xl animate-card rounded-[24px] sm:rounded-[28px] shadow-2xl shadow-black/40 border border-[#f3de6c]/20 relative after:absolute after:inset-0 after:rounded-[24px] sm:after:rounded-[28px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent after:pointer-events-none'
           spotlightColor='213, 180, 57'
          style={{
            background: 'linear-gradient(135deg, rgba(8,12,24,0.15), rgba(0,16,40,0.06))',
          }}
        >
          <div className='w-full h-full flex flex-col items-center justify-center text-center'>
            <p className='text-lg sm:text-2xl font-neue-montreal-medium text-white/90 leading-none'>
              5000+
            </p>
            <p className='text-[8px] sm:text-[10px] font-neue-montreal-light text-white/50 mt-0.5 leading-tight'>
              Risk Assessments Conducted
            </p>
          </div>
        </SpotlightCard>
      </motion.div>

      <div className="absolute top-[52%] sm:top-[54%] left-1/2 sm:left-auto right-auto sm:right-[10%] -translate-x-1/2 sm:translate-x-0 z-10 max-w-[280px] sm:max-w-[320px] text-center sm:text-left">
        <p className="text-[30px] sm:text-[36px] md:text-[48px] font-neue-montreal tracking-normal text-white uppercase leading-tight">
          Operational Security
        </p>
      </div>

      <div className="absolute top-[74%] sm:top-[79%] right-[6%] sm:right-[11%] z-10 text-left">
        <div className="flex flex-col max-w-[420px]">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base md:text-lg font-neue-montreal-light tracking-normal text-white/60 leading-snug">
              Turning risk into
            </span>
            <span className="text-sm sm:text-base md:text-lg font-neue-montreal-light tracking-normal text-white/60 leading-snug">
              operational advantage
            </span>
          </div>
          <Link href="/contacto">
            <WavyButton
              variant="outline"
              size="lg"
              className="mt-2 sm:mt-3 self-end rounded-full border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] text-base sm:text-lg text-[#f9f1c9] shadow-[0_0_20px_rgba(213,180,57,0.2)] hover:border-[#f3de6c]/55 hover:bg-[rgba(12,20,42,0.88)] min-h-[36px] sm:min-h-[40px] px-4 sm:px-5"
              animationDuration={0.4}
            >
              ↘
            </WavyButton>
          </Link>
        </div>
      </div>

      <div className="absolute top-[29%] left-[2%] sm:left-[5%] z-10 max-w-[400px] text-left">
        <div className="flex flex-col">
          <p className="text-[20px] sm:text-[24px] md:text-[28px] font-neue-montreal tracking-normal text-white/70 leading-tight uppercase">
            Global Risk
          </p>
          <p className="text-[20px] sm:text-[24px] md:text-[28px] font-neue-montreal tracking-normal text-white/70 leading-tight uppercase">
            Intelligence
          </p>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-neue-montreal-light tracking-normal text-white/50 leading-[1.4] mt-[16px] sm:mt-[20px] md:mt-[32px] max-w-[200px] sm:max-w-[280px]">
            Monitoring<br className="sm:hidden" />
            complex environments<br className="sm:hidden" />
            worldwide
          </p>
          <div
            className="mt-[12px] sm:mt-[14px] md:mt-[16px] w-[140px] sm:w-[160px] md:w-[200px] h-2 sm:h-3 md:h-4 flex items-center justify-end"
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

          <div className="hidden sm:block mt-[24px] sm:mt-[28px] md:mt-[32px] ml-[12px] sm:ml-[16px] md:ml-[20px] w-fit">
            <SpotlightCard
              className="w-40 sm:w-44 md:w-52 h-18 sm:h-22 md:h-26 backdrop-blur-xl animate-card rounded-[20px] sm:rounded-[24px] md:rounded-[28px] shadow-2xl shadow-black/40 border border-[#f3de6c]/20 relative after:absolute after:inset-0 after:rounded-[20px] sm:after:rounded-[24px] md:after:rounded-[28px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent after:pointer-events-none"
              spotlightColor="213, 180, 57"
              style={{
                background: "linear-gradient(135deg, rgba(8,12,24,0.15), rgba(0,16,40,0.06))",
              }}
            >
              <div className="w-full h-full flex items-center justify-center px-2 sm:px-3 text-center">
                <p className="text-[12px] sm:text-[14px] md:text-[16px] font-neue-montreal-light text-white/75 leading-tight">
                  Precision through insight
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>

      <div className="absolute top-[83%] sm:top-[84%] left-[6%] sm:left-[8%] z-20">
        <div className="flex flex-col items-center gap-2.5">
          <p className="text-center font-neue-montreal-medium text-sm sm:text-base md:text-lg tracking-[0.08em] leading-none text-white/90">Our Group</p>
          <AvatarGroupWithTooltips />
        </div>
      </div>

      <motion.div style={{ opacity: globeOpacity }} className="absolute inset-0 w-full h-full pointer-events-none [mask-image:linear-gradient(to_bottom,black_0%,black_75%,transparent_100%)]">
        <div className="absolute top-[60%] sm:top-[45%] left-1/2 w-full max-w-[1200px] aspect-square -translate-x-1/2">
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
