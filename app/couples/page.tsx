import type { Metadata } from "next";
import Link from "next/link";
import { ProfileImage } from "@/components/MarketingVisuals";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { coupleProfiles, discoverySignals } from "@/lib/marketingContent";

export const metadata: Metadata = {
  title: "Discover Couples | Twogether",
  description:
    "See how Twogether helps couples discover quality couples through shared interests, lifestyle tags, conversation prompts, and quality controls.",
};

export default function CouplesPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="border-b border-navy/10 py-16 sm:py-20 lg:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <h1 className="display-heading">Meet quality couples with shared interests.</h1>
              <p className="body-large mt-6 max-w-xl">
                Twogether helps couples discover other couples through the interests, lifestyle
                cues, and plan-friendly details that make friendship feel natural.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">
                Discovery is built around friendship
              </p>
              <p className="mt-4 text-base leading-8 text-navy/70">
                Couples stay in control of who they reach out to, which conversations they start,
                and what plans they choose together.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="max-w-3xl">
              <h2 className="section-heading">Couple snapshots with real context.</h2>
              <p className="body-large mt-5">
                Profiles are designed to help couples understand shared interests, social pace,
                favorite hangouts, and what a good first plan could look like.
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
                    <p className="mt-1 text-sm text-navy/50">{profile.city}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-navy/75">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-2">
                      {profile.cues.map((cue) => (
                        <p key={cue} className="rounded-md bg-cream px-3 py-2 text-xs font-semibold text-navy/70">
                          {cue}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <h2 className="section-heading">How couples find their people.</h2>
                <p className="body-large mt-5">
                  Discovery should feel useful, warm, and grounded in real life.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {discoverySignals.map((signal) => (
                  <article key={signal.title} className="rounded-2xl border border-navy/10 bg-cream p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-navy">{signal.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy/70">{signal.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <h2 className="section-heading">Conversation starts with context.</h2>
              <p className="body-large mt-5">
                A good prompt gives couples an easy reason to reach out and a clear idea for what
                they might enjoy doing together.
              </p>
              <Link href="/join" className="button-primary mt-8">
                Join the founding couples list
              </Link>
            </div>
            <div className="grid gap-4">
              {coupleProfiles.map((profile) => (
                <article key={profile.prompt} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                  <p className="text-sm font-bold text-clay">{profile.name}</p>
                  <p className="mt-2 text-base leading-7 text-navy/70">{profile.prompt}</p>
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
