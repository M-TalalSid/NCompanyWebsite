import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ModernServicesGrid from "@/components/modern-services-grid";
import ServicesHero from "@/components/services-hero";
import ScrollAnimation from "@/components/scroll-animations";

export const metadata: Metadata = {
  title: "Our Services - MT International | Software Development Solutions",
  description:
    "Explore our comprehensive range of software development services including custom development, mobile apps, cloud solutions, and more.",
  keywords:
    "software services, custom development, mobile apps, web development, cloud solutions",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <main className="pt-20">
        <ScrollAnimation animation="fadeInUp">
          <ServicesHero />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={300}>
          <ModernServicesGrid />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
