import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import ScrollProgress from "@/components/ScrollProgress";
import Providers from "@/components/Providers";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Zan | Full-Stack Developer",
  description: "Creative Developer & UI Designer crafting high-performance digital experiences.",
  openGraph: {
    title: "Zan | Full-Stack Developer",
    description: "Creative Developer & UI Designer crafting high-performance digital experiences.",
    url: "https://fauzan.site",
    siteName: "Zan Portfolio",
    images: [{ url: "/og-image.png" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className={`${inter.variable} ${outfit.variable} ${jetbrains.variable} ${syne.variable} min-h-full flex flex-col font-sans bg-background text-foreground`}>
        <Providers>
          <CustomCursor />
          {/* GRAINY OVERLAY */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[50] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

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
        </Providers>
      </body>
    </html>
  );
}
