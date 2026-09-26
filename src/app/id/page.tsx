import HomePage from "@/components/HomePage";
import { ui } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("id", "/", ui.id.hero.headline);

export default function Page() {
  return <HomePage locale="id" />;
}
