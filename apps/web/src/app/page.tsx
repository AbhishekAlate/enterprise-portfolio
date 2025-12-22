"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import FadeIn from "@/components/FadeIn";
import StaggerChildren from "@/components/StaggerChildren";
import StaggerItem from "@/components/StaggerItem";
import { MotionCard } from "@/components/ui/Card";

export default function HomePage() {
  const playbookTabs = [
    {
      id: "architecture",
      label: "Architecture",
      title: "Monorepo + shared contracts",
      description:
        "A single source of truth for product foundations without coupling teams.",
      bullets: [
        "Apps and packages separated by domain boundaries for clean ownership.",
        "Shared schemas keep API contracts consistent across web and mobile.",
        "Centralized UI primitives enforce design and interaction consistency.",
      ],
    },
    {
      id: "quality",
      label: "Quality",
      title: "Release-ready quality gates",
      description:
        "Automation-first reliability that scales with product complexity.",
      bullets: [
        "Schema validation on inputs reduces production regressions.",
        "Type-safe contracts keep compile-time checks on critical paths.",
        "A testable module layout enables fast, targeted coverage growth.",
      ],
    },
    {
      id: "delivery",
      label: "Delivery",
      title: "Modern deployment model",
      description:
        "Built for fast, safe delivery with edge-friendly infrastructure.",
      bullets: [
        "Server-rendered defaults for speed, SEO, and minimal client JS.",
        "Serverless APIs designed for global scale and reliability.",
        "Observability-friendly boundaries for monitoring and rollback.",
      ],
    },
    {
      id: "collaboration",
      label: "Collaboration",
      title: "Team-scale maintainability",
      description:
        "A structure that keeps teams moving without losing quality.",
      bullets: [
        "Clear boundaries between apps, packages, and infrastructure.",
        "Shared linting, type checks, and conventions keep reviews tight.",
        "Documentation-ready organization for onboarding and handoff.",
      ],
    },
  ];

  const [activeTabId, setActiveTabId] = useState(playbookTabs[0].id);
  const activeTab =
    playbookTabs.find((tab) => tab.id === activeTabId) ?? playbookTabs[0];
  const githubReadme = [
    "# Enterprise-Ready Portfolio",
    "### Production-grade web & mobile architecture -> designed to be forked, extended, and shipped",
    "",
    "> **Designing and shipping production-grade web and mobile systems.**",
    "",
    "This repository is intentionally **not a static portfolio** or a visual demo.",
    "It is a **real, production-ready foundation** that demonstrates how modern engineering teams design, validate, deploy, and evolve software systems over time.",
    "",
    "If you are a developer forking this repository, you are starting from a **clean, scalable baseline** - not just a demo.",
    "",
    "If you are a hiring manager, engineering manager, or senior engineer reviewing this repository, you are looking at the **same architectural patterns** I use when building real products.",
    "",
    "---",
    "",
    "## About this website",
    "",
    "This website was built with a single guiding principle:",
    "",
    "> **Treat even small projects like production systems.**",
    "",
    "Rather than optimizing for speed of setup or visual flash, this portfolio prioritizes:",
    "- clear architectural boundaries",
    "- shared contracts instead of duplicated logic",
    "- server-first rendering and correctness",
    "- realistic deployment workflows",
    "- long-term extensibility",
    "",
    "The result is a portfolio that can naturally evolve into:",
    "- a SaaS product",
    "- a B2B dashboard",
    "- a mobile-first application",
    "- or a multi-client production platform",
    "",
    "...without rewriting the foundations.",
    "",
    "---",
    "",
    "## Why this portfolio is different",
    "",
    "Most portfolios optimize for **appearance**.",
    "This one optimizes for **engineering judgment**.",
    "",
    "What you'll notice here:",
    "- Architecture before UI (I still made it pretty though ;))",
    "- Shared contracts across clients",
    "- Web and mobile parity",
    "- Real deployment pipeline",
    "- Forkable by design",
    "",
    "---",
    "",
    "## Repository structure (Monorepo)",
    "",
    "```txt",
    "enterprise-portfolio/",
    "- apps/",
    "  - web/",
    "  - mobile/",
    "- packages/",
    "  - shared/",
    "- README.md",
    "```",
    "",
    "---",
    "",
    "## Component-level architecture",
    "",
    "```txt",
    "Web Client -->",
    "            Shared Domain (@repo/shared)",
    "Mobile App -->",
    "            Next.js API Routes",
    "            Vercel Serverless",
    "```",
    "",
    "---",
    "",
    "## Frameworks and interaction",
    "",
    "### Next.js",
    "- Server Components",
    "- App Router",
    "- API Routes",
    "",
    "### Expo",
    "- Native mobile app",
    "- File-based routing",
    "- Same API contracts",
    "",
    "### Zod",
    "- Shared validation",
    "- Runtime safety",
    "",
    "---",
    "",
    "## Local development",
    "",
    "```bash",
    "corepack enable",
    "corepack prepare pnpm@latest --activate",
    "pnpm install",
    "pnpm --filter web dev",
    "pnpm --filter mobile start",
    "```",
    "",
    "---",
    "",
    "## Deploy to Vercel",
    "",
    "- Root Directory: apps/web",
    "- Install Command:",
    "```bash",
    "cd ../.. && pnpm install",
    "```",
    "- Build Command:",
    "```bash",
    "cd ../.. && pnpm --filter web build",
    "```",
    "",
    "---",
    "",
    "## For Custom domain (Recommended to refer vercel documentation to avoid outdated server information)",
    "",
    "```txt",
    "A @ 76.76.21.21",
    "CNAME www cname.vercel-dns.com",
    "```",
    "",
    "---",
    "",
    "## Fork this repo",
    "",
    "Fork this repository to jump-start a production-ready platform.",
    "",
    "---",
    "",
    "## Final note",
    "",
    "Built with scalability, correctness, and real-world production in mind.",
  ].join("\n");

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* Hero Section */}
      <section className="space-y-6 sm:space-y-8">
        <ScrollReveal delay={0.1}>
          <p className="text-sm text-zinc-400 sm:text-base">
            I build software the way it's built in production.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Enterprise-ready portfolio
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="max-w-2xl text-lg text-zinc-300 sm:text-xl leading-relaxed text-balance">
            Fork this repository to jump-start a production-ready web and mobile
            platform. Built with enterprise architecture principles, shared
            contracts, and real deployment workflows.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <StaggerChildren className="flex flex-wrap gap-3 pt-4">
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="inline-block rounded-lg border border-zinc-800 px-6 py-3 text-sm font-medium transition-all hover:border-zinc-700 hover:bg-zinc-900/50 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Projects
                </Link>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
        <MotionCard className="p-6 sm:p-8 md:p-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              About Portfolio Website
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Shared Contracts",
                  desc: "Zod schemas keep APIs and UI aligned across web and mobile.",
                },
                {
                  title: "Edge-ready Delivery",
                  desc: "Server components, CDN caching, and serverless APIs by default.",
                },
                {
                  title: "Scalable Collaboration",
                  desc: "Monorepo boundaries make ownership and reviews predictable.",
                },
              ].map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  delay={0.7 + index * 0.1}
                  direction="up"
                >
                  <MotionCard
                    variant="soft"
                    whileHover={{ y: -5 }}
                    className="p-6"
                  >
                    <h3 className="font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                  </MotionCard>
                </ScrollReveal>
              ))}
            </div>
            <p className="text-base text-zinc-300 sm:text-lg">
              This website is intentionally designed as more than a static
              portfolio - it is a production-grade foundation that mirrors how
              modern, scalable products are built in real-world engineering
              organizations. It is implemented as a monorepo with a clear
              separation of concerns, enabling multiple applications (web and
              mobile) to evolve from a single, cohesive codebase. The web
              experience is built using Next.js with the App Router, leveraging
              server components by default for performance, SEO, and security,
              while selectively opting into client components only where
              interactivity is required. This ensures minimal client-side
              JavaScript, faster load times, and a clean mental model of what
              runs on the server versus the browser.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-100">
                Key architectural considerations include:
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300 sm:text-base">
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">
                    Shared contracts and validation:
                  </span>{" "}
                  Business logic, input validation, and API contracts are
                  centralized using shared schemas, ensuring consistency across
                  web and mobile clients and preventing frontend/backend drift.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">
                    Scalable deployment model:
                  </span>{" "}
                  The web application is deployed on a global edge platform with
                  automatic HTTPS, CDN caching, and serverless APIs, reflecting
                  how modern teams ship reliable software at scale.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">
                    Mobile-first extensibility:
                  </span>{" "}
                  A parallel mobile application is built using a file-based
                  router that mirrors the web routing model, enabling feature
                  parity and long-term reuse without architectural rewrites.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">
                    Enterprise-friendly structure:
                  </span>{" "}
                  The repository is structured to naturally support future
                  additions such as authentication, dashboards, role-based
                  access control, databases, and shared UI libraries - without
                  refactoring core foundations.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-zinc-200">
                    Maintainability and collaboration:
                  </span>{" "}
                  Clear boundaries between apps, shared packages, and
                  infrastructure make the codebase easy to reason about, review,
                  and extend - optimizing for team velocity, not just individual
                  productivity.
                </li>
              </ul>
            </div>
            <p className="text-base text-zinc-300 sm:text-lg">
              In short, this website demonstrates deliberate engineering choices
              focused on scalability, correctness, performance, and long-term
              evolution. It reflects how I think about building software:
              starting with a strong architectural backbone, minimizing
              technical debt early, and designing systems that can grow from a
              personal project into an enterprise-ready product with confidence.
            </p>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,220px)_1fr]">
              <div className="flex gap-2 overflow-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
                {playbookTabs.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabId(tab.id)}
                      className={`relative whitespace-nowrap rounded-full border px-4 py-2 text-left text-xs font-medium transition sm:text-sm ${
                        isActive
                          ? "border-zinc-500 text-zinc-50"
                          : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="playbook-tab"
                          className="absolute inset-0 rounded-full bg-zinc-900/60"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                        {activeTab.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-400 sm:text-base">
                        {activeTab.description}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-zinc-300 sm:text-base">
                      {activeTab.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-zinc-100">
                  GitHub README
                </h3>
                <a
                  href="https://github.com/AbhishekAlate/enterprise-portfolio/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/40 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
                >
                  Open README
                </a>
              </div>
              <pre className="max-h-96 overflow-auto whitespace-pre-wrap rounded-xl border border-zinc-800/60 bg-zinc-950/80 p-4 text-[11px] font-mono text-zinc-300 sm:text-xs">
                {githubReadme}
              </pre>
            </div>
          </div>
        </MotionCard>
      </ScrollReveal>
    </div>
  );
}
