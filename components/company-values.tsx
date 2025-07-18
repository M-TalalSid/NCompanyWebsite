import { Lightbulb, Shield, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "We maintain the highest standards in code quality, security, and performance.",
    color: "from-green-400 to-blue-400",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners to achieve shared success.",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering beyond expectations.",
    color: "from-blue-400 to-purple-400",
  },
]

export default function CompanyValues() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Values</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            The principles that guide our work and define our culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div
                className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${value.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-purple-200 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
