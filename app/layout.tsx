import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { inter } from "@/config/fonts";
import { homeMetaData, metaKeywords } from "@/constants";

import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: homeMetaData.title,
  description: homeMetaData.description,
  generator: "Next.js",
  applicationName: homeMetaData.title,
  referrer: "origin-when-cross-origin",
  authors: {
    name: homeMetaData.creatorName,
    url: process.env.URL,
  },
  creator: homeMetaData.creatorName,
  keywords: metaKeywords,
  metadataBase: new URL(process.env.URL as string),
  alternates: {
    canonical: "/*",
  },
  openGraph: {
    title: homeMetaData.title,
    description: homeMetaData.description,
    url: process.env.URL,
    siteName: homeMetaData.creatorName,
    countryName: "India",
    images: [
      {
        url: "https://iili.io/d9LjC3N.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  category: "technology",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background inter antialiased",
          inter.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-MD60QW157B" />
    </html>
  );
}
