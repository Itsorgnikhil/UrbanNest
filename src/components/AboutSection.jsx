import React from 'react';
import { Store, HeartHandshake, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export const AboutSection = () => {
  return (
    <section id="about" style={{
      padding: '80px 0',
      background: 'var(--bg-secondary)',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Visual Showcase Box */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="glass-card" style={{
              padding: '28px 24px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={iconBoxStyle}>
                <Store size={24} style={{ color: 'var(--accent-gold)' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Offline Sanctuary</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Founded as a cozy neighborhood boutique in Indiranagar, providing tactile, warm shopping experiences.
              </p>
            </div>

            <div className="glass-card" style={{
              padding: '28px 24px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: '30px'
            }}>
              <div style={iconBoxStyle}>
                <Sparkles size={24} style={{ color: 'var(--accent-sage)' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Artisanal Curation</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Every candle, notebook, and ceramic piece is hand-selected from independent artisans and ethical makers.
              </p>
            </div>

            <div className="glass-card" style={{
              padding: '28px 24px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={iconBoxStyle}>
                <HeartHandshake size={24} style={{ color: 'var(--accent-warm)' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Personal Connection</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We believe in genuine relationship-first commerce. We know our regulars and treat online shoppers like family.
              </p>
            </div>

            <div className="glass-card" style={{
              padding: '28px 24px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: '30px'
            }}>
              <div style={iconBoxStyle}>
                <ShieldCheck size={24} style={{ color: 'var(--accent-olive)' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>AI-Powered Assistance</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Seamlessly integrated with N8N AI query processing & instant chatbot assistance 24/7.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="badge badge-sage" style={{ marginBottom: '16px' }}>
              Our Digital Journey
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              lineHeight: 1.2,
              marginBottom: '20px'
            }}>
              Bridging the Charm of Offline Shopping with Digital Ease
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              marginBottom: '24px',
              lineHeight: 1.7
            }}>
              {STORE_DETAILS.description}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              marginBottom: '32px'
            }}>
              <div style={featureRowStyle}>
                <CheckCircle2 size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                  <strong>Curated Categories:</strong> Home décor, gifts, stationery, lifestyle, & small household items.
                </span>
              </div>
              <div style={featureRowStyle}>
                <CheckCircle2 size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                  <strong>Transparent Local Pricing:</strong> Offline store tags with zero hidden markup online.
                </span>
              </div>
              <div style={featureRowStyle}>
                <CheckCircle2 size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                  <strong>Instant Query & Chat Integration:</strong> Automated N8N workflows resolve store & product questions instantly.
                </span>
              </div>
            </div>

            <a href="#query" className="btn btn-primary">
              Ask UrbanNest a Question
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

const iconBoxStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: 'var(--bg-secondary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const featureRowStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  color: 'var(--text-primary)'
};
