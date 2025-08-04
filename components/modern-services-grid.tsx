"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Settings,
  Shield,
  Database,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built to meet your specific business requirements and objectives.",
    features: [
      "Custom Applications",
      "Legacy System Modernization",
      "API Development",
      "System Integration",
    ],
    slug: "custom-software-development",
    price: "Starting at $15,000",
    duration: "8-16 weeks",
    complexity: "High",
    gradient: "from-purple-500 to-blue-500",
    popular: false,
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications that deliver exceptional user experiences.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Development",
      "Progressive Web Apps",
    ],
    slug: "web-development",
    price: "Starting at $8,000",
    duration: "4-12 weeks",
    complexity: "Medium",
    gradient: "from-blue-500 to-cyan-500",
    popular: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Apps",
      "App Store Optimization",
    ],
    slug: "mobile-app-development",
    price: "Starting at $12,000",
    duration: "6-14 weeks",
    complexity: "High",
    gradient: "from-cyan-500 to-teal-500",
    popular: true,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for modern businesses.",
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "Serverless Architecture",
      "Cloud Security",
    ],
    slug: "cloud-solutions",
    price: "Starting at $10,000",
    duration: "6-10 weeks",
    complexity: "Medium",
    gradient: "from-teal-500 to-green-500",
    popular: false,
  },
  // {
  //   icon: Brain,
  //   title: "AI & Machine Learning",
  //   description: "Intelligent solutions powered by artificial intelligence and machine learning technologies.",
  //   features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots"],
  //   slug: "ai-machine-learning",
  //   price: "Starting at $20,000",
  //   duration: "10-20 weeks",
  //   complexity: "Very High",
  //   gradient: "from-green-500 to-yellow-500",
  //   popular: false,
  // },
  // {
  //   icon: Settings,
  //   title: "DevOps & CI/CD",
  //   description: "Streamlined development workflows and automated deployment pipelines.",
  //   features: ["Continuous Integration", "Automated Testing", "Deployment Automation", "Monitoring"],
  //   slug: "devops-cicd",
  //   price: "Starting at $7,000",
  //   duration: "4-8 weeks",
  //   complexity: "Medium",
  //   gradient: "from-yellow-500 to-orange-500",
  //   popular: false,
  // },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and data.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance",
      "Security Training",
    ],
    slug: "cybersecurity",
    price: "Starting at $9,000",
    duration: "3-8 weeks",
    complexity: "High",
    gradient: "from-orange-500 to-red-500",
    popular: false,
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with advanced analytics solutions.",
    features: [
      "Data Visualization",
      "Business Intelligence",
      "Data Warehousing",
      "Real-time Analytics",
    ],
    slug: "data-analytics",
    price: "Starting at $11,000",
    duration: "6-12 weeks",
    complexity: "High",
    gradient: "from-red-500 to-pink-500",
    popular: false,
  },
  // {
  //   icon: Zap,
  //   title: "Digital Transformation",
  //   description: "Complete digital transformation services to modernize your business processes.",
  //   features: ["Process Automation", "Digital Strategy", "Technology Consulting", "Change Management"],
  //   slug: "digital-transformation",
  //   price: "Starting at $25,000",
  //   duration: "12-24 weeks",
  //   complexity: "Very High",
  //   gradient: "from-pink-500 to-purple-500",
  //   popular: false,
  // },
];

const complexityColors = {
  Medium: "text-green-400",
  High: "text-yellow-400",
  "Very High": "text-red-400",
};

export default function ModernServicesGrid() {
  const [filter, setFilter] = useState("all");

  const filteredServices = services.filter((service) => {
    if (filter === "all") return true;
    if (filter === "popular") return service.popular;
    if (filter === "development")
      return [
        "custom-software-development",
        "web-development",
        "mobile-app-development",
      ].includes(service.slug);
    if (filter === "infrastructure")
      return ["cloud-solutions", "devops-cicd", "cybersecurity"].includes(
        service.slug
      );
    if (filter === "advanced")
      return [
        "ai-machine-learning",
        "data-analytics",
        "digital-transformation",
      ].includes(service.slug);
    return true;
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { key: "all", label: "All Services" },
            { key: "popular", label: "Most Popular" },
            { key: "development", label: "Development" },
            { key: "infrastructure", label: "Infrastructure" },
            { key: "advanced", label: "Advanced Tech" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                filter === tab.key
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                  : "bg-purple-800/30 text-purple-200 hover:bg-purple-700/50 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-purple-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-700/50 hover:border-purple-500/50 transition-all duration-400 hover:scale-105 hover:bg-purple-800/50"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </div>
                </div>
              )}

              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>

              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-0.5 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <div className="w-full h-full rounded-2xl bg-purple-900 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                    </div>
                    <div className="text-purple-300 text-sm">
                      {service.duration}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-purple-200 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-purple-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-purple-300 text-sm flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Complexity Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-300 text-sm">Complexity:</span>
                    <span
                      className={`text-sm font-semibold ${
                        complexityColors[
                          service.complexity as keyof typeof complexityColors
                        ]
                      }`}
                    >
                      {service.complexity}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/services/${service.slug}`}>
                  <Button
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-purple-500/25 text-white font-semibold py-3 rounded-xl transition-all duration-200 group-hover:scale-105`}
                  >
                    Learn More & Pricing
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-700/50">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can create a
              tailored solution that perfectly fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-200 hover:bg-purple-800/50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              >
                Schedule Consultation
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
