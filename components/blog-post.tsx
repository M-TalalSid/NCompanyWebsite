import type React from "react"
import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPostProps {
  post: {
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    category: string
    image: string
    content: string
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="container mx-auto px-4 mb-16 max-w-4xl">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

        <p className="text-xl text-purple-200 mb-8 leading-relaxed">{post.excerpt}</p>

        <div className="flex flex-wrap items-center gap-6 text-purple-300 mb-8">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-purple-400 text-purple-200 hover:bg-purple-800/50 bg-transparent"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-12">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-64 lg:h-96 object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-purple-700/50">
        <div
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={
            {
              "--tw-prose-body": "rgb(196 181 253)",
              "--tw-prose-headings": "rgb(255 255 255)",
              "--tw-prose-links": "rgb(168 85 247)",
              "--tw-prose-bold": "rgb(255 255 255)",
              "--tw-prose-counters": "rgb(196 181 253)",
              "--tw-prose-bullets": "rgb(168 85 247)",
              "--tw-prose-hr": "rgb(139 92 246)",
              "--tw-prose-quotes": "rgb(196 181 253)",
              "--tw-prose-quote-borders": "rgb(139 92 246)",
              "--tw-prose-captions": "rgb(196 181 253)",
              "--tw-prose-code": "rgb(255 255 255)",
              "--tw-prose-pre-code": "rgb(196 181 253)",
              "--tw-prose-pre-bg": "rgb(88 28 135)",
              "--tw-prose-th-borders": "rgb(139 92 246)",
              "--tw-prose-td-borders": "rgb(139 92 246)",
            } as React.CSSProperties
          }
        />
      </div>

      {/* Author Bio */}
      <div className="mt-12 bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
        <div className="flex items-start space-x-4">
          <img
            src="/placeholder.svg?height=80&width=80"
            alt={post.author}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">About {post.author}</h3>
            <p className="text-purple-200">
              {post.author} is a senior software engineer at NexaForge with expertise in {post.category.toLowerCase()}.
              With years of experience in the field, they regularly share insights and best practices with the
              development community.
            </p>
          </div>
        </div>
      </div>

      {/* Related Posts CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Want to Read More?</h3>
        <p className="text-purple-200 mb-6">Explore more insights and tutorials from our team of experts</p>
        <Link href="/blog">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            View All Posts
          </Button>
        </Link>
      </div>
    </article>
  )
}
