import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GirlBoss — Premium Women's Fashion",
  description:
    "Confidence starts with what you wear. Discover premium women's clothing collections designed for women who lead, inspire, and own every moment.",
  keywords: [
    "GirlBoss",
    "women's fashion",
    "premium clothing",
    "designer dresses",
    "crop tops",
    "co-ord sets",
    "Gen Z fashion",
  ],
  openGraph: {
    title: "GirlBoss — Premium Women's Fashion",
    description:
      "Premium collections designed for women who lead, inspire, and own every moment.",
    type: "website",
    locale: "en_US",
    siteName: "GirlBoss",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-black focus:text-white focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
