"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <Section id="contacto" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-purple-500/10 to-cyan-500/20" />
          <div className="absolute inset-0 bg-card-bg/80 backdrop-blur-sm" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient-subtle">¿Listo para </span>
              <span className="text-gradient">transformar tu empresa?</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto text-lg mb-8">
              Conversemos sobre cómo la inteligencia digital puede llevar tu
              negocio al siguiente nivel. Sin compromiso, sin complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="group">
                Agendar consulta gratuita
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <MessageSquare className="mr-2 size-5" />
                Contactar por WhatsApp
              </Button>
            </div>

            <p className="text-foreground-muted/60 text-sm mt-6">
              Respuesta garantizada en menos de 24 horas
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
