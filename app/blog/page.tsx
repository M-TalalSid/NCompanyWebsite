import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogGrid from "@/components/blog-grid";

export const metadata: Metadata = {
  title: "Blog - NexaForge | Latest Tech Insights & Updates",
  description:
    "Stay updated with the latest trends in software development, technology insights, and industry news from NexaForge experts.",
  keywords:
    "software development blog, tech insights, programming tutorials, industry news",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <main className="">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Blog
              </span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Insights, tutorials, and updates from our team of software
              development experts
            </p>
          </div>
          <BlogGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
