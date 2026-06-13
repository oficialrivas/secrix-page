import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  imgSrc: string;
  alt: string;
}

interface AnimatedTestimonialGridProps {
  testimonials: Testimonial[];
  title?: React.ReactNode;
  description?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

const imagePositions = [
  { top: "-8%", left: "8%", className: "hidden lg:block w-28 h-28" },
  { top: "5%", left: "27%", className: "hidden md:block w-24 h-24" },
  { top: "-4%", left: "48%", className: "hidden md:block w-20 h-20" },
  { top: "-3%", right: "8%", className: "hidden lg:block w-32 h-32" },
  { top: "16%", right: "2%", className: "hidden md:block w-24 h-24" },
  { top: "52%", right: "6%", className: "hidden lg:block w-28 h-28" },
  { top: "56%", left: "2%", className: "hidden md:block w-32 h-32" },
  { bottom: "1%", left: "12%", className: "hidden lg:block w-24 h-24" },
  { bottom: "-10%", left: "40%", className: "hidden md:block w-20 h-20" },
  { bottom: "7%", right: "24%", className: "hidden md:block w-28 h-28" },
  { bottom: "-1%", right: "10%", className: "hidden lg:block w-24 h-24" },
  { top: "1%", left: "5%", className: "block md:hidden w-16 h-16" },
  { top: "-3%", right: "10%", className: "block md:hidden w-20 h-20" },
  { bottom: "5%", left: "10%", className: "block md:hidden w-20 h-20" },
  { bottom: "10%", right: "5%", className: "block md:hidden w-16 h-16" },
];

const imageVariants = {
  initial: { opacity: 0, scale: 0.75, y: 28 },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: "easeOut" as const,
      delay: index * 0.12,
    },
  }),
};

const floatingAnimation = () => ({
  y: [0, Math.random() * -15 - 5, 0],
  transition: {
    duration: Math.random() * 4 + 5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  },
});

export const AnimatedTestimonialGrid = ({
  testimonials,
  title,
  description,
  ctaText,
  ctaHref,
  className,
}: AnimatedTestimonialGridProps) => {
  return (
    <section className={cn("relative w-full max-w-[92rem] mx-auto py-40 sm:py-52 px-4", className)}>
      {testimonials.slice(0, imagePositions.length).map((testimonial, index) => (
        <motion.div
          key={index}
          className={cn("absolute rounded-lg shadow-xl", imagePositions[index].className)}
          style={{
            top: imagePositions[index].top,
            left: imagePositions[index].left,
            right: imagePositions[index].right,
            bottom: imagePositions[index].bottom,
          }}
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ scale: 1.1, zIndex: 20 }}
          custom={index}
        >
          <motion.img
            src={testimonial.imgSrc}
            alt={testimonial.alt}
            className="w-full h-full object-cover rounded-lg"
            animate={floatingAnimation()}
          />
        </motion.div>
      ))}

      <div className="relative z-10 mt-6 md:mt-8 flex flex-col items-center text-center">
        {title && (
          <h1 className="mb-5 max-w-4xl text-5xl font-neue-montreal-medium tracking-tighter text-foreground md:text-7xl">
            {title}
          </h1>
        )}
        {description && (
          <p className="mb-10 max-w-2xl text-xl font-neue-montreal text-muted-foreground">{description}</p>
        )}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="mt-3 inline-flex items-center justify-center rounded-full border border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] px-7 py-3.5 text-base font-neue-montreal-medium text-[#f9f1c9] shadow-[0_0_20px_rgba(213,180,57,0.2)] transition-all hover:border-[#f3de6c]/55 hover:bg-[rgba(12,20,42,0.88)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f3de6c]/45 focus:ring-offset-2 focus:ring-offset-[#060a16]"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        )}
      </div>
    </section>
  );
};
