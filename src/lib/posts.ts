import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost, BlogPostFrontmatter } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'content')

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Validate frontmatter and ensure date is a string
    const frontmatter = {
      ...data,
      date: typeof data.date === 'string' ? data.date : data.date?.toISOString?.() || data.date
    } as BlogPostFrontmatter
    
    return {
      slug,
      frontmatter: {
        ...frontmatter,
        formattedDate: formatDate(frontmatter.date)
      },
      content,
      excerpt: generateExcerpt(content)
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }
    
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(name => {
        const slug = name.replace(/\.mdx$/, '')
        return getPostBySlug(slug)
      })
      .filter((post): post is BlogPost => post !== null)
      .filter(post => !post.frontmatter.hidden)
      .sort((a, b) => {
        // Sort by date, newest first
        const dateA = new Date(a.frontmatter.date).getTime()
        const dateB = new Date(b.frontmatter.date).getTime()
        return dateB - dateA
      })
    
    return posts
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export function getFeaturedPost(): BlogPost | null {
  const posts = getAllPosts()
  return posts.length > 0 ? posts[0]! : null
}

function generateExcerpt(content: string, maxLength: number = 160): string {
  // Remove MDX/markdown syntax for a clean excerpt
  const cleanContent = content
    .replace(/^---[\s\S]*?---/, '') // Remove frontmatter
    .replace(/import\s+.*?from\s+.*?;/g, '') // Remove imports
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
  
  if (cleanContent.length <= maxLength) {
    return cleanContent
  }
  
  return cleanContent.substring(0, maxLength).replace(/\s+\w*$/, '') + '...'
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter(post => 
    post.frontmatter.hashtags?.toLowerCase().includes(tag.toLowerCase())
  )
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagSet = new Set<string>()
  
  posts.forEach(post => {
    if (post.frontmatter.hashtags) {
      const tags = post.frontmatter.hashtags.split(',').map(tag => tag.trim())
      tags.forEach(tag => tagSet.add(tag))
    }
  })
  
  return Array.from(tagSet).sort()
} 