import type { MetadataRoute } from "next";
import { blogPosts, siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/hakkimizda",
  "/ucretler",
  "/iletisim",
  "/sss",
  "/blog",
  "/vfs-rehberi",
  "/uk-vize-ucretleri-2026",
  "/ingiltere-vize-randevu-nasil-alinir",
  "/vfs-global-randevu",
  "/uk-ziyaretci-vizesi",
  "/business-visa",
  "/family-visit-visa",
  "/multiple-entry-visa",
  "/uk-vize-merkezleri",
  "/ingiltere-vize-randevu-istanbul",
  "/ingiltere-vize-randevu-ankara",
  "/ingiltere-vize-randevu-izmir",
  "/ingiltere-vize-randevu-antalya",
  "/yazar/oguz-yumuk",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...base, ...posts];
}
