"use client";

import { motion } from "framer-motion";

interface StaggerChildrenProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function StaggerChildren({
  children,
  delay = 0.1,
  className = "",
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

