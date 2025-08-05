import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service - MT International",
  description: "Terms of service and conditions for MT International software development services.",
  keywords: "terms of service, legal, mt international, software development",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Service
              </span>
            </h1>
            
            <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-purple-200 mb-6">
                  By accessing and using MT International's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                <p className="text-purple-200 mb-6">
                  MT International provides software development, web development, mobile app development, and related technology services.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">3. Project Terms</h2>
                <p className="text-purple-200 mb-6">
                  All projects are subject to individual agreements that outline scope, timeline, deliverables, and payment terms.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                <p className="text-purple-200 mb-6">
                  Upon full payment, clients retain ownership of custom-developed software. MT International retains rights to reusable components and frameworks.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
                <p className="text-purple-200 mb-6">
                  We maintain strict confidentiality of client information and project details as outlined in our privacy policy.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-purple-200 mb-6">
                  MT International's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
                <p className="text-purple-200 mb-6">
                  We reserve the right to modify these terms at any time. Continued use of services constitutes acceptance of updated terms.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
                <p className="text-purple-200 mb-6">
                  For questions about these terms, contact us at mtinternational139@gmail.com or +92 (301) 021-9324.
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