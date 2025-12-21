import { NextResponse } from "next/server";
import { ContactSchema } from "@repo/shared";

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
