import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenClaw — Personal Google Workspace Assistant",
  description: "Abhi Alate’s private OpenClaw assistant for personal Google Workspace tasks, with privacy and terms information.",
  alternates: { canonical: "/openclaw" },
};

export default function OpenClawPage() {
  return (
    <>
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">Personal automation · Abhi Alate</p>
        <h1>OpenClaw</h1>
        <p className="text-xl leading-8">A private assistant for everyday Google Workspace tasks.</p>
      </header>
      <section>
        <h2>What this app does</h2>
        <p>This is Abhi Alate’s personal installation of OpenClaw, a self-hosted assistant. It connects authorized Google accounts to help with email, scheduling, documents, and personal organization. It is for the owner’s personal use and is not a public sign-up service or an official Google product.</p>
      </section>
      <section>
        <h2>Google account access</h2>
        <p>Depending on the permissions granted, the assistant can read and manage Gmail messages, calendar events, Drive files, contacts, Google Docs, and Google Sheets. This can include sending email or changing data when the owner requests those actions. Actual access is limited by the account’s OAuth grant and the assistant’s configuration.</p>
      </section>
      <section>
        <h2>You control the connection</h2>
        <p>Google authorization happens through Google’s consent flow. This website does not collect Google passwords or provide an assistant login. Access can be revoked at any time through <a href="https://myaccount.google.com/connections">Google Account connections</a>.</p>
      </section>
      <section>
        <h2>Privacy and support</h2>
        <p>Read the <Link href="/openclaw/privacy">privacy policy</Link> for details about data use, storage, and processing, and the <Link href="/openclaw/terms">terms of service</Link> for conditions of use.</p>
        <p className="mt-3">Operator and contact: <a href="mailto:abhishekalate91@gmail.com">Abhi Alate — abhishekalate91@gmail.com</a>.</p>
      </section>
    </>
  );
}
