import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${BUSINESS_INFO.domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
