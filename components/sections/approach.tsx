"use client";

import { motion } from "motion/react";
import StatsCount from "@/components/ui/statscount";
import {
  FaBroadcastTower,
  FaBug,
  FaDatabase,
  FaEye,
  FaGlobeAmericas,
  FaLock,
  FaNetworkWired,
  FaProjectDiagram,
  FaSatelliteDish,
  FaSearch,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const stats = [
  { value: 247, suffix: "+", label: "Risk Assessments Conducted" },
  { value: 15, suffix: "+", label: "Years of Operational Excellence" },
  { value: 99, suffix: "%", label: "Client Satisfaction Rate" },
];

const iconConfigs = [
  { Icon: FaShieldAlt, color: "#f3de6c" },
  { Icon: FaNetworkWired, color: "#7dd3fc" },
  { Icon: FaSatelliteDish, color: "#fbbf24" },
  { Icon: FaGlobeAmericas, color: "#60a5fa" },
  { Icon: FaBroadcastTower, color: "#fcd34d" },
  { Icon: FaServer, color: "#93c5fd" },
  { Icon: FaDatabase, color: "#fde68a" },
  { Icon: FaLock, color: "#f9f1c9" },
  { Icon: FaSearch, color: "#bae6fd" },
  { Icon: FaEye, color: "#fef08a" },
  { Icon: FaProjectDiagram, color: "#a5f3fc" },
  { Icon: FaBug, color: "#facc15" },
];

export function ApproachSection() {
  const orbitCount = 3;
  const orbitGap = 7;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative w-full mt-32 md:mt-40 pt-44 md:pt-52 mb-48 md:mb-64 bg-transparent z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-[1fr_1fr]">
          <StatsCount
            stats={stats}
            title="STRATEGIC SECURITY SUMMARY"
            showDividers={true}
            className="-translate-y-10 md:-translate-y-12"
          />

          <div className="relative h-[20rem] w-full overflow-visible md:h-[24rem] xl:flex xl:items-center xl:justify-center">
            <motion.div
              initial={{ opacity: 0, x: 90, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-[7rem] top-[34%] flex h-[28rem] w-[28rem] -translate-y-1/2 items-center justify-center md:-right-[9rem] xl:-right-[5rem]"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#f3de6c]/35 bg-[rgba(6,10,22,0.88)] shadow-[0_0_24px_rgba(213,180,57,0.24)]">
                <FaShieldAlt className="h-9 w-9 text-[#f3de6c]" />
              </div>

              {[...Array(orbitCount)].map((_, orbitIdx) => {
                const size = `${10 + orbitGap * (orbitIdx + 1)}rem`;
                const angleStep = (2 * Math.PI) / iconsPerOrbit;

                return (
                  <div
                    key={orbitIdx}
                    className="absolute rounded-full border border-dashed border-[#f3de6c]/25"
                    style={{
                      width: size,
                      height: size,
                      animation: `securityOrbitSpin ${14 + orbitIdx * 8}s linear infinite`,
                    }}
                  >
                    {iconConfigs
                      .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                      .map((cfg, iconIdx) => {
                        const angle = iconIdx * angleStep;
                        const x = 50 + 50 * Math.cos(angle);
                        const y = 50 + 50 * Math.sin(angle);

                        return (
                          <div
                            key={`${orbitIdx}-${iconIdx}`}
                            className="absolute rounded-full border border-white/10 bg-[rgba(6,10,22,0.85)] p-1.5 shadow-[0_0_14px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            <cfg.Icon className="h-5 w-5" style={{ color: cfg.color }} />
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes securityOrbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
