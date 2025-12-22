import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Enterprise Portfolio", template: "%s — Enterprise Portfolio" },
  description: "Next.js + Expo Router monorepo foundation (enterprise-portfolio).",
  metadataBase: new URL("https://www.abhialate.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-zinc-950 text-zinc-50 antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
