import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Cookie Policy - MT International",
  description: "Cookie policy and usage information for MT International website.",
  keywords: "cookie policy, cookies, mt international, website tracking",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Cookie{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Policy
              </span>
            </h1>
            
            <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                <p className="text-purple-200 mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                <p className="text-purple-200 mb-6">
                  We use cookies to understand how you use our website, improve our services, and provide personalized content and advertisements.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                <p className="text-purple-200 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
                <p className="text-purple-200 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Functional Cookies</h3>
                <p className="text-purple-200 mb-4">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Marketing Cookies</h3>
                <p className="text-purple-200 mb-4">
                  These cookies are used to track visitors across websites to display relevant advertisements.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                <p className="text-purple-200 mb-6">
                  You can control and manage cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
                <p className="text-purple-200 mb-6">
                  Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and they are subject to the third party's privacy policy.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                <p className="text-purple-200 mb-6">
                  We may update this cookie policy from time to time. Please check this page regularly for any changes.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-purple-200 mb-6">
                  If you have questions about our use of cookies, contact us at mtinternational139@gmail.com or +92 (301) 021-9324.
                </p>

                <div className="mt-8 p-4 bg-purple-700/50 rounded-xl">
                  <p className="text-purple-200 text-sm">
                    <strong>Last updated:</strong> August 5, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 