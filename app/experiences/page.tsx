import type { Metadata } from "next";
import { CategoryIcon } from "@/components/MarketingVisuals";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  experienceCategories,
  featuredLocalSpots,
  partnerOffers,
} from "@/lib/marketingContent";

export const metadata: Metadata = {
  title: "Experiences & Local Perks | Twogether",
  description:
    "Explore how Twogether helps couples find restaurants, activities, featured local spots, and partner perks for shared plans.",
};

export default function ExperiencesPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="border-b border-navy/10 py-16 sm:py-20 lg:py-24">
          <div className="container-page max-w-4xl">
            <h1 className="display-heading">Find places worth enjoying together.</h1>
            <p className="body-large mt-6 max-w-2xl">
              Twogether uses restaurants, activities, local experiences, and partner perks to help
              couples turn friendly interest into real-world plans.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="max-w-3xl">
              <h2 className="section-heading">Experiences support friendships.</h2>
              <p className="body-large mt-5">
                The place is not the whole product. It is the shared reason couples can get
                together, relax, and start building a real circle.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {experienceCategories.map((category) => (
                <article
                  key={category.title}
                  className="flex gap-5 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
                >
                  <CategoryIcon label={category.title} />
                  <div>
                    <h3 className="text-lg font-bold text-navy">{category.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy/70">{category.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand py-16 sm:py-20 lg:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <h2 className="section-heading">Featured local spots.</h2>
              <p className="body-large mt-5">
                Couples can use Twogether again and again to find simple, social places to go.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredLocalSpots.map((spot) => (
                <article key={spot} className="rounded-2xl border border-navy/10 bg-cream p-5 shadow-sm">
                  <p className="text-base font-bold text-navy">{spot}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <h2 className="section-heading">Partner perks add repeat value.</h2>
                <p className="body-large mt-5">
                  Local offers give couples more reasons to try new places and keep planning
                  together.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {partnerOffers.map((offer) => (
                <article key={offer.name} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-navy text-lg font-bold text-cream">
                    {offer.initials}
                  </div>
                  <p className="mt-6 text-sm font-semibold text-navy/60">{offer.name}</p>
                  <h3 className="mt-2 text-3xl font-bold text-navy">{offer.offer}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy/60">{offer.detail}</p>
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
