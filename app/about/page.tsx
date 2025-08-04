import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutHero from "@/components/about-hero";
import TeamSection from "@/components/team-section";
import CompanyValues from "@/components/company-values";
// import InteractiveTimeline from "@/components/interactive-timeline"
import { InteractiveStatsGrid } from "@/components/interactive-charts";
import ScrollAnimation from "@/components/scroll-animations";

export const metadata: Metadata = {
  title: "About Us - NexaForge | Our Story & Team",
  description:
    "Learn about NexaForge, our mission, values, and the expert team behind our innovative software solutions.",
  keywords:
    "about nexaforge, software company, development team, company values, mission",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <main className="">
        <ScrollAnimation animation="fadeInUp">
          <AboutHero />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInLeft" delay={200}>
          <div className="container mx-auto px-4 py-16">
            <InteractiveStatsGrid />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInRight" delay={400}>
          <CompanyValues />
        </ScrollAnimation>
        <ScrollAnimation animation="scaleIn" delay={600}>
          <div className="container mx-auto px-4 py-16">
            {/* <InteractiveTimeline /> */}
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={800}>
          <TeamSection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
