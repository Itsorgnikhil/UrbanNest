import React from 'react';
import { STORE_DETAILS } from '../data/products';
import { Heart, Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '70px 0 30px',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Info */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-olive))',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                🌿
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
                Urban<span style={{ color: 'var(--accent-gold)' }}>Nest</span>
              </span>
            </a>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '340px', marginBottom: '20px' }}>
              {STORE_DETAILS.tagline} Your local Indiranagar sanctuary for curated home décor, artisanal gifts, and fine living products.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={socialBtnStyle} title="Instagram"><Instagram size={18} /></a>
              <a href="#" style={socialBtnStyle} title="Facebook"><Facebook size={18} /></a>
              <a href="#" style={socialBtnStyle} title="Twitter"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>Quick Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a href="#about" style={footerLinkStyle}>About Our Shop</a>
              <a href="#products" style={footerLinkStyle}>Product Catalog</a>
              <a href="#why-us" style={footerLinkStyle}>Why Choose Us</a>
              <a href="#query" style={footerLinkStyle}>Submit a Query</a>
              <a href="#location" style={footerLinkStyle}>Store Map & Hours</a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>Store Categories</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a href="#products" style={footerLinkStyle}>Home Décor</a>
              <a href="#products" style={footerLinkStyle}>Gift Items</a>
              <a href="#products" style={footerLinkStyle}>Artisanal Stationery</a>
              <a href="#products" style={footerLinkStyle}>Lifestyle Accessories</a>
              <a href="#products" style={footerLinkStyle}>Small Household</a>
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>Join Nest Circle</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
              Subscribe for new artisan arrivals, local store events & seasonal discounts.
            </p>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter email..."
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
              <button className="btn btn-primary" style={{ padding: '10px 14px' }}>
                <Mail size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} UrbanNest Lifestyle Store. Mini Hackathon 1 Project.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Built with React + N8N.io + Render</span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

const socialBtnStyle = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: '1px solid var(--border-color)',
  background: 'var(--bg-card)',
  color: 'var(--text-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const footerLinkStyle = {
  textDecoration: 'none',
  color: 'var(--text-secondary)',
  transition: 'color 0.2s ease'
};
