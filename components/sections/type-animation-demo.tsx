"use client";

import Typeanimation from "@/components/ui/typeanimation";

export default function TypeAnimationDemo() {
  return (
    <section className="w-full flex justify-start py-5 px-8 sm:px-12 md:px-20 lg:px-28 xl:px-36">
      <div className="text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-none">
          Discover New
        </h1>

        {/* Ajuste horizontal */}
        <div className="ml-6 md:ml-10 lg:ml-60">
          <Typeanimation
            words={["possibilities", "opportunities", "potential"]}
            typingSpeed="slow"
            deletingSpeed="slow"
            pauseDuration={2000}
            className="text-3xl md:text-5xl font-extrabold text-white"
          />
        </div>
      </div>
    </section>
  );
}