import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { BUSINESS_INFO } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    "Professional moving services in Auckland, NZ. Residential and commercial moving, furniture delivery, packing services, and storage solutions. Contact us for affordable hourly rates.",
  keywords: [
    "movers Auckland",
    "moving company Auckland",
    "furniture delivery Auckland",
    "residential moving",
    "commercial moving",
    "packing services",
    "storage solutions",
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: `https://${BUSINESS_INFO.domain}`,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`,
    description:
      "Professional moving services in Auckland, NZ. Residential and commercial moving, furniture delivery, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`,
    description:
      "Professional moving services in Auckland, NZ. Residential and commercial moving, furniture delivery, and more.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: BUSINESS_INFO.name,
    url: `https://${BUSINESS_INFO.domain}`,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_INFO.address.city,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude,
    },
    description: BUSINESS_INFO.tagline,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Auckland",
    },
  };

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
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
