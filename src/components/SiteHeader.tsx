"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { locales, localePath, switchLocalePath, ui, type Locale } from "@/lib/i18n";

function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return (
    <div role="group" aria-label={ui[locale].nav.language} className="flex rounded-full border border-line p-0.5 font-mono text-xs">
      {locales.map((l) => (
        <Link
          key={l}
          href={switchLocalePath(pathname, l)}
          hrefLang={l}
          aria-label={l === "en" ? "English" : "Bahasa Indonesia"}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${l === locale ? "bg-fg text-bg" : "text-muted hover:text-fg"}`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}

export default function SiteHeader({ locale }: { locale: Locale }) {
  const t = ui[locale].nav;
  const [open, setOpen] = useState(false);
  const home = localePath(locale);
  const links = [
    { href: `${home}#work`, label: t.work },
    { href: `${home}#experience`, label: t.experience },
    { href: `${home}#about`, label: t.about },
    { href: `${home}#contact`, label: t.contact },
    { href: localePath(locale, "/cv"), label: t.cv },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href={home} className="font-semibold tracking-tight">
          Fauzan<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-fg">
              {l.label}
            </Link>
          ))}
          <LanguageSwitch locale={locale} />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitch locale={locale} />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            className="-mr-2 p-2 text-muted hover:text-fg"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-5 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-muted last:border-0 hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
