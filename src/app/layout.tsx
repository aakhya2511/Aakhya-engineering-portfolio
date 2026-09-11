import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Aakhya Chaudhary — Software Engineer", template: "%s — Aakhya Chaudhary" },
  description: "Software engineer focused on backend systems, distributed systems, data engineering, and applied AI.",
  applicationName: "Aakhya Chaudhary Portfolio",
  authors: [{ name: "Aakhya Chaudhary" }],
  keywords: ["Software Engineer", "Backend Engineer", "Data Engineer", "Distributed Systems", "Applied AI"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Aakhya Chaudhary — Software Engineer",
    description: "Software engineer focused on backend systems, distributed systems, data engineering, and applied AI.",
    type: "website",
    siteName: "Aakhya Chaudhary",
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
