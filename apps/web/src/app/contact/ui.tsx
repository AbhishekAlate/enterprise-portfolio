"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactSchema } from "@repo/shared";
import StaggerChildren from "@/components/StaggerChildren";
import StaggerItem from "@/components/StaggerItem";
import { MotionCard } from "@/components/ui/Card";

type StatusState =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<StatusState>({ type: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "sending" });

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = ContactSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus({
        type: "error",
        message: parsed.error.issues[0]?.message ?? "Invalid input",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        const msg =
          typeof data?.error === "string" ? data.error : "Failed to send. Please try again.";
        setStatus({ type: "error", message: msg });
        return;
      }

      setStatus({
        type: "success",
        message: "Thanks for reaching out. I will get back to you soon.",
      });
      form.reset();
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  }

  const isSending = status.type === "sending";
  const statusMessage = status.type === "sending" ? "Sending..." : status.message;

  return (
    <MotionCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 sm:p-8"
    >
      <form onSubmit={onSubmit} aria-busy={isSending}>
        <StaggerChildren className="space-y-5 sm:space-y-6">
          <StaggerItem>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300 sm:text-base">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm outline-none transition-all focus:border-zinc-600 focus:bg-zinc-900/50 focus:ring-2 focus:ring-zinc-700/50 sm:py-3.5 sm:text-base"
              />
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300 sm:text-base">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm outline-none transition-all focus:border-zinc-600 focus:bg-zinc-900/50 focus:ring-2 focus:ring-zinc-700/50 sm:py-3.5 sm:text-base"
              />
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300 sm:text-base">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm outline-none transition-all focus:border-zinc-600 focus:bg-zinc-900/50 focus:ring-2 focus:ring-zinc-700/50 sm:py-3.5 sm:text-base"
              />
            </div>
          </StaggerItem>

          <StaggerItem>
            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-lg bg-zinc-50 px-6 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-100 hover:shadow-lg hover:shadow-zinc-500/20 disabled:cursor-not-allowed disabled:opacity-70 sm:py-3.5 sm:text-base"
            >
              {isSending ? "Sending..." : "Send"}
            </motion.button>
          </StaggerItem>
        </StaggerChildren>

        <AnimatePresence mode="wait">
          {status.type !== "idle" && statusMessage && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`mt-4 text-sm font-medium sm:text-base ${
                status.type === "success"
                  ? "text-green-400"
                  : status.type === "error"
                    ? "text-red-400"
                    : "text-zinc-300"
              }`}
              aria-live="polite"
            >
              {statusMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </MotionCard>
  );
}
