"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { processSteps } from "@/data";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

function getIcon(name: string) {
  const IconComponent = Icons[name as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  return IconComponent ? <IconComponent className="size-6" /> : null;
}

export function ProcessSection() {
  return (
    <Section id="proceso">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Badge variant="default" className="mb-4 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">Proceso</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gradient-subtle">Nuestro </span>
          <span className="text-gradient">método de trabajo</span>
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
          Un proceso estructurado y transparente que garantiza resultados
          excepcionales en cada fase del proyecto.
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center group">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-card-bg border border-accent/20 mb-4 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all">
                  <span className="text-accent">{getIcon(step.icon)}</span>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
