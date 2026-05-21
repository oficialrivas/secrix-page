import { Service, ProcessStep, Benefit, TechItem, NavLink, SocialLink } from "@/types";

export const services: Service[] = [
  {
    id: "automation",
    icon: "Cpu",
    title: "Automatización Inteligente",
    description: "Sistemas autónomos que optimizan procesos empresariales, reducen costos operativos y eliminan errores humanos.",
    features: ["Flujos de trabajo automatizados", "Integración API", "Monitoreo en tiempo real"],
  },
  {
    id: "data-analytics",
    icon: "BarChart3",
    title: "Análisis de Datos",
    description: "Transformamos datos complejos en insights accionables para decisiones estratégicas basadas en evidencia.",
    features: ["Dashboards interactivos", "Machine Learning", "Predicción de tendencias"],
  },
  {
    id: "ai-solutions",
    icon: "Brain",
    title: "Soluciones de IA",
    description: "Implementación de inteligencia artificial personalizada para resolver desafíos únicos de tu negocio.",
    features: ["Modelos personalizados", "Procesamiento de lenguaje", "Visión computacional"],
  },
  {
    id: "cybersecurity",
    icon: "Shield",
    title: "Ciberseguridad",
    description: "Protección integral de activos digitales con monitoreo continuo y respuesta ante amenazas.",
    features: ["Auditoría de seguridad", "Protección de datos", "Respuesta a incidentes"],
  },
  {
    id: "cloud-infra",
    icon: "Cloud",
    title: "Infraestructura Cloud",
    description: "Arquitecturas escalables y resilientes diseñadas para alto rendimiento y disponibilidad.",
    features: ["Diseño de arquitectura", "Migración cloud", "Optimización de costos"],
  },
  {
    id: "digital-transform",
    icon: "Zap",
    title: "Transformación Digital",
    description: "Acompañamiento completo en la evolución digital de tu organización, desde estrategia hasta implementación.",
    features: ["Consultoría estratégica", "Capacitación", "Implementación gradual"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "analysis",
    number: "01",
    title: "Análisis",
    description: "Evaluamos tu situación actual, identificamos oportunidades y definimos objetivos claros medibles.",
    icon: "Search",
  },
  {
    id: "strategy",
    number: "02",
    title: "Estrategia",
    description: "Diseñamos un plan de acción personalizado con tecnologías adecuadas y milestones definidos.",
    icon: "Target",
  },
  {
    id: "development",
    number: "03",
    title: "Desarrollo",
    description: "Construimos soluciones con metodologías ágiles, código limpio y estándares de producción.",
    icon: "Code",
  },
  {
    id: "validation",
    number: "04",
    title: "Validación",
    description: "Testing riguroso, optimización de rendimiento y verificación de seguridad antes del despliegue.",
    icon: "CheckCircle",
  },
  {
    id: "delivery",
    number: "05",
    title: "Entrega",
    description: "Despliegue controlado, documentación completa y soporte continuo post-lanzamiento.",
    icon: "Rocket",
  },
];

export const benefits: Benefit[] = [
  {
    id: "innovation",
    title: "Innovación Constante",
    description: "Tecnología de vanguardia aplicada a problemas reales de negocio.",
    icon: "Lightbulb",
    metric: "+200",
  },
  {
    id: "efficiency",
    title: "Eficiencia Comprobada",
    description: "Resultados medibles que impactan directamente en tus KPIs.",
    icon: "TrendingUp",
    metric: "99.9%",
  },
  {
    id: "scalability",
    title: "Escalabilidad Garantizada",
    description: "Soluciones que crecen con tu empresa sin límites artificiales.",
    icon: "Scale",
    metric: "10x",
  },
  {
    id: "security",
    title: "Seguridad Integral",
    description: "Protección de datos y cumplimiento normativo desde el diseño.",
    icon: "Lock",
    metric: "24/7",
  },
];

export const techStack: TechItem[] = [
  { id: "nextjs", name: "Next.js", category: "Frontend", icon: "⚡" },
  { id: "react", name: "React", category: "Frontend", icon: "⚛️" },
  { id: "typescript", name: "TypeScript", category: "Lenguajes", icon: "🔷" },
  { id: "python", name: "Python", category: "Backend", icon: "🐍" },
  { id: "docker", name: "Docker", category: "DevOps", icon: "🐳" },
  { id: "kubernetes", name: "Kubernetes", category: "DevOps", icon: "☸️" },
  { id: "aws", name: "AWS", category: "Cloud", icon: "☁️" },
  { id: "postgresql", name: "PostgreSQL", category: "Database", icon: "🐘" },
  { id: "redis", name: "Redis", category: "Database", icon: "🔴" },
  { id: "tensorflow", name: "TensorFlow", category: "AI/ML", icon: "🧠" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", icon: "🎨" },
  { id: "grafana", name: "Grafana", category: "Monitoring", icon: "📊" },
];

export const navigationLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Contacto", href: "#contacto" },
];

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/company/secrix", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com/secrix", icon: "twitter" },
  { platform: "GitHub", url: "https://github.com/secrix", icon: "github" },
];
