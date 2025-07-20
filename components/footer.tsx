import Link from "next/link"
import { Twitter, Linkedin, Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const services = [
    "Custom Software Development",
    "Web Development",
    "Mobile Development",
    "Cloud Solutions",
  ]

  const company = ["About", "Contact", "Blog", "Privacy Policy"]

  return (
    <footer className="bg-purple-900/50 backdrop-blur-sm border-t border-purple-700/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                MT
              </div>
              <span className="text-2xl font-bold text-white">International</span>
            </Link>
            <p className="text-purple-200 leading-relaxed">
              Transforming businesses through innovative software solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/internatio24827"
                className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/mt-inter-national/"
                className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </Link>

              <Link
                href="https://www.facebook.com/share/156wB5sCG6h/?mibextid=wwXIfr"
                className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </Link>

              <Link
                href="https://www.instagram.com/mt__international/"
                className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center text-white hover:bg-purple-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`}
                    className="text-purple-200 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-purple-200 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-purple-200">Karachi, PK</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-purple-200">mtinternational139@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-purple-200">+92 (301) 021-9324</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-300">© 2025 NexaForge. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-purple-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-purple-300 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}