"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className={`space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Unlock Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Software Solutions
            </span>{" "}
            You Thought Was{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Out of Reach
            </span>{" "}
            – Now Just One Click Away!
          </h1>

          <p className="text-xl text-purple-100 leading-relaxed max-w-2xl">
            Transform your business with cutting-edge custom software development, web applications, and digital
            solutions crafted by expert developers.
          </p>

          {/* <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 group"
          >
            Start Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button> */}
        </div>

        {/* Right Content - Floating Circles */}
        <div className="relative flex items-center justify-center">
          <FloatingCircles />
        </div>
      </div>
    </section>
  )
}

function FloatingCircles() {
  return (
    <div className="relative w-96 h-96">
      {/* Main Circle */}
      <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-spin-slow">
        <div className="absolute inset-4 rounded-full border border-purple-400/20 animate-pulse">
          <div className="absolute inset-4 rounded-full border border-purple-400/10"></div>
        </div>
      </div>

      {/* Center Stats */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl font-bold text-white mb-2">500+</div>
          <div className="text-purple-200">Projects</div>
          <div className="text-purple-300 text-sm">Expert Team</div>
        </div>
      </div>

      {/* Floating Profile Images */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-0.5 animate-float">
        <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
          <img
            src="/placeholder.svg?height=60&width=60"
            alt="Team member"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 w-14 h-14 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 p-0.5 animate-float-delayed">
        <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
          <img
            src="/placeholder.svg?height=52&width=52"
            alt="Team member"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-0.5 animate-float-slow">
        <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
          <img
            src="/placeholder.svg?height=52&width=52"
            alt="Team member"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="absolute top-1/2 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-0.5 animate-float-reverse">
        <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
          <img
            src="/placeholder.svg?height=44&width=44"
            alt="Team member"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
