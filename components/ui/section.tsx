import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  container?: boolean;
}

export function Section({ children, id, className, container = true }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 relative", className)}>
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
