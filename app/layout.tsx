import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twogether | Find Couple Friends and Make Real Plans",
  description:
    "Create a shared couple profile, discover similar couples nearby, connect naturally, choose a local place or activity, and make real plans together.",
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
