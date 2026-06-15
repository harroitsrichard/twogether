import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, PlanImage } from "@/components/MarketingVisuals";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { detailedHowItWorks, sharedPlans } from "@/lib/marketingContent";

export const metadata: Metadata = {
  title: "How Twogether Works",
  description:
    "Follow the Twogether flow from creating a couple profile to discovering quality couples, choosing a local plan, meeting up, and building friendship.",
};

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="border-b border-navy/10 py-16 sm:py-20 lg:py-24">
          <div className="container-page max-w-4xl">
            <h1 className="display-heading">From shared interests to shared plans.</h1>
            <p className="body-large mt-6 max-w-2xl">
              Twogether helps couples move from discovering people they might enjoy to choosing a
              real place, time, and activity together.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {detailedHowItWorks.map((step, index) => (
                <article key={step.title} className="relative rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-navy text-lg font-bold text-cream">
                    {index + 1}
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-navy">{step.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-navy/70">{step.copy}</p>
                  {index < detailedHowItWorks.length - 1 ? (
                    <span className="absolute -right-5 top-10 hidden text-clay lg:block">
                      <ArrowIcon />
                    </span>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-cream sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-heading text-cream">Plans stay couple-led.</h2>
              <p className="mt-5 text-base leading-8 text-cream/70 sm:text-lg">
                Couples decide who they connect with, where they go, and what kind of plan feels
                worth doing.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {sharedPlans.map((plan) => (
                <article key={plan.title} className="overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.07]">
                  <PlanImage position={plan.position} title={plan.title} />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-cream">{plan.title}</h3>
                    <p className="mt-3 text-sm text-cream/70">{plan.time}</p>
                    <p className="mt-1 text-sm text-cream/70">{plan.location}</p>
                    <p className="mt-4 text-sm font-semibold text-sage-light">{plan.couples}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page rounded-2xl border border-navy/10 bg-white p-8 shadow-sm sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
                Ready to help shape the first community?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-navy/70">
                Join the founding list and tell us what would make Twogether useful for your social
                life.
              </p>
            </div>
            <Link href="/join" className="button-primary mt-6 lg:mt-0">
              Join the founding couples list
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
