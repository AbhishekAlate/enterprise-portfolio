"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function BlogClient() {
  const placeholderPosts = [
    { id: 1, title: "Getting Started with Next.js", date: "2024-01-15", excerpt: "Learn the basics of Next.js and how to build modern web applications." },
    { id: 2, title: "Building Responsive UI", date: "2024-01-20", excerpt: "Best practices for creating responsive and accessible user interfaces." },
    { id: 3, title: "Performance Optimization", date: "2024-01-25", excerpt: "Tips and techniques for optimizing web application performance." },
  ];

  return (
    <div className="space-y-8 sm:space-y-12">
      <ScrollReveal delay={0.1}>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300 sm:text-xl">
            Write posts here. Later, swap this for MDX or a CMS without changing your layout.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {placeholderPosts.map((post, index) => (
          <ScrollReveal key={post.id} delay={0.2 + index * 0.1} direction="up">
            <motion.article
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950/40 to-zinc-900/20 p-6 backdrop-blur-sm transition-all hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/50 sm:p-8"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <time>{post.date}</time>
                </div>
                <h2 className="text-xl font-semibold text-zinc-100 transition-colors group-hover:text-zinc-50 sm:text-2xl">
                  {post.title}
                </h2>
                <p className="text-zinc-300">{post.excerpt}</p>
              </div>
            </motion.article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5} direction="up">
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

