import React from 'react';
import { useStore } from '../context/StoreContext';
import { CheckCircle2, Info, AlertTriangle, AlertCircle } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      zIndex: 3000,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '360px'
    }}>
      {toasts.map(toast => {
        let bg = 'var(--bg-card)';
        let border = 'var(--border-color)';
        let icon = <Info size={18} style={{ color: 'var(--accent-gold)' }} />;

        if (toast.type === 'success') {
          border = 'var(--accent-sage)';
          icon = <CheckCircle2 size={18} style={{ color: 'var(--accent-sage)' }} />;
        } else if (toast.type === 'warning') {
          border = 'var(--accent-gold)';
          icon = <AlertTriangle size={18} style={{ color: 'var(--accent-gold)' }} />;
        } else if (toast.type === 'error') {
          border = 'var(--accent-warm)';
          icon = <AlertCircle size={18} style={{ color: 'var(--accent-warm)' }} />;
        }

        return (
          <div
            key={toast.id}
            className="animate-fade-in"
            style={{
              padding: '12px 18px',
              borderRadius: 'var(--radius-md)',
              background: bg,
              border: `1px solid ${border}`,
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: 'var(--text-primary)',
              fontSize: '0.88rem',
              fontWeight: '600'
            }}
          >
            {icon}
            <span>{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};
