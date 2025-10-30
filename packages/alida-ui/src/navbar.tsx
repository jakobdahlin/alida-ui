"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { DollarSign, Dock, Mail, Box, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Components", icon: <Box size={18} />, href: "/" },
  { label: "Pricing", icon: <DollarSign size={18} />, href: "/" },
  { label: "Contact", icon: <Mail size={18} />, href: "/" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full flex justify-center z-50">
      <div className="flex w-full max-w-[1100px] flex-col items-center px-4 relative">
        {/* Top Row */}
        <div className="relative flex w-full items-center justify-between p-2 rounded-full overflow-hidden">
          <Link href="/" className="block">
            <p className="text-lg px-2 py-1 text-white hover:scale-95 transition duration-200 tracking-wide">
              Logo
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 pr-4">
            {navItems.map(({ label, icon, href }) => {
              const isActive = pathname === href;
              const isExternal = href.startsWith("http");

              const commonClasses =
                "relative z-10 flex items-center gap-2 text-sm transition duration-300 px-4 py-2";

              const content = (
                <>
                  {icon}
                  <span>{label}</span>
                </>
              );

              return isExternal ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${commonClasses} ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className={`${commonClasses} ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {content}
                </Link>
              );
            })}
          </nav>

          {/* 📱 Mobile Toggle */}
          <button
            className="md:hidden text-white/50 hover:text-white px-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* 📱 Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full mt-3 rounded-2xl bg-black/50 backdrop-blur-lg py-10 flex flex-col items-center overflow-hidden"
            >
              {navItems.map(({ label, href }) => {
                const isExternal = href.startsWith("http");
                const linkProps = isExternal
                  ? { href, target: "_blank", rel: "noopener noreferrer" }
                  : { href };
                const isActive = pathname === href;

                return (
                  <Link
                    key={label}
                    {...linkProps}
                    onClick={() => setMenuOpen(false)}
                    className={`relative w-full text-center py-4 flex items-center justify-center gap-2 text-base transition duration-200 cursor-pointer ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};