import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: { default: "Enterprise Portfolio", template: "%s — Enterprise Portfolio" },
  description: "Next.js + Expo Router monorepo foundation (enterprise-portfolio).",
};

function Navbar() {
  return (
    <header className="border-b border-zinc-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-medium tracking-tight">enterprise-portfolio</Link>
        <nav className="flex gap-4 text-sm">
          <Link className="text-zinc-300 hover:text-zinc-50" href="/projects">Projects</Link>
          <Link className="text-zinc-300 hover:text-zinc-50" href="/blog">Blog</Link>
          <Link className="text-zinc-300 hover:text-zinc-50" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
        © {new Date().getFullYear()} enterprise-portfolio
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-zinc-950 text-zinc-50 antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
