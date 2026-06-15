import Image from "next/image";
import Link from "next/link";
import {
  ArrowIcon,
  CategoryIcon,
  ProfileImage,
} from "@/components/MarketingVisuals";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  coupleProfiles,
  experienceCategories,
  heroImage,
  homepageHighlights,
  partnerOffers,
  shortHowItWorks,
  twogetherExamples,
} from "@/lib/marketingContent";

function DownArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="mx-auto h-7 w-7 text-clay">
      <path
        d="M12 4v14m-6-6 6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function HeroEditorialVisual() {
  const labels = ["Brewery patio", "Trivia night", "Weekend brunch"];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-clay/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/10 shadow-soft">
        <div className="relative min-h-[360px] sm:min-h-[520px]">
          <Image
            src={heroImage}
            alt="Several couples laughing together during a lively local experience"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-4 flex flex-wrap justify-center gap-2 px-4">
          {labels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-cream/20 bg-navy/80 px-4 py-2 text-xs font-bold text-cream shadow-sm backdrop-blur"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TwogetherPlanCard() {
  return (
    <article className="rounded-[1.75rem] border border-navy/10 bg-white p-5 shadow-soft sm:p-7">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="rounded-2xl bg-cream p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Couple one</p>
          <h3 className="mt-3 text-2xl font-bold text-navy">Chris &amp; Taylor</h3>
          <p className="mt-2 text-sm leading-6 text-navy/70">Food, live music, walkable nights out.</p>
        </div>
        <span className="hidden text-clay sm:block">
          <ArrowIcon />
        </span>
        <div className="rounded-2xl bg-cream p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Couple two</p>
          <h3 className="mt-3 text-2xl font-bold text-navy">Jordan &amp; Ashley</h3>
          <p className="mt-2 text-sm leading-6 text-navy/70">New restaurants, trivia, low-key plans.</p>
        </div>
      </div>

      <div className="py-5">
        <DownArrow />
      </div>

      <div className="grid gap-5 overflow-hidden rounded-2xl bg-navy text-cream lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative min-h-56">
          <Image
            src={heroImage}
            alt="Couples sharing a lively local experience together"
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage-light">Shared plan</p>
          <h3 className="mt-3 font-serif text-4xl leading-tight text-cream">Dinner at Esther&apos;s Kitchen</h3>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-cream/75 sm:grid-cols-2">
            <p className="rounded-md bg-cream/[0.08] px-4 py-3">Tuesday 7:00 PM</p>
            <p className="rounded-md bg-cream/[0.08] px-4 py-3">15% Twogether Partner Offer</p>
          </div>
          <div className="mt-6 rounded-2xl bg-cream p-5 text-navy">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Plan confirmed</p>
            <p className="mt-2 text-base font-bold">Photo included, details shared, everyone knows where to meet.</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {twogetherExamples.map((example) => (
          <span key={example} className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-navy/75">
            {example}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader variant="dark" />
      <main id="top" className="bg-cream text-navy">
        <section className="overflow-hidden bg-navy text-cream">
          <div className="container-page grid min-h-[calc(100svh-4rem)] items-center gap-12 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:py-16">
            <div className="max-w-2xl">
              <h1 className="display-heading text-cream">Every Couple Needs Friends Who Are Couples.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-cream/80 sm:text-lg">
                Twogether helps couples meet quality couples, discover local experiences, and build
                meaningful friendships through real-world plans.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/join"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-clay px-6 py-3 text-sm font-semibold text-cream transition hover:bg-clay-dark focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-navy sm:whitespace-nowrap"
                >
                  Join the Founding Couples List
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream hover:text-navy focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-navy sm:whitespace-nowrap"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            <HeroEditorialVisual />
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-heading">The Social Life You&apos;ve Been Missing</h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {homepageHighlights.map((highlight) => (
                <article key={highlight.title} className="rounded-2xl border border-navy/10 bg-white p-7 text-center shadow-sm">
                  <h3 className="font-serif text-3xl leading-tight text-navy">{highlight.title}</h3>
                  <p className="mt-4 text-base leading-8 text-navy/70">{highlight.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand py-16 sm:py-20 lg:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <h2 className="section-heading">What A Twogether Looks Like</h2>
              <p className="body-large mt-5">
                This is the moment the idea becomes real: two couples, one shared plan, and a local
                experience worth saying yes to.
              </p>
            </div>
            <TwogetherPlanCard />
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-heading">How It Works</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {shortHowItWorks.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-navy text-base font-bold text-cream">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy">{step.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-cream sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <h2 className="section-heading text-cream">Experiences &amp; Perks</h2>
                <p className="mt-5 text-base leading-8 text-cream/70 sm:text-lg">
                  Couples join for quality people. They keep coming back for places, activities,
                  and local perks that make plans easier to say yes to.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {experienceCategories.map((category) => (
                <article key={category.title} className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.07] p-5">
                  <CategoryIcon label={category.title} />
                  <h3 className="text-base font-bold text-cream">{category.title}</h3>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {partnerOffers.map((offer) => (
                <article key={offer.name} className="rounded-2xl bg-cream p-5 text-navy">
                  <p className="text-sm font-semibold text-navy/60">{offer.name}</p>
                  <h3 className="mt-2 text-2xl font-bold text-navy">{offer.offer}</h3>
                  <p className="mt-3 text-sm leading-6 text-navy/70">{offer.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <h2 className="section-heading">Discover Quality Couples</h2>
                <p className="body-large mt-5">
                  Profile discovery comes after the destination is clear: shared interests, similar
                  lifestyle, and shared activities that make friendship easier to build.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {coupleProfiles.map((profile) => (
                <article key={profile.name} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                  <ProfileImage
                    position={profile.position}
                    className="aspect-[4/3]"
                    alt={`${profile.name} couple profile photo`}
                  />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-navy">{profile.name}</h3>
                        <p className="mt-1 text-sm text-navy/50">{profile.city}</p>
                      </div>
                      <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-bold text-navy">
                        Similar Lifestyle
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-navy/70">{profile.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-navy/75">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 rounded-xl bg-cream p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">
                        You&apos;d probably get along if
                      </p>
                      <p className="mt-2 text-sm leading-6 text-navy/70">{profile.prompt}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="rounded-[2rem] bg-navy p-8 text-center text-cream shadow-soft sm:p-12">
              <h2 className="section-heading text-cream">Your Next Great Friendship Could Start Here.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cream/75 sm:text-lg">
                Join the first wave of couples building the Twogether community.
              </p>
              <Link href="/join" className="button-primary mt-8 bg-cream text-navy hover:bg-sand">
                Get Early Access
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
