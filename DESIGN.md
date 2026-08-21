# UrbanNest Lifestyle Store — Design System & UI/UX Architecture

> **Design & Technical Architecture Specifications**  
> *Crafting a Modern, Warm, and High-Converting Digital Presence for a Local Offline Shop*

---

## 1. Design Vision & Aesthetic Philosophy

UrbanNest Lifestyle Store transitions a traditional offline brick-and-mortar boutique into a state-of-the-art web application. The design language balances **warm Nordic minimalism** with **modern commercial e-commerce aesthetics**, ensuring customers feel the tactile warmth of a local sanctuary while enjoying seamless digital navigation.

### Core Aesthetic Pillars
- **Warm Nordic Palette**: Muted natural cream, warm ochre gold, sage olive green, and terracotta accents instead of generic artificial colors.
- **Glassmorphism & Depth**: Subtle backdrop-blur panels (`backdrop-filter: blur(16px)`), translucent overlays, and soft elevation shadows (`0 16px 40px rgba(0,0,0,0.12)`).
- **Responsive Fluid Typography**: Modern Google Font pairings—*Outfit* for expressive headings and *Plus Jakarta Sans* for clean, legible body text.
- **Dynamic Micro-Animations**: Smooth button hovers, floating badges, pulse glows, and celebratory confetti upon order completion.

---

## 2. Color System & Design Tokens

The application uses CSS Custom Properties to power a seamless **Light and Dark Theme Engine**:

```css
/* Light Theme Palette (Default) */
--bg-primary: #FAF8F5;       /* Warm Alabaster Cream */
--bg-secondary: #F3EFEA;     /* Soft Linen Neutral */
--bg-card: #FFFFFF;          /* Pure White Surface */
--text-primary: #1F2421;      /* Charcoal Soft Black */
--text-secondary: #5A625D;    /* Muted Slate Gray */
--accent-gold: #C29B38;       /* Artisanal Gold Ochre */
--accent-olive: #3A5A40;      /* Deep Forest Green */
--accent-sage: #588157;       /* Soft Botanical Sage */
--accent-warm: #E07A5F;       /* Warm Terracotta Warmth */

/* Dark Theme Palette */
--bg-primary: #121413;       /* Obsidian Night */
--bg-secondary: #1A1D1C;     /* Dark Charcoal Base */
--bg-card: #222624;          /* Elevated Surface Card */
--text-primary: #F5F7F6;      /* Off-White Text */
--accent-gold: #E2B84D;       /* Glowing Amber Gold */
```

---

## 3. Typography System

| Element | Font Family | Size Range | Weight | Line Height |
|---|---|---|---|---|
| **H1 (Hero Heading)** | `Outfit` | `2.5rem` – `3.8rem` | `800` (Extra Bold) | `1.12` |
| **H2 (Section Heading)** | `Outfit` | `2.2rem` – `2.5rem` | `700` (Bold) | `1.2` |
| **H3 / Card Titles** | `Outfit` | `1.1rem` – `1.4rem` | `700` (Bold) | `1.3` |
| **Body / Description** | `Plus Jakarta Sans` | `0.9rem` – `1.08rem` | `400` / `500` | `1.65` |
| **Badges / Buttons** | `Outfit` | `0.75rem` – `0.95rem` | `600` / `700` | `1.0` |

---

## 4. Key UI Components & Layout Breakdown

### 4.1 Header Navigation Bar (`Navbar.jsx`)
- **Sticky Glassmorphic Bar**: Remains accessible during scrolling.
- **Brand Identity**: Custom leaf icon badge with gold accent typography.
- **Navigation Links**: *About Us, Products, Why Choose Us, Query Form, Store Location* (configured with `whiteSpace: nowrap` to prevent layout wrapping).
- **Action Toolbar**:
  - Live Search Toggle (expanding input without shifting adjacent elements).
  - Theme Switcher (Sun/Moon mode toggle).
  - AI Finder Button (opens style questionnaire).
  - Wishlist Heart Button with live counter badge.
  - Shopping Cart Drawer Trigger with item badge.

### 4.2 Hero Banner (`Hero.jsx`)
- **Tagline**: *"Little Things. Beautiful Living."*
- **Call-To-Actions**: Primary button (*Explore Products*), Secondary button (*Ask Us a Question*), and Outline button (*AI Chatbot*).
- **Featured Image**: High-resolution studio product shot featuring ceramic vase, dried pampas, and linen journal.
- **Floating Badge**: Offline store integration status.

### 4.3 Interactive Product Catalog (`ProductCatalog.jsx`)
- **Category Filter Tabs**: *All Collection, Home Décor, Gift Items, Artisanal Stationery, Lifestyle Accessories, Small Household*.
- **Search & Sort Controls**: Real-time name/description filter input + price/rating sorting dropdown.
- **Product Card Features**:
  - Hover zoom transition (`scale(1.06)`).
  - Quick View popover button.
  - Heart Wishlist toggle with visual highlight.
  - Price, review rating stars, and one-click Add to Cart action.

### 4.4 Product Quick View Modal (`ProductQuickViewModal.jsx`)
- Full-screen blurred backdrop modal.
- Detailed specs breakdown (Material, Dimensions, Craftsmanship, Care instructions).
- Direct Add to Cart & Wishlist action buttons.

### 4.5 Customer Query Form (`QueryForm.jsx`)
- Form fields: *Full Name, Email Address, Optional Phone Number, Query Category Dropdown, Message Textarea*.
- Submits structured JSON payload to N8N.io Webhook endpoint via `POST`.
- Displays real-time loading spinner and success notification.

### 4.6 AI Chatbot Integration (`N8NChatbotWidget.jsx`)
- **Dual Location**:
  1. Dedicated page section (`#chatbot`).
  2. Bottom-right floating interactive drawer button.
- Quick prompt chips for fast answers (*Store Timings, Location, Products, Delivery, Contact, Query Form*).
- N8N Webhook API integration with local fallback knowledge base.

### 4.7 Store Location & Map (`StoreLocation.jsx`)
- Address details, store hours, Google Maps visual embed frame, and direct **WhatsApp Chat CTA Button**.

---

## 5. Responsive Design Breakpoints

| Device | Screen Width | Layout Behavior |
|---|---|---|
| **Desktop** | `> 1024px` | Full multi-column grid layouts, expanded header links. |
| **Tablet** | `768px – 1024px` | 2-column product grids, compact nav spacing. |
| **Mobile** | `< 768px` | 1-column stacked cards, mobile slide-out navigation menu. |

---

## 6. Micro-Interactions & User Experience (UX) Enhancements

1. **Order Celebration**: Triggered via `canvas-confetti` when completing checkout in the Cart Drawer.
2. **Instant Toast Alerts**: Non-intrusive bottom-left feedback popups for wishlist & cart additions.
3. **Wishlist Counter Badge**: Instant visual update on the header Heart icon when items are added.
4. **Promo Ticker Bar**: Top promotional header showcasing current store coupon codes (`NEST15`).
