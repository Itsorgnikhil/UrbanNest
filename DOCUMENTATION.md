# UrbanNest Lifestyle Store — Project & N8N Integration Documentation

> **Mini Hackathon 1 Challenge Solution**  
> *Transforming a Traditional Offline Local Shop into a Modern Digital Business*

---

## 1. Problem Being Solved

**UrbanNest Lifestyle Store** is a traditional local offline shop situated in Indiranagar, Bengaluru, specializing in:
- Home Décor (Ceramic Vases, Wall Clocks, Soy Candles)
- Gift Items (Leather Journals, Brass Bookmarks)
- Artisanal Stationery (Linen Planners, Gel Pens)
- Lifestyle Accessories (Canvas Totes, Linen Aprons)
- Small Household Products (Ceramic Tea Sets, Bamboo Coasters)

**The Challenge**: Operating strictly through a physical storefront limited UrbanNest's customer reach to local foot traffic. The business needed a high-performance, attractive, and functional website to establish an online presence, streamline customer inquiries via automation, and provide 24/7 assistant support.

---

## 2. Proposed Solution

We designed and built a commercial-grade, fully responsive e-commerce web application for UrbanNest with deep automation integrations:

1. **Professional Landing Page**: Hero section with tagline *"Little Things. Beautiful Living."*, high-impact visuals, and clear call-to-action buttons.
2. **Interactive Product Catalog**: Live search, category tabs, price sorting, Quick View modal, Shopping Cart drawer, and Wishlist.
3. **N8N.io Webhook Query Form**: Direct HTTP POST transmission of customer inquiries to an N8N automation workflow with response status logging.
4. **N8N.io AI Chatbot Widget**: Dual integration featuring an on-page chat section as well as a bottom-right floating AI drawer with quick-answer chips for common questions (Store Timings, Location, Products, Delivery, Contact).
5. **Bonus Features**: Light/Dark theme toggle, AI Nest Finder quiz, Store locator map with WhatsApp CTA, customer testimonials, and discount coupon codes (`NEST15`).
6. **Render Ready**: Automatic static site deployment blueprint (`render.yaml`).

---

## 3. Team Member Contributions (Team of 3)

| Team Member | Role / Responsibility | Key Deliverables |
|---|---|---|
| **Member 1** | **UI/UX & Landing Page** | Hero section design, typography system, Glassmorphism CSS theme tokens, Light/Dark mode engine, mobile responsiveness. |
| **Member 2** | **Website Development** | Product catalog state, category tabs, real-time search, Quick View modal, Shopping Cart drawer, and discount logic. |
| **Member 3** | **AI/Chatbot & N8N Integration & Deployment** | N8N query form webhook integration, floating N8N AI chatbot widget, Render deployment (`render.yaml`), and project documentation. |

---

## 4. Technology Stack

- **Frontend Core**: React 18, Vite, JavaScript (ES6+).
- **Styling**: Vanilla CSS Design System with CSS Variables, Glassmorphism backdrop-blur, custom scrollbars, and micro-animations.
- **Icons & Visuals**: `lucide-react`, `canvas-confetti`, generated high-resolution product photography.
- **Automation & AI**: N8N.io Webhook APIs (`POST` payload handling).
- **Deployment Platform**: Render (Static Web Service).

---

## 5. N8N.io Integrations Breakdown

### 5.1 N8N Query Form Integration
- **Endpoint Configuration**: Configurable via `n8nQueryWebhook` environment/context setting (default: `https://n8n.cloud/webhook/urbannest-query-form`).
- **HTTP Method**: `POST` with `Content-Type: application/json`.
- **Payload Structure**:
```json
{
  "timestamp": "2026-08-21T14:36:00.000Z",
  "store": "UrbanNest Lifestyle Store",
  "customer": {
    "name": "Ananya Sharma",
    "email": "ananya@example.com",
    "phone": "+91 98765 43210"
  },
  "queryCategory": "Product Inquiry",
  "message": "Is the French Lavender Candle in stock for in-store pickup today?",
  "source": "UrbanNest Website Form Integration"
}
```
- **Response Handling**: Displays status code, payload receipt notice, and JSON response block.

### 5.2 N8N AI Chatbot Widget Integration
- **Accessibility**: Available as a dedicated page section (`#chatbot`) and a floating bottom-right drawer button.
- **Quick Question Chips**:
  1. What products do you sell?
  2. What are your store timings?
  3. Where is the shop located?
  4. Do you provide delivery?
  5. How can I contact you?
  6. How can I submit a query?
- **Workflow**: Dispatches user messages to `n8nChatbotWebhook` and renders real-time bot responses with typing animation and Store Knowledge fallback.

---

## 6. Render Deployment Instructions

1. **Connect Repository**: Link your GitHub/GitLab repository to your Render dashboard.
2. **Select Blueprint Deployment**: Render will automatically detect `render.yaml`.
3. **Manual Static Site Setup (Alternative)**:
   - **Environment**: Static Site
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `./dist`
   - **Route Rewrite**: `/*` -> `/index.html` (SPA routing)
4. **Deploy**: Click **Create Web Service**. Your live Render URL will be generated!

---

## 7. Future Improvements

- **Live Inventory Sync**: Connect N8N workflow directly to offline store POS system (Tally/Zoho) for live stock tracking.
- **Payment Gateway Integration**: Add Razorpay or Stripe checkout for direct online payments.
- **Customer Account Portal**: Order history, saved addresses, and loyalty points.
