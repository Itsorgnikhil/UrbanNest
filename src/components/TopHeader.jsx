import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, Search, Heart, SlidersHorizontal, User, Sparkles, X } from 'lucide-react';

export const TopHeader = () => {
  const {
    cartCount,
    setIsCartOpen,
    wishlist,
    searchQuery,
    setSearchQuery,
    setIsRecommenderOpen
  } = useStore();

  const [viewMode, setViewMode] = useState('website');
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 0) {
      const elem = document.getElementById('products');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      padding: '20px 32px',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      background: 'var(--bg-primary)'
    }}>
      {/* Left Top Stats */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>
          37
        </div>
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-primary)' }}>Orders</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last 7 days</div>
        </div>
      </div>

      {/* Center Segmented View Toggle */}
      <div style={{
        background: 'var(--bg-secondary)',
        padding: '4px',
        borderRadius: 'var(--radius-full)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }} className="desktop-view-toggle">
        <button
          onClick={() => setViewMode('dashboard')}
          style={{
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.88rem',
            fontWeight: '600',
            border: 'none',
            background: viewMode === 'dashboard' ? 'var(--bg-card)' : 'transparent',
            color: viewMode === 'dashboard' ? 'var(--text-primary)' : 'var(--text-secondary)',
            boxShadow: viewMode === 'dashboard' ? 'var(--shadow-sm)' : 'none',
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => setViewMode('website')}
          style={{
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.88rem',
            fontWeight: '600',
            border: 'none',
            background: viewMode === 'website' ? 'var(--bg-card)' : 'transparent',
            color: viewMode === 'website' ? 'var(--text-primary)' : 'var(--text-secondary)',
            boxShadow: viewMode === 'website' ? 'var(--shadow-sm)' : 'none',
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
        >
          Website
        </button>
      </div>

      {/* Right User Controls & Cart */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Search Field */}
        {showSearch ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-secondary)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--accent-blue)'
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
                outline: 'none',
                fontSize: '0.88rem',
                color: 'var(--text-primary)',
                width: '160px'
              }}
            />
            <button onClick={() => { setShowSearch(false); setSearchQuery(''); }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowSearch(true)}
            style={topIconBtnStyle}
            title="Search Products"
          >
            <Search size={18} />
          </button>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => {
            const elem = document.getElementById('products');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            ...topIconBtnStyle,
            position: 'relative',
            color: wishlist.length > 0 ? 'var(--accent-warm)' : 'var(--text-primary)'
          }}
          title="View Wishlist"
        >
          <Heart size={18} fill={wishlist.length > 0 ? 'currentColor' : 'none'} />
          {wishlist.length > 0 && (
            <span style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              background: 'var(--accent-warm)',
              color: '#FFF',
              fontSize: '0.68rem',
              fontWeight: 'bold',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {wishlist.length}
            </span>
          )}
        </button>

        {/* Cart Pill Button matching Dribbble Mockup */}
        <button
          onClick={() => setIsCartOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 16px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            cursor: 'pointer',
            transition: 'all 0.25s var(--ease-smooth)'
          }}
        >
          <ShoppingBag size={18} style={{ color: 'var(--accent-blue)' }} />
          <span style={{ fontSize: '0.88rem', fontWeight: '700' }}>Cart</span>

          {/* Avatars stack */}
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '4px' }}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80"
              alt="Buyer"
              style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #FFF', marginLeft: '-6px' }}
            />
            <span style={{
              background: 'var(--accent-blue)',
              color: '#FFF',
              fontSize: '0.68rem',
              fontWeight: '700',
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #FFF',
              marginLeft: '-6px'
            }}>
              +{cartCount}
            </span>
          </div>
        </button>

        {/* User Profile Avatar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 12px 4px 4px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--bg-secondary)'
        }}>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
            alt="Ryana"
            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ fontSize: '0.88rem', fontWeight: '700' }}>Ryana</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-view-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

const topIconBtnStyle = {
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  border: '1px solid var(--border-color)',
  background: 'var(--bg-secondary)',
  color: 'var(--text-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};
