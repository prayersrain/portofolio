import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download, Lock } from "lucide-react";
import DevicePreview from "@/components/DevicePreview";
import GithubIcon from "@/components/GithubIcon";
import { HalBotVisual, ProjectBadges } from "@/components/ProjectCard";
import { projects, type Project } from "@/data/projects";
import { localePath, ui, type Locale } from "@/lib/i18n";

function Preview({ project }: { project: Project }) {
  if (project.preview) return <DevicePreview url={project.preview} title={project.title} />;

  if (project.demo)
    return (
      // Animated WebP demo, served as is.
      <img src={project.demo} alt={`${project.title} demo`} width={960} height={600} className="w-full rounded-xl border border-line" />
    );

  if (project.image)
    return (
      <div className="flex items-end justify-center gap-6">
        <div className="hidden flex-1 overflow-hidden rounded-xl border border-line shadow-2xl md:block">
          <Image src={project.image} alt={`${project.title} desktop`} width={1440} height={900} className="w-full" />
        </div>
        {project.imageMobile && (
          <div className="w-64 shrink-0 overflow-hidden rounded-[2rem] border-[6px] border-neutral-800 shadow-2xl md:w-52">
            <Image src={project.imageMobile} alt={`${project.title} mobile`} width={390} height={844} className="w-full" />
          </div>
        )}
      </div>
    );

  return (
    <div className="aspect-[16/9] overflow-hidden rounded-xl border border-line">
      <HalBotVisual />
    </div>
  );
}

export default function ProjectPage({ project, locale }: { project: Project; locale: Locale }) {
  const t = ui[locale].project;
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const button = "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors";

  return (
    <article className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <Link href={`${localePath(locale)}#work`} className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft className="size-4" />
        {t.back}
      </Link>

      <header className="mt-10 animate-fade-up">
        <ProjectBadges project={project} locale={locale} />
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-pretty text-muted md:text-xl">{project.tagline[locale]}</p>

        <dl className="mt-8 grid gap-6 border-y border-line py-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-subtle">{t.role}</dt>
            <dd className="mt-1">{project.role[locale]}</dd>
          </div>
          <div>
            <dt className="text-subtle">{t.year}</dt>
            <dd className="mt-1">{project.year}</dd>
          </div>
          {project.client && (
            <div>
              <dt className="text-subtle">{t.client}</dt>
              <dd className="mt-1">{project.client[locale]}</dd>
            </div>
          )}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={`${button} bg-fg text-bg hover:opacity-85`}>
              {t.live}
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className={`${button} border border-line hover:border-white/25`}>
              <GithubIcon className="size-4" />
              {t.source}
            </a>
          )}
          {project.links.release && (
            <a href={project.links.release} target="_blank" rel="noopener noreferrer" className={`${button} border border-line hover:border-white/25`}>
              <Download className="size-4" />
              {t.release}
            </a>
          )}
          {project.badges.includes("private") && (
            <span className={`${button} text-subtle`}>
              <Lock className="size-4" />
              {t.privateRepo}
            </span>
          )}
        </div>
      </header>

      <div className="mt-12 animate-fade-up [animation-delay:120ms]">
        <Preview project={project} />
        {project.preview && <p className="mt-3 text-center text-xs text-subtle">{t.livePreview}</p>}
        {project.note && <p className="mt-4 rounded-lg border border-amber-400/20 bg-amber-400/5 px-4 py-3 text-sm text-amber-200">{project.note[locale]}</p>}
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_260px]">
        <div className="space-y-12">
          <section className="reveal">
            <h2 className="text-xl font-semibold">{t.problem}</h2>
            <p className="mt-3 text-pretty text-muted">{project.problem[locale]}</p>
          </section>
          <section className="reveal">
            <h2 className="text-xl font-semibold">{t.solution}</h2>
            <p className="mt-3 text-pretty text-muted">{project.solution[locale]}</p>
          </section>
          <section className="reveal">
            <h2 className="text-xl font-semibold">{t.built}</h2>
            <ul className="mt-4 space-y-3">
              {project.built[locale].map((item) => (
                <li key={item} className="flex gap-3 text-pretty text-muted">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside>
          <h2 className="text-sm font-medium text-subtle">{t.stack}</h2>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <li key={s} className="rounded-md border border-line bg-surface px-2 py-0.5 text-xs">
                {s}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <Link
        href={localePath(locale, `/projects/${next.slug}`)}
        className="group mt-20 flex items-center justify-between rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-white/20"
      >
        <div>
          <p className="text-sm text-subtle">{t.next}</p>
          <p className="mt-1 text-xl font-semibold">{next.title}</p>
        </div>
        <ArrowRight className="size-5 text-subtle transition-transform group-hover:translate-x-1 group-hover:text-fg" />
      </Link>
    </article>
  );
}
