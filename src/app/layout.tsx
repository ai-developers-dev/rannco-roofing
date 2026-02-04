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

export const metadata: Metadata = {
  title: "Rannco Roofing | Residential Roofing in Southern Illinois",
  description:
    "Southern Illinois' most trusted residential roofing company. Expert roof repairs, replacements, and installations with over 70 years of roofing expertise and 30 years of insurance knowledge. Serving Benton, Marion, Carbondale, and surrounding areas.",
  keywords: [
    "roofing",
    "roof repair",
    "roof replacement",
    "Southern Illinois",
    "Benton IL",
    "Marion IL",
    "Carbondale IL",
    "residential roofing",
    "storm damage repair",
    "insurance claims",
    "roofing contractor",
  ],
  openGraph: {
    title: "Rannco Roofing | Residential Roofing in Southern Illinois",
    description:
      "Southern Illinois' most trusted residential roofing company. Expert roof repairs, replacements, and installations with over 70 years of roofing expertise and 30 years of insurance knowledge.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
