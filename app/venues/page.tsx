import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VenuePartnerForm } from "@/components/VenuePartnerForm";
import { venuePartnerFeatures } from "@/lib/marketingContent";

export const metadata: Metadata = {
  title: "For Venues | Twogether",
  description:
    "Learn how restaurants, coffee shops, venues, and activity providers can partner with Twogether through featured placements, discounts, group offers, and local community exposure.",
};

export default function VenuesPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="border-b border-navy/10 py-16 sm:py-20 lg:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <h1 className="display-heading">Bring friendly groups into your local space.</h1>
              <p className="body-large mt-6 max-w-xl">
                Twogether helps restaurants, coffee shops, venues, and activity providers become
                part of couple-led real-world plans.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">
                Partnerships support the community
              </p>
              <p className="mt-4 text-base leading-8 text-navy/70">
                Featured placements, perks, and group-friendly offers help couples discover places
                they can enjoy together.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="max-w-3xl">
              <h2 className="section-heading">Ways local partners can show up.</h2>
              <p className="body-large mt-5">
                The best partner moments give couples a clear reason to visit while helping local
                spaces welcome repeat-friendly groups.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {venuePartnerFeatures.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy/70">{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand py-16 sm:py-20 lg:py-24">
          <div className="container-page grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <div>
              <h2 className="section-heading">Partner with Twogether.</h2>
              <p className="body-large mt-5">
                Share a few details so we can understand how your venue could fit into future
                couple-led local plans and group bookings.
              </p>
            </div>
            <VenuePartnerForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
