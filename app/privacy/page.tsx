import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - MT International",
  description: "Privacy policy and data protection practices for MT International.",
  keywords: "privacy policy, data protection, mt international, gdpr",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Policy
              </span>
            </h1>
            
            <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-purple-200 mb-6">
                  We collect information you provide directly to us, such as when you contact us, request a quote, or use our services.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-purple-200 mb-6">
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p className="text-purple-200 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-purple-200 mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
                <p className="text-purple-200 mb-6">
                  We use cookies and similar technologies to enhance your experience and analyze website usage. You can control cookie settings in your browser.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <p className="text-purple-200 mb-6">
                  You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
                <p className="text-purple-200 mb-6">
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
                <p className="text-purple-200 mb-6">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                <p className="text-purple-200 mb-6">
                  If you have questions about this privacy policy, contact us at mtinternational139@gmail.com or +92 (301) 021-9324.
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