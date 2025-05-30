import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Gianluca Belvisi',
  description: 'Learn more about Gianluca Belvisi',
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Me</h1>
      
      <div style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Welcome to my corner of the internet! I'm Gianluca Belvisi, and this is where I share my thoughts, 
          experiences, and adventures.
        </p>
        
        <p style={{ marginBottom: '1.5rem' }}>
          This blog covers a wide range of topics including technology, personal experiences, books, 
          travel, and life reflections. You'll find everything from technical deep-dives to personal 
          stories about cats helping with medical diagnoses.
        </p>
        
        <div style={{
          padding: '2rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          border: '1px solid #eee',
          marginTop: '2rem'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Content Migration in Progress</h2>
          <p>
            This site is currently being migrated from Gatsby to Next.js. The full about content 
            will be populated from the original blog once the migration is complete.
          </p>
        </div>
      </div>
    </div>
  )
} 