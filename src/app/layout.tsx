import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ranncoroofing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rannco Roofing | #1 Roofing Contractor in Southern Illinois",
    template: "%s | Rannco Roofing",
  },
  description:
    "Southern Illinois' most trusted roofing contractor. Expert roof repairs, replacements & installations in Benton, Marion, Carbondale, Herrin, Murphysboro & surrounding areas. 70+ years experience. Free estimates. Licensed & insured.",
  keywords: [
    // Primary keywords
    "roofing contractor Southern Illinois",
    "roof repair Benton IL",
    "roof replacement Marion IL",
    "roofing company Carbondale IL",
    // Service keywords
    "residential roofing Southern Illinois",
    "storm damage roof repair",
    "emergency roof repair IL",
    "roof inspection Benton",
    "new roof installation Marion",
    "shingle replacement Carbondale",
    "metal roofing Southern Illinois",
    "flat roof repair IL",
    // Location keywords
    "roofer Benton Illinois",
    "roofing Marion Illinois",
    "roof contractor Carbondale",
    "Herrin IL roofing",
    "Murphysboro roof repair",
    "West Frankfort roofing contractor",
    "Du Quoin roof replacement",
    "Carterville IL roofer",
    "Johnston City roofing",
    "Anna IL roof repair",
    "Vienna Illinois roofing",
    "Harrisburg IL roofer",
    // Insurance keywords
    "insurance claim roofing",
    "storm damage insurance claim IL",
    "hail damage roof repair",
    // Trust keywords
    "licensed roofing contractor IL",
    "insured roofer Southern Illinois",
    "best roofer Benton IL",
  ],
  authors: [{ name: "Rannco Roofing" }],
  creator: "Rannco Roofing",
  publisher: "Rannco Roofing",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Rannco Roofing | #1 Roofing Contractor in Southern Illinois",
    description:
      "Southern Illinois' most trusted roofing contractor. Expert roof repairs, replacements & installations. 70+ years experience. Free estimates. Serving Benton, Marion, Carbondale & surrounding areas.",
    url: siteUrl,
    siteName: "Rannco Roofing",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rannco Roofing - Southern Illinois Roofing Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rannco Roofing | #1 Roofing Contractor in Southern Illinois",
    description:
      "Southern Illinois' most trusted roofing contractor. Expert roof repairs, replacements & installations. 70+ years experience. Free estimates.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: siteUrl,
  },
  category: "Home Services",
  classification: "Roofing Contractor",
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Rannco Roofing",
  image: `${siteUrl}/og-image.jpg`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+1-618-594-1178",
  email: "chood@rannco.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "505 E Walnut St",
    addressLocality: "Harrisburg",
    addressRegion: "IL",
    postalCode: "62946",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7384,
    longitude: -88.5406,
  },
  areaServed: [
    { "@type": "City", name: "Benton", addressRegion: "IL" },
    { "@type": "City", name: "Marion", addressRegion: "IL" },
    { "@type": "City", name: "Carbondale", addressRegion: "IL" },
    { "@type": "City", name: "Herrin", addressRegion: "IL" },
    { "@type": "City", name: "Murphysboro", addressRegion: "IL" },
    { "@type": "City", name: "Carterville", addressRegion: "IL" },
    { "@type": "City", name: "Johnston City", addressRegion: "IL" },
    { "@type": "City", name: "West Frankfort", addressRegion: "IL" },
    { "@type": "City", name: "Du Quoin", addressRegion: "IL" },
    { "@type": "City", name: "Anna", addressRegion: "IL" },
    { "@type": "City", name: "Vienna", addressRegion: "IL" },
    { "@type": "City", name: "Harrisburg", addressRegion: "IL" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/ranncoroofing",
    "https://www.instagram.com/ranncoroofing",
  ],
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Check", "Financing Available"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Replacement",
          description: "Complete roof tear-off and replacement with premium materials",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Repair",
          description: "Expert repair services for leaks, storm damage, and general wear",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Roofing",
          description: "24/7 emergency roof repair services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Insurance Claim Assistance",
          description: "Expert guidance through the insurance claims process",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
