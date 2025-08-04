import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import PageTransitions from "@/components/page-transitions";

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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransitions>{children}</PageTransitions>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
