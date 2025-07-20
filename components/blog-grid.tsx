import Link from "next/link"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we build software and what it means for developers.",
    author: "Sarah Chen",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "/placeholder.svg?height=300&width=500",
    slug: "future-of-ai-in-software-development",
  },
  {
    id: 2,
    title: "Building Scalable Cloud Applications",
    excerpt:
      "Learn best practices for designing and implementing cloud-native applications that can scale with your business.",
    author: "Michael Rodriguez",
    date: "2025-01-12",
    readTime: "12 min read",
    category: "Cloud Computing",
    image: "/placeholder.svg?height=300&width=500",
    slug: "building-scalable-cloud-applications",
  },
  {
    id: 3,
    title: "Modern DevOps Practices for 2025",
    excerpt: "Discover the latest DevOps trends and practices that are shaping software delivery in 2025.",
    author: "David Kim",
    date: "2025-01-10",
    readTime: "10 min read",
    category: "DevOps",
    image: "/placeholder.svg?height=300&width=500",
    slug: "modern-devops-practices-2025",
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for Developers",
    excerpt: "Essential security practices every developer should implement to protect applications from threats.",
    author: "Alex Johnson",
    date: "2025-01-08",
    readTime: "15 min read",
    category: "Cybersecurity",
    image: "/placeholder.svg?height=300&width=500",
    slug: "cybersecurity-best-practices-developers",
  },
  {
    id: 5,
    title: "The Rise of Low-Code Development",
    excerpt: "How low-code platforms are changing the software development landscape and when to use them.",
    author: "Emily Thompson",
    date: "2025-01-05",
    readTime: "7 min read",
    category: "Development Trends",
    image: "/placeholder.svg?height=300&width=500",
    slug: "rise-of-low-code-development",
  },
  {
    id: 6,
    title: "Mobile App Performance Optimization",
    excerpt: "Techniques and strategies to optimize mobile app performance for better user experience.",
    author: "Lisa Wang",
    date: "2025-01-03",
    readTime: "11 min read",
    category: "Mobile Development",
    image: "/placeholder.svg?height=300&width=500",
    slug: "mobile-app-performance-optimization",
  },
]

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          className="bg-purple-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-700/50 hover:border-purple-500/50 transition-all duration-200 hover:scale-105 group"
        >
          <div className="relative overflow-hidden">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-200"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-4 text-sm text-purple-300 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-200">
              {post.title}
            </h2>

            <p className="text-purple-200 mb-4 line-clamp-3">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm">{post.author}</span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-200 font-medium"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
