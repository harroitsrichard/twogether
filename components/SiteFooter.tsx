const footerLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#couples", label: "Discover Couples" },
  { href: "#experiences", label: "Experiences" },
  { href: "#perks", label: "Partner Perks" },
  { href: "#plans", label: "Shared Plans" },
  { href: "#waitlist", label: "Founding Couples List" },
  { href: "#venue-partner", label: "Venue Partners" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy py-12 text-cream">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-bold tracking-tight text-cream">Twogether</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-cream/70">
            Twogether helps couples find similar couples, build meaningful friendships, and make real-world plans together.
          </p>
        </div>

        <nav className="grid gap-3 text-sm" aria-label="Footer navigation">
          <p className="font-semibold text-cream">Navigate</p>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-cream/65 transition hover:text-cream">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-cream/65">
          <p className="font-semibold text-cream">Las Vegas Founding Community</p>
          <p className="mt-3 leading-7">
            Founding couples and local partners are helping shape the first Twogether community.
          </p>
          <p className="mt-8">© 2026 Twogether. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
