import React from 'react';
import { ArrowRight, MessageSquare, Bot, Sparkles, MapPin } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      padding: '70px 0 90px',
      overflow: 'hidden'
    }}>
      {/* Soft Background Gradient Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(194, 155, 56, 0.18) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(88, 129, 87, 0.15) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Left Text Content */}
        <div className="animate-fade-in">
          <div className="badge badge-gold" style={{ marginBottom: '20px' }}>
            <Sparkles size={14} />
            <span>Now Online & Delivering Nationwide</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            lineHeight: 1.12,
            marginBottom: '20px'
          }}>
            Urban<span style={{ color: 'var(--accent-gold)' }}>Nest</span> Lifestyle Store
          </h1>

          <p style={{
            fontSize: '1.4rem',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: '600',
            color: 'var(--accent-olive)',
            marginBottom: '16px',
            letterSpacing: '-0.01em'
          }}>
            “{STORE_DETAILS.tagline}”
          </p>

          <p style={{
            fontSize: '1.08rem',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            maxWidth: '540px',
            lineHeight: 1.65
          }}>
            Your beloved neighborhood offline sanctuary for handcrafted home décor, thoughtful gift items, artisanal stationery, and everyday living essentials — now available online at your fingertips.
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            <a href="#products" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </a>
            <a href="#query" className="btn btn-secondary" style={{ padding: '14px 24px', fontSize: '1rem' }}>
              <MessageSquare size={18} />
              <span>Ask Us a Question</span>
            </a>
            <a href="#chatbot" className="btn btn-outline" style={{ padding: '14px 24px', fontSize: '1rem' }}>
              <Bot size={18} />
              <span>AI Chatbot</span>
            </a>
          </div>

          {/* Location & Trust Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-color)',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={18} style={{ color: 'var(--accent-warm)' }} />
              <span style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                Indiranagar, Bengaluru Store
              </span>
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>•</div>
            <div style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--accent-sage)' }}>
              ★ 4.9/5 Offline & Online Customer Rating
            </div>
          </div>
        </div>

        {/* Right Hero Image Card */}
        <div style={{ position: 'relative' }}>
          <div className="glass-card" style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: 'var(--shadow-lg)',
            border: '2px solid var(--border-color)'
          }}>
            <img
              src="/hero_lifestyle.png"
              alt="UrbanNest Lifestyle Store Decor"
              style={{
                width: '100%',
                height: '520px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            {/* Floating Overlay Card */}
            <div className="glass-panel" style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              padding: '16px 20px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                  Handpicked Collection
                </p>
                <h4 style={{ fontSize: '1.1rem', margin: '2px 0' }}>
                  Artisan Home Decor & Gifts
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Crafted for warm, calm living spaces.
                </p>
              </div>
              <a href="#products" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                View
              </a>
            </div>
          </div>

          {/* Floating Pill Tag */}
          <div className="animate-float" style={{
            position: 'absolute',
            top: '20px',
            right: '-16px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '12px 20px',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '1.2rem' }}>☕</span>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700' }}>Local Offline Store</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Now 100% Integrated Online</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
