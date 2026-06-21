import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/MarketingVisuals";
import { CouplesWaitlistForm } from "@/components/CouplesWaitlistForm";
import { FAQ } from "@/components/FAQ";
import {
  CoupleDiscoverySection,
  GapSection,
  MembershipSection,
  PlanCategoriesSection,
  PlanningFlowSection,
  ProductPreviewSection,
  TrustSafetySection,
  VenuePartnershipSection,
} from "@/components/HomeProductSections";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VenuePartnerForm } from "@/components/VenuePartnerForm";
import { heroImage } from "@/lib/marketingContent";

const productLoop = ["Profile", "Discover", "Connect", "Pick a spot", "Make it happen"];

function HeroProductLoop() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-bold text-cream/75 sm:text-sm">
      {productLoop.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-cream/20 bg-cream/10 px-3 py-2">{step}</span>
          {index < productLoop.length - 1 ? (
            <span className="text-clay" aria-hidden="true">
              <ArrowIcon />
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-clay/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/10 shadow-soft">
        <div className="relative min-h-[360px] sm:min-h-[520px]">
          <Image
            src={heroImage}
            alt="Several couples laughing together during a lively local hangout"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-xl border border-cream/20 bg-navy/80 p-4 backdrop-blur">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage-light">A Twogether plan</p>
          <p className="mt-2 text-sm font-bold text-cream">Two couples. A place everyone likes. A time everyone confirmed.</p>
        </div>
      </div>
    </div>
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
              <h1 className="display-heading text-cream">Find your couple crew.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-cream/80 sm:text-lg">
                Twogether helps couples create a shared profile, discover similar couples nearby,
                connect naturally, and make real plans at local restaurants, activities, and venues.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#founding-couples"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-clay px-6 py-3 text-sm font-semibold text-cream transition hover:bg-clay-dark focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-navy sm:whitespace-nowrap"
                >
                  Join the Founding Couples List
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream hover:text-navy focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-navy sm:whitespace-nowrap"
                >
                  See How It Works
                </Link>
              </div>
              <Link href="#venues" className="mt-5 inline-flex text-sm font-semibold text-cream/70 underline decoration-clay underline-offset-4 hover:text-cream">
                For Restaurants &amp; Venues
              </Link>
              <HeroProductLoop />
            </div>
            <HeroVisual />
          </div>
        </section>

        <GapSection />
        <ProductPreviewSection />
        <CoupleDiscoverySection />
        <PlanningFlowSection />
        <PlanCategoriesSection />
        <MembershipSection />
        <VenuePartnershipSection />
        <TrustSafetySection />

        <section id="founding-couples" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24">
          <div className="container-page grid gap-8 lg:grid-cols-[0.66fr_1.34fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Founding couples</p>
              <h2 className="section-heading mt-3">Help shape the first Las Vegas network.</h2>
              <p className="body-large mt-5">
                Tell us what kind of couple friends, local hangouts, planning support, and pricing would make Twogether worth using.
              </p>
            </div>
            <CouplesWaitlistForm />
          </div>
        </section>

        <section id="venue-partner" className="scroll-mt-24 bg-sand py-16 sm:py-20 lg:py-24">
          <div className="container-page grid gap-8 lg:grid-cols-[0.66fr_1.34fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Early venue partners</p>
              <h2 className="section-heading mt-3">Test useful offers without a heavy package.</h2>
              <p className="body-large mt-5">
                Start with a perk, featured placement, group offer, or preferred experience and learn what brings quality local couples through the door.
              </p>
            </div>
            <VenuePartnerForm />
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">FAQ</p>
              <h2 className="section-heading mt-3">What is live now, and what comes next?</h2>
              <p className="body-large mt-5">
                Clear answers about the founding network, product status, couple control, pricing, and local partners.
              </p>
            </div>
            <FAQ />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
