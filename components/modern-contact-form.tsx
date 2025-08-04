"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Building,
  Phone,
  MessageSquare,
  DollarSign,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ModernContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s\-$$$$]/g, ""))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Please provide more details (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setErrors({});
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-purple-800/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-700/50 text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-purple-200 text-lg mb-6">
          Your message has been sent successfully. We'll get back to you within
          24 hours with a detailed response.
        </p>
        <div className="bg-purple-700/50 rounded-2xl p-6">
          <p className="text-purple-200 text-sm">
            <strong>What's next?</strong>
            <br />
            Our team will review your requirements and schedule a consultation
            call to discuss your project in detail.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-purple-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-purple-700/50">
      <div className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Start Your Project
        </h2>
        <p className="text-purple-200 text-lg">
          Tell us about your vision and we'll help bring it to life with our
          expert development team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="text-purple-200 mb-3 font-medium flex items-center"
            >
              <User className="w-4 h-4 mr-2" />
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`bg-purple-900/50 border-2 text-white placeholder:text-purple-400 focus:border-purple-400 rounded-xl h-12 transition-all duration-200 ${
                errors.name ? "border-red-400" : "border-purple-600"
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <div className="flex items-center mt-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-purple-200 mb-3 font-medium flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`bg-purple-900/50 border-2 text-white placeholder:text-purple-400 focus:border-purple-400 rounded-xl h-12 transition-all duration-200 ${
                errors.email ? "border-red-400" : "border-purple-600"
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <div className="flex items-center mt-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </div>
            )}
          </div>
        </div>

        {/* Company and Phone Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="company"
              className="text-purple-200 mb-3 font-medium flex items-center"
            >
              <Building className="w-4 h-4 mr-2" />
              Company
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="bg-purple-900/50 border-2 border-purple-600 text-white placeholder:text-purple-400 focus:border-purple-400 rounded-xl h-12 transition-all duration-200"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-purple-200 mb-3 font-medium flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`bg-purple-900/50 border-2 text-white placeholder:text-purple-400 focus:border-purple-400 rounded-xl h-12 transition-all duration-200 ${
                errors.phone ? "border-red-400" : "border-purple-600"
              }`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <div className="flex items-center mt-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone}
              </div>
            )}
          </div>
        </div>

        {/* Service and Budget Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="service"
              className="block text-purple-200 mb-3 font-medium"
            >
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-purple-900/50 border-2 border-purple-600 text-white rounded-xl px-4 py-3 focus:border-purple-400 focus:outline-none transition-all duration-200"
            >
              <option value="">Select a service</option>
              <option value="custom-software">
                Custom Software Development
              </option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile App Development</option>
              <option value="cloud-solutions">Cloud Solutions</option>
              <option value="ai-ml">AI & Machine Learning</option>
              <option value="devops">DevOps & CI/CD</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="data-analytics">Data Analytics</option>
              <option value="digital-transformation">
                Digital Transformation
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="text-purple-200 mb-3 font-medium flex items-center"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-purple-900/50 border-2 border-purple-600 text-white rounded-xl px-4 py-3 focus:border-purple-400 focus:outline-none transition-all duration-200"
            >
              <option value="">Select budget range</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-35k">$15,000 - $35,000</option>
              <option value="35k-75k">$35,000 - $75,000</option>
              <option value="75k+">$75,000+</option>
              <option value="discuss">Let's discuss</option>
            </select>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label
            htmlFor="timeline"
            className="block text-purple-200 mb-3 font-medium"
          >
            Project Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full bg-purple-900/50 border-2 border-purple-600 text-white rounded-xl px-4 py-3 focus:border-purple-400 focus:outline-none transition-all duration-200"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6months+">6+ months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="text-purple-200 mb-3 font-medium flex items-center"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Project Details *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`bg-purple-900/50 border-2 text-white placeholder:text-purple-400 focus:border-purple-400 resize-none rounded-xl transition-all duration-200 ${
              errors.message ? "border-red-400" : "border-purple-600"
            }`}
            placeholder="Tell us about your project, requirements, goals, and any specific needs or challenges you're facing..."
          />
          {errors.message && (
            <div className="flex items-center mt-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-3 h-5 w-5" />
            </>
          )}
        </Button>

        {/* Additional Info */}
        <div className="bg-purple-700/30 rounded-2xl p-6 mt-6">
          <p className="text-purple-200 text-sm text-center">
            <strong>🔒 Your information is secure</strong>
            <br />
            We respect your privacy and will never share your details with third
            parties.
          </p>
        </div>
      </form>
    </div>
  );
}
