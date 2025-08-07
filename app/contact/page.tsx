import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ModernContactForm from "@/components/modern-contact-form";
import ContactInfo from "@/components/contact-info";
import ContactHero from "@/components/contact-hero";

export const metadata: Metadata = {
  title: "Contact Us - MT International | Get In Touch",
  description:
    "Contact MT International for your software development needs. Get a free consultation and quote for your project.",
  keywords:
    "contact mt international, software development consultation, get quote, contact form",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <main className="pt-20">
        <ContactHero />
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <ModernContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
