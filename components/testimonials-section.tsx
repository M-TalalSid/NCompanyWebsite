"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "NexaForge transformed our vision into a powerful software solution. Their expertise and dedication exceeded our expectations.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Chen",
    company: "Digital Dynamics",
    role: "CTO",
    content:
      "Outstanding development team with exceptional technical skills. They delivered our project on time and within budget.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emily Rodriguez",
    company: "InnovateCorp",
    role: "Product Manager",
    content:
      "The mobile app they developed for us has significantly improved our customer engagement. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Thompson",
    company: "CloudTech Solutions",
    role: "Founder",
    content: "Professional, reliable, and innovative. NexaForge helped us scale our infrastructure seamlessly.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Sarah Malik",
    company: "EcoNest Interiors",
    role: "Creative Director",
    content: "NexaForge delivered beyond expectations. Their solutions are both scalable and elegant.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "James Carter",
    company: "Finwise Analytics",
    role: "CTO",
    content: "Efficient and technically sound. Our team productivity has soared since collaborating with NexaForge.",
    rating: 4,
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Aisha Rehman",
    company: "BrightEdTech",
    role: "Founder & CEO",
    content: "They truly understand startup challenges. NexaForge was a game changer for our product launch.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Liam Nguyen",
    company: "SecureNet Solutions",
    role: "Head of Engineering",
    content: "Solid performance under pressure. Their cloud migration strategy saved us weeks of work.",
    rating: 4,
    image: "/placeholder.svg?height=80&width=80"
  },
  
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (!mounted) return null

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-purple-700/50">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl lg:text-2xl text-white text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-400"
              />
              <div className="text-center">
                <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-purple-300">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-200 hover:bg-purple-800/50"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-200 hover:bg-purple-800/50"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-purple-400" : "bg-purple-700"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
