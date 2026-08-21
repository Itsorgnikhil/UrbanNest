import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Priya Sundaram',
      role: 'Indiranagar Resident',
      comment: 'UrbanNest has been my favorite local shop for years. I am so thrilled they finally launched their online store! Ordered the French Lavender Candle and it arrived same-day.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Rohan Mehta',
      role: 'Interior Architect',
      comment: 'The ceramic vase and minimal wall clock are absolute masterpieces for minimalist homes. Incredible quality and wonderful personalized service via their N8N chatbot.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Kavita Menon',
      role: 'Verified Buyer',
      comment: 'I submitted a query about custom corporate gift boxes via their query form and received an answer within minutes! Best hybrid offline-online shop experience in Bengaluru.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--accent-gold)'
          }}>
            Community Trust
          </span>
          <h2 style={{ fontSize: '2.4rem', margin: '8px 0 16px' }}>
            Loved by Local Customers
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>
            Here is what our community says about UrbanNest Lifestyle Store.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px 24px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <Quote size={32} style={{ color: 'var(--accent-gold)', opacity: 0.3, position: 'absolute', top: '24px', right: '24px' }} />

              <div>
                <div style={{ display: 'flex', color: 'var(--accent-gold)', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <h5 style={{ fontSize: '0.95rem', margin: 0 }}>{rev.name}</h5>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-sage)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={12} /> {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
