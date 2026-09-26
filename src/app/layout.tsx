import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { ogBase } from "@/lib/meta";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: "Fauzan | Full-Stack Developer", template: "%s | Fauzan" },
  description: "Full-stack developer building WhatsApp bots, SaaS and web systems that real businesses run on.",
  manifest: "/manifest.json",
  openGraph: ogBase,
};

export const viewport: Viewport = { themeColor: "#09090b" };

// Pages set their own lang on the wrapper (English at /, Indonesian under /id).
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
