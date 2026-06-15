import Link from "next/link";

const navLinks = [
  { href: "/couples", label: "Discover Couples" },
  { href: "/experiences", label: "Experiences" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/venues", label: "For Venues" },
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

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
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

        <Link
          href="/join"
          className={`hidden min-h-12 items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 sm:inline-flex sm:whitespace-nowrap ${
            isDark
              ? "bg-clay text-cream hover:bg-clay-dark focus:ring-clay focus:ring-offset-2 focus:ring-offset-navy"
              : "bg-navy text-cream hover:bg-navy-soft focus:ring-navy focus:ring-offset-2 focus:ring-offset-cream"
          }`}
        >
          Join Waitlist
        </Link>
      </div>
    </header>
  );
}
