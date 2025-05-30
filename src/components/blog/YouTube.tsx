'use client'

import React from 'react'

interface YouTubeProps {
  source: string
  title?: string
}

const YouTube: React.FC<YouTubeProps> = ({ source, title = "YouTube video player" }) => {
  return (
    <div className="relative w-full pb-[56.25%] overflow-hidden h-0 max-w-full mb-4 rounded-lg shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${source}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  )
}

export const YouTubeShorts: React.FC<YouTubeProps> = ({ source, title = "YouTube Shorts player" }) => {
  return (
    <div className="relative w-full pb-[177.78%] overflow-hidden h-0 max-w-sm mx-auto mb-4 rounded-lg shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${source}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  )
}

export default YouTube 