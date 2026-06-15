const footerLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#plans", label: "What Couples Can Plan" },
  { href: "#founding-members", label: "Membership" },
  { href: "#waitlist", label: "Founding Couples List" },
  { href: "#venue-partner", label: "Venue Partners" },
  { href: "#faq", label: "FAQ" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl uppercase tracking-[0.22em] text-copper">Twogether</p>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.42em] text-champagne">
            Couple Friendship
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Twogether helps couples find similar couples, build real friendships, and make real-world plans at local restaurants, activities, and venues.
          </p>
        </div>

        <nav className="grid gap-3 text-sm" aria-label="Footer navigation">
          <p className="font-semibold text-white">Navigate</p>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white/65 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-white/65">
          <p className="font-semibold text-white">Las Vegas Validation</p>
          <p className="mt-3 leading-7">Founding couple and venue partner conversations are open before the full platform is built.</p>
          <p className="mt-8">© 2026 Twogether. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
