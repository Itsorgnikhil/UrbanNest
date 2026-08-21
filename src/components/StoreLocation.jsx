import React from 'react';
import { STORE_DETAILS } from '../data/products';
import { MapPin, Clock, Phone, Mail, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';

export const StoreLocation = () => {
  return (
    <section id="location" style={{ padding: '90px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} /> Local Sanctuary
          </div>
          <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '12px' }}>
            Visit UrbanNest Physical Store
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>
            Experience our products in person at our flagship offline store in Bengaluru or connect directly via WhatsApp.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Details Card */}
          <div className="glass-card" style={{
            padding: '36px',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Address */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={iconBoxStyle}>
                <MapPin size={24} style={{ color: 'var(--accent-warm)' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Store Address</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  {STORE_DETAILS.address}
                </p>
              </div>
            </div>

            {/* Timings */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={iconBoxStyle}>
                <Clock size={24} style={{ color: 'var(--accent-gold)' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Store Operating Hours</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  {STORE_DETAILS.timings}
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={iconBoxStyle}>
                <Phone size={24} style={{ color: 'var(--accent-sage)' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Contact Details</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  Phone: <strong>{STORE_DETAILS.phone}</strong><br />
                  Email: <strong>{STORE_DETAILS.email}</strong>
                </p>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '12px' }}>
              <a
                href={`https://wa.me/${STORE_DETAILS.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{
                  flex: 1,
                  background: '#25D366',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 20px rgba(37, 211, 102, 0.25)'
                }}
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Google Maps Embed Preview */}
          <div className="glass-card" style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            height: '420px',
            position: 'relative'
          }}>
            <iframe
              title="UrbanNest Store Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9897148560195!2d77.636041314822!3d12.97244229085526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a67f0d04c9%3A0xe10688ecb55146c8!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #location .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

const iconBoxStyle = {
  width: '46px',
  height: '46px',
  borderRadius: '12px',
  background: 'var(--bg-secondary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};
