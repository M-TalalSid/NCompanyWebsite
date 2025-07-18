import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Star, Clock, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"

interface ServiceDetailProps {
  service: {
    title: string
    description: string
    longDescription: string
    features: string[]
    benefits: string[]
    process: string[]
  }
}

// Add pricing data for each service
const servicePricing = {
  "Custom Software Development": {
    packages: [
      {
        name: "Starter",
        price: "$15,000",
        duration: "8-12 weeks",
        description: "Perfect for small to medium applications",
        features: [
          "Requirements analysis",
          "Custom application development",
          "Basic testing & QA",
          "Deployment assistance",
          "30 days support",
          "Documentation",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$35,000",
        duration: "12-16 weeks",
        description: "Comprehensive solution for growing businesses",
        features: [
          "Everything in Starter",
          "Advanced architecture design",
          "API development & integration",
          "Comprehensive testing",
          "Performance optimization",
          "90 days support",
          "Training sessions",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "16+ weeks",
        description: "Large-scale solutions with full support",
        features: [
          "Everything in Professional",
          "Legacy system modernization",
          "Advanced security implementation",
          "Scalability planning",
          "24/7 monitoring setup",
          "1 year support",
          "Dedicated project manager",
        ],
        popular: false,
      },
    ],
  },
  "Web Development": {
    packages: [
      {
        name: "Basic",
        price: "$8,000",
        duration: "4-6 weeks",
        description: "Professional website for small businesses",
        features: [
          "Responsive design",
          "Up to 10 pages",
          "Contact forms",
          "Basic SEO",
          "30 days support",
          "Content management system",
        ],
        popular: false,
      },
      {
        name: "Advanced",
        price: "$18,000",
        duration: "6-10 weeks",
        description: "Feature-rich web application",
        features: [
          "Everything in Basic",
          "E-commerce functionality",
          "User authentication",
          "Database integration",
          "Advanced SEO",
          "90 days support",
          "Performance optimization",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "$35,000",
        duration: "10-12 weeks",
        description: "Complex web applications with advanced features",
        features: [
          "Everything in Advanced",
          "Progressive Web App",
          "Advanced analytics",
          "Third-party integrations",
          "Custom admin panel",
          "6 months support",
          "Ongoing maintenance",
        ],
        popular: false,
      },
    ],
  },
  // Add similar pricing structures for other services...
  default: {
    packages: [
      {
        name: "Starter",
        price: "Contact Us",
        duration: "4-8 weeks",
        description: "Basic implementation for small projects",
        features: [
          "Initial consultation",
          "Basic implementation",
          "Testing & deployment",
          "Documentation",
          "30 days support",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "Contact Us",
        duration: "8-12 weeks",
        description: "Comprehensive solution for businesses",
        features: [
          "Everything in Starter",
          "Advanced features",
          "Integration support",
          "Performance optimization",
          "90 days support",
          "Training included",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "12+ weeks",
        description: "Full-scale enterprise solution",
        features: [
          "Everything in Professional",
          "Custom development",
          "Priority support",
          "Dedicated team",
          "1 year support",
          "Ongoing maintenance",
        ],
        popular: false,
      },
    ],
  },
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const pricing = servicePricing[service.title as keyof typeof servicePricing] || servicePricing.default

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">{service.title}</h1>
        <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">{service.description}</p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Overview */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-purple-200 text-lg leading-relaxed">{service.longDescription}</p>
        </div>
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
          <h3 className="text-xl font-semibold text-white mb-6">Key Benefits</h3>
          <ul className="space-y-3">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-purple-200">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Package</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Flexible pricing options designed to meet your specific needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-purple-800/30 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? "border-purple-400 shadow-lg shadow-purple-500/25"
                  : "border-purple-700/50 hover:border-purple-500/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {pkg.price}
                </div>
                <div className="flex items-center justify-center text-purple-300 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {pkg.duration}
                </div>
                <p className="text-purple-200">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-purple-200">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hover:scale-105"
                    : "bg-purple-700 hover:bg-purple-600 text-white"
                }`}
              >
                {pkg.price === "Custom Quote" || pkg.price === "Contact Us" ? "Get Quote" : "Choose Plan"}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <div className="mt-12 bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Team</h3>
              <p className="text-purple-200">Experienced developers assigned to your project</p>
            </div>
            <div>
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-purple-200">Agile development with regular updates</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Quality Guarantee</h3>
              <p className="text-purple-200">100% satisfaction guarantee with ongoing support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Included</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.process.map((step, index) => (
            <div
              key={index}
              className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-purple-800/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-700/50">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-200 hover:bg-purple-800/50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
