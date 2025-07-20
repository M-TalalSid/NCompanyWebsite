// "use client"

// import { useState, useEffect } from "react"
// import { Calendar, Award, Users, Rocket, Globe, Brain, Shield, Zap } from "lucide-react"

// const timelineData = [
//   {
//     year: "2018",
//     title: "Company Founded",
//     description:
//       "NexaForge was established with a vision to transform businesses through innovative software solutions.",
//     icon: Rocket,
//     color: "from-blue-500 to-cyan-500",
//     achievements: ["Founded by tech veterans", "First office in Silicon Valley", "Initial team of 5 developers"],
//   },
//   {
//     year: "2019",
//     title: "First Major Milestone",
//     description: "Completed 50+ projects and established partnerships with leading technology companies.",
//     icon: Award,
//     color: "from-purple-500 to-pink-500",
//     achievements: ["50+ projects completed", "Partnership with AWS", "Team expanded to 15 members"],
//   },
//   {
//     year: "2020",
//     title: "Global Expansion",
//     description: "Expanded operations globally and adapted to remote-first work culture during the pandemic.",
//     icon: Globe,
//     color: "from-green-500 to-teal-500",
//     achievements: ["Remote-first culture", "International clients", "100+ projects milestone"],
//   },
//   {
//     year: "2021",
//     title: "AI & Innovation Focus",
//     description: "Launched AI and machine learning division, pioneering intelligent software solutions.",
//     icon: Brain,
//     color: "from-orange-500 to-red-500",
//     achievements: ["AI/ML division launched", "First AI product released", "25+ team members"],
//   },
//   {
//     year: "2022",
//     title: "Security Excellence",
//     description: "Achieved industry certifications and became a trusted cybersecurity solutions provider.",
//     icon: Shield,
//     color: "from-red-500 to-pink-500",
//     achievements: ["ISO 27001 certified", "SOC 2 compliance", "Security team established"],
//   },
//   {
//     year: "2023",
//     title: "Digital Transformation Leader",
//     description: "Recognized as a leading digital transformation partner with 300+ successful projects.",
//     icon: Zap,
//     color: "from-yellow-500 to-orange-500",
//     achievements: ["300+ projects completed", "Industry recognition", "40+ team members"],
//   },
//   {
//     year: "2024",
//     title: "Innovation & Growth",
//     description: "Continued innovation with cutting-edge solutions and expanded service offerings.",
//     icon: Users,
//     color: "from-cyan-500 to-blue-500",
//     achievements: ["500+ projects milestone", "50+ team members", "New service lines launched"],
//   },
// ]

// export default function InteractiveTimeline() {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [visibleItems, setVisibleItems] = useState<number[]>([])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
//             setVisibleItems((prev) => [...prev, index])
//           }
//         })
//       },
//       { threshold: 0.3 },
//     )

//     const timelineItems = document.querySelectorAll(".timeline-item")
//     timelineItems.forEach((item) => observer.observe(item))

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <div className="bg-purple-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-700/50">
//       <div className="flex items-center mb-8">
//         <Calendar className="w-6 h-6 text-purple-400 mr-3" />
//         <h3 className="text-3xl font-bold text-white">Our Journey</h3>
//       </div>

//       <div className="relative">
//         {/* Timeline Line */}
//         <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

//         {/* Timeline Items */}
//         <div className="space-y-12">
//           {timelineData.map((item, index) => (
//             <div
//               key={index}
//               data-index={index}
//               className={`timeline-item relative flex items-start space-x-8 transition-all duration-700 ${
//                 visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
//               }`}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               {/* Timeline Node */}
//               <div
//                 className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} p-0.5 cursor-pointer transition-all duration-300 hover:scale-110 ${
//                   activeIndex === index ? "scale-110 shadow-lg shadow-purple-500/25" : ""
//                 }`}
//                 onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
//               >
//                 <div className="w-full h-full rounded-2xl bg-purple-900 flex items-center justify-center">
//                   <item.icon className="w-8 h-8 text-white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="flex-1 pb-8">
//                 <div
//                   className={`bg-purple-700/30 rounded-2xl p-6 border border-purple-600/50 cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-700/50 ${
//                     activeIndex === index ? "border-purple-400/50 bg-purple-700/50 scale-105" : ""
//                   }`}
//                   onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
//                       {item.year}
//                     </div>
//                     <div className="text-purple-300 text-sm">Click to expand</div>
//                   </div>

//                   <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
//                   <p className="text-purple-200 mb-4">{item.description}</p>

//                   {/* Expandable Achievements */}
//                   <div
//                     className={`overflow-hidden transition-all duration-500 ${
//                       activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <div className="border-t border-purple-600/50 pt-4">
//                       <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
//                       <ul className="space-y-2">
//                         {item.achievements.map((achievement, achievementIndex) => (
//                           <li
//                             key={achievementIndex}
//                             className="flex items-center text-purple-200 text-sm"
//                             style={{ animationDelay: `${achievementIndex * 100}ms` }}
//                           >
//                             <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
//                             {achievement}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
