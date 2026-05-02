import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zan | Portfolio",
  description: "Zan's professional portfolio showcasing selected projects.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        
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
