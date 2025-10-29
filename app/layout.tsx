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

export const metadata: Metadata = {
  title: "Alida UI",
  description: "Minimal UI for fast-moving teams",
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
  </body>
    </html>
  );
}
