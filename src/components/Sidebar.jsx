import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  Zap,
  Compass,
  Gift,
  Info,
  MessageSquare,
  Bot,
  Plus,
  Moon,
  Sun,
  MapPin,
  Sparkles
} from 'lucide-react';

export const Sidebar = ({ activeTab, setActiveTab }) => {
  const { theme, toggleTheme, setIsRecommenderOpen } = useStore();

  const navItems = [
    { id: 'popular', label: 'Popular Products', icon: Zap, href: '#products' },
    { id: 'explore', label: 'Explore New', icon: Compass, href: '#products' },
    { id: 'gifts', label: 'Gifts & Living', icon: Gift, href: '#products' },
    { id: 'about', label: 'About Store', icon: Info, href: '#about' },
    { id: 'query', label: 'Query Form', icon: MessageSquare, href: '#query' },
    { id: 'chatbot', label: 'AI Chatbot', icon: Bot, href: '#chatbot' },
  ];

  return (
    <aside style={{
      width: '260px',
      height: '100vh',
      position: 'sticky',
      top: 0,
      alignSelf: 'flex-start',
      padding: '28px 20px',
      borderRight: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexShrink: 0,
      background: theme === 'light' ? 'rgba(255, 255, 255, 0.75)' : 'rgba(24, 28, 26, 0.75)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)',
      zIndex: 100
    }} className="sidebar-desktop">
      {/* Top Header Brand */}
      <div>
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
          marginBottom: '36px'
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-sage))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
          }}>
            🌿
          </div>
          <div>
            <h2 style={{ fontSize: '1.4rem', margin: 0, lineHeight: 1 }}>
              Urban<span style={{ color: 'var(--accent-blue)' }}>Nest</span>
            </h2>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Lifestyle Store
            </span>
          </div>
        </a>

        {/* Navigation Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-full)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  background: isActive ? 'var(--accent-blue)' : 'transparent',
                  boxShadow: isActive ? '0 6px 16px rgba(37, 99, 235, 0.25)' : 'none',
                  transition: 'all 0.25s var(--ease-smooth)'
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Quick Actions Block */}
        <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
            Quick Actions
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#query" style={actionBtnStyle}>
              <Plus size={14} /> Request Product
            </a>
            <button onClick={() => setIsRecommenderOpen(true)} style={actionBtnStyle}>
              <Sparkles size={14} /> AI Nest Finder
            </button>
          </div>
        </div>

        {/* Store Timings Widget */}
        <div style={{
          marginTop: '28px',
          padding: '14px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid var(--border-color)',
          fontSize: '0.8rem'
        }}>
          <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Store Timings</span>
          <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} style={{ color: 'var(--accent-warm)' }} />
            Indiranagar (10AM - 9PM)
          </div>
        </div>
      </div>

      {/* Bottom Theme & Status */}
      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
        <button
          onClick={toggleTheme}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '0.88rem',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .sidebar-desktop { display: none !important; }
        }
      `}</style>
    </aside>
  );
};

const actionBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 12px',
  borderRadius: 'var(--radius-md)',
  background: 'rgba(255, 255, 255, 0.6)',
  color: 'var(--text-primary)',
  fontSize: '0.82rem',
  fontWeight: '600',
  textDecoration: 'none',
  border: '1px solid var(--border-color)',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};
