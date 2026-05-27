import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ApproachSection } from "@/components/sections/approach";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <ServicesSection />
    </>
  );
}
