import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORE_DETAILS } from '../data/products';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('urbannest_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('urbannest_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Cart State
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('urbannest_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('urbannest_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    addToast(`Added "${product.name}" to cart!`, 'success');
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    addToast('Item removed from cart.', 'info');
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Wishlist State
  const [wishlist, setWishlist] = useState([]);
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        addToast('Removed from wishlist.', 'info');
        return prev.filter(id => id !== productId);
      } else {
        addToast('Saved to wishlist!', 'success');
        return [...prev, productId];
      }
    });
  };

  // N8N Integration Configuration
  const [n8nQueryWebhook, setN8nQueryWebhook] = useState(() => {
    return localStorage.getItem('urbannest_n8n_query') || STORE_DETAILS.n8nQueryWebhookDefault;
  });

  const [n8nChatbotWebhook, setN8nChatbotWebhook] = useState(() => {
    return localStorage.getItem('urbannest_n8n_chatbot') || STORE_DETAILS.n8nChatbotWebhookDefault;
  });

  const saveN8nSettings = (queryUrl, chatbotUrl) => {
    setN8nQueryWebhook(queryUrl);
    setN8nChatbotWebhook(chatbotUrl);
    localStorage.setItem('urbannest_n8n_query', queryUrl);
    localStorage.setItem('urbannest_n8n_chatbot', chatbotUrl);
    addToast('N8N Integration Settings updated successfully!', 'success');
  };

  // Search & Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modals State
  const [isRecommenderOpen, setIsRecommenderOpen] = useState(false);
  const [isDocOpen, setIsDocOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast Notifications State
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <StoreContext.Provider
      value={{
        theme,
        toggleTheme,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        n8nQueryWebhook,
        n8nChatbotWebhook,
        saveN8nSettings,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        isRecommenderOpen,
        setIsRecommenderOpen,
        isDocOpen,
        setIsDocOpen,
        quickViewProduct,
        setQuickViewProduct,
        toasts,
        addToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
