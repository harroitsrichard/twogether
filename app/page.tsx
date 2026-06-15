import Image from "next/image";
import { CouplesWaitlistForm } from "@/components/CouplesWaitlistForm";
import { FAQ } from "@/components/FAQ";
import { SectionShell } from "@/components/SectionShell";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VenuePartnerForm } from "@/components/VenuePartnerForm";
import { foundingMemberBenefits, howItWorks, planCards } from "@/lib/content";

const problemPoints = [
  "Making couple friends often starts with random texts",
  "Group chats get awkward before a plan is made",
  "Couples fall back on the same few friends every time",
  "One person usually ends up organizing everything manually",
];

const platformBenefits = [
  "Create a shared couple profile",
  "Discover compatible couples nearby",
  "Choose restaurants or activities together",
  "Coordinate date and time as a group",
  "Show up without one person carrying the whole plan",
];

const venueBenefits = [
  "Get discovered by groups of local couples",
  "Drive group dining and activity bookings",
  "Fill slower nights with intentional local demand",
  "Build repeat relationships with local guests",
  "Offer partner perks or featured placement",
  "Explore future referral, revenue-share, or preferred partner models",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="relative overflow-hidden border-b border-champagne bg-porcelain">
          <div className="container-page grid min-h-[calc(100svh-4rem)] items-center gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-0">
            <div className="z-10 max-w-2xl">
              <h1 className="display-heading">Find couples you actually click with.</h1>
              <p className="body-large mt-6 max-w-xl">
                Create a shared couple profile, connect with other couples who share your interests, and plan better dinners, activities, and nights out together.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#waitlist" className="button-primary">
                  Join the Founding Couples List
                </a>
                <a href="#venue-partner" className="button-secondary">
                  For Restaurants &amp; Venues
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-sm shadow-soft lg:-mr-10 lg:min-h-[620px]">
              <Image
                src="/images/couples-dinner-hero.png"
                alt="Two couples in relaxed conversation while planning a night out together"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-porcelain to-transparent" />
            </div>
          </div>
        </section>

        <SectionShell
          id="about"
          label="The gap"
          title="Making couple friends and coordinating plans is harder than it should be."
          intro="Most couples rely on random texts, awkward group chats, or the same few friends every time. Even when everyone wants to go out, choosing the people, place, and time can become more work than the night itself."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemPoints.map((point) => (
              <div key={point} className="rounded-sm border border-champagne bg-white p-5">
                <p className="text-base font-semibold leading-7 text-ink">{point}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          className="bg-linen"
          label="The platform vision"
          title="A planning platform for couples who want better people and better plans."
          intro="Couples Around You is being shaped as a tool for couples to find compatible couples, choose where to go, coordinate availability, and turn a good idea into a real plan."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {platformBenefits.map((benefit) => (
              <article key={benefit} className="rounded-sm border border-champagne bg-white p-5">
                <div className="mb-5 h-1 w-10 bg-copper" />
                <h3 className="text-base font-semibold leading-7 text-ink">{benefit}</h3>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="how-it-works"
          label="How it works"
          title="From couple profile to real plan."
          intro="This is the future workflow being validated. The full account, discovery, coordination, and planning product has not been built yet."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {howItWorks.map((step, index) => (
              <article key={step.title} className="rounded-sm border border-champagne bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-ink">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-soft">{step.copy}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="plans"
          className="bg-ink text-white"
          label="What couples can plan"
          title="Plans that fit real couple life."
          intro="The goal is to support the everyday plans couples actually want to make together, from one-on-one double dates to small group nights out."
        >
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="max-w-md text-base leading-8 text-white/72">
                Founding couples will help validate which planning use cases matter most before the full platform is built.
              </p>
              <a href="#waitlist" className="button-primary mt-8">
                Join the Founding List
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {planCards.map((plan) => (
                <div key={plan} className="rounded-sm border border-white/15 bg-white/[0.06] p-5">
                  <p className="text-base font-semibold leading-7 text-white">{plan}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="founding-members"
          className="bg-porcelain"
          label="Founding membership"
          title="Help shape the couples network before public launch."
          intro="Founding membership is about early access to the future couples network, profile discovery, planning tools, restaurant perks, and early pricing."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {foundingMemberBenefits.map((benefit) => (
              <article key={benefit} className="rounded-sm border border-champagne bg-white p-5 shadow-sm">
                <div className="mb-5 h-1 w-10 bg-copper" />
                <h3 className="text-base font-semibold leading-7 text-ink">{benefit}</h3>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="venue-partner"
          className="bg-linen"
          label="For restaurants & venues"
          title="Be discovered when local couples are deciding where to go."
          intro="Restaurants and venues can become discovery and booking partners for couples choosing dinners, activities, and group plans. The goal is local demand, not coupon-driven traffic."
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <ul className="space-y-4">
                {venueBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-base font-semibold text-ink">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-copper" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href="#venue-form" className="button-secondary mt-8 bg-porcelain">
                Become a Venue Partner
              </a>
            </div>
            <p className="text-2xl leading-10 text-ink lg:text-3xl">
              Future partnerships may include featured placement, partner perks, group offers, referral models, or revenue-share discussions once demand is validated.
            </p>
          </div>
        </SectionShell>

        <section id="waitlist" className="scroll-mt-24 bg-porcelain py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <div>
                <p className="eyebrow">Founding couples</p>
                <h2 className="section-heading mt-3">Join the founding couples list.</h2>
                <p className="body-large mt-5">
                  This form validates interest in the real platform: shared couple profiles, compatible couple discovery, and planning tools for better nights out.
                </p>
              </div>
              <CouplesWaitlistForm />
            </div>
          </div>
        </section>

        <section id="venue-form" className="scroll-mt-24 bg-linen py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <div>
                <p className="eyebrow">Venue partners</p>
                <h2 className="section-heading mt-3">Interested in becoming a discovery or booking partner?</h2>
                <p className="body-large mt-5">
                  Restaurants, activity venues, and hospitality teams can express interest in partner perks, featured placement, group experiences, or future referral and revenue-share models.
                </p>
              </div>
              <VenuePartnerForm />
            </div>
          </div>
        </section>

        <SectionShell id="faq" label="FAQ" title="Straight answers before the platform is built.">
          <FAQ />
        </SectionShell>
      </main>
      <SiteFooter />
    </>
  );
}
