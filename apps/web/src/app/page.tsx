"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FadeIn from "@/components/FadeIn";
import StaggerChildren from "@/components/StaggerChildren";
import StaggerItem from "@/components/StaggerItem";
import { MotionCard } from "@/components/ui/Card";

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
        <MotionCard
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="group p-6 sm:p-8 md:p-10"
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
        </MotionCard>
      </ScrollReveal>

      <ScrollReveal delay={0.55} direction="up">
        <MotionCard className="p-6 sm:p-8 md:p-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">About Portfolio Website</h2>
            <p className="text-base text-zinc-300 sm:text-lg">
              This website is intentionally designed as more than a static portfolio - it is a
              production-grade foundation that mirrors how modern, scalable products are built in
              real-world engineering organizations. It is implemented as a monorepo with a clear
              separation of concerns, enabling multiple applications (web and mobile) to evolve from
              a single, cohesive codebase. The web experience is built using Next.js with the App
              Router, leveraging server components by default for performance, SEO, and security,
              while selectively opting into client components only where interactivity is required.
              This ensures minimal client-side JavaScript, faster load times, and a clean mental model
              of what runs on the server versus the browser.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-100">Key architectural considerations include:</h3>
              <ul className="space-y-3 text-sm text-zinc-300 sm:text-base">
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">Shared contracts and validation:</span>{" "}
                  Business logic, input validation, and API contracts are centralized using shared
                  schemas, ensuring consistency across web and mobile clients and preventing
                  frontend/backend drift.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">Scalable deployment model:</span>{" "}
                  The web application is deployed on a global edge platform with automatic HTTPS,
                  CDN caching, and serverless APIs, reflecting how modern teams ship reliable
                  software at scale.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">Mobile-first extensibility:</span>{" "}
                  A parallel mobile application is built using a file-based router that mirrors the
                  web routing model, enabling feature parity and long-term reuse without
                  architectural rewrites.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">Enterprise-friendly structure:</span>{" "}
                  The repository is structured to naturally support future additions such as
                  authentication, dashboards, role-based access control, databases, and shared UI
                  libraries - without refactoring core foundations.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">Maintainability and collaboration:</span>{" "}
                  Clear boundaries between apps, shared packages, and infrastructure make the
                  codebase easy to reason about, review, and extend - optimizing for team velocity,
                  not just individual productivity.
                </li>
              </ul>
            </div>
            <p className="text-base text-zinc-300 sm:text-lg">
              In short, this website demonstrates deliberate engineering choices focused on
              scalability, correctness, performance, and long-term evolution. It reflects how I think
              about building software: starting with a strong architectural backbone, minimizing
              technical debt early, and designing systems that can grow from a personal project into
              an enterprise-ready product with confidence.
            </p>
          </div>
        </MotionCard>
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
              <MotionCard variant="soft" whileHover={{ y: -5 }} className="p-6">
                <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
              </MotionCard>
            </ScrollReveal>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
