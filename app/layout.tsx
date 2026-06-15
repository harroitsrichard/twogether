import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twogether | Couples Social Planning Platform",
  description:
    "A Las Vegas couples social planning platform for finding compatible couples and planning better dinners, activities, and nights out together.",
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
