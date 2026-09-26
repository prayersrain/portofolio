import Link from "next/link";
import { ui } from "@/lib/i18n";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-sm text-accent-soft">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{ui.en.notFound.title}</h1>
        <p lang="id" className="mt-1 text-muted">{ui.id.notFound.title}</p>
        <div className="mt-8 flex justify-center gap-3 text-sm">
          <Link href="/" className="rounded-full bg-fg px-4 py-2 font-medium text-bg">
            {ui.en.notFound.back}
          </Link>
          <Link href="/id" lang="id" className="rounded-full border border-line px-4 py-2 font-medium">
            {ui.id.notFound.back}
          </Link>
        </div>
      </div>
    </main>
  );
}
