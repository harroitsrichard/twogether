import Link from "next/link";
import { ProfileImage } from "@/components/MarketingVisuals";
import {
  dateOptions,
  discoveryCouples,
  gapPoints,
  hangoutTypes,
  memberships,
  planCategories,
  productPreviewSteps,
  suggestedPlaces,
  trustGuardrails,
  venueModels,
} from "@/lib/homepageProductContent";

type SectionIntroProps = {
  label: string;
  title: string;
  copy: string;
  light?: boolean;
};

function SectionIntro({ label, title, copy, light = false }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-sage-light" : "text-clay"}`}>
        {label}
      </p>
      <h2 className={`section-heading mt-3 ${light ? "text-cream" : "text-navy"}`}>{title}</h2>
      <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-cream/70" : "text-navy/70"}`}>{copy}</p>
    </div>
  );
}

function AppWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-navy/10 bg-cream shadow-sm">
      <div className="flex items-center justify-between border-b border-navy/10 bg-white px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-clay" />
          <span className="h-2 w-2 rounded-full bg-sand" />
          <span className="h-2 w-2 rounded-full bg-sage" />
        </div>
        <p className="text-xs font-bold text-navy/60">{title}</p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function ProductScreen({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-navy/60">Profile completion</p>
          <p className="text-xs font-bold text-clay">72%</p>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-sand">
          <div className="h-full w-[72%] rounded-full bg-clay" />
        </div>
        <div className="rounded-lg border border-navy/10 bg-white p-3">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy/45">Shared interests</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {['Food', 'Travel', 'Game nights'].map((item) => (
              <span key={item} className="rounded-full bg-sand px-2.5 py-1 text-[0.68rem] font-semibold text-navy/70">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-white p-3">
            <p className="text-[0.68rem] text-navy/45">Usually free</p>
            <p className="mt-1 text-xs font-bold text-navy">Friday nights</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-[0.68rem] text-navy/45">Favorite plan</p>
            <p className="mt-1 text-xs font-bold text-navy">Casual dinner</p>
          </div>
        </div>
        <div className="rounded-md bg-navy px-3 py-2 text-center text-xs font-bold text-cream">Preview couple profile</div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="grid gap-3">
        <div className="rounded-xl bg-white p-3">
          <div className="flex items-center gap-3">
            <ProfileImage position="0% 0%" className="h-12 w-12 rounded-full" alt="Josh and Emily profile preview" />
            <div>
              <p className="text-sm font-bold text-navy">Josh &amp; Emily</p>
              <p className="text-xs text-navy/50">Henderson - 6 miles away</p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-5 text-navy/70">Relaxed, food-focused, and always up for a game night.</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {['Sushi', 'Board games', 'Community'].map((item) => (
              <span key={item} className="rounded-full bg-sage/20 px-2.5 py-1 text-[0.68rem] font-semibold text-navy">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-navy/10 bg-white px-3 py-2.5">
          <span className="text-xs font-semibold text-navy/60">Shared interests</span>
          <span className="text-xs font-bold text-clay">4 in common</span>
        </div>
        <div className="rounded-md bg-navy px-3 py-2 text-center text-xs font-bold text-cream">View couple profile</div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="grid gap-3">
        <p className="text-xs leading-5 text-navy/60">Choose a prompt to make the first message easier.</p>
        {[
          'We both love local restaurants. Any favorites lately?',
          'Game night or brunch for a first hangout?',
        ].map((prompt, promptIndex) => (
          <div
            key={prompt}
            className={`rounded-lg border p-3 text-xs leading-5 ${
              promptIndex === 0 ? 'border-clay bg-clay/10 font-semibold text-navy' : 'border-navy/10 bg-white text-navy/70'
            }`}
          >
            {prompt}
          </div>
        ))}
        <div className="rounded-lg bg-white p-3">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy/45">Message preview</p>
          <p className="mt-2 text-xs leading-5 text-navy/70">Hey Josh &amp; Emily, we have been looking for a new sushi spot too...</p>
        </div>
        <div className="rounded-md bg-navy px-3 py-2 text-center text-xs font-bold text-cream">Send connection request</div>
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap gap-1.5">
        {['Dinner', 'Coffee', 'Activity'].map((item, itemIndex) => (
          <span
            key={item}
            className={`rounded-full px-2.5 py-1 text-[0.68rem] font-semibold ${
              itemIndex === 0 ? 'bg-clay text-cream' : 'bg-white text-navy/60'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="rounded-lg bg-white p-3">
        <p className="text-[0.68rem] text-navy/45">Suggested place</p>
        <p className="mt-1 text-sm font-bold text-navy">Henderson restaurant</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {['Fri 6:30 PM', 'Sat 11:00 AM'].map((time, timeIndex) => (
          <div
            key={time}
            className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold ${
              timeIndex === 0 ? 'border-clay bg-clay/10 text-navy' : 'border-navy/10 bg-white text-navy/60'
            }`}
          >
            {time}
          </div>
        ))}
      </div>
      <div className="rounded-md bg-navy px-3 py-2 text-center text-xs font-bold text-cream">Suggest this Twogether plan</div>
    </div>
  );
}

export function GapSection() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container-page">
        <SectionIntro
          label="The gap"
          title="Couple friendships need a better path from hello to hangout."
          copy="Most couples do not need another feed. They need a practical way to find their people and turn a promising conversation into something on the calendar."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 md:grid-cols-3">
          {gapPoints.map((point, index) => (
            <article key={point.title} className="bg-white p-6 sm:p-7">
              <p className="text-sm font-bold text-clay">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-bold text-navy">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-navy/70">{point.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductPreviewSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-sand py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionIntro
          label="The app experience"
          title="From profile to plan in a few simple steps."
          copy="Twogether is being built around one simple loop: help couples find similar couples, connect with confidence, and turn 'we should hang out sometime' into an actual plan."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {productPreviewSteps.map((step, index) => (
            <article key={step.title} className="grid gap-5 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm sm:p-6 md:grid-cols-[0.82fr_1.18fr] md:items-center">
              <div>
                <p className="text-sm font-bold text-clay">{step.number}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-navy">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy/70">{step.copy}</p>
              </div>
              <AppWindow title={step.screenTitle}>
                <ProductScreen index={index} />
              </AppWindow>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoupleDiscoverySection() {
  return (
    <section id="discover-couples" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionIntro
          label="Discover couples"
          title="See couples who feel like your kind of people."
          copy="Twogether will use shared interests, lifestyle, location, availability, and hangout preferences to help couples discover better-fit connections."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {discoveryCouples.map((couple) => (
            <article key={couple.names} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
              <div className="flex items-center gap-4 border-b border-navy/10 bg-sand p-5">
                <ProfileImage position={couple.position} className="h-16 w-16 shrink-0 rounded-full" alt={`${couple.names} shared couple profile`} />
                <div>
                  <h3 className="text-xl font-bold text-navy">{couple.names}</h3>
                  <p className="mt-1 text-sm text-navy/50">{couple.area}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">Their vibe</p>
                <p className="mt-2 text-sm leading-7 text-navy/70">{couple.vibe}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-clay">Shared interests</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {couple.interests.map((interest) => (
                    <span key={interest} className="rounded-full bg-sand px-3 py-1.5 text-xs font-semibold text-navy/75">
                      {interest}
                    </span>
                  ))}
                </div>
                <div className="mt-5 rounded-xl bg-cream p-4">
                  <p className="text-xs text-navy/50">Usually free</p>
                  <p className="mt-1 text-sm font-bold text-navy">{couple.availability}</p>
                </div>
                <div className="mt-5 rounded-md bg-navy px-4 py-3 text-center text-sm font-bold text-cream">Connect</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlanningFlowSection() {
  return (
    <section id="plan-together" className="scroll-mt-24 bg-navy py-16 text-cream sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionIntro
          label="Plan together"
          title="Turn 'we should hang out sometime' into a real plan."
          copy="The biggest friction is not wanting couple friends - it is getting from a good conversation to a confirmed place and time. Twogether is being built to make that step easier."
          light
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-cream/10 bg-cream text-navy shadow-soft">
          <div className="grid lg:grid-cols-[1fr_1fr_1fr_1.08fr]">
            <div className="border-b border-navy/10 p-5 lg:border-b-0 lg:border-r">
              <p className="text-sm font-bold text-clay">1. Choose a hangout type</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {hangoutTypes.map((type, index) => (
                  <span key={type} className={`rounded-full px-3 py-2 text-xs font-semibold ${index === 0 ? 'bg-clay text-cream' : 'bg-sand text-navy/70'}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-b border-navy/10 p-5 lg:border-b-0 lg:border-r">
              <p className="text-sm font-bold text-clay">2. Suggest a few places</p>
              <div className="mt-4 grid gap-2">
                {suggestedPlaces.map((place, index) => (
                  <div key={place} className={`rounded-lg border px-3 py-3 text-sm font-semibold ${index === 0 ? 'border-clay bg-clay/10' : 'border-navy/10 bg-white text-navy/70'}`}>
                    {place}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-b border-navy/10 p-5 lg:border-b-0 lg:border-r">
              <p className="text-sm font-bold text-clay">3. Pick day and time options</p>
              <div className="mt-4 grid gap-2">
                {dateOptions.map((date, index) => (
                  <div key={date} className={`rounded-lg border px-3 py-3 text-sm font-semibold ${index === 0 ? 'border-clay bg-clay/10' : 'border-navy/10 bg-white text-navy/70'}`}>
                    {date}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sand p-5 sm:p-6">
              <p className="text-sm font-bold text-clay">4. Confirm the Twogether plan</p>
              <div className="mt-4 rounded-xl bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage">Confirmed by both couples</p>
                <h3 className="mt-3 text-xl font-bold text-navy">Dinner with Josh &amp; Emily</h3>
                <p className="mt-4 text-sm font-semibold text-navy/70">Friday at 6:30 PM</p>
                <p className="mt-1 text-sm text-navy/60">Henderson restaurant</p>
                <div className="mt-5 rounded-md bg-navy px-4 py-3 text-center text-sm font-bold text-cream">Plan confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlanCategoriesSection() {
  return (
    <section id="what-to-plan" className="scroll-mt-24 bg-sand py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionIntro
          label="What couples can plan"
          title="Start with the kind of hangout that fits everyone."
          copy="From an easy first coffee to a small group outing, the goal is a plan couples can actually picture themselves doing."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {planCategories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-navy/10 bg-cream p-6 shadow-sm">
              <h3 className="text-lg font-bold text-navy">{category.title}</h3>
              <div className="mt-5 grid gap-3">
                {category.items.map((item) => (
                  <p key={item} className="border-l-2 border-clay pl-3 text-sm leading-6 text-navy/70">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-base font-semibold leading-8 text-navy">
          Couples stay in control. Twogether helps suggest, simplify, and coordinate - it does not take over the plan.
        </p>
      </div>
    </section>
  );
}

export function MembershipSection() {
  return (
    <section id="membership" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionIntro
          label="Founding membership"
          title="A clearer direction for access and early value."
          copy="Founding pricing is being tested before the full platform launches. The goal is to learn what couples value enough to use, recommend, and pay for."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {memberships.map((membership) => (
            <article
              key={membership.title}
              className={`rounded-2xl border p-6 shadow-sm ${membership.featured ? 'border-clay bg-navy text-cream' : 'border-navy/10 bg-white text-navy'}`}
            >
              <p className={`text-xs font-bold uppercase tracking-[0.16em] ${membership.featured ? 'text-sage-light' : 'text-clay'}`}>{membership.note}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight">{membership.title}</h3>
              <p className="mt-4 text-3xl font-bold">{membership.price}</p>
              <p className={`mt-4 text-sm leading-7 ${membership.featured ? 'text-cream/70' : 'text-navy/70'}`}>{membership.copy}</p>
              <div className="mt-6 grid gap-3">
                {membership.features.map((feature) => (
                  <p key={feature} className={`border-l-2 pl-3 text-sm leading-6 ${membership.featured ? 'border-sage-light text-cream/75' : 'border-clay text-navy/70'}`}>
                    {feature}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-navy/10 bg-sand p-5 text-sm leading-7 text-navy/70">
          Pricing is being validated and may change before public launch. Limited launch promotions may be tested with founding couples.
        </div>
        <Link href="#founding-couples" className="button-primary mt-8">
          Join the Founding Couples List
        </Link>
      </div>
    </section>
  );
}

export function VenuePartnershipSection() {
  return (
    <section id="venues" className="scroll-mt-24 bg-sand py-16 sm:py-20 lg:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
        <div>
          <SectionIntro
            label="Restaurants and venues"
            title="Be the place couples choose when they're ready to make plans."
            copy="Twogether helps local couples move from connection to real-world plans. Restaurants, coffee shops, lounges, activity venues, and hospitality partners can be featured when couples are deciding where to go."
          />
          <Link href="#venue-partner" className="button-primary mt-8">
            Become a Venue Partner
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {venueModels.map((model, index) => (
            <article key={model} className="rounded-2xl border border-navy/10 bg-cream p-5 shadow-sm">
              <p className="text-sm font-bold text-clay">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-bold text-navy">{model}</h3>
            </article>
          ))}
          <article className="rounded-2xl bg-navy p-6 text-cream sm:col-span-2">
            <h3 className="font-serif text-2xl">Low-friction early partnerships</h3>
            <p className="mt-4 text-sm leading-7 text-cream/70">
              Early partners do not need to commit to a heavy paid package. The first goal is to bring quality local couples to great places and test offers that make the experience better.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function TrustSafetySection() {
  return (
    <section id="trust" className="scroll-mt-24 bg-navy py-16 text-cream sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <SectionIntro
          label="Trust and community"
          title="Friendship-first, with clear guardrails."
          copy="Twogether is designed for established couples looking for genuine friendships, shared experiences, and local community. It is not a dating app, hookup app, swinger app, or adult lifestyle platform."
          light
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {trustGuardrails.map((guardrail) => (
            <div key={guardrail} className="rounded-xl border border-cream/10 bg-cream/[0.07] p-4 text-sm font-semibold leading-6 text-cream/80">
              {guardrail}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
