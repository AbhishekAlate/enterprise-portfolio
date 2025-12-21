import ContactForm from "./ui";
export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-zinc-300">
          Placeholder contact form (validated with shared Zod). Later: email (Resend) + DB.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
