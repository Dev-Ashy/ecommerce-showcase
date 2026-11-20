import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import App from './App.jsx';
import './index.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.95
  }
};

const pageTransition = {
  type: 'tween',
  easing: 'easeInOut[0.25, 0.1, 0.25, 1]',
  duration: 0.4
};

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={
          <motion.div
            key="home"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <App />
          </motion.div>
        } />
        <Route path="/products" element={
          <motion.div
            key="products"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <App />
          </motion.div>
        } />
        <Route path="/featured" element={
          <motion.div
            key="featured"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <App />
          </motion.div>
        } />
        <Route path="/cart" element={
          <motion.div
            key="cart"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <App />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            key="contact"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <App />
          </motion.div>
        } />
        <Route path="/product/:id" element={
          <motion.div
            key="product"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <App />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>
);