"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Link from "next/link";

export default function Footer() {
  return (
    <FadeIn delay={0.2}>
      <footer className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Enterprise-ready portfolio
          </motion.p>
          <Link href="/openclaw" className="mt-3 inline-block underline underline-offset-4 hover:text-zinc-200">
            OpenClaw app information
          </Link>
        </div>
      </footer>
    </FadeIn>
  );
}

