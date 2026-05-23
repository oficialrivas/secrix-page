import { HeroSection } from "@/components/sections/hero";
import GlareCardDemo from "@/components/glare-card-demo-2";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { ProcessSection } from "@/components/sections/process";
import { TechStackSection } from "@/components/sections/tech-stack";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GlareCardDemo />
      <WhyChooseUsSection />
      <ProcessSection />
      <TechStackSection />
      <CTASection />
    </>
  );
}
