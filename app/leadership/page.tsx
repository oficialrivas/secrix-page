"use client";

import { motion } from "motion/react";
import { Component } from "@/components/ui/argent-loop-infinite-slider";
import { SiteNavbar } from "@/components/layout/site-navbar";

const ease = [0.16, 1, 0.3, 1] as const;

export default function LeadershipPage() {
  return (
    <div className="fixed inset-0 z-[60] overflow-hidden bg-[#060a16]">
      <SiteNavbar className="z-[80]" />
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, y: 34, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.15, ease, delay: 0.18 }}
      >
        <Component />
      </motion.div>
    </div>
  );
}
