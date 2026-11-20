import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThreeHero } from './components/ThreeHero';
import { ProductCard } from './components/ProductCard';
import { CartModal } from './components/CartModal';
import { Layout } from './components/Layout';
import { products, categories } from './data/products';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category.toLowerCase() === selectedCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    }
  };

  const heroContentVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Parallax Effect */}
      <header className="fixed top-0 w-full z-40 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/90 to-background"
          style={{
            backgroundPosition: `center ${scrollY * 0.5}px`
          }}
        />
      </header>

      {/* Hero Section with Three.js */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ThreeHero />
        </div>

        <motion.div
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Elevate Your Experience
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Discover premium products with stunning 3D visuals and smooth animations
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setShowCart(true)}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              Shop Now
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium quality products for modern lifestyles
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.slug}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.slug
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-foreground hover:bg-accent/80'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quality you can trust with exceptional service
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🛡️',
                title: 'Quality Guarantee',
                description: 'Premium products backed by our 100% satisfaction guarantee'
              },
              {
                icon: '🚚',
                title: 'Free Shipping',
                description: 'Free delivery on orders over $50, anywhere in the world'
              },
              {
                icon: '🔒',
                title: 'Secure Checkout',
                description: 'Your payment information is protected with bank-level security'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Upgrade Your Collection?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust our products
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setShowCart(true)}
                className="px-12 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                Start Shopping
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cart Modal */}
      <AnimatePresence>
        {showCart && <CartModal onClose={() => setShowCart(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;