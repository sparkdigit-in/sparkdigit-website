import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sparkdigit — Your Digital Growth Partner",
  description:
    "Sparkdigit helps businesses grow through content creation, branding, digital marketing, social media management, Meta Ads, web solutions and lead generation.",
  metadataBase: new URL("https://www.sparkdigits.in")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
