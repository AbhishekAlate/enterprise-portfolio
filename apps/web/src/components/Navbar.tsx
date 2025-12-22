"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/60 bg-zinc-950/85 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          : "border-b border-zinc-900 bg-zinc-950"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200 transition group-hover:border-zinc-600"
            >
              AA
            </motion.span>
            <div className="flex flex-col leading-none">
              <span className="text-sm uppercase font-semibold tracking-[0.2em] text-zinc-200 transition group-hover:text-zinc-50 sm:text-base">
                Abhi
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Alate
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="flex items-center gap-3 rounded-2xl border border-zinc-800/70 bg-zinc-950/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-zinc-600 sm:hidden"
          >
            Menu
            <span className="flex flex-col gap-1">
              <span className={`h-0.5 w-5 bg-zinc-200 transition ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-zinc-200 transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-zinc-200 transition ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>

          <nav className="hidden sm:block">
            <div className="flex items-center gap-2 rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              {navLinks.map((link, index) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative isolate flex items-center justify-center rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition sm:text-sm ${
                        isActive
                          ? "text-zinc-950"
                          : "text-zinc-300 hover:text-zinc-50"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 -z-10 rounded-xl bg-zinc-50 shadow-[0_8px_20px_rgba(255,255,255,0.08)]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="sm:hidden"
          >
            <div className="px-4 pb-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/70 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                {navLinks.map((link) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                        isActive
                          ? "bg-zinc-50 text-zinc-950"
                          : "text-zinc-300 hover:bg-zinc-900/60 hover:text-zinc-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
