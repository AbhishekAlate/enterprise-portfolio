"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function ProjectsClient() {
  const placeholderProjects = [
    { id: 1, title: "Project Alpha", description: "Enterprise solution with advanced features" },
    { id: 2, title: "Project Beta", description: "Modern web application built with latest tech" },
    { id: 3, title: "Project Gamma", description: "Scalable platform for business operations" },
  ];

  return (
    <div className="space-y-8 sm:space-y-12">
      <ScrollReveal delay={0.1}>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300 sm:text-xl">
            Showcase case studies here. Later, evolve this into an enterprise module with tags, filters, and admin editing.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2} direction="up">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.3 + index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950/40 to-zinc-900/20 p-6 backdrop-blur-sm transition-all hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/50 sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 to-zinc-700/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h2 className="text-xl font-semibold text-zinc-100 sm:text-2xl">{project.title}</h2>
                  <p className="mt-3 text-zinc-400">{project.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.6} direction="up">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 sm:p-8"
        >
          <p className="text-sm text-zinc-400 sm:text-base">
            Placeholder page — replace this with real content when you're ready.
          </p>
        </motion.div>
      </ScrollReveal>
    </div>
  );
}

