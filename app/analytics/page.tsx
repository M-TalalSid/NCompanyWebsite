import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AdvancedAnalytics from "@/components/advanced-analytics"
import { InteractiveDonutChart, InteractiveBarChart } from "@/components/interactive-charts"
import ScrollAnimation from "@/components/scroll-animations"

export const metadata: Metadata = {
  title: "Analytics Dashboard - NexaForge | Website Performance Insights",
  description: "Advanced analytics and reporting dashboard for tracking website performance and user engagement.",
  keywords: "analytics, dashboard, website performance, user engagement, reporting",
}

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <ScrollAnimation animation="fadeInUp">
            <AdvancedAnalytics />
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            <ScrollAnimation animation="fadeInLeft" delay={200}>
              <InteractiveDonutChart />
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInRight" delay={400}>
              <InteractiveBarChart />
            </ScrollAnimation>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
