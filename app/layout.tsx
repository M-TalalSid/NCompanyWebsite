import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import PageTransitions from "@/components/page-transitions";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optional: improves font rendering
  preload: true,
});

export const metadata: Metadata = {
  title:
    "MT International - Premium Software Solutions | Development & Innovation",
  description:
    "Transform your business with cutting-edge custom software development, web applications, and digital solutions crafted by expert developers.",
  keywords:
    "software development, web development, mobile apps, custom software, digital solutions",
  metadataBase: new URL("https://www.mt-international.com"),
  openGraph: {
    title: "MT International - Premium Software Solutions",
    description:
      "Transform your business with cutting-edge custom software development",
    type: "website",
    url: "https://www.mt-international.com",
    images: [
      {
        url: "/CompanyBanner.webp",
        width: 1200,
        height: 630,
        alt: "MT International - Custom Software Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MT International",
    url: "https://www.mt-international.com",
    logo: "https://www.mt-international.com/CompanyLogo.webp",
    description:
      "Transform your business with cutting-edge custom software development, web applications, and digital solutions crafted by expert developers.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-301-021-9324",
      contactType: "customer service",
      email: "mtinternational139@gmail.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/mt-inter-national/",
      "https://x.com/internatio24827",
      "https://www.facebook.com/share/156wB5sCG6h/?mibextid=wwXIfr",
      "https://www.instagram.com/mt__international/",
    ],
    serviceType: [
      "Custom Software Development",
      "Web Development",
      "Mobile App Development",
      "Cloud Solutions",
      "Cybersecurity",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground`}
        suppressHydrationWarning
      >
        {/* ✅ Wrap everything in ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PageTransitions>{children}</PageTransitions>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
