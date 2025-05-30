import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trips - Gianluca Belvisi',
  description: 'Travel stories and adventures',
}

export default function TripsPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Trips & Adventures</h1>
      
      <div style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '2rem' }}>
          Travel stories, adventures, and reflections from around the world. From spontaneous 
          weekend getaways to planned expeditions, this is where I document the journey.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            border: '1px solid #ddeeff'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>🌍 Recent Adventures</h3>
            <p>Latest travel experiences and discoveries</p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Recent trip stories will be added during migration
            </p>
          </div>
          
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            border: '1px solid #ddeeff'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>📍 Favorite Places</h3>
            <p>Destinations that left a lasting impression</p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Favorite destinations will be populated during migration
            </p>
          </div>
          
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            border: '1px solid #ddeeff'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>🎒 Travel Tips</h3>
            <p>Practical advice and lessons learned</p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Travel tips and insights will be migrated from the original blog
            </p>
          </div>
        </div>
        
        <div style={{
          padding: '2rem',
          backgroundColor: '#f0fff0',
          borderRadius: '8px',
          border: '1px solid #ccffcc',
          marginTop: '3rem'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>✈️ Travel Philosophy</h2>
          <p>
            I believe travel is about more than just visiting places - it's about connecting with 
            people, understanding different cultures, and gaining new perspectives. Every trip, 
            whether near or far, offers opportunities for growth and discovery.
          </p>
        </div>
      </div>
    </div>
  )
} 