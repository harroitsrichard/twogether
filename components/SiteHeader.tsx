const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#couples", label: "Couples" },
  { href: "#experiences", label: "Experiences" },
  { href: "#perks", label: "Perks" },
  { href: "#plans", label: "Plans" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/[0.92] backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="group inline-flex items-center gap-3" aria-label="Twogether home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-cream">
            <span className="block h-3 w-3 rounded-full bg-current shadow-[10px_0_0_currentColor,5px_8px_0_currentColor]" />
          </span>
          <span className="font-serif text-2xl font-bold leading-none tracking-tight text-navy">
            Twogether
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy/70 transition hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#waitlist" className="button-primary hidden sm:inline-flex">
          Join the List
        </a>
      </div>
    </header>
  );
}
