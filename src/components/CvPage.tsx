import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Globe, Mail, MapPin, Phone } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import { education, experience, type ExperienceItem } from "@/data/experience";
import { profile, skills } from "@/data/profile";
import { projects } from "@/data/projects";
import { localePath, ui, type Locale } from "@/lib/i18n";

/** Generated from this page by `npm run cv:pdf`. */
export const cvPdfPath = (locale: Locale) => `/fauzan-cv-${locale}.pdf`;

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-xs font-semibold tracking-[0.15em] text-accent-soft uppercase print:tracking-normal">{children}</h2>;
}

function Entry({ item, locale }: { item: ExperienceItem; locale: Locale }) {
  return (
    <li className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-semibold">
          {item.title[locale]} <span className="font-normal text-muted">· {item.org}</span>
        </h3>
        <p className="font-mono text-xs text-subtle">{item.period[locale]}</p>
      </div>
      <p className="mt-1.5 text-sm text-pretty text-muted">{item.description[locale]}</p>
    </li>
  );
}

export default function CvPage({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const phone = `+${profile.whatsapp.slice(0, 2)} ${profile.whatsapp.slice(2, 5)}-${profile.whatsapp.slice(5, 9)}-${profile.whatsapp.slice(9)}`;
  const contacts = [
    { icon: MapPin, text: profile.location[locale] },
    { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, text: phone, href: `https://wa.me/${profile.whatsapp}` },
    { icon: Globe, text: profile.site.replace("https://", ""), href: profile.site },
    { icon: GithubIcon, text: profile.socials.github.replace("https://", ""), href: profile.socials.github },
  ];

  return (
    <div className="cv mx-auto max-w-4xl px-5 py-10 print:max-w-none print:p-0">
      <div className="mb-6 flex items-center justify-between print:hidden">
        <Link href={localePath(locale)} className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" />
          {t.cv.back}
        </Link>
        <a
          href={cvPdfPath(locale)}
          download="Fauzan-CV.pdf"
          className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
        >
          <Download className="size-4" />
          {t.cv.download}
        </a>
      </div>

      <article className="rounded-2xl border border-line bg-surface p-7 md:p-12 print:rounded-none print:border-0 print:p-0">
        <header className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-center print:flex-row print:pb-5">
          <Image src="/avatar.webp" alt={profile.name} width={96} height={96} preload className="rounded-2xl print:size-20" />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
            <p className="mt-1 font-medium text-accent-soft">{t.hero.role}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted print:text-xs">
              {contacts.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-1.5">
                  <Icon className="size-3.5 shrink-0" />
                  {href ? (
                    <a href={href} className="hover:text-fg">
                      {text}
                    </a>
                  ) : (
                    text
                  )}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section className="mt-8 print:mt-4">
          <Heading>{t.cv.summary}</Heading>
          <p className="text-sm leading-relaxed text-pretty text-muted">{profile.summary[locale]}</p>
        </section>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_220px] print:mt-4 print:block">
          <div className="space-y-8 print:space-y-4">
            <section>
              <Heading>{t.cv.experience}</Heading>
              <ul className="space-y-5 print:space-y-3">
                {experience.map((item) => (
                  <Entry key={item.org} item={item} locale={locale} />
                ))}
              </ul>
            </section>

            <section>
              <Heading>{t.cv.projects}</Heading>
              <ul className="space-y-4 print:space-y-2.5">
                {projects.slice(0, 4).map((p) => {
                  const link = p.links.live ?? p.links.repo;
                  return (
                    <li key={p.slug} className="break-inside-avoid">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="font-semibold">{p.title}</h3>
                        {link && (
                          <a href={link} className="font-mono text-xs text-subtle hover:text-fg">
                            {link.replace("https://", "")}
                          </a>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-pretty text-muted">
                        {p.tagline[locale]} {p.impact[locale]}.
                      </p>
                      <p className="mt-1 font-mono text-xs text-subtle print:hidden">{p.stack.join(" · ")}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>

          <div className="space-y-8 print:mt-4 print:grid print:grid-cols-2 print:gap-6 print:space-y-0">
            <section className="break-inside-avoid">
              <Heading>{t.cv.skills}</Heading>
              <dl className="space-y-3 text-sm print:grid print:grid-cols-[90px_1fr] print:gap-x-2 print:gap-y-1 print:space-y-0">
                {skills.map((s) => (
                  <div key={s.group.en} className="print:contents">
                    <dt className="font-medium">{s.group[locale]}</dt>
                    <dd className="text-muted">{s.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="break-inside-avoid">
              <Heading>{t.cv.education}</Heading>
              <ul className="space-y-4">
                {education.map((item) => (
                  <Entry key={item.org} item={item} locale={locale} />
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
