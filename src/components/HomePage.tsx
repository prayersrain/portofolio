import Image from "next/image";
import Link from "next/link";
import { ArrowDown, FileText, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import GithubIcon from "@/components/GithubIcon";
import ProjectCard from "@/components/ProjectCard";
import { experience } from "@/data/experience";
import { profile, skills, testimonial } from "@/data/profile";
import { projects } from "@/data/projects";
import { localePath, ui, type Locale } from "@/lib/i18n";

function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-20 md:py-24">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default function HomePage({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const [featured, ...rest] = projects;

  return (
    <>
      <section className="relative isolate mx-auto max-w-5xl px-5 pt-16 pb-12 md:pt-28 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-40 -z-10 h-[520px] w-[820px] bg-[radial-gradient(closest-side,rgb(59_130_246/0.16),transparent)]"
        />
        <div className="flex animate-fade-up items-center gap-4">
          <Image src="/avatar.webp" alt={profile.name} width={56} height={56} preload className="rounded-full border border-line" />
          <div>
            <p className="font-medium">{profile.name}</p>
            <p className="text-sm text-muted">
              {t.hero.role} · {profile.location[locale]}
            </p>
          </div>
        </div>

        <h1 className="mt-10 max-w-3xl animate-fade-up text-4xl font-semibold tracking-tight text-balance [animation-delay:80ms] md:text-6xl md:leading-[1.05]">
          {t.hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl animate-fade-up text-lg text-pretty text-muted [animation-delay:160ms]">{t.hero.intro}</p>

        <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms]">
          <a href="#work" className="flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85">
            {t.hero.viewWork}
            <ArrowDown className="size-4" />
          </a>
          <Link
            href={localePath(locale, "/cv")}
            className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-white/25"
          >
            <FileText className="size-4" />
            {t.hero.cv}
          </Link>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-line p-2.5 text-muted transition-colors hover:text-fg">
            <GithubIcon className="size-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full border border-line p-2.5 text-muted transition-colors hover:text-fg">
            <Mail className="size-4" />
          </a>
          <span className="ml-1 flex items-center gap-2 text-sm text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.available}
          </span>
        </div>
      </section>

      <Section id="work" title={t.work.title} subtitle={t.work.subtitle}>
        <div className="grid gap-5 md:grid-cols-2">
          <ProjectCard project={featured} locale={locale} layout="featured" />
          {rest.map((p, i) => (
            // An odd card out at the end spans the full row instead of leaving a gap.
            <ProjectCard key={p.slug} project={p} locale={locale} layout={rest.length % 2 === 1 && i === rest.length - 1 ? "wide" : "default"} />
          ))}
        </div>
      </Section>

      <Section id="experience" title={t.experience.title}>
        <ol className="divide-y divide-line border-y border-line">
          {experience.map((item) => (
            <li key={item.org} className="reveal grid gap-2 py-7 md:grid-cols-[180px_1fr] md:gap-8">
              <p className="font-mono text-sm text-subtle">{item.period[locale]}</p>
              <div>
                <h3 className="font-semibold">
                  {item.title[locale]} <span className="text-muted">· {item.org}</span>
                </h3>
                <p className="mt-2 text-pretty text-muted">{item.description[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="about" title={t.about.title}>
        <div className="grid gap-12 md:grid-cols-[1fr_320px]">
          <div className="space-y-5 text-lg text-pretty text-muted">
            {profile.about[locale].map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-medium text-subtle">{t.about.stack}</h3>
            <dl className="mt-4 space-y-4">
              {skills.map((s) => (
                <div key={s.group.en}>
                  <dt className="text-sm text-muted">{s.group[locale]}</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {s.items.map((i) => (
                      <span key={i} className="rounded-md border border-line bg-surface px-2 py-0.5 text-xs">
                        {i}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section id="testimonial" title={t.testimonial.title}>
        <figure className="reveal rounded-2xl border border-line bg-surface p-8 md:p-12">
          <blockquote className="text-xl leading-relaxed text-pretty md:text-2xl">&ldquo;{testimonial.quote[locale]}&rdquo;</blockquote>
          <figcaption className="mt-6 text-sm text-muted">
            <span className="font-medium text-fg">{testimonial.author}</span> · {testimonial.role[locale]}
          </figcaption>
        </figure>
      </Section>

      <Section id="contact" title={t.contact.title}>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5 text-muted">
            <p className="text-pretty">{t.contact.body}</p>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-fg hover:text-accent-soft">
              <Mail className="size-4" />
              {profile.email}
            </a>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <ContactForm locale={locale} />
          </div>
        </div>
      </Section>
    </>
  );
}
