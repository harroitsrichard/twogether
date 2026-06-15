import Link from "next/link";
import {
  ArrowIcon,
  HeroCommunityImage,
  ProfileImage,
} from "@/components/MarketingVisuals";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  coupleProfiles,
  homepageHighlights,
  partnerOffers,
  sharedPlans,
  shortHowItWorks,
} from "@/lib/marketingContent";

function ProductLoopPreview() {
  const couple = coupleProfiles[2];
  const plan = sharedPlans[0];
  const offer = partnerOffers[0];

  return (
    <div className="relative z-10 mx-4 -mt-20 rounded-2xl border border-navy/10 bg-cream/95 p-4 shadow-soft backdrop-blur sm:mx-8 sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold text-navy">Discover couples. Make plans. Enjoy local perks.</p>
        <span className="w-fit rounded-full bg-sage/20 px-3 py-1 text-xs font-bold text-navy">
          Twogether loop
        </span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        <article className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">Quality couple</p>
          <div className="mt-3 flex items-center gap-3">
            <ProfileImage
              position={couple.position}
              alt={`${couple.name} couple preview`}
              className="h-12 w-12 shrink-0 rounded-full"
            />
            <div>
              <p className="text-sm font-bold text-navy">{couple.name}</p>
              <p className="text-xs text-navy/50">{couple.city}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {couple.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full bg-sand px-2.5 py-1 text-[0.68rem] font-semibold text-navy/75">
                {tag}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">Shared plan</p>
          <h3 className="mt-3 text-base font-bold text-navy">{plan.title}</h3>
          <p className="mt-2 text-sm leading-6 text-navy/60">{plan.time}</p>
          <p className="text-sm leading-6 text-navy/60">{plan.location}</p>
          <p className="mt-3 text-sm font-semibold text-sage">{plan.couples}</p>
        </article>

        <article className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">Local perk</p>
          <p className="mt-3 text-sm font-semibold text-navy/60">{offer.name}</p>
          <h3 className="mt-1 text-2xl font-bold text-navy">{offer.offer}</h3>
          <p className="mt-2 text-sm leading-6 text-navy/60">{offer.detail}</p>
        </article>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="overflow-hidden border-b border-navy/10 pb-16">
          <div className="container-page grid min-h-[calc(100svh-4rem)] items-center gap-12 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:py-14">
            <div className="max-w-2xl">
              <h1 className="display-heading text-navy">Every Couple Needs Friends Who Are Couples.</h1>
              <p className="body-large mt-6 max-w-xl">
                Twogether helps couples meet quality couples, build real friendships, and make
                real-world plans together.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/join" className="button-primary">
                  Join the founding couples list
                </Link>
                <Link href="/how-it-works" className="button-secondary">
                  See how it works
                </Link>
              </div>
              <p className="mt-7 max-w-lg text-sm font-semibold leading-6 text-navy/70">
                Built for couples who want a richer social life with people they genuinely enjoy
                spending time with.
              </p>
            </div>

            <div>
              <HeroCommunityImage />
              <ProductLoopPreview />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-5 lg:grid-cols-3">
              {homepageHighlights.map((highlight) => (
                <article key={highlight.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <h2 className="font-serif text-3xl leading-tight text-navy">{highlight.title}</h2>
                  <p className="mt-4 text-base leading-8 text-navy/70">{highlight.copy}</p>
                  <Link
                    href={highlight.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-clay transition hover:text-clay-dark"
                  >
                    {highlight.cta}
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-heading text-navy">How Twogether Works</h2>
              <p className="body-large mt-5">
                A short path from discovering quality couples to making plans and building
                meaningful friendships.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {shortHowItWorks.map((step, index) => (
                <article key={step.title} className="relative rounded-2xl bg-cream p-5 text-center shadow-sm">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy text-lg font-bold text-cream">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-navy/70">{step.copy}</p>
                  {index < shortHowItWorks.length - 1 ? (
                    <span className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-clay md:block">
                      <ArrowIcon />
                    </span>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-cream sm:py-20 lg:py-24">
          <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <h2 className="section-heading text-cream">Start with the founding community.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-cream/70 sm:text-lg">
                Join early to help shape how couples discover each other, choose local experiences,
                use partner perks, and keep building friendships over time.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/join" className="button-primary bg-cream text-navy hover:bg-sand">
                  Join the founding couples list
                </Link>
                <Link
                  href="/venues"
                  className="button-secondary border-cream/30 text-cream hover:border-cream hover:bg-cream hover:text-navy"
                >
                  For restaurants and venues
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {partnerOffers.map((offer) => (
                <article key={offer.name} className="rounded-2xl border border-cream/10 bg-cream/[0.07] p-5">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-cream text-sm font-bold text-navy">
                    {offer.initials}
                  </div>
                  <p className="mt-5 text-sm font-semibold text-cream/70">{offer.name}</p>
                  <h3 className="mt-2 text-2xl font-bold text-cream">{offer.offer}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/70">{offer.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
