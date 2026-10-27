import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageProviderWrapper from "@/app/LanguageProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pierre Banwarth — Game Boy Camera Photography",
  description: "Exploring photography through Game Boy Camera: concert videos, cyanotype prints, and visual experiments.",
  openGraph: {
    title: "Pierre Banwarth — Game Boy Camera Photography",
    description: "Exploring photography through Game Boy Camera: concert videos, cyanotype prints, and visual experiments.",
    url: "https://pierrebanwarth.com",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#171717" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23171717' width='100' height='100'/><text x='50' y='65' font-size='60' font-weight='bold' text-anchor='middle' fill='%23F1EEE6'>P</text></svg>" />
      </head>
      <body className="bg-warm-white text-charcoal flex flex-col min-h-screen">
        <LanguageProviderWrapper>
          {children}
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
