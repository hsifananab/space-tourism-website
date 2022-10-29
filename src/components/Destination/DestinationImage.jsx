import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations } from '../../data/data';

const DestinationImage = ({ index }) => {
  const item = destinations[index];

  return (
    <motion.div className="">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.title}
          initial={{ opacity: 0, rotate: '-90deg' }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: '90deg' }}
          transition={{ duration: 0.5 }}
        >
          <img src={item.image} alt={item.title} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default DestinationImage;
