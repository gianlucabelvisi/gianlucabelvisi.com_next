'use client'

import React from 'react'
import Image from 'next/image'

interface BlogImageProps {
  imageName: string
  alt: string
  width?: number
  height?: number
  className?: string
  postSlug?: string
}

const BlogImage: React.FC<BlogImageProps> = ({ 
  imageName, 
  alt, 
  width = 800, 
  height = 600, 
  className = "",
  postSlug = "diabetes" // Default to diabetes for now
}) => {
  // Handle different image extensions
  const getImagePath = (name: string) => {
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
    
    // If the name already has an extension, use it as is
    if (extensions.some(ext => name.toLowerCase().endsWith(ext))) {
      return `/images/${postSlug}/${name}`
    }
    
    // Otherwise, try common extensions (default to .jpg)
    return `/images/${postSlug}/${name}.jpg`
  }

  return (
    <div className={`my-6 text-center ${className}`}>
      <div className="relative inline-block max-w-full">
        <Image
          src={getImagePath(imageName)}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg shadow-md max-w-full h-auto"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}

export default BlogImage 