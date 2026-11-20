import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useReveal } from '../hooks/useReveal';

export function ProductCard({ product }) {
  const [ref, isRevealed] = useReveal();
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={` ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-300 text-gray-300'
        }`}
      />
    ));
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isRevealed ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
        <span className="text-8xl font-bold text-primary/20">
          {product.image}
        </span>

        {/* Quick Add Button (appears on hover) */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={handleAddToCart}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary text-primary-foreground rounded-full p-2 shadow-lg"
          aria-label="Add to cart"
        >
          <ShoppingCart size={18} />
        </motion.button>
      </div>

      <div className="p-4">
        <div className="mb-2 text-xs text-muted-foreground uppercase tracking-wide">
          {product.category}
        </div>

        <div
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors mb-2 cursor-pointer"
          onClick={() => window.location.href = `/product/${product.id}`}
        >
          {product.name}
        </div>

        <div className="flex items-center gap-1 mb-2">
          {renderStars(product.rating)}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-1 rounded-full transition-colors ${
              isLiked
                ? 'bg-red-100 text-red-500'
                : 'bg-muted hover:bg-accent'
            }`}
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
            product.stock === 0
              ? 'bg-muted cursor-not-allowed'
              : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md'
          }`}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </motion.button>
      </div>
    </motion.div>
  );
}