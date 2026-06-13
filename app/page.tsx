import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ApproachSection } from "@/components/sections/approach";
import { MapDemoSection } from "@/components/sections/map-demo";
import { BlogPreviewSection } from "@/components/sections/blog-preview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <MapDemoSection />
      <BlogPreviewSection />
    </>
  );
}
