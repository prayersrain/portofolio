import type { Metadata } from "next";

// A layout title without a template would drop the root "| Fauzan" suffix from project pages
export const metadata: Metadata = { title: { default: "Projects", template: "%s | Fauzan" } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
