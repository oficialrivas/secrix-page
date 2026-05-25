"use client";

import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

export function AnimatedBlurTitle({
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
