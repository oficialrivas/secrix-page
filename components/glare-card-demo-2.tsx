"use client";

import { GlareCard } from "@/components/ui/glare-card";
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

function AnimatedBlurTitle({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    offset: ["start 95%", "start 60%"],
  });

  const titleSmoothProgress = useSpring(titleProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.9,
  });
  const titleOpacity = useTransform(titleSmoothProgress, [0, 1], [0, 1]);
  const titleBlur = useTransform(titleSmoothProgress, [0, 1], [10, 0]);
  const titleFilter = useMotionTemplate`blur(${titleBlur}px)`;

  return (
    <motion.h2
      ref={titleRef}
      className={className}
      style={{ opacity: titleOpacity, filter: titleFilter }}
    >
      {children}
    </motion.h2>
  );
}

function GlareCardsRow({
  offset,
  yStart,
  opacityStops,
}: {
  offset: NonNullable<Parameters<typeof useScroll>[0]>["offset"];
  yStart: number;
  opacityStops: [number, number, number];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.9,
  });

  const opacity = useTransform(smoothProgress, [0, 0.55, 1], opacityStops);
  const y = useTransform(smoothProgress, [0, 1], [yStart, 0]);

  return (
    <motion.div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-12 w-fit mx-auto"
      style={{ opacity, y }}
    >
      <div>
        <GlareCard className="flex flex-col items-center justify-center">
          <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-white"
          >
            <path
              d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
              stroke="currentColor"
              strokeWidth="15"
              strokeMiterlimit="3.86874"
              strokeLinecap="round"
            />
          </svg>
        </GlareCard>
      </div>
      <div>
        <GlareCard className="flex flex-col items-center justify-center">
          <img
            className="h-full w-full absolute inset-0 object-cover"
            src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Abstract colorful gradient background"
          />
        </GlareCard>
      </div>
      <div>
        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
          <p className="font-bold text-white text-lg">The greatest trick</p>
          <p className="font-normal text-base text-neutral-200 mt-4">
            The greatest trick the devil ever pulled was to convince the world
            that he didn&apos;t exist.
          </p>
        </GlareCard>
      </div>
    </motion.div>
  );
}

export default function GlareCardDemo() {
  return (
    <div className="mt-[395px] flex flex-col">
      <div className="w-full max-w-5xl pl-[0%] sm:pl-[3%] text-left space-y-0 -mt-[40px]">
        <AnimatedBlurTitle className="text-left text-white font-neue-montreal-medium text-5xl md:text-6xl">
          <span className="block">ABOUT SECRISK</span>
          <span className="block mt-4">INTERNATIONAL</span>
        </AnimatedBlurTitle>
        <p className="mt-[32px] text-white/80 font-neue-montreal-light text-xl md:text-2xl leading-relaxed">
          Secrisk International is a global security and risk management firm with operations across Latin America. For over two decades, the company has delivered intelligence-driven solutions focused on risk mitigation, asset protection, and crisis management for organizations operating in complex and high-risk environments.
        </p>
      </div>
      <div className="mt-[190px]">
        <AnimatedBlurTitle className="text-center text-white font-neue-montreal-medium text-5xl md:text-6xl mb-10">
          SERVICES
        </AnimatedBlurTitle>
        <GlareCardsRow
          offset={["start 88%", "end 45%"]}
          yStart={190}
          opacityStops={[0, 0.2, 1]}
        />
        <GlareCardsRow
          offset={["start 100%", "end 55%"]}
          yStart={160}
          opacityStops={[0, 0.35, 1]}
        />
      </div>
    </div>
  );
}
