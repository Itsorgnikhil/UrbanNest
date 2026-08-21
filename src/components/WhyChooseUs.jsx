import React from 'react';
import { Award, Tag, HeartHandshake, Zap } from 'lucide-react';

export const WhyChooseUs = () => {
  const sellingPoints = [
    {
      icon: Award,
      title: 'Curated Quality Products',
      description: 'Every product is handpicked and quality-checked by our team before hitting our shelves, ensuring artisanal excellence and durability.',
      color: 'var(--accent-gold)'
    },
    {
      icon: Tag,
      title: 'Affordable Local Prices',
      description: 'No inflated online retail markups. Enjoy honest, fair neighborhood pricing backed by direct artisan relationships.',
      color: 'var(--accent-olive)'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Service',
      description: 'We bring traditional warm store hospitality to your digital experience with custom gift packing and tailored advice.',
      color: 'var(--accent-warm)'
    },
    {
      icon: Zap,
      title: 'Fast N8N Customer Support',
      description: 'Get instant query responses powered by our automated N8N workflows and 24/7 intelligent shop chatbot assistant.',
      color: 'var(--accent-sage)'
    }
  ];

  return (
    <section id="why-us" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--accent-gold)'
          }}>
            The UrbanNest Difference
          </span>
          <h2 style={{ fontSize: '2.4rem', margin: '8px 0 16px' }}>
            Why Customers Choose Us
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>
            Bringing the warmth and trust of your local offline shop directly to your screen.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px'
        }}>
          {sellingPoints.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '32px 24px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)'
                }}>
                  <IconComp size={28} style={{ color: pt.color }} />
                </div>

                <h3 style={{ fontSize: '1.25rem' }}>{pt.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
