import { NextResponse } from "next/server";
import { ContactSchema } from "@repo/shared";

export const runtime = "nodejs";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "";

function buildCorsHeaders(origin: string | null) {
  return {
    "access-control-allow-origin": origin ?? "*",
    "access-control-allow-methods": "POST,OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-max-age": "86400",
    vary: "Origin",
  };
}

function getEmailConfig() {
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return { ok: false, error: "Contact email is not configured." };
  }

  return {
    ok: true,
    apiKey: RESEND_API_KEY,
    to: CONTACT_TO_EMAIL,
    from: CONTACT_FROM_EMAIL,
  } as const;
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const corsHeaders = buildCorsHeaders(origin);
  try {
    const json = await req.json().catch(() => null);
    const parsed = ContactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400, headers: corsHeaders }
      );
    }

    const config = getEmailConfig();
    if (!config.ok) {
      return NextResponse.json(
        { ok: false, error: config.error },
        { status: 500, headers: corsHeaders }
      );
    }

    const { name, email, message } = parsed.data;
    const subject = `Portfolio contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${config.apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: config.to,
        subject,
        reply_to: email,
        text,
      }),
    });

    if (!res.ok) {
      const errorPayload = await res.json().catch(() => null);
      const errorMessage =
        typeof errorPayload?.message === "string" ? errorPayload.message : "Failed to send email.";
      return NextResponse.json(
        { ok: false, error: errorMessage },
        { status: 502, headers: corsHeaders }
      );
    }

    return NextResponse.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error.";
    return NextResponse.json({ ok: false, error: message }, { status: 500, headers: corsHeaders });
  }
}

export function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  return new NextResponse(null, {
    status: 204,
    headers: buildCorsHeaders(origin),
  });
}
