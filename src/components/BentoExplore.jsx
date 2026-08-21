import React from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { ArrowUpRight, Heart, ChevronLeft, ChevronRight, SlidersHorizontal, Search } from 'lucide-react';

export const BentoExplore = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    addToCart,
    wishlist,
    toggleWishlist,
    setQuickViewProduct
  } = useStore();

  const vaseProduct = PRODUCTS.find(p => p.id === 'un-001') || PRODUCTS[0];
  const candleProduct = PRODUCTS.find(p => p.id === 'un-003') || PRODUCTS[2];

  const isVaseWishlisted = wishlist.includes(vaseProduct.id);
  const isCandleWishlisted = wishlist.includes(candleProduct.id);

  return (
    <section style={{ padding: '32px 0 50px' }}>
      {/* Explore Header Control Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '28px'
      }}>
        <h2 style={{ fontSize: '2.4rem', fontFamily: 'Outfit, sans-serif', margin: 0 }}>
          Explore
        </h2>

        {/* Filter Tabs matching Dribbble mockup */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'var(--bg-secondary)',
          padding: '6px',
          borderRadius: 'var(--radius-full)'
        }}>
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: selectedCategory === 'all' ? 'var(--bg-card)' : 'transparent',
              color: selectedCategory === 'all' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontSize: '0.88rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: selectedCategory === 'all' ? 'var(--shadow-sm)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('home-decor')}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: selectedCategory === 'home-decor' ? 'var(--bg-card)' : 'transparent',
              color: selectedCategory === 'home-decor' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontSize: '0.88rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: selectedCategory === 'home-decor' ? 'var(--shadow-sm)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            Home Décor
          </button>
          <button
            onClick={() => setSelectedCategory('gift-items')}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: selectedCategory === 'gift-items' ? 'var(--bg-card)' : 'transparent',
              color: selectedCategory === 'gift-items' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontSize: '0.88rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: selectedCategory === 'gift-items' ? 'var(--shadow-sm)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            Gifts & Living
          </button>
        </div>

        {/* Right Filter & Search Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => {
              const elem = document.getElementById('products');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              fontSize: '0.88rem',
              fontWeight: '700',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent-blue)',
              position: 'absolute',
              top: '8px',
              right: '14px'
            }} />
            Filters
          </button>
        </div>
      </div>

      {/* Main Bento Grid Container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: '24px'
      }} className="bento-grid-wrapper">

        {/* Left Column Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Card 1: Top Mint Promo Banner */}
          <div className="bento-card" style={{
            background: 'linear-gradient(135deg, #BCEBE0, #D1F2EB)',
            padding: '28px 32px',
            position: 'relative',
            minHeight: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#111412',
                lineHeight: 1.1,
                marginBottom: '16px',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '-0.02em'
              }}>
                GET UP TO 50% OFF
              </h3>
              <a
                href="#products"
                className="btn btn-secondary"
                style={{
                  padding: '8px 18px',
                  fontSize: '0.85rem',
                  background: 'rgba(255,255,255,0.85)',
                  border: 'none',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Get Discount
              </a>
            </div>
            <img
              src="/hero_lifestyle.png"
              alt="Promo"
              style={{
                width: '140px',
                height: '140px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)'
              }}
            />
          </div>

          {/* Card 2: Middle Yellow Promo Banner */}
          <div className="bento-card" style={{
            background: '#FDE68A',
            padding: '28px 32px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontSize: '1.7rem', color: '#111412', marginBottom: '4px' }}>
                Winter's nest
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563', fontWeight: '500' }}>
                Little Things. Beautiful Living.
              </p>
            </div>

            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <ArrowUpRight size={22} style={{ color: '#111412' }} />
            </div>
          </div>

          {/* Bottom Split Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Bento Card 3: Model Portrait */}
            <div className="bento-card" style={{
              position: 'relative',
              height: '240px'
            }}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Offers"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => {
                  const elem = document.getElementById('products');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: '#111412',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)',
                  whiteSpace: 'nowrap'
                }}
              >
                Avail Offers
              </button>
            </div>

            {/* Bento Card 4: Favourites Carousel Widget */}
            <div className="bento-card" style={{
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'var(--bg-secondary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.92rem', fontWeight: '800' }}>Favourites</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button style={circleNavStyle}><ChevronLeft size={14} /></button>
                  <button style={circleNavStyle}><ChevronRight size={14} /></button>
                </div>
              </div>

              {/* Favorites thumbnails preview */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <img
                  src={PRODUCTS[1].image}
                  alt="Fav 1"
                  style={{ width: '100%', height: '90px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                />
                <img
                  src={PRODUCTS[3].image}
                  alt="Fav 2"
                  style={{ width: '100%', height: '90px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                />
              </div>

              <button
                onClick={() => {
                  const elem = document.getElementById('products');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: 'var(--radius-full)',
                  background: '#FFF',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                See All
              </button>
            </div>
          </div>
        </div>

        {/* Product Card 1 (Vertical Product Card) */}
        <div className="bento-card" style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F7F4EF',
          position: 'relative'
        }}>
          {/* Top Swatches & Wishlist */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span className="color-dot" style={{ background: '#F59E0B' }} />
              <span className="color-dot" style={{ background: '#EC4899' }} />
            </div>

            <button
              onClick={() => toggleWishlist(vaseProduct.id)}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: 'none',
                color: isVaseWishlisted ? 'var(--accent-warm)' : '#333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Heart size={16} fill={isVaseWishlisted ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Product Image */}
          <div
            onClick={() => setQuickViewProduct(vaseProduct)}
            style={{
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <img
              src={vaseProduct.image}
              alt={vaseProduct.name}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                transition: 'transform 0.4s var(--ease-spring)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

          {/* Bottom Details & Price Pill */}
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
              Our Picks
            </span>
            <h4 style={{ fontSize: '1.1rem', margin: '4px 0 12px', lineHeight: 1.3 }}>
              {vaseProduct.name}
            </h4>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="price-pill">
                ${vaseProduct.price.toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(vaseProduct)}
                className="btn btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.82rem' }}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Product Card 2 (Vertical Product Card) */}
        <div className="bento-card" style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F4F4F2',
          position: 'relative'
        }}>
          {/* Top Swatches & Wishlist */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span className="color-dot" style={{ background: '#FACC15' }} />
              <span className="color-dot" style={{ background: '#18181B' }} />
            </div>

            <button
              onClick={() => toggleWishlist(candleProduct.id)}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: 'none',
                color: isCandleWishlisted ? 'var(--accent-warm)' : '#333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Heart size={16} fill={isCandleWishlisted ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Product Image */}
          <div
            onClick={() => setQuickViewProduct(candleProduct)}
            style={{
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <img
              src={candleProduct.image}
              alt={candleProduct.name}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                transition: 'transform 0.4s var(--ease-spring)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

          {/* Bottom Details & Price Pill */}
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
              Your Choice
            </span>
            <h4 style={{ fontSize: '1.1rem', margin: '4px 0 12px', lineHeight: 1.3 }}>
              {candleProduct.name}
            </h4>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="price-pill">
                ${candleProduct.price.toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(candleProduct)}
                className="btn btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.82rem' }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .bento-grid-wrapper {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 700px) {
          .bento-grid-wrapper {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

const circleNavStyle = {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  border: '1px solid var(--border-color)',
  background: '#FFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};
