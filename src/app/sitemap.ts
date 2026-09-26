import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { localePath, locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/cv", ...projects.map((p) => `/projects/${p.slug}`)];
  const url = (locale: (typeof locales)[number], path: string) => profile.site + localePath(locale, path);

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: url(locale, path),
      alternates: { languages: { en: url("en", path), id: url("id", path) } },
    })),
  );
}
