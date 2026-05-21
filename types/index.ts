export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
