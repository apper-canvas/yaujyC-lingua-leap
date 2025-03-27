import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-6 relative">
          <div className="text-9xl font-bold opacity-10 text-primary">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-bold text-gradient">Page Not Found</div>
          </div>
        </div>
        
        <p className="text-surface-600 dark:text-surface-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}