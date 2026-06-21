import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { memberships } from "@/lib/homepageProductContent";

export const metadata: Metadata = {
  title: "Membership | Twogether",
  description:
    "Explore Twogether's free founding profile and planned membership options for couple discovery, planning tools, local experiences, and partner perks.",
};

export default function MembershipPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="border-b border-navy/10 py-16 sm:py-20 lg:py-24">
          <div className="container-page max-w-4xl">
            <h1 className="display-heading">Choose how you want to join Twogether.</h1>
            <p className="body-large mt-6 max-w-2xl">
              Start with a free founding profile or explore planned paid options designed around
              couple discovery, easier planning, and useful local perks.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-5 lg:grid-cols-3">
              {memberships.map((membership) => (
                <article
                  key={membership.title}
                  className={`rounded-lg border p-6 shadow-sm ${
                    membership.featured ? "border-clay bg-navy text-cream" : "border-navy/10 bg-white text-navy"
                  }`}
                >
                  <p className={`text-xs font-bold uppercase tracking-[0.16em] ${membership.featured ? "text-sage-light" : "text-clay"}`}>
                    {membership.note}
                  </p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight">{membership.title}</h2>
                  <p className="mt-4 text-3xl font-bold">{membership.price}</p>
                  <p className={`mt-4 text-sm leading-7 ${membership.featured ? "text-cream/70" : "text-navy/70"}`}>
                    {membership.copy}
                  </p>
                  <div className="mt-6 grid gap-3">
                    {membership.features.map((feature) => (
                      <p
                        key={feature}
                        className={`border-l-2 pl-3 text-sm leading-6 ${
                          membership.featured ? "border-sage-light text-cream/75" : "border-clay text-navy/70"
                        }`}
                      >
                        {feature}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-navy/10 bg-sand p-6 text-sm leading-7 text-navy/70">
              Pricing and included features are being validated and may change before public launch.
              Limited founding promotions may also be tested with early couples.
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/join" className="button-primary">
                Join the Founding Couples List
              </Link>
              <Link href="/faq" className="button-secondary">
                Read the FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
