import HomePage from "@/components/HomePage";
import { ui } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/", ui.en.hero.headline);

export default function Page() {
  return <HomePage locale="en" />;
}
