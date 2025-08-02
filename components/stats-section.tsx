"use client"

import { useEffect, useState } from "react"
import { RotateCcw, Star, Users, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: RotateCcw,
    number: "50+",
    label: "Projects Completed",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Star,
    number: "98%",
    label: "Client Satisfaction",
    color: "from-pink-400 to-red-400",
  },
  {
    icon: Users,
    number: "20+",
    label: "Team Members",
    color: "from-blue-400 to-purple-400",
  },
  {
    icon: TrendingUp,
    number: "2+",
    label: "Years Experience",
    color: "from-green-400 to-blue-400",
  },
]

export default function StatsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-purple-700/50 hover:border-purple-500/50 transition-all duration-200 hover:scale-105 ${
                mounted ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} p-0.5`}>
                <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
