import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murree Tour Packages | Easy Mountain Getaways",
  description: "Plan a refreshing Murree getaway with thoughtfully arranged tour packages, scenic stays, and local travel support.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Murree Tour Packages",
    description: "A simpler way to plan your mountain escape.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
