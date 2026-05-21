"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { services } from "@/data";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

function getIcon(name: string) {
  const IconComponent = Icons[name as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  return IconComponent ? <IconComponent className="size-6" /> : null;
}

export function ServicesSection() {
  return (
    <Section id="servicios">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Badge variant="default" className="mb-4 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">Servicios</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gradient-subtle">Soluciones que </span>
          <span className="text-gradient">impulsan tu negocio</span>
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
          Tecnología de vanguardia aplicada a desafíos reales. Cada solución
          está diseñada para escalar con tu empresa.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full group glow-border hover:border-accent/30 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-2 group-hover:bg-accent/20 transition-colors">
                  {getIcon(service.icon)}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <Icons.Check className="size-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
