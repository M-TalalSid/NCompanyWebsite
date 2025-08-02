import { Linkedin, Twitter, Github } from "lucide-react"

const teamMembers = [
  {
    name: "M. Talal Shoaib",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary leader with 15+ years in software development and business strategy.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Minhaj Azeem",
    role: "Co-Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Technical expert specializing in scalable architecture and emerging technologies.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Abdul Ahad Afridi",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer passionate about clean code and innovative solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Abdul Wahid",
    role: "UX/UI Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creative designer focused on user-centered design and exceptional experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Hammad Abbasi",
    role: "DevOps Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Infrastructure specialist ensuring reliable, scalable, and secure deployments.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Saad Darbari",
    role: "Project Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Experienced PM ensuring projects are delivered on time and exceed expectations.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Team</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">The talented individuals behind our success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 hover:border-purple-500/50 transition-all duration-200 hover:scale-105 group text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 group-hover:scale-110 transition-transform duration-200">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
              <p className="text-purple-200 text-sm mb-6 leading-relaxed">{member.bio}</p>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
