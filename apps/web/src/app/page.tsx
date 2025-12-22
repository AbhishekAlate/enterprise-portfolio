"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FadeIn from "@/components/FadeIn";
import StaggerChildren from "@/components/StaggerChildren";
import StaggerItem from "@/components/StaggerItem";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* Hero Section */}
      <section className="space-y-6 sm:space-y-8">
        <ScrollReveal delay={0.1}>
          <p className="text-sm text-zinc-400 sm:text-base">
            Mobile-ready foundation (Next.js + Expo Router)
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              enterprise-portfolio
            </span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="max-w-2xl text-lg text-zinc-300 sm:text-xl leading-relaxed text-balance">
            A forkable baseline you can evolve into an enterprise B2B dashboard (auth, tables,
            charts, admin) while keeping a polished marketing site.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <StaggerChildren className="flex flex-wrap gap-3 pt-4">
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-block rounded-lg bg-zinc-50 px-6 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-100 hover:shadow-lg hover:shadow-zinc-500/20 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Projects
                </Link>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/blog"
                  className="inline-block rounded-lg border border-zinc-800 px-6 py-3 text-sm font-medium transition-all hover:border-zinc-700 hover:bg-zinc-900/50 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Blog
                </Link>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg border border-zinc-800 px-6 py-3 text-sm font-medium transition-all hover:border-zinc-700 hover:bg-zinc-900/50 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Contact
                </Link>
              </motion.div>
            </StaggerItem>
          </StaggerChildren>
        </ScrollReveal>
      </section>

      {/* Feature Section */}
      <ScrollReveal delay={0.5} direction="up">
        <motion.section
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950/40 to-zinc-900/20 p-6 backdrop-blur-sm transition-all hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/50 sm:p-8 md:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/0 via-zinc-700/0 to-zinc-800/0 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative">
            <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
              Placeholders included
            </h2>
            <p className="mt-3 text-zinc-300 sm:mt-4 sm:text-lg">
              Each nav link has a placeholder page so you can start filling content immediately.
            </p>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* Additional visual elements */}
      <FadeIn delay={0.6}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Responsive Design", desc: "Optimized for all devices" },
            { title: "Modern Stack", desc: "Built with Next.js & React" },
            { title: "Smooth Animations", desc: "Scroll-driven interactions" },
          ].map((item, index) => (
            <ScrollReveal key={item.title} delay={0.7 + index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
              >
                <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
