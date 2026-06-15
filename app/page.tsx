import Image from "next/image";
import { CouplesWaitlistForm } from "@/components/CouplesWaitlistForm";
import { FAQ } from "@/components/FAQ";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VenuePartnerForm } from "@/components/VenuePartnerForm";

const heroImage = "/images/twogether-group-experience-hero.png";
const profileImage = "/images/twogether-couple-profiles.png";

const flowSteps = [
  {
    title: "Discover Couples",
    copy: "Browse like-minded couples nearby.",
  },
  {
    title: "Connect",
    copy: "Start a natural conversation.",
  },
  {
    title: "Plan Together",
    copy: "Choose a place, activity, and time.",
  },
  {
    title: "Enjoy Experiences",
    copy: "Meet up around something you already love.",
  },
  {
    title: "Build Friendships",
    copy: "Turn one good plan into a richer social life.",
  },
];

const coupleProfiles = [
  {
    name: "The Riveras",
    city: "Las Vegas, NV",
    tags: ["Foodie", "Live Music", "Weekend Trips"],
    position: "0% 0%",
  },
  {
    name: "The Chens",
    city: "Henderson, NV",
    tags: ["Dogs", "Coffee", "Travel"],
    position: "100% 0%",
  },
  {
    name: "The Johnsons",
    city: "Summerlin, NV",
    tags: ["Pickleball", "Trivia", "Brunch"],
    position: "0% 100%",
  },
  {
    name: "The Millers",
    city: "North Las Vegas, NV",
    tags: ["Board Games", "Breweries", "Hiking"],
    position: "100% 100%",
  },
];

const experienceCategories = [
  "Restaurants",
  "Coffee",
  "Trivia",
  "Pickleball",
  "Breweries",
  "Live Music",
  "Game Nights",
  "Weekend Activities",
];

const partnerOffers = [
  {
    name: "The Local Brewery",
    offer: "15% Off",
    detail: "Your entire bill",
    initials: "LB",
  },
  {
    name: "Wildflower Coffee",
    offer: "BOGO Drinks",
    detail: "Buy one, get one",
    initials: "WC",
  },
  {
    name: "Pickleball Club",
    offer: "20% Off",
    detail: "Court rentals",
    initials: "PC",
  },
];

const sharedPlans = [
  {
    title: "Trivia Night",
    meta: "Friday · 7:00 PM",
    location: "Downtown Arts District",
    couples: "2 couples going",
    position: "24% 48%",
  },
  {
    title: "Board Game Night",
    meta: "Saturday · 6:30 PM",
    location: "Henderson",
    couples: "3 couples going",
    position: "42% 48%",
  },
  {
    title: "Brunch Meetup",
    meta: "Sunday · 11:00 AM",
    location: "Summerlin",
    couples: "4 couples going",
    position: "60% 50%",
  },
  {
    title: "Pickleball Session",
    meta: "Saturday · 9:00 AM",
    location: "Green Valley",
    couples: "3 couples going",
    position: "78% 48%",
  },
  {
    title: "Food Hall Meetup",
    meta: "Sunday · 12:00 PM",
    location: "Downtown Las Vegas",
    couples: "5 couples going",
    position: "50% 52%",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CategoryIcon({ label }: { label: string }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-full bg-cream text-sm font-bold text-clay">
      {label
        .split(" ")
        .map((word) => word[0])
        .join("")}
    </div>
  );
}

function ProfileImage({
  position,
  className = "",
  alt = "",
}: {
  position: string;
  className?: string;
  alt?: string;
}) {
  return (
    <div
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      className={`bg-sand bg-cover ${className}`}
      style={{
        backgroundImage: `url(${profileImage})`,
        backgroundPosition: position,
        backgroundSize: "200% 200%",
      }}
    />
  );
}

function PlanImage({ position, title }: { position: string; title: string }) {
  return (
    <div
      role="img"
      aria-label={`${title} shared plan photo`}
      className="aspect-[4/3] bg-cover"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: position,
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="overflow-hidden border-b border-navy/10">
          <div className="container-page grid min-h-[calc(100svh-4rem)] items-center gap-12 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:py-14">
            <div className="max-w-2xl">
              <h1 className="display-heading text-navy">Every Couple Needs Friends Who Are Couples.</h1>
              <p className="body-large mt-6 max-w-xl">
                Twogether helps couples connect with like-minded couples and discover amazing places
                and activities—with exclusive partner discounts.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#waitlist" className="button-primary">
                  Join the Founding Couples List
                </a>
                <a href="#venue-partner" className="button-secondary">
                  For Restaurants &amp; Venues
                </a>
              </div>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {coupleProfiles.map((profile) => (
                    <ProfileImage
                      key={profile.name}
                      position={profile.position}
                      alt=""
                      className="h-11 w-11 rounded-full border-2 border-cream"
                    />
                  ))}
                </div>
                <p className="max-w-xs text-sm font-semibold leading-6 text-navy/70">
                  Founding couples in Las Vegas and growing.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-navy/10 bg-sand shadow-soft lg:min-h-[560px]">
                <Image
                  src={heroImage}
                  alt="Several couples laughing together at a lively local food hall"
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-4 right-4 rounded-2xl border border-navy/10 bg-cream/95 p-4 shadow-soft backdrop-blur sm:left-8 sm:right-auto sm:w-[430px]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-bold text-navy">Discover Couples</p>
                  <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-bold text-navy">
                    Social discovery
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {coupleProfiles.slice(0, 3).map((profile) => (
                    <article key={profile.name} className="rounded-xl bg-white p-2 shadow-sm">
                      <ProfileImage
                        position={profile.position}
                        className="aspect-[4/3] rounded-lg"
                        alt={`${profile.name} couple profile photo`}
                      />
                      <p className="mt-2 text-xs font-bold text-navy">{profile.name}</p>
                      <p className="text-[0.68rem] text-navy/55">{profile.city}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-sand py-16 sm:py-20">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-heading text-navy">How Twogether Works</h2>
              <p className="body-large mt-4">
                A simple path from meeting like-minded couples to building meaningful friendships.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {flowSteps.map((step, index) => (
                <article key={step.title} className="relative rounded-2xl bg-cream p-5 text-center shadow-sm">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy text-lg font-bold text-cream">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-navy/65">{step.copy}</p>
                  {index < flowSteps.length - 1 ? (
                    <span className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-clay md:block">
                      <ArrowIcon />
                    </span>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="couples" className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <h2 className="section-heading text-navy">Discover Like-Minded Couples</h2>
                <p className="body-large mt-5">
                  Browse shared profiles by city, interests, and lifestyle tags. The experience feels
                  warm, social, and community-driven.
                </p>
              </div>
              <p className="max-w-xl text-base leading-8 text-navy/65 lg:justify-self-end">
                Couples stay in control of who they connect with, what they explore, and which
                real-world plans make sense for their social life.
              </p>
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
                    <h3 className="text-lg font-bold text-navy">{profile.name}</h3>
                    <p className="mt-1 text-sm text-navy/55">{profile.city}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-navy/75">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiences" className="bg-sand py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-heading text-navy">Explore Local Experiences Together</h2>
              <p className="body-large mt-5">
                Experiences give couples an easy reason to meet. They support friendships instead
                of becoming the whole product.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {experienceCategories.map((category) => (
                <article
                  key={category}
                  className="flex items-center gap-4 rounded-2xl border border-navy/10 bg-cream p-5 shadow-sm"
                >
                  <CategoryIcon label={category} />
                  <h3 className="text-base font-bold text-navy">{category}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="perks" className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <h2 className="section-heading text-navy">Partner Discounts Add Real Value</h2>
                <p className="body-large mt-5">
                  Local partner offers help couples try new places while giving restaurants,
                  cafes, and activity venues a natural way to welcome friendly groups.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {partnerOffers.map((offer) => (
                <article key={offer.name} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-5">
                    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-navy text-lg font-bold text-cream">
                      {offer.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy/60">{offer.name}</p>
                      <h3 className="mt-2 text-3xl font-bold text-navy">{offer.offer}</h3>
                      <p className="mt-2 text-sm text-navy/60">{offer.detail}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="bg-navy py-16 text-cream sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-heading text-cream">Real Plans. Real Couples. Real Friendships.</h2>
              <p className="mt-5 text-base leading-8 text-cream/72 sm:text-lg">
                Plans are coordinated between couples, shaped around shared interests, and grounded
                in places people already want to go.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {sharedPlans.map((plan) => (
                <article key={plan.title} className="overflow-hidden rounded-2xl border border-cream/12 bg-cream/[0.07]">
                  <PlanImage position={plan.position} title={plan.title} />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-cream">{plan.title}</h3>
                    <p className="mt-3 text-sm text-cream/70">{plan.meta}</p>
                    <p className="mt-1 text-sm text-cream/70">{plan.location}</p>
                    <p className="mt-4 text-sm font-semibold text-sage-light">{plan.couples}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
              <div>
                <h2 className="section-heading text-navy">Be Part of the Founding Couples.</h2>
                <p className="body-large mt-5">
                  Help shape the future of couple friendships in Las Vegas. Early access includes
                  couple discovery, local experiences, and partner perks.
                </p>
              </div>
              <CouplesWaitlistForm />
            </div>
          </div>
        </section>

        <section id="venue-partner" className="scroll-mt-24 bg-sand py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
              <div>
                <h2 className="section-heading text-navy">For Local Restaurants &amp; Venues</h2>
                <p className="body-large mt-5">
                  Twogether helps local partners become part of couples’ real-world plans through
                  discovery, perks, and shared experiences.
                </p>
              </div>
              <VenuePartnerForm />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="mb-10 max-w-3xl">
              <h2 className="section-heading text-navy">Good to Know</h2>
              <p className="body-large mt-5">
                Clear answers for couples and local partners as the founding community grows.
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
