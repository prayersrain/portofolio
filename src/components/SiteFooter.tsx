import { profile } from "@/data/profile";
import { ui, type Locale } from "@/lib/i18n";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const links = [
    { href: profile.socials.github, label: "GitHub" },
    { href: profile.socials.instagram, label: "Instagram" },
    { href: `https://wa.me/${profile.whatsapp}`, label: "WhatsApp" },
    { href: `mailto:${profile.email}`, label: "Email" },
  ];
  return (
    <footer className="border-t border-line print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. {ui[locale].footer.rights}
        </p>
        <ul className="flex gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
