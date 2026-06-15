import Image from "next/image";
import { heroImage, profileImage } from "@/lib/marketingContent";

export function ArrowIcon() {
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

export function CategoryIcon({ label }: { label: string }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-full bg-cream text-sm font-bold text-clay">
      {label
        .split(" ")
        .map((word) => word[0])
        .join("")}
    </div>
  );
}

export function ProfileImage({
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

export function PlanImage({ position, title }: { position: string; title: string }) {
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

export function HeroCommunityImage() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-navy/10 bg-sand shadow-soft sm:min-h-[460px] lg:min-h-[540px]">
      <Image
        src={heroImage}
        alt="Several couples laughing together at a lively local food hall"
        fill
        priority
        sizes="(min-width: 1024px) 54vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
