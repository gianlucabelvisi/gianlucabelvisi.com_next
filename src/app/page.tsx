import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to Gianluca Belvisi's Blog
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
          Personal thoughts, stories, and adventures
        </p>
      </section>

      {/* Featured Post Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Featured Post</h2>
        <div style={{ 
          border: '1px solid #eee', 
          borderRadius: '8px', 
          padding: '2rem',
          backgroundColor: '#f9f9f9'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            <Link href="/blog/diabetes" style={{ textDecoration: 'none', color: '#333' }}>
              I have diabetes and that's ok
            </Link>
          </h3>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            How a cat helped my diagnosis, and on processing loss.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>
            February 24, 2024 • By Gianluca Belvisi
          </p>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Latest Posts</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Placeholder for more posts */}
          <div style={{ 
            border: '1px solid #eee', 
            borderRadius: '8px', 
            padding: '1.5rem',
            backgroundColor: '#fff'
          }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              More posts coming soon...
            </h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              This is where we'll display the latest blog posts once we migrate the content.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
