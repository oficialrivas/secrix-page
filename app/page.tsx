import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { ProcessSection } from "@/components/sections/process";
import { TechStackSection } from "@/components/sections/tech-stack";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TechStackSection />
      <CTASection />
    </>
  );
}
