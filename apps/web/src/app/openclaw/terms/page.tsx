import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenClaw Terms of Service",
  description: "Terms for Abhi Alate’s personal OpenClaw assistant and Google Workspace integration.",
  alternates: { canonical: "/openclaw/terms" },
};

export default function TermsPage() {
  return (
    <>
      <header className="space-y-4"><h1>OpenClaw terms of service</h1><p className="text-sm text-zinc-500">Last updated: October 28, 2026</p></header>
      <section><h2>Personal-use installation</h2><p>This OpenClaw installation is operated by Abhi Alate for personal automation. It is not offered as a public service, and these information pages do not offer account registration or access to the assistant. The installation is independent of Google and does not represent the OpenClaw project as a whole.</p></section>
      <section><h2>Authorized use</h2><p>Only accounts and information the owner is authorized to access may be connected. Use must comply with applicable law and the terms of Google and any other connected service. Google permissions can be withdrawn at any time.</p></section>
      <section><h2>Assistant actions and accuracy</h2><p>The assistant can make mistakes. The owner is responsible for reviewing important outputs and configuring permissions and confirmations appropriate to actions such as sending messages, modifying calendars, sharing files, or deleting data. Do not rely on generated outputs as a substitute for qualified professional advice.</p></section>
      <section><h2>Availability</h2><p>The installation is provided as available, without a service-level commitment or guarantee of uninterrupted access or accurate outputs. Connections may stop working because of revoked permissions, token expiration, provider changes, or local configuration. To the extent permitted by law, no warranties are provided for this personal installation.</p></section>
      <section><h2>Privacy and third-party services</h2><p>Google data handling is described in the <Link href="/openclaw/privacy">privacy policy</Link>. Google, configured AI providers, hosting providers, and other connected services operate under their own terms and policies.</p></section>
      <section><h2>Discontinuation and contact</h2><p>The owner may change or discontinue the installation at any time. Questions can be directed to Abhi Alate at <a href="mailto:abhishekalate91@gmail.com">abhishekalate91@gmail.com</a>.</p></section>
    </>
  );
}
