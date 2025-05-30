import { compile } from '@mdx-js/mdx'
import { VFile } from 'vfile'

export interface MDXCompileOptions {
  development?: boolean
  jsx?: boolean
  format?: 'mdx' | 'md'
  outputFormat?: 'program' | 'function-body'
}

export async function compileMDX(
  source: string,
  options: MDXCompileOptions = {}
): Promise<string> {
  try {
    const vfile = new VFile({
      value: source,
      path: 'content.mdx'
    })

    const compiled = await compile(vfile, {
      development: options.development ?? process.env.NODE_ENV === 'development',
      jsx: options.jsx ?? true,
      format: options.format ?? 'mdx',
      outputFormat: options.outputFormat ?? 'function-body',
      // Add any additional MDX plugins here
      remarkPlugins: [],
      rehypePlugins: []
    })

    return String(compiled)
  } catch (error) {
    console.error('Error compiling MDX:', error)
    throw new Error(`Failed to compile MDX: ${error}`)
  }
}

export function createMDXComponent(compiledSource: string) {
  // This will be used to create React components from compiled MDX
  // For now, we'll return the compiled source
  return compiledSource
}

// Utility to extract frontmatter and content separately
export function separateFrontmatter(source: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = source.match(frontmatterRegex)
  
  if (match) {
    return {
      frontmatter: match[1],
      content: match[2]
    }
  }
  
  return {
    frontmatter: '',
    content: source
  }
}

// Utility to process image paths for Next.js
export function processImagePaths(content: string, postSlug: string): string {
  // Replace relative image paths with absolute paths
  return content.replace(
    /!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
    (match, alt, src) => {
      // Convert relative paths to absolute paths in the public directory
      const imagePath = src.startsWith('/') ? src : `/images/${postSlug}/${src}`
      return `![${alt}](${imagePath})`
    }
  )
}

// Utility to extract reading time estimate
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
} 