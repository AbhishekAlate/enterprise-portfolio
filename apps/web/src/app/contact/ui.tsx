"use client";
import { useState } from "react";
import { ContactSchema } from "@repo/shared";

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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm text-zinc-300">Name</label>
        <input name="name" required className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-zinc-300">Email</label>
        <input name="email" type="email" required className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-zinc-300">Message</label>
        <textarea name="message" required rows={5} className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
      </div>
      <button className="rounded-lg bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-950 hover:opacity-90">Send</button>
      {status ? <p className="text-sm text-zinc-300">{status}</p> : null}
    </form>
  );
}
