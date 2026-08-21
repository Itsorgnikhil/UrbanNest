import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductQuickViewModal } from './ProductQuickViewModal';
import { Search, Eye, ShoppingBag, Heart, Star, SlidersHorizontal, Sparkles } from 'lucide-react';

export const ProductCatalog = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    addToCart,
    wishlist,
    toggleWishlist,
    setQuickViewProduct
  } = useStore();

  const [sortBy, setSortBy] = useState('featured');

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} /> Curated Lifestyle Store
          </div>
          <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '12px' }}>
            Explore Our Collections
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Handpicked home decor, stationery, gift items, and household essentials designed to elevate everyday living.
          </p>
        </div>

        {/* Search & Sort Controls Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '32px'
        }}>
          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '4px',
            scrollbarWidth: 'none'
          }}>
            {CATEGORIES.map(cat => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    border: active ? '1px solid var(--accent-blue)' : '1px solid var(--border-color)',
                    background: active ? 'var(--accent-blue)' : 'var(--bg-secondary)',
                    color: active ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.25s var(--ease-smooth)',
                    boxShadow: active ? '0 6px 16px rgba(37, 99, 235, 0.25)' : 'none'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Input & Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative', width: '220px' }}>
              <Search size={16} style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} />
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '10px 16px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
                fontWeight: '700',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low-High</option>
              <option value="price-high">Price: High-Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid - Styled matching Dribbble Bento Layout */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🔎</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>No products found</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.9rem' }}>
              Try adjusting your search criteria or switching categories.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map((product, idx) => {
              const isWishlisted = wishlist.includes(product.id);
              const cardBg = idx % 2 === 0 ? '#F7F4EF' : '#F4F4F2';

              return (
                <div
                  key={product.id}
                  className="bento-card"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: cardBg,
                    minHeight: '400px'
                  }}
                >
                  {/* Top Bar: Swatches & Wishlist */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span className="color-dot" style={{ background: idx % 2 === 0 ? '#F59E0B' : '#3B82F6' }} />
                      <span className="color-dot" style={{ background: idx % 2 === 0 ? '#EC4899' : '#10B981' }} />
                    </div>

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        border: 'none',
                        color: isWishlisted ? 'var(--accent-warm)' : '#333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'transform 0.25s var(--ease-spring)'
                      }}
                      title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div
                    onClick={() => setQuickViewProduct(product)}
                    style={{
                      height: '220px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      margin: '12px 0'
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        borderRadius: 'var(--radius-md)',
                        transition: 'transform 0.4s var(--ease-spring)'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>

                  {/* Bottom Text & Price Pill Action */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
                        {product.category.replace('-', ' ')}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '700' }}>
                        <Star size={13} fill="currentColor" /> {product.rating}
                      </div>
                    </div>

                    <h4 style={{ fontSize: '1.08rem', margin: '0 0 14px', lineHeight: 1.3 }}>
                      {product.name}
                    </h4>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span className="price-pill">
                        ${product.price.toFixed(2)}
                      </span>

                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary"
                        style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                      >
                        <ShoppingBag size={14} /> Add
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <ProductQuickViewModal />
    </section>
  );
};
