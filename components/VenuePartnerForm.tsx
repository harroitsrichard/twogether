"use client";

import { FormEvent, useState } from "react";
import { SelectField, TextareaField, TextField } from "./FormFields";
import { submitLead } from "@/lib/leadCapture";

export function VenuePartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitted(false);
    setIsSubmitting(true);

    try {
      await submitLead("venue_partner", new FormData(event.currentTarget));
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to submit right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-champagne bg-white p-5 shadow-soft sm:p-8">
      <div className="mb-8">
        <h3 className="font-serif text-3xl text-ink">Venue Partner Interest</h3>
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          Share a few details so we can understand how your venue could fit into future couple-led plans and group bookings.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <TextField label="Contact name" name="contactName" required autoComplete="name" />
        <TextField label="Venue name" name="venueName" required autoComplete="organization" />
        <TextField label="Email" name="email" type="email" required autoComplete="email" />
        <TextField label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <SelectField
          label="Venue type"
          name="venueType"
          required
          placeholder="Select one"
          options={[
            "Upscale casual restaurant",
            "Wine bar",
            "Coffee shop",
            "Activity venue",
            "Community venue",
            "Private dining space",
            "Hospitality group",
            "Other",
          ]}
        />
        <TextField label="Neighborhood" name="neighborhood" required autoComplete="address-level2" />
        <TextareaField
          label="Best nights/times to bring groups"
          name="bestGroupTimes"
          required
          placeholder="Weeknights, early dinner, late brunch, slower nights, private-room windows..."
        />
        <SelectField
          label="Ideal group size"
          name="idealGroupSize"
          required
          placeholder="Select one"
          options={["2 couples", "3-5 couples", "6-10 couples", "10+ couples", "Flexible"]}
        />
        <SelectField
          label="Are you open to partner perks, preferred placement, prix fixe group experiences, or referral/revenue-share discussions?"
          name="partnershipOpenness"
          required
          placeholder="Select one"
          options={[
            "Yes, open to discussing",
            "Maybe, depends on the model",
            "Only partner perks or featured placement",
            "Only group experiences",
            "Not at this time",
          ]}
        />
        <TextareaField
          label="Message"
          name="message"
          required
          placeholder="Tell us what kinds of couples, group plans, or booking formats would be most useful for your venue."
        />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="button-primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Partner Interest"}
        </button>
        {submitted ? (
          <p className="text-sm font-semibold text-sage" role="status">
            Thank you. Your venue interest has been received.
          </p>
        ) : null}
        {error ? (
          <p className="text-sm font-semibold text-red-700" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
