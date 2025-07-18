import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
        <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Office Location</h4>
              <p className="text-purple-200">
                123 Innovation Drive
                <br />
                Silicon Valley, CA 94025
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Email Us</h4>
              <p className="text-purple-200">hello@nexaforge.com</p>
              <p className="text-purple-200">support@nexaforge.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Call Us</h4>
              <p className="text-purple-200">+1 (555) 123-4567</p>
              <p className="text-purple-200">+1 (555) 987-6543</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Business Hours</h4>
              <p className="text-purple-200">
                Monday - Friday: 9:00 AM - 6:00 PM PST
                <br />
                Saturday: 10:00 AM - 4:00 PM PST
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Response */}
      <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
        <div className="flex items-center space-x-3 mb-4">
          <MessageCircle className="w-8 h-8 text-purple-400" />
          <h3 className="text-xl font-bold text-white">Quick Response</h3>
        </div>
        <p className="text-purple-200 mb-4">
          Need immediate assistance? We typically respond to inquiries within 2-4 hours during business hours.
        </p>
        <div className="space-y-2 text-sm text-purple-300">
          <p>• Free consultation available</p>
          <p>• Project estimates within 24 hours</p>
          <p>• Dedicated project manager assigned</p>
          <p>• Flexible engagement models</p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Emergency Support</h3>
        <p className="text-purple-100 mb-4">For existing clients with critical issues</p>
        <p className="text-white font-semibold">+1 (555) 911-HELP</p>
        <p className="text-purple-200 text-sm mt-2">Available 24/7</p>
      </div>
    </div>
  )
}
