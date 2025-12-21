import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});

export type ContactPayload = z.infer<typeof ContactSchema>;

export async function sendContact(baseUrl: string, payload: ContactPayload) {
  const res = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => "Request failed");
    throw new Error(msg);
  }
  return (await res.json()) as { ok: true };
}
