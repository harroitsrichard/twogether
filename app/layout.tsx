import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twogether | Find Your Couple Crew",
  description:
    "Twogether helps couples meet like-minded couples, build real friendships, and make shared plans at local restaurants, activities, and venues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*
          Analytics-ready placeholder:
          - Vercel Analytics: install @vercel/analytics and render <Analytics /> here.
          - Google Analytics or Plausible: add their script component here after choosing a tool.
          Keep analytics lightweight until the validation funnel is proven.
        */}
        {children}
      </body>
    </html>
  );
}
