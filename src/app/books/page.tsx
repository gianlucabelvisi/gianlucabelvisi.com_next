import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Books - Gianluca Belvisi',
  description: 'Book recommendations and reading list',
}

export default function BooksPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Books</h1>
      
      <div style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '2rem' }}>
          Here you'll find my reading recommendations, book reviews, and thoughts on literature 
          that has shaped my thinking.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #eee'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>📚 Currently Reading</h3>
            <p>Books I'm currently working through</p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Reading list will be populated during migration
            </p>
          </div>
          
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #eee'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>⭐ Recommendations</h3>
            <p>Books I highly recommend</p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Recommendations will be added during migration
            </p>
          </div>
          
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #eee'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>📝 Reviews</h3>
            <p>Detailed thoughts on books I've read</p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Reviews will be migrated from the original blog
            </p>
          </div>
        </div>
        
        <div style={{
          padding: '2rem',
          backgroundColor: '#fff8f0',
          borderRadius: '8px',
          border: '1px solid #ffeecc',
          marginTop: '3rem'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>📖 Reading Philosophy</h2>
          <p>
            I believe in reading widely across genres and perspectives. You'll find everything from 
            technical books to fiction, philosophy to memoirs. The goal is continuous learning and 
            expanding understanding of the world.
          </p>
        </div>
      </div>
    </div>
  )
} 