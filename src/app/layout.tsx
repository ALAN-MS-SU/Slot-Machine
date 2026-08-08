import type { Metadata } from "next";
// import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_URL!,
  title: {
    default: "Free Online Wheel Spinner - Sort Online",
    template: "%s | Sort Online",
  },

  description:
    "Create a free custom wheel spinner online. Enter your options, spin the wheel, and pick a random winner for games, giveaways, decisions and more.",

  keywords: [
    "wheel spinner",
    "spin the wheel",
    "random wheel",
    "online spinner",
    "giveaway wheel",
    "random picker",
    "decision wheel",
    "name picker",
    "raffle wheel",
    "custom wheel",
  ],

  applicationName: "Sort Online",

  authors: [
    {
      name: "ALAN-MS-SU",
    },
  ],

  creator: "ALAN-MS-SU",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    url: process.env.NEXT_PUBLIC_URL,

    title: "Sort Online - Free Online Wheel Spinner",

    description:
      "Create custom wheels and spin them online for giveaways, games and random decisions.",

    siteName: "Sort Online",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title: "Sort Online - Free Online Wheel Spinner",

    description: "Create custom wheels and spin them online instantly.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  category: "games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-body w-full h-full">
        {/* <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1829774161270671"
          crossOrigin="anonymous"
        /> */}
        {children}
      </body>
    </html>
  );
}
