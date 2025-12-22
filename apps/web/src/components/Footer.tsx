"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

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
            © {new Date().getFullYear()} enterprise-portfolio
          </motion.p>
        </div>
      </footer>
    </FadeIn>
  );
}

