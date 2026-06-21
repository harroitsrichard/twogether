import Link from "next/link";

const navLinks = [
  { href: "/couples", label: "Discover Couples" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/experiences", label: "Experiences" },
  { href: "/membership", label: "Membership" },
  { href: "/venues", label: "Venues" },
  { href: "/faq", label: "FAQ" },
];

type SiteHeaderProps = {
  variant?: "light" | "dark";
};

export function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const isDark = variant === "dark";

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur ${
        isDark ? "border-cream/10 bg-navy/[0.96]" : "border-navy/10 bg-cream/[0.92]"
      }`}
    >
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="Twogether home">
          <span className={`grid h-9 w-9 place-items-center rounded-full ${isDark ? "bg-cream text-navy" : "bg-navy text-cream"}`}>
            <span className="block h-3 w-3 rounded-full bg-current shadow-[10px_0_0_currentColor,5px_8px_0_currentColor]" />
          </span>
          <span className={`font-serif text-2xl font-bold leading-none tracking-tight ${isDark ? "text-cream" : "text-navy"}`}>
            Twogether
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition ${
                isDark ? "text-cream/70 hover:text-cream" : "text-navy/70 hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 xl:ml-0">
          <details className="group relative xl:hidden">
            <summary
              className={`grid h-11 w-11 cursor-pointer list-none place-items-center rounded-md border transition [&::-webkit-details-marker]:hidden ${
                isDark ? "border-cream/25 text-cream" : "border-navy/20 text-navy"
              }`}
              aria-label="Open navigation menu"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M5 7h14M5 12h14M5 17h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
              </svg>
            </summary>
            <nav
              className={`absolute right-0 top-14 z-50 grid w-64 gap-1 rounded-lg border p-2 shadow-soft ${
                isDark ? "border-cream/10 bg-navy text-cream" : "border-navy/10 bg-cream text-navy"
              }`}
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md px-4 py-3 text-sm font-semibold transition hover:bg-sand hover:text-navy">
                  {link.label}
                </Link>
              ))}
              <Link href="/join" className={`mt-1 rounded-md px-4 py-3 text-sm font-semibold ${isDark ? "bg-clay text-cream" : "bg-navy text-cream"}`}>
                Join the List
              </Link>
            </nav>
          </details>

          <Link
            href="/join"
            className={`hidden min-h-12 items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 sm:inline-flex sm:whitespace-nowrap ${
              isDark
                ? "bg-clay text-cream hover:bg-clay-dark focus:ring-clay focus:ring-offset-2 focus:ring-offset-navy"
                : "bg-navy text-cream hover:bg-navy-soft focus:ring-navy focus:ring-offset-2 focus:ring-offset-cream"
            }`}
          >
            Join the List
          </Link>
        </div>
      </div>
    </header>
  );
}
