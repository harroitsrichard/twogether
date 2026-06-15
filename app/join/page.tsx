import type { Metadata } from "next";
import { CouplesWaitlistForm } from "@/components/CouplesWaitlistForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { foundingMemberBenefits } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join the Founding Couples List | Twogether",
  description:
    "Join the Twogether founding couples list and help shape a couples friendship platform for real-world plans, local experiences, and meaningful friendships.",
};

export default function JoinPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="border-b border-navy/10 py-16 sm:py-20 lg:py-24">
          <div className="container-page max-w-4xl">
            <h1 className="display-heading">Join the founding couples list.</h1>
            <p className="body-large mt-6 max-w-2xl">
              Help shape how Twogether supports couple discovery, shared local experiences, partner
              perks, and meaningful friendships in Las Vegas.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-3xl leading-tight text-navy">Founding couples help shape the product.</h2>
              <div className="mt-6 grid gap-3">
                {foundingMemberBenefits.map((benefit) => (
                  <p key={benefit} className="rounded-md bg-sand px-4 py-3 text-sm font-semibold leading-6 text-navy/75">
                    {benefit}
                  </p>
                ))}
              </div>
            </div>
            <CouplesWaitlistForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
