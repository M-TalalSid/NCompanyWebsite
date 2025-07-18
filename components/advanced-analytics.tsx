"use client"

import { useState, useEffect } from "react"
import { BarChart3, TrendingUp, Users, Eye, Clock, Globe, Smartphone, Monitor } from "lucide-react"

interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  bounceRate: number
  avgSessionDuration: string
  topPages: { page: string; views: number }[]
  deviceBreakdown: { device: string; percentage: number; icon: any }[]
  trafficSources: { source: string; percentage: number; color: string }[]
  realTimeUsers: number
}

const mockAnalyticsData: AnalyticsData = {
  pageViews: 15420,
  uniqueVisitors: 8930,
  bounceRate: 32.5,
  avgSessionDuration: "3m 42s",
  topPages: [
    { page: "/services", views: 4230 },
    { page: "/", views: 3890 },
    { page: "/about", views: 2340 },
    { page: "/contact", views: 1890 },
    { page: "/blog", views: 1560 },
  ],
  deviceBreakdown: [
    { device: "Desktop", percentage: 45, icon: Monitor },
    { device: "Mobile", percentage: 38, icon: Smartphone },
    { device: "Tablet", percentage: 17, icon: Globe },
  ],
  trafficSources: [
    { source: "Organic Search", percentage: 42, color: "from-green-500 to-teal-500" },
    { source: "Direct", percentage: 28, color: "from-blue-500 to-cyan-500" },
    { source: "Social Media", percentage: 18, color: "from-purple-500 to-pink-500" },
    { source: "Referral", percentage: 12, color: "from-orange-500 to-red-500" },
  ],
  realTimeUsers: 127,
}

export default function AdvancedAnalytics() {
  const [data, setData] = useState<AnalyticsData>(mockAnalyticsData)
  const [timeRange, setTimeRange] = useState("7d")
  const [realTimeCount, setRealTimeCount] = useState(mockAnalyticsData.realTimeUsers)

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setRealTimeCount((prev) => prev + Math.floor(Math.random() * 5) - 2)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const StatCard = ({ icon: Icon, title, value, change, color }: any) => (
    <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} p-0.5`}>
          <div className="w-full h-full rounded-xl bg-purple-900 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        {change && (
          <div className={`text-sm font-medium ${change > 0 ? "text-green-400" : "text-red-400"}`}>
            {change > 0 ? "+" : ""}
            {change}%
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-purple-300 text-sm">{title}</div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h2>
          <p className="text-purple-200">Real-time insights into website performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-purple-800/30 rounded-full px-4 py-2 border border-purple-700/50">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">{realTimeCount}</span>
            <span className="text-purple-300 text-sm">online now</span>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-purple-800/50 border border-purple-600/50 text-white rounded-xl px-4 py-2 focus:border-purple-400 focus:outline-none"
          >
            <option value="1d">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Eye}
          title="Page Views"
          value={data.pageViews.toLocaleString()}
          change={12.5}
          color="from-blue-500 to-cyan-500"
        />
        <StatCard
          icon={Users}
          title="Unique Visitors"
          value={data.uniqueVisitors.toLocaleString()}
          change={8.3}
          color="from-purple-500 to-pink-500"
        />
        <StatCard
          icon={TrendingUp}
          title="Bounce Rate"
          value={`${data.bounceRate}%`}
          change={-2.1}
          color="from-green-500 to-teal-500"
        />
        <StatCard
          icon={Clock}
          title="Avg. Session"
          value={data.avgSessionDuration}
          change={15.7}
          color="from-orange-500 to-red-500"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Pages */}
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Top Pages
          </h3>
          <div className="space-y-4">
            {data.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-white font-medium">{page.page}</div>
                  <div className="w-full bg-purple-900/50 rounded-full h-2 mt-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(page.views / data.topPages[0].views) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-purple-300 ml-4">{page.views.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50">
          <h3 className="text-xl font-bold text-white mb-6">Device Breakdown</h3>
          <div className="space-y-4">
            {data.deviceBreakdown.map((device, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <device.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-white">{device.device}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-purple-900/50 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-purple-300 w-12 text-right">{device.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50">
        <h3 className="text-xl font-bold text-white mb-6">Traffic Sources</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.trafficSources.map((source, index) => (
            <div key={index} className="text-center">
              <div className={`w-full h-32 rounded-xl bg-gradient-to-t ${source.color} mb-4 relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <span className="text-white font-bold text-2xl">{source.percentage}%</span>
                </div>
              </div>
              <div className="text-white font-medium">{source.source}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
