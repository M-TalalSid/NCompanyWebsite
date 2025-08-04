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
} from "lucide-react";

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
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by artificial intelligence and machine learning technologies.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Chatbots",
    ],
    slug: "ai-machine-learning",
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    description:
      "Streamlined development workflows and automated deployment pipelines.",
    features: [
      "Continuous Integration",
      "Automated Testing",
      "Deployment Automation",
      "Monitoring",
    ],
    slug: "devops-cicd",
  },
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
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Complete digital transformation services to modernize your business processes.",
    features: [
      "Process Automation",
      "Digital Strategy",
      "Technology Consulting",
      "Change Management",
    ],
    slug: "digital-transformation",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-200 hover:scale-105 hover:bg-purple-800/50"
        >
          <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-0.5 group-hover:scale-110 transition-transform duration-200">
            <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
              <service.icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors duration-200">
            {service.title}
          </h3>

          <p className="text-purple-200 mb-6">{service.description}</p>

          <ul className="space-y-2 mb-6">
            {service.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="text-purple-300 text-sm flex items-center"
              >
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-200 font-medium"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      ))}
    </div>
  );
}
