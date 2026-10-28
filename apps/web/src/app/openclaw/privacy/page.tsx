import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenClaw Privacy Policy",
  description: "How Abhi Alate’s personal OpenClaw installation accesses, uses, stores, and shares Google user data.",
  alternates: { canonical: "/openclaw/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="space-y-4"><h1>OpenClaw privacy policy</h1><p className="text-sm text-zinc-500">Last updated: October 28, 2026</p></header>
      <section><h2>Scope and operator</h2><p>This policy covers Abhi Alate’s personal, self-hosted OpenClaw installation and its Google account integration. It does not describe every OpenClaw installation or Google’s own services. This installation is for the owner’s personal use.</p></section>
      <section><h2>Information accessed</h2><p>Only authorized accounts and granted permissions are used. Depending on that grant and the requested task, information may include:</p>
        <ul className="mt-3"><li>Account identity and email address.</li><li>Gmail message content, metadata, and attachments.</li><li>Calendar events, attendees, and scheduling details.</li><li>Drive files and metadata, including Google Docs and Sheets content.</li><li>Contacts and related contact information.</li><li>OAuth credentials and tokens used to maintain the connection.</li></ul>
      </section>
      <section><h2>How information is used</h2><p>Google data is used to carry out the owner’s assistant requests and configured automations, such as finding messages, summarizing information, managing appointments, and working with documents. Granted write permissions can allow sending messages and creating, editing, or deleting data. Data is not sold, used for advertising, or used to train generalized AI or machine-learning models.</p></section>
      <section><h2>Processing and sharing</h2><p>OpenClaw runs on the owner’s computer. Relevant task content may be sent to the AI model providers or other services configured for that task, and their processing terms also apply. Depending on enabled integrations, assistant responses may be delivered through the owner’s configured messaging services. When the owner requests an email, invitation, document share, or other external action, the required information is sent to the selected recipients or service. Data is not otherwise shared except as required by law.</p></section>
      <section><h2>Storage, security, and retention</h2><p>OAuth tokens are stored in the installation’s credential store, such as the macOS Keychain used by the Google CLI. Task content may persist in local assistant history, logs, generated files, and backups, and in configured providers’ records under their retention settings. There is no fixed automatic deletion period for local records; the owner manages retention and deletion. Credentials and account data should not be placed in this public website or its source repository.</p></section>
      <section><h2>Revocation and deletion</h2><p>The owner can disconnect the app through <a href="https://myaccount.google.com/connections">Google Account connections</a>. Revocation stops future authorized Google access but does not erase previously stored content. The owner can remove local credentials, assistant histories, logs, files, and backups, and use configured providers’ deletion controls where available. Copies sent to recipients or retained in Google services must be managed separately.</p></section>
      <section><h2>Google API Limited Use</h2><p>This app’s use and transfer of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including its Limited Use requirements.</p></section>
      <section><h2>Website visits</h2><p>These public information pages do not initiate Google OAuth or request access to a visitor’s Google account. The portfolio website includes Vercel Analytics and Speed Insights for website usage and performance measurements; these are separate from the assistant’s Google account connection.</p></section>
      <section><h2>Changes and contact</h2><p>This policy will be updated when the installation’s data practices change. Questions or deletion requests can be sent to Abhi Alate at <a href="mailto:abhishekalate91@gmail.com">abhishekalate91@gmail.com</a>.</p></section>
    </>
  );
}
