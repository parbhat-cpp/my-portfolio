import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { inter } from "@/config/fonts";
import { homeMetaData, metaKeywords } from "@/constants";

import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: homeMetaData.title,
    template: "%s | " + homeMetaData.creatorName,
  },
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
    canonical: "/",
  },
  openGraph: {
    title: homeMetaData.title,
    description: homeMetaData.description,
    url: process.env.URL,
    siteName: homeMetaData.creatorName,
    countryName: "India",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: homeMetaData.creatorName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeMetaData.title,
    description: homeMetaData.description,
    images: ["/og-image.jpg"],
    creator: "@ParbhatSharma29",
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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

const schemaOrgJson = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: homeMetaData.creatorName,
    url: process.env.URL,
    email: "parbhats660@gmail.com",
    jobTitle: "Full Stack Developer",
    description: homeMetaData.description,
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Full Stack Development",
      "Web Development",
      "Mobile Development",
    ],
    sameAs: [
      "https://github.com/parbhat-cpp",
      "https://twitter.com/ParbhatSharma29",
      "https://www.instagram.com/_parbhat.sharma_/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: homeMetaData.creatorName,
    url: process.env.URL,
    description: homeMetaData.description,
    author: {
      "@type": "Person",
      name: homeMetaData.creatorName,
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgJson),
          }}
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background inter antialiased",
          inter.variable,
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
