// UrbanNest Product Data Repository

export const CATEGORIES = [
  { id: 'all', name: 'All Collection', icon: 'Sparkles' },
  { id: 'home-decor', name: 'Home Décor', icon: 'Home' },
  { id: 'gift-items', name: 'Gift Items', icon: 'Gift' },
  { id: 'stationery', name: 'Stationery', icon: 'BookOpen' },
  { id: 'lifestyle', name: 'Lifestyle Accessories', icon: 'ShoppingBag' },
  { id: 'household', name: 'Small Household', icon: 'Coffee' }
];

export const PRODUCTS = [
  {
    id: 'un-001',
    name: 'Artisan Ceramic Vase with Pampas',
    category: 'home-decor',
    price: 49.99,
    originalPrice: 65.00,
    rating: 4.9,
    reviewsCount: 38,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
    image: '/ceramic_vase.png',
    description: 'Handcrafted stoneware ceramic vase with warm speckled texture. Ideal for dry flowers, pampas grass, or standalone minimalist table accent.',
    specs: {
      Material: 'Stoneware Ceramic',
      Dimensions: '22cm H x 14cm W',
      Craft: 'Hand-sculpted in small batches',
      Care: 'Wipe clean with a damp microfiber cloth'
    }
  },
  {
    id: 'un-002',
    name: 'Nordic Minimalist Wall Clock',
    category: 'home-decor',
    price: 39.50,
    originalPrice: 48.00,
    rating: 4.8,
    reviewsCount: 24,
    isFeatured: true,
    isBestseller: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80',
    description: 'Silent sweep movement wall clock featuring natural wood finish dial, clean metallic hands, and modern frameless silhouette.',
    specs: {
      Diameter: '30 cm',
      Movement: 'Ultra-silent quartz mechanism',
      Battery: '1x AA required'
    }
  },
  {
    id: 'un-003',
    name: 'Aromatic French Lavender Soy Candle',
    category: 'home-decor',
    price: 24.99,
    originalPrice: 32.00,
    rating: 5.0,
    reviewsCount: 52,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-poured 100% natural soy wax candle infused with essential oils of French lavender and vanilla bean. 45-hour burn time in amber glass jar.',
    specs: {
      Weight: '250g / 8.8 oz',
      Wick: 'Lead-free organic cotton wick',
      BurnTime: 'Up to 45 Hours'
    }
  },
  {
    id: 'un-004',
    name: 'Handcrafted Leather Journal & Brass Pen Set',
    category: 'gift-items',
    price: 34.00,
    originalPrice: 42.00,
    rating: 4.9,
    reviewsCount: 19,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'Supple vegan leather journal bound with 200 pages of recycled cotton paper. Paired with a weighted vintage solid brass twist ballpoint pen.',
    specs: {
      Pages: '200 bleed-proof unlined pages',
      Cover: 'Cognac brown full grain leatherette',
      Box: 'Includes gift box'
    }
  },
  {
    id: 'un-005',
    name: 'Botanical Brass Bookmark Trio',
    category: 'gift-items',
    price: 18.50,
    originalPrice: 22.00,
    rating: 4.7,
    reviewsCount: 14,
    isFeatured: false,
    isBestseller: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    description: 'Set of three laser-etched solid brass page markers featuring Ginkgo, Fern, and Monstera leaf motifs.',
    specs: {
      Material: '100% Solid Brushed Brass',
      Quantity: '3 piece gift set'
    }
  },
  {
    id: 'un-006',
    name: 'Linen Bound Annual Planner 2026',
    category: 'stationery',
    price: 28.00,
    originalPrice: 35.00,
    rating: 4.8,
    reviewsCount: 31,
    isFeatured: true,
    isBestseller: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    description: 'Aesthetic weekly & monthly planner wrapped in premium oat linen. Includes habit trackers, ribbon bookmark, and elastic closure.',
    specs: {
      Paper: '120 GSM FSC-certified ivory paper',
      Binding: 'Smyth-sewn lay-flat binding'
    }
  },
  {
    id: 'un-007',
    name: 'Minimalist Pastel Gel Pen Collection (Set of 6)',
    category: 'stationery',
    price: 14.99,
    originalPrice: 19.00,
    rating: 4.6,
    reviewsCount: 27,
    isFeatured: false,
    isBestseller: true,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1585336261026-8f5786372966?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-smooth 0.5mm quick-dry black gel pens housed in soft-touch matte pastel barrels.',
    specs: {
      Ink: 'Archival black gel ink',
      Tip: '0.5mm needle point'
    }
  },
  {
    id: 'un-008',
    name: 'Organic Cotton Canvas Tote Bag',
    category: 'lifestyle',
    price: 22.00,
    originalPrice: 28.00,
    rating: 4.9,
    reviewsCount: 43,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'Heavyweight 12oz natural cotton tote with interior zipper pocket and reinforced handles. Printed with delicate UrbanNest botanical sketch.',
    specs: {
      Capacity: '15 Liters',
      Pockets: '1 internal zip pocket, 2 phone slots'
    }
  },
  {
    id: 'un-009',
    name: 'Washed Linen Daily Apron with Pockets',
    category: 'lifestyle',
    price: 36.50,
    originalPrice: 45.00,
    rating: 4.8,
    reviewsCount: 16,
    isFeatured: false,
    isBestseller: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    description: 'Cross-back stonewashed pure linen kitchen apron. Soft, breathable, and designed for effortless home cooking or crafting.',
    specs: {
      Fabric: '100% French Flax Linen',
      Size: 'Adjustable cross-back tie fit'
    }
  },
  {
    id: 'un-0010',
    name: 'Bamboo Fiber Coaster Set (Pack of 4)',
    category: 'household',
    price: 16.00,
    originalPrice: 20.00,
    rating: 4.7,
    reviewsCount: 22,
    isFeatured: false,
    isBestseller: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    description: 'Absorbent eco-friendly bamboo fiber coasters with non-slip cork base. Protects tabletops with subtle geometric textures.',
    specs: {
      Includes: '4 coasters + magnetic holder stand'
    }
  },
  {
    id: 'un-0011',
    name: 'Ceramic Teapot with Wood Handle',
    category: 'household',
    price: 42.00,
    originalPrice: 52.00,
    rating: 4.9,
    reviewsCount: 39,
    isFeatured: true,
    isBestseller: true,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    description: '800ml matte white ceramic teapot featuring an ergonomic bent oak wood handle and stainless steel loose leaf tea infuser filter.',
    specs: {
      Volume: '800 ml / 27 fl oz',
      Infuser: '304 Stainless steel removable mesh'
    }
  }
];

export const STORE_DETAILS = {
  name: 'UrbanNest Lifestyle Store',
  tagline: 'Little Things. Beautiful Living.',
  description: 'UrbanNest is your neighborhood lifestyle sanctuary. We curate charming home décor, meaningful gifts, artisanal stationery, and everyday living products to elevate your space and bring warmth into daily routines.',
  address: '104 Willow Green Lane, Sector 4, Indiranagar, Bengaluru - 560038',
  phone: '+91 98765 43210',
  email: 'hello@urbanneststore.com',
  timings: 'Monday – Sunday: 10:00 AM – 9:00 PM IST',
  delivery: 'Same-day store pickup & All-India shipping (2-4 business days)',
  n8nQueryWebhookDefault: 'https://n8n.cloud/webhook/urbannest-query-form',
  n8nChatbotWebhookDefault: 'https://nakul1122.app.n8n.cloud/webhook/3ccde469-b8fd-4b0a-a429-2ee80a25218a/chat'
};
