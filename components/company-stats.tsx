"use client";

import { useEffect, useState } from "react";
import { Building, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Building,
    number: "500+",
    label: "Projects Delivered",
    description: "Successfully completed projects across various industries",
  },
  {
    icon: Users,
    number: "50+",
    label: "Expert Team Members",
    description: "Skilled developers, designers, and consultants",
  },
  {
    icon: Globe,
    number: "25+",
    label: "Countries Served",
    description: "Global reach with clients worldwide",
  },
  {
    icon: Award,
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently high client satisfaction ratings",
  },
];

export default function CompanyStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Impact
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 ${
                mounted ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-0.5">
                <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-purple-200 mb-3">
                {stat.label}
              </div>
              <div className="text-purple-300 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
