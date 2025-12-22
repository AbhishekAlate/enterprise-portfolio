"use client";

import { motion } from "framer-motion";

interface StaggerItemProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function StaggerItem({
  children,
  direction = "up",
  className = "",
}: StaggerItemProps) {
  const directionVariants = {
    up: { y: 30, opacity: 0 },
    down: { y: -30, opacity: 0 },
    left: { x: 30, opacity: 0 },
    right: { x: -30, opacity: 0 },
  };

  return (
    <motion.div
      variants={{
        hidden: directionVariants[direction],
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.21, 1.11, 0.81, 0.99],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

