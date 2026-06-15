export type LeadType = "couples_waitlist" | "venue_partner";

export type LeadPayload = {
  type: LeadType;
  submittedAt: string;
  source: string;
  fields: Record<string, string>;
};

export async function submitLead(type: LeadType, formData: FormData) {
  const fields = Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value).trim()]),
  );

  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type,
      fields,
    }),
  });

  const result = (await response.json()) as { ok?: boolean; message?: string };

  if (!response.ok || !result.ok) {
    throw new Error(result.message || "Unable to submit right now.");
  }

  return result;
}
