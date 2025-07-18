"use client"

import { useEffect, useState } from "react"
import { MessageCircle, Phone, Mail } from "lucide-react"

export default function ContactHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`mb-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center space-x-2 bg-purple-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-700/50 mb-6">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              <span className="text-purple-200 font-medium">Let's Start a Conversation</span>
            </div>
          </div>

          <h1
            className={`text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Touch</span>
          </h1>

          <p
            className={`text-xl lg:text-2xl text-purple-200 mb-12 leading-relaxed ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            Ready to transform your business with cutting-edge software solutions? Let's discuss your project and bring
            your vision to life.
          </p>

          {/* Quick Contact Options */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          >
            <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
              <Phone className="w-12 h-12 text-purple-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-purple-200 text-sm">+1 (555) 123-4567</p>
              <p className="text-purple-300 text-xs mt-1">Mon-Fri 9AM-6PM PST</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
              <Mail className="w-12 h-12 text-pink-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-purple-200 text-sm">hello@nexaforge.com</p>
              <p className="text-purple-300 text-xs mt-1">Response within 2-4 hours</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
              <MessageCircle className="w-12 h-12 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
              <p className="text-purple-200 text-sm">Available now</p>
              <p className="text-purple-300 text-xs mt-1">Instant support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
