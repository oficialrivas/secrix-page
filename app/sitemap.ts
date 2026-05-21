import { siteConfig } from "@/config/site";

export default function sitemap() {
  const routes = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  return routes;
}
