import SiteChrome from "@/components/SiteChrome";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteChrome locale="en">{children}</SiteChrome>;
}
