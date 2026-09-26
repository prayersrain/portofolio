import CvPage from "@/components/CvPage";
import { profile } from "@/data/profile";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("id", "/cv", profile.summary.id, "CV");

export default function Page() {
  return <CvPage locale="id" />;
}
