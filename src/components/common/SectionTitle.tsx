import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  isVisible: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, isVisible }) => {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        animate={isVisible ? { width: '80px' } : { width: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-4"
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionTitle;