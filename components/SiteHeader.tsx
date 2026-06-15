const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#plans", label: "What To Plan" },
  { href: "#founding-members", label: "Membership" },
  { href: "#venue-partner", label: "Venues" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#ead8c4]/80 bg-porcelain/[0.92] backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="group inline-flex flex-col" aria-label="Twogether home">
          <span className="font-serif text-xl uppercase leading-none tracking-[0.22em] text-copper">
            Twogether
          </span>
          <span className="text-[0.58rem] font-bold uppercase tracking-[0.42em] text-copper-dark">
            Couple Friendship
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-soft transition hover:text-copper"
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
