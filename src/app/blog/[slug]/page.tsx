import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// This will be replaced with actual post fetching logic later
async function getPost(slug: string) {
  // For now, only return data for the diabetes post
  if (slug === 'diabetes') {
    return {
      slug: 'diabetes',
      frontmatter: {
        path: '/diabetes',
        date: '2024-02-24',
        title: 'I have diabetes and that\'s ok',
        subTitle: 'How a cat helped my diagnosis, and on processing loss.',
        author: 'Gianluca Belvisi',
        hashtags: 'health,lifestyle,mindfulness',
        hidden: false
      },
      content: 'Blog post content will be loaded here...'
    }
  }
  return null
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.subTitle,
    authors: [{ name: post.frontmatter.author }],
  }
}

export async function generateStaticParams() {
  // For now, only generate the diabetes post
  return [
    { slug: 'diabetes' }
  ]
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      {/* Post Header */}
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <time style={{ 
          fontSize: '0.9rem', 
          color: '#666',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
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

      {/* Post Content */}
      <div style={{ 
        lineHeight: '1.7',
        fontSize: '1.1rem'
      }}>
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
            <strong>Post slug:</strong> {params.slug}
          </p>
        </div>
      </div>

      {/* Post Footer */}
      <footer style={{ 
        marginTop: '4rem', 
        paddingTop: '2rem',
        borderTop: '1px solid #eee',
        textAlign: 'center'
      }}>
        <p style={{ color: '#666' }}>
          <a href="/" style={{ textDecoration: 'none' }}>← Back to Home</a>
        </p>
      </footer>
    </article>
  )
} 