import CvPage from "@/components/CvPage";
import { profile } from "@/data/profile";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/cv", profile.summary.en, "CV");

export default function Page() {
  return <CvPage locale="en" />;
}
