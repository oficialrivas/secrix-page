"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { MotionGrid } from "@/components/ui/motion-grid";
import GlobeWireframe from "@/components/ui/globe-wireframe";
import NavbarFlow from "@/components/ui/navbar-flow";
import ScrollXHeading from "@/components/heading";
import ThemeSwitchIcon from "@/components/demos/themeswitchicon";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TextSpotlight } from "@/components/ui/text-spotlight";
import WavyButton from "@/components/ui/wavy-button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

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
          lineColor="6, 182, 212"
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/90 via-[#0b1129]/70 to-[#001c49]/90" />
        </MotionGrid>
      </motion.div>

      <motion.div style={{ opacity: fadeOpacity }} className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.5)_40%,transparent_70%)]" />
      </motion.div>

      <div className="fixed top-[3%] left-0 right-0 z-50">
        <NavbarFlow
          emblem={
            <Link href="/" aria-label="Ir a inicio" className="cursor-pointer">
              <ScrollXHeading className="w-auto! h-4! sm:h-5! whitespace-nowrap" />
            </Link>
          }
          links={[
            { text: "Services", url: "/servicios" },
            { text: "About", url: "/about" },
            { text: "Contact", url: "#contacto" },
          ]}
          rightComponent={<ThemeSwitchIcon />}
          showConnections={false}
        />
      </div>

      <div className="absolute top-[calc(22%+2px)] left-1/2 -translate-x-1/2 z-10 opacity-40"
        style={{ textShadow: '0 -2px 0 rgba(255,255,255,0.25), 0 3px 3px rgba(0,0,0,0.8), 0 6px 12px rgba(0,0,0,0.4), 1.5px 0 2px rgba(6,182,212,0.08), -1.5px 0 2px rgba(6,182,212,0.08)' }}>
        <TextSpotlight
          textClassName='text-[120px] font-black font-helvetica tracking-[0.3em] bg-gradient-to-b from-white/20 via-white/5 to-black/25 bg-clip-text'
          text='SECRISK'
          spotlightColor='6, 182, 212'
          animateOnPhone={true}
          spotlightArea={90}
          spotlightSize={100}
        />
      </div>

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
           className='w-60 h-34 backdrop-blur-xl animate-card rounded-[32px] shadow-2xl shadow-black/40 border border-white/[0.06] relative after:absolute after:inset-0 after:rounded-[32px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent after:pointer-events-none'
          spotlightColor='34, 211, 238'
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
          <WavyButton variant="outline" size="lg" className="text-2xl self-end mt-5" animationDuration={0.4}>
            ↘
          </WavyButton>
        </div>
      </div>

      <div className="absolute top-[29%] left-[-1%] sm:left-[3%] z-10 max-w-[400px] text-left">
        <div className="flex flex-col">
          <p className="text-[50px] font-neue-montreal tracking-normal text-white/70 leading-tight uppercase">
            Global Risk
          </p>
          <p className="text-[50px] font-neue-montreal tracking-normal text-white/70 leading-tight uppercase">
            Intelligence
          </p>
          <p className="text-[25px] font-neue-montreal-light tracking-normal text-white/50 leading-snug mt-[39px] max-w-[280px]">
            Monitoring complex environments worldwide
          </p>
          <div
            className="mt-[19px] w-[220px] h-5 flex items-center justify-end"
            onMouseEnter={() => setLineRetract(true)}
            onMouseLeave={() => setLineRetract(false)}
          >
            <motion.div
              className="h-px w-full bg-white/70 origin-left"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: lineRetract ? 0 : 1, opacity: 0.9 }}
              transition={{ duration: lineRetract ? 1.6 : 1.4, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-[40px] ml-[28px] w-fit">
            <SpotlightCard
              className="w-60 h-28 backdrop-blur-xl animate-card rounded-[32px] shadow-2xl shadow-black/40 border border-white/[0.06] relative after:absolute after:inset-0 after:rounded-[32px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent after:pointer-events-none"
              spotlightColor="34, 211, 238"
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

      <div className="absolute top-[55%] sm:top-[58%] left-[2%] sm:left-[5%] z-0 w-[625px] h-[208px] scale-[0.8] sm:scale-[0.91] origin-left opacity-60">
        <TextHoverEffect text="OSINT" />
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
