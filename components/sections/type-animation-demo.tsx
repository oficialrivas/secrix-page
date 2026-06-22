"use client";

import Typeanimation from "@/components/ui/typeanimation";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export default function TypeAnimationDemo() {
  return (
    <section className="w-full flex justify-start py-5 px-8 sm:px-12 md:px-20 lg:px-28 xl:px-36">
      <div className="text-left">
        <div className="pt-[96px] flex flex-col lg:flex-row lg:items-start lg:gap-12">
          <h1 className="text-8xl md:text-[10rem] font-neue-montreal-medium text-white mb-2 leading-none">
            DISCOVER NEW
          </h1>

          <div className="mt-6 lg:mt-10">
            <SpotlightCard
              className="w-60 h-34 backdrop-blur-xl animate-card rounded-[32px] shadow-2xl shadow-black/40 border border-white/[0.06] relative after:absolute after:inset-0 after:rounded-[32px] after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent after:pointer-events-none"
              spotlightColor="34, 211, 238"
              style={{
                background: "linear-gradient(135deg, rgba(8,12,24,0.15), rgba(0,16,40,0.06))",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <p className="text-3xl sm:text-4xl font-neue-montreal-medium text-white/90 leading-none">
                  5000+
                </p>
                <p className="text-xs sm:text-sm font-neue-montreal-light text-white/50 mt-1 leading-tight">
                  Risk Assessments Conducted
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Ajuste horizontal */}
        <div className="ml-0 md:ml-85 lg:ml-[69rem]">
          <Typeanimation
            words={["POSSIBILITIES", "OPPORTUNITIES", "POTENTIAL"]}
            typingSpeed="slow"
            deletingSpeed="slow"
            pauseDuration={2000}
            className="text-8xl md:text-12xl font-neue-montreal-medium text-white"
          />
        </div>
      </div>
    </section>
  );
}
