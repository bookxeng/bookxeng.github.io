import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: profile.tagline,
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className="font-mono font-light">{children}</body>
    </html>
  );
}
