import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aakhya-engineering-portfolio.vercel.app"),
  title: { default: "Aakhya Chaudhary — Software, Data & AI Engineer", template: "%s — Aakhya Chaudhary" },
  description: "Engineering portfolio of Aakhya Chaudhary, focused on software systems, data engineering, distributed systems, and applied AI/ML.",
  applicationName: "Aakhya Chaudhary Portfolio",
  authors: [{ name: "Aakhya Chaudhary" }],
  keywords: ["Software Engineer", "Backend Engineer", "Data Engineer", "Distributed Systems", "Applied AI"],
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aakhya Chaudhary — Software, Data & AI Engineer",
    description: "Engineering portfolio of Aakhya Chaudhary, focused on software systems, data engineering, distributed systems, and applied AI/ML.",
    type: "website",
    siteName: "Aakhya Chaudhary",
    url: "/",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Aakhya Chaudhary — Software, Data & AI Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakhya Chaudhary — Software, Data & AI Engineer",
    description: "Engineering portfolio of Aakhya Chaudhary, focused on software systems, data engineering, distributed systems, and applied AI/ML.",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#080b0d", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main">{children}</main><Footer /></body>
    </html>
  );
}
