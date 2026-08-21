import React from 'react';
import { Tag, Truck, ShieldCheck } from 'lucide-react';

export const PromoBanner = () => {
  return (
    <div style={{
      background: 'linear-gradient(90deg, var(--accent-olive), var(--accent-gold-hover))',
      color: '#FFFFFF',
      padding: '10px 0',
      fontSize: '0.85rem',
      fontWeight: '600',
      textAlign: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Tag size={16} />
          <span>Special Launch Offer: Extra 15% OFF with code <strong>NEST15</strong></span>
        </div>
        <span style={{ opacity: 0.6 }}>|</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Truck size={16} />
          <span>Free Store Pickup & Express Pan-India Delivery</span>
        </div>
        <span style={{ opacity: 0.6 }}>|</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={16} />
          <span>Authentic Handcrafted Lifestyle Products</span>
        </div>
      </div>
    </div>
  );
};
