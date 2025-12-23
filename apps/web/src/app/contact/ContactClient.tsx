"use client";

import ContactForm from "./ui";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactClient() {
  return (
    <div className="mx-auto max-w-xl space-y-8 sm:space-y-10">
      <ScrollReveal delay={0.1}>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-transparent">
              Contact
            </span>
          </h1>
          <p className="text-lg text-zinc-300 sm:text-xl">
            Send a note and I will get back to you as soon as possible.
          </p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2} direction="up">
        <ContactForm />
      </ScrollReveal>
    </div>
  );
}

