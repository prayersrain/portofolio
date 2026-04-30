import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} M Fauzan Haikal Mugni. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="https://github.com/prayersrain" target="_blank" className="hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href="https://instagram.com/prayersrain_" target="_blank" className="hover:text-foreground transition-colors">
            Instagram
          </Link>
          <Link href="https://wa.me/6285283142289" target="_blank" className="hover:text-foreground transition-colors">
            WhatsApp
          </Link>
          <Link href="mailto:cornwerso5118@gmail.com" target="_blank" className="hover:text-foreground transition-colors">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
