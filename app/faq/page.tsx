import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Twogether",
  description:
    "Answers about Twogether's founding community, couple profiles, product status, planning, membership, and local venue partnerships.",
};

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-cream text-navy">
        <section className="border-b border-navy/10 py-16 sm:py-20 lg:py-24">
          <div className="container-page max-w-4xl">
            <h1 className="display-heading">Questions, answered clearly.</h1>
            <p className="body-large mt-6 max-w-2xl">
              Learn who Twogether is for, what is being built, how couples stay in control, and
              what founding membership currently means.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-page">
            <FAQ />
          </div>
        </section>

        <section className="bg-navy py-14 text-cream sm:py-16">
          <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-serif text-3xl leading-tight text-cream sm:text-4xl">Help shape what comes next.</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-cream/70">
                Founding couples are helping define the profiles, planning tools, and community standards that matter most.
              </p>
            </div>
            <Link href="/join" className="inline-flex min-h-12 items-center justify-center rounded-md bg-clay px-6 py-3 text-sm font-semibold text-cream transition hover:bg-clay-dark lg:shrink-0">
              Join the Founding Couples List
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
