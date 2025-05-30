import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPostBySlug } from '@/lib/posts'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  return getPostBySlug(slug)
}

export async function generateStaticParams() {
  // For now, we'll just return the diabetes post
  // Later we can scan the content directory for all posts
  return [
    { slug: 'diabetes' }
  ]
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.subTitle,
    authors: [{ name: post.frontmatter.author }],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.subTitle,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      images: post.frontmatter.featureImage ? [
        {
          url: `/images/${slug}/${post.frontmatter.featureImage}`,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.subTitle,
      images: post.frontmatter.featureImage ? [`/images/${slug}/${post.frontmatter.featureImage}`] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <time style={{ 
          fontSize: '0.9rem', 
          color: '#666', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em' 
        }}>
          {post.frontmatter.formattedDate || post.frontmatter.date}
        </time>
        
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginTop: '1rem', 
          marginBottom: '1rem', 
          lineHeight: '1.2' 
        }}>
          {post.frontmatter.title}
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          fontStyle: 'italic' 
        }}>
          {post.frontmatter.subTitle}
        </p>
        
        <p style={{ 
          fontSize: '0.9rem', 
          color: '#999', 
          marginTop: '1rem' 
        }}>
          By {post.frontmatter.author}
        </p>
      </header>

      <div style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
        {/* Placeholder for MDX content */}
        <div style={{ 
          padding: '2rem', 
          backgroundColor: '#f9f9f9', 
          borderRadius: '8px', 
          border: '1px solid #eee',
          textAlign: 'center'
        }}>
          <h2>Content Coming Soon!</h2>
          <p>This is where the full MDX content will be rendered.</p>
          <p>We'll implement the MDX processing and custom components in the next phases.</p>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
            <strong>Post slug:</strong> {slug}
          </p>
        </div>
      </div>

      <footer style={{ 
        marginTop: '4rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid #eee',
        textAlign: 'center'
      }}>
        <p style={{ color: '#666' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            ← Back to Home
          </a>
        </p>
      </footer>
    </article>
  )
} 