import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Gianluca Belvisi',
  description: 'Get in touch with Gianluca Belvisi',
}

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Contact</h1>
      
      <div style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '2rem' }}>
          I'd love to hear from you! Whether you want to discuss a blog post, share your thoughts, 
          or just say hello, feel free to reach out.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #eee'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Email</h3>
            <p>Drop me a line anytime</p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Email address will be added during content migration
            </p>
          </div>
          
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #eee'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Social Media</h3>
            <p>Connect with me online</p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Social links will be added during content migration
            </p>
          </div>
        </div>
        
        <div style={{
          padding: '2rem',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          border: '1px solid #ddeeff',
          marginTop: '3rem'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Response Time</h2>
          <p>
            I typically respond to emails within 24-48 hours. If you don't hear back from me, 
            feel free to send a follow-up - sometimes messages get lost in the digital void!
          </p>
        </div>
      </div>
    </div>
  )
} 