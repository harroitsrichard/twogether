import { NextResponse } from "next/server";
import type { LeadPayload, LeadType } from "@/lib/leadCapture";

const validLeadTypes = new Set<LeadType>(["couples_waitlist", "venue_partner"]);

function hasRequiredBasics(fields: Record<string, string>) {
  return typeof fields.email === "string" && fields.email.includes("@");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      type?: LeadType;
      fields?: Record<string, string>;
    };

    if (!body.type || !validLeadTypes.has(body.type) || !body.fields) {
      return NextResponse.json({ ok: false, message: "Invalid lead submission." }, { status: 400 });
    }

    if (!hasRequiredBasics(body.fields)) {
      return NextResponse.json({ ok: false, message: "Please include a valid email address." }, { status: 400 });
    }

    const payload: LeadPayload = {
      type: body.type,
      submittedAt: new Date().toISOString(),
      source: "twogether-validation-site",
      fields: body.fields,
    };

    if (process.env.LEAD_CAPTURE_WEBHOOK_URL) {
      const webhookResponse = await fetch(process.env.LEAD_CAPTURE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json({ ok: false, message: "Lead capture service failed." }, { status: 502 });
      }
    } else {
      // Placeholder path for validation: replace with Tally, Airtable, Formspree, or Supabase later.
      console.info("Lead captured without a configured webhook:", payload);
    }

    return NextResponse.json({
      ok: true,
      message: process.env.LEAD_CAPTURE_WEBHOOK_URL
        ? "Lead sent."
        : "Lead accepted in placeholder mode. Configure LEAD_CAPTURE_WEBHOOK_URL before public launch.",
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Unable to process submission." }, { status: 500 });
  }
}
