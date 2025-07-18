"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-purple-200">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
      <h2 className="text-3xl font-bold text-white mb-8">Get Started Today</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-purple-200 mb-2 font-medium">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-purple-900/50 border-purple-600 text-white placeholder:text-purple-400 focus:border-purple-400"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-purple-200 mb-2 font-medium">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-purple-900/50 border-purple-600 text-white placeholder:text-purple-400 focus:border-purple-400"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-purple-200 mb-2 font-medium">
              Company
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="bg-purple-900/50 border-purple-600 text-white placeholder:text-purple-400 focus:border-purple-400"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-purple-200 mb-2 font-medium">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-purple-900/50 border-purple-600 text-white placeholder:text-purple-400 focus:border-purple-400"
              placeholder="+92 (3--) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-purple-200 mb-2 font-medium">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-purple-900/50 border border-purple-600 text-white rounded-md px-3 py-2 focus:border-purple-400 focus:outline-none"
          >
            <option value="">Select a service</option>
            <option value="custom-software">Custom Software Development</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-development">Mobile App Development</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="ai-ml">AI & Machine Learning</option>
            <option value="devops">DevOps & CI/CD</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="data-analytics">Data Analytics</option>
            <option value="digital-transformation">Digital Transformation</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-purple-200 mb-2 font-medium">
            Project Details *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="bg-purple-900/50 border-purple-600 text-white placeholder:text-purple-400 focus:border-purple-400 resize-none"
            placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
