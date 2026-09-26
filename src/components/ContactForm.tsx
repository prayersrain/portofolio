"use client";

import { profile } from "@/data/profile";
import { ui, type Locale } from "@/lib/i18n";

const field =
  "w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-fg placeholder:text-subtle focus:border-accent focus:outline-none";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = ui[locale].contact;
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const text = `${t.greeting}\n\n${t.name}: ${data.get("name")}\n${t.email}: ${data.get("email")}\n\n${data.get("message")}`;
        window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 text-sm text-muted">
          <span>{t.name}</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block space-y-1.5 text-sm text-muted">
          <span>{t.email}</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block space-y-1.5 text-sm text-muted">
        <span>{t.message}</span>
        <textarea name="message" rows={5} required className={`${field} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-soft">
          {t.send}
        </button>
        <p className="text-xs text-subtle">{t.note}</p>
      </div>
    </form>
  );
}
