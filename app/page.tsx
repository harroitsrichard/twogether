import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, PlanImage, ProfileImage } from "@/components/MarketingVisuals";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { heroImage } from "@/lib/marketingContent";

const steps = [
  {
    number: "01",
    title: "Discover couples",
    copy: "Find like-minded couples nearby through shared interests and everyday life.",
    icon: "discover",
  },
  {
    number: "02",
    title: "Connect naturally",
    copy: "Start a conversation with useful context already built in.",
    icon: "connect",
  },
  {
    number: "03",
    title: "Make a plan",
    copy: "Choose a place, activity, and time that work for both couples.",
    icon: "plan",
  },
  {
    number: "04",
    title: "Build your circle",
    copy: "Turn a good first hangout into meaningful friendship and community.",
    icon: "community",
  },
];

const pathways = [
  {
    title: "Meet couples like you",
    copy: "See how shared profiles help couples find people with similar interests, lifestyles, and social pace.",
    href: "/couples",
    linkLabel: "Discover Couples",
    image: "profiles",
  },
  {
    title: "Turn conversation into plans",
    copy: "Follow the Twogether flow from a first hello to a confirmed place and time.",
    href: "/how-it-works",
    linkLabel: "How It Works",
    image: "plan",
    position: "34% 52%",
  },
  {
    title: "Find local places to go",
    copy: "Explore restaurants, activities, local favorites, and future partner perks.",
    href: "/experiences",
    linkLabel: "Experiences",
    image: "plan",
    position: "58% 45%",
  },
  {
    title: "See membership options",
    copy: "Learn what is included in the free founding profile and planned paid membership options.",
    href: "/membership",
    linkLabel: "Membership",
    image: "plan",
    position: "82% 48%",
  },
];

function StepIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <span className="grid h-14 w-14 place-items-center rounded-full bg-sand text-sage" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        {name === "discover" ? (
          <>
            <circle cx="10.5" cy="10.5" r="5.5" {...common} />
            <path d="m15 15 4 4" {...common} />
          </>
        ) : null}
        {name === "connect" ? (
          <>
            <path d="M5 6.5h14v9H9l-4 3v-12Z" {...common} />
            <path d="M9 10h6M9 13h4" {...common} />
          </>
        ) : null}
        {name === "plan" ? (
          <>
            <rect x="4" y="5.5" width="16" height="14" rx="2" {...common} />
            <path d="M8 3.5v4M16 3.5v4M4 9.5h16M8 13h3M8 16h6" {...common} />
          </>
        ) : null}
        {name === "community" ? (
          <>
            <circle cx="8" cy="9" r="2.5" {...common} />
            <circle cx="16" cy="9" r="2.5" {...common} />
            <path d="M3.5 19c.3-3.1 2-5 4.5-5s4.2 1.9 4.5 5M11.5 19c.3-3.1 2-5 4.5-5s4.2 1.9 4.5 5" {...common} />
          </>
        ) : null}
      </svg>
    </span>
  );
}

function PathwayImage({ image, position, title }: { image: string; position?: string; title: string }) {
  if (image === "profiles") {
    return <ProfileImage position="0% 0%" className="aspect-[16/10] w-full" alt={`${title} preview`} />;
  }

  return (
    <div className="aspect-[16/10] overflow-hidden">
      <PlanImage position={position ?? "50% 50%"} title={title} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="border-b border-navy/10">
          <div className="container-page grid items-center gap-10 py-12 lg:min-h-[680px] lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:py-14">
            <div className="max-w-xl">
              <h1 className="display-heading">Find your couple crew.</h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-navy/70">
                Meet like-minded couples, make real plans, and build friendships around the things
                you already love to do.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/join" className="button-primary">
                  Join the Founding Couples List
                </Link>
                <Link href="/how-it-works" className="button-secondary">
                  See How It Works
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-navy/10 pt-5 text-sm font-semibold leading-6 text-navy/65">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage/20 text-sage" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <circle cx="8" cy="8" r="2.5" fill="currentColor" />
                    <circle cx="16" cy="8" r="2.5" fill="currentColor" />
                    <path d="M3.5 19c.2-4 1.8-6 4.5-6s4.3 2 4.5 6M11.5 19c.2-4 1.8-6 4.5-6s4.3 2 4.5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <span>Friendship-first. Built for established couples.</span>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-navy/10 bg-sand shadow-soft sm:min-h-[560px]">
              <Image
                src={heroImage}
                alt="A group of established couples laughing together at a lively local food hall"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="container-page">
            <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl leading-tight sm:text-4xl">
              Friendships that fit your life, in four simple steps.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((step, index) => (
                <article key={step.title} className="relative text-center">
                  <div className="flex justify-center">
                    <StepIcon name={step.icon} />
                  </div>
                  <p className="mt-4 text-sm font-bold text-clay">{step.number}</p>
                  <h3 className="mt-2 font-serif text-2xl leading-tight">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-navy/65">{step.copy}</p>
                  {index < steps.length - 1 ? (
                    <span className="absolute -right-4 top-5 hidden text-sage/60 lg:block" aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand py-14 sm:py-16 lg:py-20">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-heading">Explore Twogether</h2>
              <p className="mt-4 text-base leading-7 text-navy/65">
                Start with the part of the experience that matters most to you.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {pathways.map((pathway) => (
                <article key={pathway.title} className="overflow-hidden rounded-lg border border-navy/10 bg-cream shadow-sm">
                  <PathwayImage image={pathway.image} position={pathway.position} title={pathway.title} />
                  <div className="p-5">
                    <h3 className="font-serif text-2xl leading-tight">{pathway.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-navy/65">{pathway.copy}</p>
                    <Link href={pathway.href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-clay transition hover:text-clay-dark">
                      {pathway.linkLabel}
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-14 text-center text-cream sm:py-16">
          <div className="container-page">
            <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">Las Vegas is better together.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cream/70">
              Be part of the founding couples helping shape the first Twogether community.
            </p>
            <Link href="/join" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-clay px-6 py-3 text-sm font-semibold text-cream transition hover:bg-clay-dark focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-navy">
              Join the Founding Couples List
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
