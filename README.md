# E-Commerce Product Showcase

A stunning e-commerce web application featuring 3D animations, smooth scrolling effects, and modern UI/UX design.

## 🚀 Features

- **Three.js 3D Hero Section**: Animated 3D product showcase with floating rotating cubes
- **Framer Motion Animations**: Smooth page transitions and scroll-triggered animations
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Product Catalog**: Browse products by category with filtering
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Dark/Light Mode**: Built-in theme toggle with smooth transitions
- **Modern UI**: Glassmorphism, gradients, and micro-interactions

## 🎨 Tech Stack

- **React 19** with the new React Compiler
- **Vite** for fast development and optimized builds
- **Three.js** for 3D animations
- **Framer Motion** for animations
- **React Router** for client-side routing
- **Tailwind CSS-inspired utilities** for styling

## 📦 Installation

```bash
npm install
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Key Components

### ThreeHero.jsx
3D animated hero section with Three.js showing floating, rotating product cubes with:
- Perspective transformations
- Shadow mapping
- Responsive canvas
- Smooth animation loop

### useReveal.js
Intersection Observer hook for scroll-triggered animations:
- Reveal on scroll
- Staggered reveals

### ProductCard.jsx
Individual product cards with:
- Hover effects
- Quick-add to cart
- Star ratings
- Quick view button

## 🎯 Performance Optimizations

- Code splitting by vendor and features
- Automatic route prefetching
- Minified CSS with lightningcss
- Optimized Three.js rendering

## 📁 Project Structure

```
src/
├── App.jsx          # Main application
├── main.jsx         # Entry point with Router
├── index.css        # Global styles
├── App.css          # Component styles
├── components/
│   ├── ThreeHero.jsx   # 3D hero component
│   ├── ProductCard.jsx # Product card
│   ├── CartModal.jsx   # Shopping cart
│   └── Layout.jsx      # Navigation layout
├── hooks/
│   ├── useCart.js      # Cart state management
│   └── useReveal.js    # Animation hooks
└── data/
    └── products.js     # Product data
```

## 🎉 Deployment

This app is optimized for Vercel deployment:
- Automatic builds with Vite
- SSR-compatible
- Optimized for Edge Network

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)