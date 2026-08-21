import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, FileCode, Users, Cpu, Rocket, CheckCircle2 } from 'lucide-react';

export const DocumentationModal = () => {
  const { isDocOpen, setIsDocOpen } = useStore();

  if (!isDocOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2300,
      background: 'rgba(0,0,0,0.65)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }} onClick={() => setIsDocOpen(false)}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '780px',
        maxHeight: '85vh',
        overflowY: 'auto',
        borderRadius: 'var(--radius-lg)',
        padding: '36px',
        position: 'relative',
        background: 'var(--bg-card)'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={() => setIsDocOpen(false)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--accent-gold)',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileCode size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.6rem', margin: 0 }}>Hackathon Project Documentation</h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: '700' }}>
              UrbanNest Lifestyle Store - Mini Hackathon Challenge
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '0.92rem', lineHeight: 1.6 }}>
          {/* Team Roles Section */}
          <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={18} style={{ color: 'var(--accent-gold)' }} />
              Team Members & Role Division (3 Members)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={teamCardStyle}>
                <strong>Member 1: UI/UX & Landing Page</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Hero section design, typography, theme system, responsive layout.
                </span>
              </div>
              <div style={teamCardStyle}>
                <strong>Member 2: Website Development</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  React components, catalog search/filtering, shopping cart state.
                </span>
              </div>
              <div style={teamCardStyle}>
                <strong>Member 3: AI & N8N Integration</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  N8N query webhook form, chatbot widget integration & Render setup.
                </span>
              </div>
            </div>
          </div>

          {/* Architecture & Tech Stack */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={18} style={{ color: 'var(--accent-olive)' }} />
              Technology Stack
            </h4>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)' }}>
              <li><strong>Frontend:</strong> React 18, Vite, Lucide-React Icons, Canvas Confetti.</li>
              <li><strong>Styling:</strong> Custom Glassmorphism CSS design system with Light/Dark Mode variables.</li>
              <li><strong>Automation Engine:</strong> N8N.io Webhooks (Query Form API & AI Chatbot API).</li>
              <li><strong>Deployment:</strong> Render Static Site platform (using <code>render.yaml</code> build script).</li>
            </ul>
          </div>

          {/* N8N Integration Details */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-sage)' }} />
              N8N.io Integration Flow
            </h4>
            <p style={{ color: 'var(--text-secondary)' }}>
              1. <strong>Query Form:</strong> Submits JSON payload (Name, Email, Phone, Category, Message) via HTTP POST to the configured N8N Webhook endpoint.<br />
              2. <strong>AI Chatbot:</strong> Accessible via both an on-page dedicated section and a floating bottom-right drawer connected directly to N8N AI chat workflows.
            </p>
          </div>

          {/* Render Deployment */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Rocket size={18} style={{ color: 'var(--accent-warm)' }} />
              Deployment on Render
            </h4>
            <p style={{ color: 'var(--text-secondary)' }}>
              Configured with <code>render.yaml</code> blueprint. Build Command: <code>npm install && npm run build</code>, Publish Directory: <code>./dist</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const teamCardStyle = {
  background: 'var(--bg-card)',
  padding: '12px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--border-color)',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
};
