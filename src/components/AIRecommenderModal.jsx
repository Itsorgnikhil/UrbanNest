import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { Sparkles, X, ShoppingBag, RotateCcw } from 'lucide-react';

export const AIRecommenderModal = () => {
  const { isRecommenderOpen, setIsRecommenderOpen, addToCart } = useStore();

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    vibe: '',
    budget: ''
  });
  const [recommendation, setRecommendation] = useState(null);

  if (!isRecommenderOpen) return null;

  const handleSelectVibe = (vibe) => {
    setAnswers(prev => ({ ...prev, vibe }));
    setStep(2);
  };

  const handleSelectBudget = (budget) => {
    setAnswers(prev => ({ ...prev, budget }));
    // Determine recommendation
    let recommended = PRODUCTS[0];
    if (answers.vibe === 'cozy-warm') {
      recommended = PRODUCTS.find(p => p.id === 'un-003') || PRODUCTS[0];
    } else if (answers.vibe === 'gifts') {
      recommended = PRODUCTS.find(p => p.id === 'un-004') || PRODUCTS[3];
    } else if (answers.vibe === 'study-desk') {
      recommended = PRODUCTS.find(p => p.id === 'un-006') || PRODUCTS[5];
    } else {
      recommended = PRODUCTS.find(p => p.id === 'un-011') || PRODUCTS[10];
    }
    setRecommendation(recommended);
    setStep(3);
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ vibe: '', budget: '' });
    setRecommendation(null);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2200,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }} onClick={() => setIsRecommenderOpen(false)}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '540px',
        borderRadius: 'var(--radius-lg)',
        padding: '36px',
        position: 'relative',
        background: 'var(--bg-card)'
      }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setIsRecommenderOpen(false)}
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '8px' }}>
          <Sparkles size={20} />
          <span style={{ fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase' }}>AI Nest Finder</span>
        </div>

        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>What vibe are you shopping for today?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Select a mood to help our algorithm suggest your ideal UrbanNest piece.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button onClick={() => handleSelectVibe('cozy-warm')} style={optionBtnStyle}>
                🕯️ Warm & Cozy Home Ambiance
              </button>
              <button onClick={() => handleSelectVibe('gifts')} style={optionBtnStyle}>
                🎁 Thoughtful Gift for a Loved One
              </button>
              <button onClick={() => handleSelectVibe('study-desk')} style={optionBtnStyle}>
                📚 Productive Study & Desk Haven
              </button>
              <button onClick={() => handleSelectVibe('tea-kitchen')} style={optionBtnStyle}>
                ☕ Peaceful Kitchen & Tea Rituals
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>What is your budget preference?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              We will match the best value product within your range.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button onClick={() => handleSelectBudget('under-25')} style={optionBtnStyle}>
                💵 Under $25 (Small Joy)
              </button>
              <button onClick={() => handleSelectBudget('25-45')} style={optionBtnStyle}>
                💳 $25 - $45 (Mid-Range Craft)
              </button>
              <button onClick={() => handleSelectBudget('45-plus')} style={optionBtnStyle}>
                🌟 $45+ (Artisanal Statement Piece)
              </button>
            </div>
          </div>
        )}

        {step === 3 && recommendation && (
          <div style={{ textAlign: 'center' }}>
            <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
              ✨ Recommended For You
            </div>
            <img
              src={recommendation.image}
              alt={recommendation.name}
              style={{
                width: '180px',
                height: '180px',
                borderRadius: 'var(--radius-md)',
                objectFit: 'cover',
                margin: '0 auto 16px',
                boxShadow: 'var(--shadow-md)'
              }}
            />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '6px' }}>{recommendation.name}</h3>
            <p style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '1.3rem', marginBottom: '12px' }}>
              ${recommendation.price.toFixed(2)}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '24px' }}>
              {recommendation.description}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  addToCart(recommendation);
                  setIsRecommenderOpen(false);
                }}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <ShoppingBag size={18} /> Add to Cart
              </button>
              <button onClick={resetQuiz} className="btn btn-secondary" style={{ padding: '12px' }}>
                <RotateCcw size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const optionBtnStyle = {
  padding: '14px 20px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--border-color)',
  background: 'var(--bg-secondary)',
  color: 'var(--text-primary)',
  fontSize: '0.95rem',
  fontWeight: '600',
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};
