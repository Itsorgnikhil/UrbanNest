import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Sliders, X, Link, Check, RefreshCw } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export const N8NSettingsModal = ({ isOpen, onClose }) => {
  const { n8nQueryWebhook, n8nChatbotWebhook, saveN8nSettings } = useStore();

  const [queryUrl, setQueryUrl] = useState(n8nQueryWebhook);
  const [chatbotUrl, setChatbotUrl] = useState(n8nChatbotWebhook);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    saveN8nSettings(queryUrl, chatbotUrl);
    onClose();
  };

  const handleReset = () => {
    setQueryUrl(STORE_DETAILS.n8nQueryWebhookDefault);
    setChatbotUrl(STORE_DETAILS.n8nChatbotWebhookDefault);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2400,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }} onClick={onClose}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '560px',
        borderRadius: 'var(--radius-lg)',
        padding: '36px',
        position: 'relative',
        background: 'var(--bg-card)'
      }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'var(--accent-gold)',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Sliders size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>N8N Webhook Integration Config</h3>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Configure your live N8N.io endpoints for evaluation
            </span>
          </div>
        </div>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Query Form Webhook */}
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', marginBottom: '6px' }}>
              N8N Query Form Webhook URL:
            </label>
            <div style={{ position: 'relative' }}>
              <Link size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="url"
                required
                value={queryUrl}
                onChange={(e) => setQueryUrl(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Chatbot Webhook */}
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', marginBottom: '6px' }}>
              N8N Chatbot Webhook URL:
            </label>
            <div style={{ position: 'relative' }}>
              <Link size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="url"
                required
                value={chatbotUrl}
                onChange={(e) => setChatbotUrl(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', marginTop: '10px' }}>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-secondary"
              style={{ padding: '10px 16px', fontSize: '0.85rem' }}
            >
              <RefreshCw size={14} /> Reset Defaults
            </button>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
                style={{ padding: '10px 16px', fontSize: '0.85rem' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                <Check size={16} /> Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
