import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceDetail from "@/components/service-detail"

const services = {
  "custom-software-development": {
    title: "Custom Software Development",
    description: "Transform your unique business requirements into powerful, scalable software solutions.",
    longDescription:
      "Our custom software development services are designed to address your specific business challenges and opportunities. We work closely with you to understand your requirements, design the perfect solution, and deliver software that drives your business forward.",
    features: [
      "Requirements Analysis & Planning",
      "Custom Application Development",
      "Legacy System Modernization",
      "API Development & Integration",
      "Database Design & Optimization",
      "Quality Assurance & Testing",
      "Deployment & Maintenance",
      "Ongoing Support & Updates",
    ],
    benefits: [
      "Tailored to your exact needs",
      "Scalable and future-proof",
      "Competitive advantage",
      "Improved efficiency",
      "Cost-effective long-term solution",
    ],
    process: [
      "Discovery & Requirements Gathering",
      "System Architecture & Design",
      "Development & Implementation",
      "Testing & Quality Assurance",
      "Deployment & Go-Live",
      "Training & Support",
    ],
  },
  "web-development": {
    title: "Web Development",
    description: "Create stunning, responsive websites and web applications that engage your audience.",
    longDescription:
      "Our web development services combine cutting-edge technology with creative design to deliver exceptional digital experiences. From simple websites to complex web applications, we build solutions that perform beautifully across all devices.",
    features: [
      "Responsive Web Design",
      "Frontend Development",
      "Backend Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps",
      "SEO Optimization",
      "Performance Optimization",
    ],
    benefits: [
      "Mobile-first approach",
      "Fast loading times",
      "SEO-friendly structure",
      "User-friendly interface",
      "Scalable architecture",
    ],
    process: [
      "Project Planning & Strategy",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Testing & Optimization",
      "Launch & Maintenance",
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Build powerful mobile applications that connect with your users on their favorite devices.",
    longDescription:
      "Our mobile app development expertise spans native iOS and Android development as well as cross-platform solutions. We create apps that not only look great but also provide seamless user experiences and robust functionality.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "App Analytics",
    ],
    benefits: [
      "Native performance",
      "Platform-specific features",
      "Intuitive user experience",
      "App store ready",
      "Ongoing maintenance",
    ],
    process: [
      "Concept & Strategy",
      "Design & Prototyping",
      "Development",
      "Testing",
      "App Store Submission",
      "Launch & Support",
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing to scale your business and reduce costs.",
    longDescription:
      "Our cloud solutions help businesses modernize their infrastructure, improve scalability, and reduce operational costs. We provide comprehensive cloud services from migration to ongoing management.",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Serverless Architecture",
      "Container Orchestration",
      "Cloud Security",
      "Backup & Disaster Recovery",
      "Monitoring & Optimization",
      "Multi-cloud Strategy",
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better disaster recovery",
      "Increased flexibility",
    ],
    process: [
      "Cloud Assessment",
      "Migration Planning",
      "Implementation",
      "Testing & Validation",
      "Go-Live",
      "Optimization & Support",
    ],
  },
  "ai-machine-learning": {
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes and gain insights.",
    longDescription:
      "Our AI and machine learning services help businesses leverage data to make better decisions, automate processes, and create intelligent applications that adapt and learn over time.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Chatbots & Virtual Assistants",
      "Recommendation Systems",
      "Fraud Detection",
      "Process Automation",
      "Data Mining",
    ],
    benefits: [
      "Automated decision making",
      "Improved accuracy",
      "Cost reduction",
      "Enhanced customer experience",
      "Competitive advantage",
    ],
    process: [
      "Data Assessment",
      "Model Development",
      "Training & Validation",
      "Integration",
      "Deployment",
      "Monitoring & Optimization",
    ],
  },
  "devops-cicd": {
    title: "DevOps & CI/CD",
    description: "Streamline your development process with automated workflows and continuous delivery.",
    longDescription:
      "Our DevOps services help organizations improve collaboration between development and operations teams, automate processes, and deliver software faster and more reliably.",
    features: [
      "Continuous Integration",
      "Continuous Deployment",
      "Infrastructure Automation",
      "Monitoring & Logging",
      "Security Integration",
      "Performance Testing",
      "Release Management",
      "Configuration Management",
    ],
    benefits: [
      "Faster time to market",
      "Improved quality",
      "Reduced manual errors",
      "Better collaboration",
      "Increased reliability",
    ],
    process: [
      "Current State Assessment",
      "Pipeline Design",
      "Tool Implementation",
      "Automation Setup",
      "Testing & Validation",
      "Training & Support",
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: "Protect your business from cyber threats with comprehensive security solutions.",
    longDescription:
      "Our cybersecurity services provide comprehensive protection for your digital assets, ensuring your business stays secure against evolving threats while maintaining compliance with industry standards.",
    features: [
      "Security Assessments",
      "Penetration Testing",
      "Vulnerability Management",
      "Security Monitoring",
      "Incident Response",
      "Compliance Management",
      "Security Training",
      "Risk Assessment",
    ],
    benefits: [
      "Enhanced security posture",
      "Regulatory compliance",
      "Reduced risk",
      "Business continuity",
      "Customer trust",
    ],
    process: [
      "Security Assessment",
      "Risk Analysis",
      "Solution Design",
      "Implementation",
      "Testing & Validation",
      "Ongoing Monitoring",
    ],
  },
  "data-analytics": {
    title: "Data Analytics",
    description: "Transform your data into actionable insights that drive business growth.",
    longDescription:
      "Our data analytics services help organizations unlock the value of their data through advanced analytics, visualization, and business intelligence solutions that enable data-driven decision making.",
    features: [
      "Data Visualization",
      "Business Intelligence",
      "Data Warehousing",
      "Real-time Analytics",
      "Predictive Modeling",
      "Statistical Analysis",
      "Dashboard Development",
      "Data Integration",
    ],
    benefits: [
      "Data-driven decisions",
      "Improved insights",
      "Better performance",
      "Competitive advantage",
      "Increased ROI",
    ],
    process: [
      "Data Assessment",
      "Architecture Design",
      "Implementation",
      "Visualization",
      "Testing & Validation",
      "Training & Support",
    ],
  },
  "digital-transformation": {
    title: "Digital Transformation",
    description: "Modernize your business processes and embrace digital technologies for growth.",
    longDescription:
      "Our digital transformation services help organizations modernize their operations, improve customer experiences, and create new business models through strategic technology adoption.",
    features: [
      "Digital Strategy",
      "Process Automation",
      "Technology Consulting",
      "Change Management",
      "Digital Culture",
      "Innovation Labs",
      "Technology Roadmap",
      "Performance Metrics",
    ],
    benefits: [
      "Improved efficiency",
      "Better customer experience",
      "New revenue streams",
      "Competitive advantage",
      "Future readiness",
    ],
    process: [
      "Current State Analysis",
      "Strategy Development",
      "Roadmap Creation",
      "Implementation",
      "Change Management",
      "Continuous Improvement",
    ],
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services[slug as keyof typeof services]

  if (!service) {
    return {
      title: "Service Not Found - NexaForge",
    }
  }

  return {
    title: `${service.title} - NexaForge`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, software development, technology solutions`,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services[slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <main className="pt-20">
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}
