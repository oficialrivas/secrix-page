import { AnimatedTestimonialGrid } from "@/components/ui/testimonial-2";

const testimonials = [
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
  { imgSrc: "/miguel fotocuadrada.png", alt: "Miguel" },
];

export default function TestimonialSectionDemo() {
  return (
    <div className="w-full bg-background">
      <AnimatedTestimonialGrid
        testimonials={testimonials}
        title={
          <>
            Trusted by leaders
            <br />
            from various industries
          </>
        }
        description="Learn why professionals trust our solutions to complete their customer journeys."
        ctaText="Read Success Stories"
        ctaHref="#"
      />
    </div>
  );
}
