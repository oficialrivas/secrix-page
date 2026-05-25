"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { OrbButton } from "@/components/ui/orb-button";
import { AnimatedBlurTitle } from "@/components/ui/animated-blur-title";

interface AboutHeroProps {
  className?: string;
}

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop",
    alt: "Hero Sections",
  },
  {
    url: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3388&auto=format&fit=crop",
    alt: "Footers",
  },
  {
    url: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3388&auto=format&fit=crop",
    alt: "Bento Grids",
  },
  {
    url: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3388&auto=format&fit=crop",
    alt: "Pricing Sections",
  },
  {
    url: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3388&auto=format&fit=crop",
    alt: "Contact Sections",
  },
  {
    url: "https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop",
    alt: "Logo Cloud",
  },
];

const galleryVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.0, ease: "easeOut" as const },
  },
};

export function AboutHero({ className }: AboutHeroProps) {
  const description =
    "Secrisk International is a global security and risk management firm with operations across Latin America. For over two decades, the company has delivered intelligence-driven solutions focused on risk mitigation, asset protection, and crisis management.";

  const sortedImages = [
    galleryImages[0], galleryImages[3],
    galleryImages[1], galleryImages[4],
    galleryImages[2], galleryImages[5],
  ];

  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="relative z-10 mx-auto my-20 grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 md:my-28 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="max-w-xl">
          <AnimatedBlurTitle className="text-white font-neue-montreal-medium text-[42px] sm:text-[50px] md:text-[58px] lg:text-[66px] leading-[1.02] tracking-[-0.045em] uppercase pb-10">
            <span className="block">ABOUT SECRISK</span>
            <span className="block">INTERNATIONAL</span>
          </AnimatedBlurTitle>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-lg text-lg text-zinc-400 sm:text-xl md:text-2xl font-neue-montreal-light"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <OrbButton>
              <span className="flex items-center gap-2">Learn More</span>
            </OrbButton>
          </motion.div>
        </div>

        <div className="relative overflow-hidden rounded-2xl p-3">
          <motion.div
            className="grid grid-cols-2 gap-3 overflow-hidden"
            variants={galleryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sortedImages.map((image, index) => (
              <motion.div
                key={image.alt}
                variants={itemVariants}
                className={`overflow-hidden rounded-xl shadow-sm ring-1 shadow-black/20 ring-white/[0.06] ${index >= 3 ? "mt-10" : ""}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-44 w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
