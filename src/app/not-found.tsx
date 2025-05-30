'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        marginBottom: '1rem',
        color: '#999'
      }}>
        404
      </h1>
      
      <h2 style={{ 
        fontSize: '2rem', 
        marginBottom: '1rem'
      }}>
        Page Not Found
      </h2>
      
      <p style={{ 
        fontSize: '1.1rem', 
        color: '#666',
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        Sorry, the page you're looking for doesn't exist. It might have been moved, 
        deleted, or you might have typed the wrong URL.
      </p>
      
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Link 
          href="/"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007acc',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500'
          }}
        >
          Go Home
        </Link>
        
        <Link 
          href="/about"
          style={{
            padding: '0.75rem 1.5rem',
            border: '1px solid #007acc',
            color: '#007acc',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500'
          }}
        >
          About Me
        </Link>
      </div>
      
      <div style={{
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        border: '1px solid #eee'
      }}>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          <strong>Lost?</strong> Try using the navigation menu above or search for what you're looking for.
        </p>
      </div>
    </div>
  )
} 