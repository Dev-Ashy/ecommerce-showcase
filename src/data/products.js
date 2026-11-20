// Product data for the e-commerce site
export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1245,
    image: "🎧",
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    featured: true,
    stock: 42
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    category: "Electronics",
    price: 399.99,
    originalPrice: 499.99,
    rating: 4.6,
    reviews: 892,
    image: "⌚",
    description: "Advanced smartwatch with health tracking, GPS, and 7-day battery.",
    featured: true,
    stock: 28
  },
  {
    id: 3,
    name: "Gaming Laptop",
    category: "Computers",
    price: 1599.99,
    originalPrice: 1899.99,
    rating: 4.7,
    reviews: 567,
    image: "💻",
    description: "High-performance gaming laptop with RTX 4070 and 165Hz display.",
    featured: false,
    stock: 15
  },
  {
    id: 4,
    name: "Designer Leather Bag",
    category: "Accessories",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviews: 342,
    image: "👜",
    description: "Handcrafted premium leather bag with lifetime warranty.",
    featured: true,
    stock: 35
  },
  {
    id: 5,
    name: "Wireless Charging Station",
    category: "Electronics",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    reviews: 781,
    image: "🔋",
    description: "Multi-device wireless charging station with fast charging support.",
    featured: false,
    stock: 88
  },
  {
    id: 6,
    name: "Espresso Machine",
    category: "Kitchen",
    price: 329.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 423,
    image: "☕",
    description: "Professional espresso machine with automatic milk frother.",
    featured: false,
    stock: 19
  },
  {
    id: 7,
    name: "Fitness Tracker Band",
    category: "Wearables",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.4,
    reviews: 654,
    image: "📱",
    description: "Waterproof fitness tracker with sleep monitoring and heart rate alerts.",
    featured: false,
    stock: 76
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 523,
    image: "🔊",
    description: "Portable waterproof bluetooth speaker with 24-hour battery and rich sound.",
    featured: false,
    stock: 63
  }
];

export const categories = [
  { name: "All Products", slug: "all", count: 8 },
  { name: "Electronics", slug: "electronics", count: 3 },
  { name: "Computers", slug: "computers", count: 1 },
  { name: "Accessories", slug: "accessories", count: 1 },
  { name: "Kitchen", slug: "kitchen", count: 1 },
  { name: "Wearables", slug: "wearables", count: 1 },
  { name: "Audio", slug: "audio", count: 1 }
];