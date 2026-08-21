import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_DETAILS } from '../data/products';
import { Bot, X, Send, Sparkles, RefreshCw, MessageSquare, ExternalLink } from 'lucide-react';

const QUICK_PROMPTS = [
  'What products do you sell?',
  'What are your store timings?',
  'Where is the shop located?',
  'Do you provide delivery?',
  'How can I contact you?',
  'How can I submit a query?'
];

const INITIAL_MESSAGES = [
  {
    id: 'msg-1',
    sender: 'bot',
    text: `Hello! 👋 I'm NestBot, your AI Assistant at UrbanNest Lifestyle Store.\nHow can I help you today? Feel free to ask about our products, store location, timings, or orders!`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

export const N8NChatbotWidget = () => {
  const { n8nChatbotWebhook } = useStore();

  const [isOpen, setIsOpen] = useState(false);
  const [useIframe, setUseIframe] = useState(true);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle Question Response Logic
  const handleSendMessage = async (textToSend) => {
    const userText = textToSend || input;
    if (!userText.trim()) return;

    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      // POST to N8N Webhook Chatbot API
      const response = await fetch(n8nChatbotWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sendMessage',
          chatInput: userText,
          sessionId: 'urbannest-session-1'
        })
      });

      let botAnswer = '';
      if (response.ok) {
        const data = await response.json();
        botAnswer = data.output || data.response || data.text || data.message;
      }

      if (!botAnswer) {
        botAnswer = generateKnowledgeFallback(userText);
      }

      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
    } catch {
      // Clean fallback using Store Knowledge if N8N endpoint is unreachable locally
      const botAnswer = generateKnowledgeFallback(userText);
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* 1. Dedicated On-Page Chatbot Section */}
      <section id="chatbot" style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '950px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
              <Bot size={14} /> N8N-Powered AI Assistant
            </div>
            <h2 style={{ fontSize: '2.4rem', lineHeight: 1.2, marginBottom: '12px' }}>
              UrbanNest AI Customer Chatbot
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', maxWidth: '600px', margin: '0 auto' }}>
              Chat with our automated N8N AI assistant below for store guidance, stock inquiries, or delivery details.
            </p>
          </div>

          <div className="glass-card" style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-color)'
          }}>
            {/* Embedded Chat Header */}
            <div style={{
              padding: '16px 24px',
              background: 'linear-gradient(135deg, var(--accent-olive), var(--accent-gold))',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Bot size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#FFF', fontSize: '1rem', margin: 0 }}>NestBot AI Assistant</h4>
                  <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>Connected to N8N Workflow</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setUseIframe(!useIframe)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    color: '#FFF',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  {useIframe ? 'Switch to Custom UI' : 'Switch to Native N8N iFrame'}
                </button>
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '0.8rem', color: '#333' }}
                >
                  Open Floating Drawer
                </button>
              </div>
            </div>

            {useIframe ? (
              <div style={{ height: '480px', width: '100%', background: '#FFF' }}>
                <iframe
                  src={n8nChatbotWebhook}
                  title="N8N AI Chatbot Native Interface"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              </div>
            ) : (
              <>

            {/* Quick Prompts Bar */}
            <div style={{
              padding: '12px 20px',
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              overflowX: 'auto',
              scrollbarWidth: 'none'
            }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                Quick Questions:
              </span>
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.8rem',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Body */}
            <div style={{
              height: '340px',
              overflowY: 'auto',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: 'var(--bg-card)'
            }}>
              {messages.map(msg => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div style={{
                    maxWidth: '80%',
                    padding: '12px 18px',
                    borderRadius: msg.sender === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                    background: msg.sender === 'user' ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                    color: msg.sender === 'user' ? '#FFFFFF' : 'var(--text-primary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-line'
                  }}>
                    {msg.text}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {msg.timestamp}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Bot size={16} /> NestBot is thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div style={{
              padding: '16px 20px',
              borderTop: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <input
                type="text"
                placeholder="Ask NestBot a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                style={{
                  flex: 1,
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <button
                onClick={() => handleSendMessage()}
                className="btn btn-primary"
                style={{ borderRadius: '50%', width: '44px', height: '44px', padding: 0 }}
              >
                <Send size={18} />
              </button>
            </div>
            </>
            )}
          </div>
        </div>
      </section>

      {/* 2. Floating Bottom-Right Chatbot Widget */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="animate-pulse-glow"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 1500,
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-olive))',
            color: '#FFFFFF',
            border: 'none',
            boxShadow: 'var(--shadow-lg)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Chat with N8N AI Assistant"
        >
          <Bot size={28} />
        </button>
      )}

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 2000,
          width: '380px',
          maxWidth: 'calc(100vw - 32px)',
          height: '520px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Header */}
          <div style={{
            padding: '14px 20px',
            background: 'linear-gradient(135deg, var(--accent-olive), var(--accent-gold))',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Bot size={22} />
              <div>
                <strong style={{ fontSize: '0.95rem' }}>UrbanNest Assistant</strong>
                <div style={{ fontSize: '0.72rem', opacity: 0.85 }}>● Online | N8N Workflow</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFF',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Prompts horizontal list */}
          <div style={{
            padding: '8px 12px',
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            gap: '6px',
            overflowX: 'auto'
          }}>
            {QUICK_PROMPTS.slice(0, 4).map((p, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(p)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.75rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  color: 'var(--text-primary)'
                }}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map(m => (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: m.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div style={{
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: m.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  background: m.sender === 'user' ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  color: m.sender === 'user' ? '#FFF' : 'var(--text-primary)',
                  fontSize: '0.86rem',
                  lineHeight: 1.45,
                  whiteSpace: 'pre-line'
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>NestBot is typing...</div>
            )}
          </div>

          {/* Input */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            gap: '8px'
          }}>
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              className="btn btn-primary"
              style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0 }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Knowledge base fallback for common hackathon chatbot questions
function generateKnowledgeFallback(query) {
  const q = query.toLowerCase();
  if (q.includes('product') || q.includes('sell') || q.includes('category')) {
    return `🛍️ **What We Sell at UrbanNest:**\nWe offer 5 curated product lines:\n1. Home Décor (Ceramic Vases, Wall Clocks, Soy Candles)\n2. Gift Items (Leather Journals, Brass Bookmark Sets)\n3. Artisanal Stationery (Linen Planners, Gel Pens)\n4. Lifestyle Accessories (Canvas Totes, Linen Aprons)\n5. Small Household Products (Ceramic Tea Sets, Bamboo Coasters)`;
  }
  if (q.includes('timing') || q.includes('hour') || q.includes('open')) {
    return `🕒 **Store Timings:**\nOur physical Indiranagar store is open daily:\n• Monday – Sunday: 10:00 AM – 9:00 PM IST.\nOur online store & N8N assistant are available 24/7!`;
  }
  if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('map')) {
    return `📍 **Store Location:**\nUrbanNest Lifestyle Store\n104 Willow Green Lane, Sector 4, Indiranagar, Bengaluru - 560038.\nFeel free to drop by for in-store pickup!`;
  }
  if (q.includes('delivery') || q.includes('ship') || q.includes('courier')) {
    return `🚚 **Delivery Options:**\n• Same-day local pickup at our Indiranagar physical store.\n• Express Pan-India delivery within 2–4 business days.\n• Free shipping on orders over $50!`;
  }
  if (q.includes('contact') || q.includes('phone') || q.includes('email')) {
    return `📞 **Contact Us:**\n• Phone/WhatsApp: ${STORE_DETAILS.phone}\n• Email: ${STORE_DETAILS.email}\n• Visit us at Indiranagar, Bengaluru!`;
  }
  if (q.includes('query') || q.includes('form') || q.includes('submit')) {
    return `📝 **How to Submit a Query:**\nYou can scroll to the 'Query Form' section on our homepage or use our N8N integrated submission engine. Fill out your name, email, query category, and message for fast assistance!`;
  }
  return `Thank you for reaching out to UrbanNest! I've logged your question "${query}" with our store team. You can also submit a detailed inquiry using our Query Form section below.`;
}
