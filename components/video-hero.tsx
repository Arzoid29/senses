"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative w-full h-96 bg-gray-900 overflow-hidden">
      {!isPlaying ? (
        <>
          <img src="/luxury-salon-video-thumbnail.jpg" alt="Senses Salon Video" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="bg-accent hover:bg-accent/90 text-white rounded-full p-4 transition-colors"
              aria-label="Play video"
            >
              <Play className="w-8 h-8" />
            </button>
          </div>
        </>
      ) : (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Senses Salon Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </section>
  )
}
