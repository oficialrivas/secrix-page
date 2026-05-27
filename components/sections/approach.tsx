"use client";

import StatsCount from "@/components/ui/statscount";

const stats = [
  { value: 247, suffix: "+", label: "Risk Assessments Conducted" },
  { value: 15, suffix: "+", label: "Years of Operational Excellence" },
  { value: 99, suffix: "%", label: "Client Satisfaction Rate" },
];

export function ApproachSection() {
  return (
    <section className="relative w-full -mt-[30vh] pt-0 mb-48 md:mb-64 bg-transparent z-10">
      <div className="container mx-auto px-6 relative z-10">
        <StatsCount
          stats={stats}
          title="STRATEGIC SECURITY SUMMARY"
          showDividers={true}
          className=""
        />
      </div>
    </section>
  );
}
