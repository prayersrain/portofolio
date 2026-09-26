import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectBadge } from "@/data/projects";
import { localePath, ui, type Locale } from "@/lib/i18n";

const badgeStyle: Record<ProjectBadge, string> = {
  live: "border-emerald-400/25 text-emerald-300",
  private: "border-line text-muted",
  "open-source": "border-accent/35 text-accent-soft",
  concept: "border-amber-400/25 text-amber-300",
  "in-house": "border-violet-400/25 text-violet-300",
};

export function ProjectBadges({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {project.badges.map((b) => (
        <li key={b} className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs ${badgeStyle[b]}`}>
          {b === "live" && <span className="size-1.5 rounded-full bg-emerald-400" />}
          {ui[locale].badge[b]}
        </li>
      ))}
    </ul>
  );
}

/** The support bot has no website, so it gets a drawn Discord ticket panel instead of a screenshot. */
export function HalBotVisual() {
  return (
    <div aria-hidden className="flex h-full items-center justify-center bg-[#1e1f22] p-6">
      <div className="w-full max-w-sm rounded-lg bg-[#2b2d31] p-4 font-sans text-[13px] text-[#dbdee1] shadow-xl">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-[#5865f2] text-xs font-bold text-white">H</span>
          <span className="font-semibold text-white">Hal Support</span>
          <span className="rounded bg-[#5865f2] px-1 text-[10px] font-semibold text-white">APP</span>
        </div>
        <div className="mt-3 rounded border-l-4 border-[#5865f2] bg-[#232428] p-3">
          <p className="font-semibold text-white">Karya Mandiri Dental · Support</p>
          <p className="mt-1 text-[#b5bac1]">Found a bug or need help? Open a ticket and it goes straight to the team.</p>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded bg-[#5865f2] px-3 py-1.5 text-xs font-medium text-white">Report a bug</span>
          <span className="rounded bg-[#4e5058] px-3 py-1.5 text-xs font-medium text-white">Request access</span>
        </div>
      </div>
    </div>
  );
}

type Layout = "featured" | "wide" | "default";

export default function ProjectCard({ project, locale, layout = "default" }: { project: Project; locale: Locale; layout?: Layout }) {
  const featured = layout === "featured";
  const wide = layout === "wide";
  return (
    <Link
      href={localePath(locale, `/projects/${project.slug}`)}
      className={`group reveal flex flex-col rounded-2xl border border-line bg-surface p-2 transition-colors hover:border-white/20 ${featured || wide ? "md:col-span-2" : ""} ${wide ? "md:flex-row" : ""}`}
    >
      <div className={`relative shrink-0 overflow-hidden rounded-xl border border-line bg-raised ${featured ? "aspect-[16/10] md:aspect-[2/1]" : "aspect-[16/10]"} ${wide ? "md:w-1/2" : ""}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={featured ? "(min-width: 1024px) 1000px, 100vw" : "(min-width: 768px) 500px, 100vw"}
            preload={featured}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <HalBotVisual />
        )}
        {featured && project.imageMobile && (
          <div className="absolute right-6 bottom-0 hidden w-[22%] translate-y-6 overflow-hidden rounded-t-2xl border-4 border-b-0 border-neutral-800 shadow-2xl transition-transform duration-500 group-hover:translate-y-3 md:block">
            <Image src={project.imageMobile} alt="" width={390} height={844} className="w-full" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 pt-5">
        <ProjectBadges project={project} locale={locale} />
        <h3 className="mt-3 flex items-center gap-1 text-xl font-semibold tracking-tight">
          {project.title}
          <ArrowUpRight className="size-5 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
        </h3>
        <p className="mt-2 text-pretty text-muted">{project.tagline[locale]}</p>
        <p className="mt-3 text-sm font-medium text-accent-soft">{project.impact[locale]}</p>
        <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-5 font-mono text-xs text-subtle">
          {project.stack.slice(0, 5).map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
