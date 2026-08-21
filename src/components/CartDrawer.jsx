import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    addToast
  } = useStore();

  const [coupon, setCoupon] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'NEST15') {
      setDiscountPercent(15);
      addToast('15% discount coupon applied!', 'success');
    } else if (coupon.trim().toUpperCase() === 'NEST20') {
      setDiscountPercent(20);
      addToast('20% discount coupon applied!', 'success');
    } else {
      addToast('Invalid coupon code. Try NEST15', 'error');
    }
  };

  const discountAmount = (cartTotal * discountPercent) / 100;
  const finalTotal = Math.max(0, cartTotal - discountAmount);

  const handleCheckout = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setIsOrderPlaced(true);
    clearCart();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2500,
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }} onClick={() => setIsCartOpen(false)}>
      <div style={{
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} style={{ color: 'var(--accent-gold)' }} />
            <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Your Shopping Cart</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        {isOrderPlaced ? (
          <div style={{
            padding: '40px 24px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(88, 129, 87, 0.15)',
              color: 'var(--accent-sage)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <CheckCircle2 size={40} />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Order Placed Successfully!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '28px', maxWidth: '320px' }}>
              Thank you for shopping with UrbanNest! Your order reservation has been sent to our local store team.
            </p>
            <button
              onClick={() => {
                setIsOrderPlaced(false);
                setIsCartOpen(false);
              }}
              className="btn btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 24px',
            textAlign: 'center'
          }}>
            <ShoppingBag size={64} style={{ color: 'var(--text-muted)', marginBottom: '16px', opacity: 0.5 }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Your cart is empty</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Explore our curated collections to add items to your cart.
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {cart.map(item => (
                <div
                  key={item.product.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-secondary)',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-sm)',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h5 style={{ fontSize: '0.92rem', marginBottom: '4px' }}>{item.product.name}</h5>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: '700' }}>
                      ${item.product.price.toFixed(2)}
                    </div>
                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        style={qtyBtnStyle}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', width: '20px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        style={qtyBtnStyle}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: '6px'
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Coupon & Summary Footer */}
            <div style={{
              padding: '24px',
              borderTop: '1px solid var(--border-color)',
              background: 'var(--bg-card)'
            }}>
              {/* Coupon Input */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <input
                  type="text"
                  placeholder="Promo Code (e.g. NEST15)"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={applyCoupon}
                  className="btn btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '0.85rem' }}
                >
                  Apply
                </button>
              </div>

              {/* Price Calculation Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-sage)', fontWeight: '600' }}>
                    <span>Discount ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: '800', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
                  <span>Total</span>
                  <span style={{ color: 'var(--accent-gold)' }}>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const qtyBtnStyle = {
  width: '24px',
  height: '24px',
  borderRadius: '4px',
  border: '1px solid var(--border-color)',
  background: 'var(--bg-card)',
  color: 'var(--text-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};
