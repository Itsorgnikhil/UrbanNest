import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  ShoppingBag,
  Sun,
  Moon,
  Search,
  Menu,
  X,
  Sparkles,
  Heart
} from 'lucide-react';

export const Navbar = ({ onOpenSettings }) => {
  const {
    theme,
    toggleTheme,
    cartCount,
    setIsCartOpen,
    wishlist,
    searchQuery,
    setSearchQuery,
    setIsRecommenderOpen
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 0) {
      const elem = document.getElementById('products');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      transition: 'all 0.3s ease'
    }} className="glass-panel">
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px',
        position: 'relative'
      }}>
        {/* Brand Logo */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
          flexShrink: 0
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-olive))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            boxShadow: 'var(--shadow-sm)'
          }}>
            🌿
          </div>
          <div>
            <span style={{
              fontSize: '1.45rem',
              fontWeight: '800',
              fontFamily: 'Outfit, sans-serif',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              display: 'block',
              lineHeight: 1.1,
              whiteSpace: 'nowrap'
            }}>
              Urban<span style={{ color: 'var(--accent-gold)' }}>Nest</span>
            </span>
            <span style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}>
              Lifestyle Store
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          flexShrink: 0,
          whiteSpace: 'nowrap'
        }}>
          <a href="#about" style={navLinkStyle}>About Us</a>
          <a href="#products" style={navLinkStyle}>Products</a>
          <a href="#why-us" style={navLinkStyle}>Why Choose Us</a>
          <a href="#query" style={navLinkStyle}>Query Form</a>
          <a href="#location" style={navLinkStyle}>Store Location</a>
        </nav>

        {/* Action Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexShrink: 0
        }}>
          {/* Search Toggle */}
          {showSearchInput ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'var(--bg-card)',
              border: '1px solid var(--accent-gold)',
              borderRadius: 'var(--radius-full)',
              padding: '2px 4px 2px 14px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '0.88rem',
                  width: '150px'
                }}
              />
              <button
                onClick={() => { setShowSearchInput(false); setSearchQuery(''); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title="Close Search"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSearchInput(true)}
              style={iconBtnStyle}
              title="Search Store"
            >
              <Search size={20} />
            </button>
          )}

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            style={iconBtnStyle}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* AI Style Recommender Quiz */}
          <button
            onClick={() => setIsRecommenderOpen(true)}
            className="btn btn-outline"
            style={{
              padding: '8px 14px',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-full)',
              whiteSpace: 'nowrap'
            }}
          >
            <Sparkles size={16} />
            <span>AI Finder</span>
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => {
              const elem = document.getElementById('products');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              ...iconBtnStyle,
              position: 'relative',
              color: wishlist.length > 0 ? 'var(--accent-warm)' : 'var(--text-primary)',
              borderColor: wishlist.length > 0 ? 'var(--accent-warm)' : 'var(--border-color)',
              background: wishlist.length > 0 ? 'rgba(224, 122, 95, 0.1)' : 'var(--bg-card)'
            }}
            title="View Saved Wishlist Items"
          >
            <Heart size={20} fill={wishlist.length > 0 ? 'currentColor' : 'none'} />
            {wishlist.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: 'var(--accent-warm)',
                color: '#FFF',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--bg-primary)'
              }}>
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Shopping Cart Drawer Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              ...iconBtnStyle,
              position: 'relative',
              background: 'var(--accent-gold)',
              color: '#FFFFFF',
              borderColor: 'var(--accent-gold)'
            }}
            title="View Shopping Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: 'var(--accent-warm)',
                color: '#FFF',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--bg-primary)'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={iconBtnStyle}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          padding: '20px 24px',
          background: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>About Us</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Products</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Why Choose Us</a>
          <a href="#query" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Query Form</a>
          <a href="#location" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Store Location</a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { gap: 16px !important; }
        }
        @media (max-width: 920px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 921px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'var(--text-primary)',
  fontWeight: '600',
  fontSize: '0.92rem',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
  whiteSpace: 'nowrap'
};

const mobileNavLinkStyle = {
  ...navLinkStyle,
  fontSize: '1.05rem',
  padding: '8px 0'
};

const iconBtnStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid var(--border-color)',
  background: 'var(--bg-card)',
  color: 'var(--text-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  flexShrink: 0
};
