"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactSchema } from "@repo/shared";
import StaggerChildren from "@/components/StaggerChildren";
import StaggerItem from "@/components/StaggerItem";

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = ContactSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!res.ok) {
      const msg = await res.text().catch(() => "Failed");
      setStatus(msg);
      return;
    }

    setStatus("Sent ✅ (demo)");
    e.currentTarget.reset();
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
      className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950/40 to-zinc-900/20 p-6 backdrop-blur-sm sm:p-8"
    >
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg bg-zinc-50 px-6 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-100 hover:shadow-lg hover:shadow-zinc-500/20 sm:py-3.5 sm:text-base"
          >
            Send
          </motion.button>
        </StaggerItem>
      </StaggerChildren>
      
      <AnimatePresence mode="wait">
        {status && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`mt-4 text-sm font-medium sm:text-base ${
              status.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
