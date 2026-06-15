import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twogether | Couples Friendship & Local Experiences",
  description:
    "Twogether helps couples discover like-minded couples, explore local experiences, receive partner discounts, and build meaningful friendships through real-world plans.",
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
