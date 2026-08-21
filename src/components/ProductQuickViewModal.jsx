import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, Star, ShoppingBag, Heart, Shield, Truck, RotateCcw } from 'lucide-react';

export const ProductQuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist } = useStore();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }} onClick={() => setQuickViewProduct(null)}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '850px',
        maxHeight: '90vh',
        overflowY: 'auto',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        position: 'relative',
        background: 'var(--bg-card)'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '36px',
          alignItems: 'start'
        }}>
          {/* Image Container */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            background: 'var(--bg-secondary)'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            {product.isBestseller && (
              <span className="badge badge-gold" style={{ position: 'absolute', top: '16px', left: '16px' }}>
                Bestseller
              </span>
            )}
          </div>

          {/* Details Content */}
          <div>
            <span style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-gold)'
            }}>
              {product.category.replace('-', ' ')}
            </span>

            <h2 style={{ fontSize: '1.8rem', margin: '8px 0 12px', lineHeight: 1.2 }}>
              {product.name}
            </h2>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', color: 'var(--accent-gold)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: '700' }}>{product.rating}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>({product.reviewsCount} reviews)</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-gold)' }}>
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
              {product.description}
            </p>

            {/* Specs Table */}
            {product.specs && (
              <div style={{
                background: 'var(--bg-secondary)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '24px',
                fontSize: '0.85rem'
              }}>
                <h4 style={{ fontSize: '0.88rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Specifications:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{key}:</span>
                      <span style={{ fontWeight: '600' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              <button
                onClick={() => {
                  addToCart(product);
                  setQuickViewProduct(null);
                }}
                className="btn btn-primary"
                style={{ flex: 1, padding: '14px' }}
              >
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                style={{
                  width: '54px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: isWishlisted ? 'rgba(224, 122, 95, 0.15)' : 'var(--bg-secondary)',
                  color: isWishlisted ? 'var(--accent-warm)' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart size={22} fill={isWishlisted ? 'currentColor' : 'none'} stroke={isWishlisted ? 'var(--accent-warm)' : 'currentColor'} />
              </button>
            </div>

            {/* Perks */}
            <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Truck size={16} /> Fast Dispatch
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Shield size={16} /> Authentic Guarantee
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <RotateCcw size={16} /> Easy Store Return
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          #quickview-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
