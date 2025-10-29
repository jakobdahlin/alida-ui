import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/ui/navbar";
import { Footer } from "@/app/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Alida UI — Minimal UI for fast-moving teams",
    template: "%s | Alida UI",
  },
  description:
    "Alida UI is a minimalist, open-source design system built with React, Next.js, and Tailwind CSS — designed for speed, clarity, and flexibility.",
  keywords: [
    "React UI components",
    "Tailwind design system",
    "open source UI library",
    "Next.js components",
    "minimal design system",
    "Shadcn alternative",
    "React component library",
    "UI kit for developers",
  ],
  authors: [{ name: "Jakob Dahlin" }],
  creator: "Jakob Dahlin",
  metadataBase: new URL("https://alidaui.vercel.app"),
  openGraph: {
    title: "Alida UI — Minimal UI for fast-moving teams",
    description:
      "A minimalist, open-source design system for developers building modern web interfaces with clarity and speed.",
    url: "https://alidaui.vercel.app",
    siteName: "Alida UI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alida UI preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alida UI — Minimal UI for fast-moving teams",
    description:
      "A minimalist, open-source design system for developers building modern web interfaces with clarity and speed.",
    creator: "@jakobdahlin",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
  <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
  >
    {/* Navbar */}
    <div className="fixed left-0 w-full flex justify-center z-60" style={{ top: "env(safe-area-inset-top, 0px)" }}>
      <Navbar />
    </div>

    {/* Gradient fade under navbar */}
    <div className="fixed left-0 w-full h-50 bg-linear-to-b from-black via-black/95 to-transparent pointer-events-none z-40" />

    {/* ✅ Page content grows to fill space */}
    <main className="pt-24 grow relative z-10">{children}</main>

    {/* ✅ Footer stays at the bottom */}
    <Footer />
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Alida UI",
      applicationCategory: "DeveloperTool",
      operatingSystem: "Any",
      description:
        "An open-source React and Tailwind CSS design system for building beautiful, fast interfaces.",
      url: "https://alidaui.vercel.app",
      author: {
        "@type": "Person",
        name: "Jakob Dahlin",
      },
    }),
  }}
/>
  </body>
    </html>
  );
}
