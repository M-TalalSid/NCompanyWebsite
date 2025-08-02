"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Users, Code, Award, BarChart3, PieChart, Activity } from "lucide-react"

interface ChartData {
  label: string
  value: number
  color: string
}

const projectsData: ChartData[] = [
  { label: "Web Development", value: 35, color: "from-blue-500 to-cyan-500" },
  { label: "Mobile Apps", value: 25, color: "from-purple-500 to-pink-500" },
  { label: "Cloud Solutions", value: 20, color: "from-green-500 to-teal-500" },
  { label: "AI/ML", value: 15, color: "from-orange-500 to-red-500" },
  { label: "Other", value: 5, color: "from-gray-500 to-gray-600" },
]

const performanceData = [
  { month: "Jan", projects: 12, satisfaction: 98 },
  { month: "Feb", projects: 15, satisfaction: 97 },
  { month: "Mar", projects: 18, satisfaction: 99 },
  { month: "Apr", projects: 22, satisfaction: 98 },
  { month: "May", projects: 25, satisfaction: 99 },
  { month: "Jun", projects: 28, satisfaction: 100 },
]

export function InteractiveDonutChart() {
  const [animatedData, setAnimatedData] = useState<ChartData[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(projectsData)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const total = projectsData.reduce((sum, item) => sum + item.value, 0)
  let cumulativePercentage = 0

  return (
    <div className="bg-purple-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-700/50">
      <div className="flex items-center mb-6">
        <PieChart className="w-6 h-6 text-purple-400 mr-3" />
        <h3 className="text-2xl font-bold text-white">Project Distribution</h3>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Donut Chart */}
        <div className="relative w-64 h-64">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="8" />
            {animatedData.map((item, index) => {
              const percentage = (item.value / total) * 100
              const strokeDasharray = `${percentage * 2.51} 251.2`
              const strokeDashoffset = -cumulativePercentage * 2.51
              cumulativePercentage += percentage

              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className={`transition-all duration-1000 ease-out cursor-pointer ${
                    hoveredIndex === index ? "stroke-white" : ""
                  }`}
                  style={{
                    stroke: hoveredIndex === index ? "white" : `url(#gradient-${index})`,
                    filter: hoveredIndex === index ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))" : "none",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              )
            })}
            {/* Gradients */}
            <defs>
              {projectsData.map((item, index) => {
                // Parse gradient colors more safely
                const gradientParts = item.color.split(" ")
                const fromColor =
                  gradientParts.find((part) => part.startsWith("from-"))?.replace("from-", "") || "purple-500"
                const toColor = gradientParts.find((part) => part.startsWith("to-"))?.replace("to-", "") || "pink-500"

                // Convert Tailwind color names to actual hex values
                const getColorValue = (colorName: string) => {
                  const colorMap: { [key: string]: string } = {
                    "purple-500": "#a855f7",
                    "pink-500": "#ec4899",
                    "blue-500": "#3b82f6",
                    "cyan-500": "#06b6d4",
                    "green-500": "#10b981",
                    "teal-500": "#14b8a6",
                    "orange-500": "#f59e0b",
                    "red-500": "#ef4444",
                    "gray-500": "#6b7280",
                    "gray-600": "#4b5563",
                  }
                  return colorMap[colorName] || "#a855f7"
                }

                return (
                  <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={getColorValue(fromColor)} />
                    <stop offset="100%" stopColor={getColorValue(toColor)} />
                  </linearGradient>
                )
              })}
            </defs>
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-purple-300 text-sm">Projects</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-4">
          {projectsData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                hoveredIndex === index ? "bg-purple-700/50 scale-105" : "hover:bg-purple-800/30"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
              <div className="flex-1">
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-purple-300 text-sm">{item.value}% of projects</div>
              </div>
              <div className="text-2xl font-bold text-white">{item.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function InteractiveBarChart() {
  const [animatedData, setAnimatedData] = useState(performanceData.map(() => ({ projects: 0, satisfaction: 0 })))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(performanceData)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const maxProjects = Math.max(...performanceData.map((d) => d.projects))

  return (
    <div className="bg-purple-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-700/50">
      <div className="flex items-center mb-6">
        <BarChart3 className="w-6 h-6 text-purple-400 mr-3" />
        <h3 className="text-2xl font-bold text-white">Performance Metrics</h3>
      </div>

      <div className="space-y-6">
        {/* Chart */}
        <div className="h-64 flex items-end justify-between space-x-4">
          {animatedData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center space-y-2">
              <div className="relative w-full h-48 flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-1000 ease-out hover:from-purple-400 hover:to-pink-400 cursor-pointer group"
                  style={{ height: `${(data.projects / maxProjects) * 100}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {data.projects} projects
                  </div>
                </div>
              </div>
              <div className="text-purple-300 text-sm font-medium">{performanceData[index].month}</div>
            </div>
          ))}
        </div>

        {/* Satisfaction Line */}
        <div className="border-t border-purple-700/50 pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-purple-200">Client Satisfaction</span>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-bold">99.2% Average</span>
            </div>
          </div>
          <div className="relative h-16 bg-purple-900/50 rounded-lg overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 64">
              <defs>
                <linearGradient id="satisfactionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                  <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                </linearGradient>
              </defs>
              <path
                d={`M 0,${64 - (animatedData[0].satisfaction - 95) * 3.2} ${animatedData
                  .map((d, i) => `L ${(i * 300) / (animatedData.length - 1)},${64 - (d.satisfaction - 95) * 3.2}`)
                  .join(" ")}`}
                fill="none"
                stroke="rgb(34, 197, 94)"
                strokeWidth="2"
                className="transition-all duration-1000 ease-out"
              />
              <path
                d={`M 0,${64 - (animatedData[0].satisfaction - 95) * 3.2} ${animatedData
                  .map((d, i) => `L ${(i * 300) / (animatedData.length - 1)},${64 - (d.satisfaction - 95) * 3.2}`)
                  .join(" ")} L 300,64 L 0,64 Z`}
                fill="url(#satisfactionGradient)"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function  InteractiveStatsGrid() {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, satisfaction: 0, experience: 0 })

  useEffect(() => {
    const targets = { projects: 50, clients: 50 , satisfaction: 98, experience: 2   }
    const duration = 2000
    const steps = 60

    const increment = {
      projects: targets.projects / steps,
      clients: targets.clients / steps,
      satisfaction: targets.satisfaction / steps,
      experience: targets.experience / steps,
    }

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCounters({
        projects: Math.min(Math.floor(increment.projects * currentStep), targets.projects),
        clients: Math.min(Math.floor(increment.clients * currentStep), targets.clients),
        satisfaction: Math.min(Math.floor(increment.satisfaction * currentStep), targets.satisfaction),
        experience: Math.min(Math.floor(increment.experience * currentStep), targets.experience),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      icon: Code,
      value: counters.projects,
      suffix: "+",
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      value: counters.clients,
      suffix: "+",
      label: "Happy Clients",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      value: counters.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      value: counters.experience,
      suffix: "+",
      label: "Years Experience",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group text-center"
        >
          <div
            className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
          >
            <div className="w-full h-full rounded-2xl bg-purple-900 flex items-center justify-center">
              <stat.icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-4xl font-bold text-white mb-2">
            {stat.value}
            {stat.suffix}
          </div>
          <div className="text-purple-200 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
