"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { benefits } from "@/data";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

function getIcon(name: string) {
  const IconComponent = Icons[name as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  return IconComponent ? <IconComponent className="size-6" /> : null;
}

export function WhyChooseUsSection() {
  return (
    <Section id="por-que-elegirnos">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Badge variant="default" className="mb-4 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">Ventajas</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gradient-subtle">Por qué </span>
          <span className="text-gradient">elegirnos</span>
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
          Combinamos experiencia técnica con visión estratégica para entregar
          resultados que superan expectativas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full text-center group hover:border-accent/30 transition-colors">
              <CardHeader>
                {benefit.metric && (
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {benefit.metric}
                  </div>
                )}
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto group-hover:scale-110 transition-transform">
                  {getIcon(benefit.icon)}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
