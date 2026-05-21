"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { techStack } from "@/data";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function TechStackSection() {
  const categories = useMemo(() => {
    const cats = new Map<string, typeof techStack>();
    techStack.forEach((tech) => {
      if (!cats.has(tech.category)) {
        cats.set(tech.category, []);
      }
      cats.get(tech.category)!.push(tech);
    });
    return Array.from(cats.entries());
  }, []);

  return (
    <Section id="tecnologia">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Badge variant="default" className="mb-4 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">Stack Tecnológico</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gradient-subtle">Tecnología que </span>
          <span className="text-gradient">respalda tu éxito</span>
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
          Utilizamos las herramientas más robustas y probadas del mercado para
          construir soluciones confiables y escalables.
        </p>
      </motion.div>

      <div className="space-y-10">
        {categories.map(([category, techs], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIndex * 0.1 }}
          >
            <h3 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <div
                  key={tech.id}
                  className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-card-bg border border-border-subtle hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all cursor-default"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm font-medium text-foreground group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
