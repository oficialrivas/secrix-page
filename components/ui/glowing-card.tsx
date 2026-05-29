import { cn } from "@/lib/utils";

interface GlowingCardProps {
  title: string;
  className?: string;
}

export function GlowingCard({ title, className }: GlowingCardProps) {
  return (
    <div className={cn("outer h-full w-full transition-transform duration-500 ease-out hover:-translate-y-1", className)}>
      <div className="dot" />
      <div className="card">
        <div className="ray" />
        <div className="text font-neue-montreal-medium">{title}</div>
        <div className="line topl" />
        <div className="line leftl" />
        <div className="line bottoml" />
        <div className="line rightl" />
      </div>
    </div>
  );
}
