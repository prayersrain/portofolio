import type { Locale } from "@/lib/i18n";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

/** Header, main and footer, with the page language set on the wrapper. */
export default function SiteChrome({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <div lang={locale} className="flex min-h-dvh flex-col">
      <SiteHeader locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
