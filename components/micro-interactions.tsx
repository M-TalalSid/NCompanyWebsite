"use client"

import { useState } from "react"
import { Heart, Share2, Bookmark } from "lucide-react"

export function LikeButton({ initialLikes = 0 }: { initialLikes?: number }) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleLike = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setIsLiked(!isLiked)
      setLikes(isLiked ? likes - 1 : likes + 1)

      setTimeout(() => setIsAnimating(false), 400)
    }
  }

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
        isLiked
          ? "bg-red-500/20 text-red-400 border border-red-400/50"
          : "bg-purple-800/30 text-purple-300 border border-purple-600/50 hover:border-purple-400/50"
      }`}
    >
      <Heart
        className={`w-5 h-5 transition-all duration-200 ${
          isLiked ? "fill-current scale-110" : ""
        } ${isAnimating ? "animate-bounce" : ""}`}
      />
      <span className="font-medium">{likes}</span>
    </button>
  )
}

export function ShareButton() {
  const [isShared, setIsShared] = useState(false)

  const handleShare = () => {
    setIsShared(true)
    setTimeout(() => setIsShared(false), 1500)

    if (navigator.share) {
      navigator.share({
        title: "MT International - Premium Software Solutions",
        url: window.location.href,
      })
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
        isShared
          ? "bg-green-500/20 text-green-400 border border-green-400/50"
          : "bg-purple-800/30 text-purple-300 border border-purple-600/50 hover:border-purple-400/50"
      }`}
    >
      <Share2 className={`w-5 h-5 transition-all duration-200 ${isShared ? "scale-110" : ""}`} />
      <span className="font-medium">{isShared ? "Shared!" : "Share"}</span>
    </button>
  )
}

export function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  return (
    <button
      onClick={handleBookmark}
      className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
        isBookmarked
          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/50"
          : "bg-purple-800/30 text-purple-300 border border-purple-600/50 hover:border-purple-400/50"
      }`}
    >
      <Bookmark className={`w-5 h-5 transition-all duration-200 ${isBookmarked ? "fill-current" : ""}`} />
    </button>
  )
}
