import React from 'react';
import { motion } from 'framer-motion';
import { SlMenu } from 'react-icons/sl';
import { CgClose } from 'react-icons/cg';
import { useStateContext } from '../../contexts/ContextProvider';

const MenuButton = () => {
  const { isOpen, toggleMenu } = useStateContext();

  return (
    <motion.div
      className="md:hidden z-20 flex items-center justify-center text-white text-2xl cursor-pointer "
      onClick={toggleMenu}
      layoutId="burger"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isOpen ? <CgClose /> : <SlMenu />}
    </motion.div>
  );
};

export default MenuButton;
