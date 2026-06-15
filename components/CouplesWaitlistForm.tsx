"use client";

import { FormEvent, useState } from "react";
import { SelectField, TextareaField, TextField } from "./FormFields";
import { submitLead } from "@/lib/leadCapture";

export function CouplesWaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitted(false);
    setIsSubmitting(true);

    try {
      await submitLead("couples_waitlist", new FormData(event.currentTarget));
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
        <h3 className="font-serif text-3xl text-ink">Founding Couples List</h3>
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          Tell us what would make a friendship-first couples platform useful enough to try, recommend, and eventually pay for.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <TextField label="Partner 1 name" name="partner1" required autoComplete="given-name" />
        <TextField label="Partner 2 name" name="partner2" required autoComplete="additional-name" />
        <TextField label="Email" name="email" type="email" required autoComplete="email" />
        <TextField label="Phone optional" name="phone" type="tel" autoComplete="tel" />
        <TextField label="City / neighborhood" name="cityNeighborhood" required autoComplete="address-level2" />
        <SelectField
          label="Couple Status"
          name="coupleStatus"
          required
          placeholder="Select one"
          options={["Married", "Engaged", "Long-term couple", "Other established couple"]}
        />
        <SelectField
          label="Do you have kids?"
          name="hasKids"
          required
          placeholder="Choose one"
          options={["Yes", "No", "Prefer not to say"]}
        />
        <TextareaField
          label="What kinds of couple friends would you like to meet?"
          name="coupleTypes"
          required
          placeholder="Similar life stage, new-to-Vegas, family-friendly, faith/community, business-minded, active, food-focused..."
        />
        <TextareaField
          label="Favorite activities or hangout styles"
          name="favoriteActivities"
          required
          placeholder="Dinner, brunch, coffee, hiking, game nights, shows, family activities, low-key conversation..."
        />
        <SelectField
          label="Preferred group size"
          name="preferredGroupSize"
          required
          placeholder="Choose one"
          options={["1 other couple", "2-3 couples", "Larger group", "Flexible"]}
        />
        <SelectField
          label="How often would you use a platform like this?"
          name="useFrequency"
          required
          placeholder="Choose one"
          options={["Weekly", "A few times per month", "Monthly", "Every few months", "Not sure yet"]}
        />
        <SelectField
          label="Would you consider paying monthly for access?"
          name="monthlyPaymentInterest"
          required
          placeholder="Choose one"
          options={[
            "Yes, under $19/month",
            "Yes, $19-$29/month",
            "Yes, $29-$49/month",
            "Maybe, depends on value",
            "No",
          ]}
        />
        <TextareaField
          label="What would make this valuable enough to pay for?"
          name="valueToPay"
          required
          placeholder="Better discovery, easier scheduling, restaurant perks, verified couples, planning tools..."
        />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="button-primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Join Founding Couples List"}
        </button>
        {submitted ? (
          <p className="text-sm font-semibold text-sage" role="status">
            Thank you. You are on the founding couples interest list.
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
