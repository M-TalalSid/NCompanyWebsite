import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Cloud, Brain, Settings, Shield } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built to meet your specific business requirements.",
    slug: "custom-software-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    slug: "mobile-app-development",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    slug: "cloud-solutions",
  },
  // {
  //   icon: Brain,
  //   title: "AI & Machine Learning",
  //   description: "Intelligent solutions powered by artificial intelligence and machine learning.",
  //   slug: "ai-machine-learning",
  // },
  // {
  //   icon: Settings,
  //   title: "DevOps & CI/CD",
  //   description: "Streamlined development workflows and automated deployment pipelines.",
  //   slug: "devops-cicd",
  // },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    slug: "cybersecurity",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            We offer comprehensive software development services to transform your ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:bg-purple-800/50"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-0.5 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-purple-200 mb-6">{service.description}</p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
