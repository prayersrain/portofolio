import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "M Fauzan Haikal M. | Full-Stack Developer",
  description: "Versatile Full-Stack Developer specialized in building high-performance web applications with Next.js, Laravel, and Modern Web Technologies.",
  manifest: "/manifest.json",
  openGraph: {
    title: "M Fauzan Haikal M. | Full-Stack Developer",
    description: "Versatile Full-Stack Developer specialized in building high-performance web applications.",
    url: "https://portofolio-prayersrain.vercel.app/",
    siteName: "ZAN Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZAN Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <ScrollProgress />
        <div className="print:hidden">
          <Navbar />
        </div>
        
        <main className="flex-1 pt-24 print:pt-0"> 
          {children}
        </main>
        
        <div className="print:hidden">
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
