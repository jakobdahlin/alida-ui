"use client";

import { Github, Heart, Mail, Code2, Coffee } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    
    <footer className="w-full border-t border-white/10 bg-black text-white/70">

      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-10 mt-4">
        {/* Left — Branding */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg tracking-wide">Alida</h2>
          <p className="text-sm text-white/50 max-w-sm">
            Minimal, open-source design system for building modern interfaces
            with clarity and speed.
          </p>

        </div>

        {/* Middle — Developer Links */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold mb-1">Resources</p>
            <Link href="/components" className="text-white/50 hover:text-white transition">Components</Link>
            <Link href="/docs" className="text-white/50 hover:text-white transition">Docs (coming soon)</Link>
            <Link href="/about" className="text-white/50 hover:text-white transition">About</Link>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition"
            >
              Hosted on Vercel
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold mb-1">For Developers</p>
            <a
              href="https://github.com/jakobdahlin/alida-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition flex items-center gap-2"
            >
              <Github size={14} /> GitHub Repo
            </a>
            <a
              href="https://www.npmjs.com/package/alida-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition flex items-center gap-2"
            >
              <Code2 size={14} /> NPM Package
            </a>
            <a
              href="mailto:contact@alida.dev"
              className="text-white/50 hover:text-white transition flex items-center gap-2"
            >
              <Mail size={14} /> Contact
            </a>
          </div>
        </div>

        {/* Right — Social & CTA */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="flex gap-4">
            <a
              href="https://github.com/jakobdahlin/alida-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:contact@alida.dev"
              className="hover:text-white transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-white/10 mt-4 py-4">
  <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-white/30 text-center px-4">
    <p className="flex items-center gap-1">
      Built with <Heart size={14} /> and <Coffee size={14} /> by developers, for developers.
    </p>
    <p>© {new Date().getFullYear()} Alida Design System. All rights reserved.</p>
  </div>
</div>
    </footer>
  );
};