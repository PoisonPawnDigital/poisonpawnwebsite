import type { Metadata } from "next";
import { Public_Sans, JetBrains_Mono } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import RevealWrapper from "@/components/layout/RevealWrapper";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Poison Pawn — Decision-Making Under Pressure",
  description:
    "Poison Pawn trains how you think and decide — profiling your mind, then using chess to sharpen your judgment under pressure. Personal, measurable, proven at the highest level.",
  openGraph: {
    type: "website",
    title: "Poison Pawn — Train How You Decide",
    description:
      "Your decision-making is no longer something you're stuck with — it can be trained. Personal, measurable, proven at the highest level.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poison Pawn — Train How You Decide",
    description:
      "Your decision-making is no longer something you're stuck with — it can be trained.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Preload hero poster so LCP resolves before video loads */}
        <link rel="preload" as="image" href="/video/hero_poster.jpg" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
        <RevealWrapper />
      </body>
    </html>
  );
}
