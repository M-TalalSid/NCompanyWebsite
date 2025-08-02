import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8 mb-20">
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
                FB Area
                <br />
                Karachi
                <br />
                Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Email Us</h4>
              <p className="text-purple-200">mtinternational139@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Call Us</h4>
              <p className="text-purple-200">+92 (301) 021-9324</p>
              <p className="text-purple-200">+92 (341) 245-7850</p>
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
          <p>• Free Consultation Available</p>
          <p>• Project Estimates Within 24 Hours</p>
          <p>• Dedicated Project Manager Assigned</p>
          <p>• Flexible Engagement Models</p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Emergency Support</h3>
        <p className="text-purple-100 mb-4">For Existing Clients With Critical Issues</p>
        <p className="text-white font-semibold">+92 (301) 021-9324</p>
        <p className="text-purple-200 text-sm mt-2">Available 24/7</p>
      </div>
    </div>
  )
}
