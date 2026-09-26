import type { Metadata } from "next";
import { localePath, type Locale } from "@/lib/i18n";

export const ogBase: { siteName: string; images: { url: string }[]; type: "website" } = {
  siteName: "Fauzan Portfolio",
  images: [{ url: "/og-image.png" }],
  type: "website",
};

/** Canonical URL, hreflang alternates and Open Graph for a page that exists in both languages. */
export function pageMeta(locale: Locale, path: string, description: string, title?: string): Metadata {
  const url = localePath(locale, path);
  return {
    ...(title && { title }),
    description,
    alternates: {
      canonical: url,
      languages: { en: localePath("en", path), id: localePath("id", path), "x-default": localePath("en", path) },
    },
    openGraph: {
      ...ogBase,
      url,
      title: title ? `${title} | Fauzan` : "Fauzan | Full-Stack Developer",
      description,
      locale: locale === "en" ? "en_US" : "id_ID",
    },
  };
}
