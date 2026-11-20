import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: 'clamp(2rem, 8vw, 4rem)',
          fontWeight: 'bold',
          margin: '0 0 1rem',
          background: 'linear-gradient(45deg, #fff, #e0e0e0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        E-Commerce Showcase
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: '1.5rem',
          margin: '0',
          opacity: 0.9
        }}
      >
        Premium products with 3D animations
      </motion.p>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button
          onClick={() => setCount(c => c + 1)}
          style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#667eea',
            background: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.2s'
          }}
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
