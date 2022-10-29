import React from 'react';
import { motion } from 'framer-motion';
import { MSidebar } from './components/Sidebar/Sidebar';
import { useStateContext } from './contexts/ContextProvider';
import { MNavbar } from './components/Navbar/Navbar';

import AnimatedRoutes from './components/AnimatedRoutes';

// const navbarMotion = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { delay: 6 } },
// };

const sidebarMotion = {
  hidden: { opacity: 0, x: 300 },
  visible: { opacity: 1, x: 0, transition: { mass: 1 } },
};

const App = () => {
  const { isOpen } = useStateContext();

  return (
    <motion.div initial="hidden" whileInView="visible">
      {isOpen && (
        <MSidebar variants={sidebarMotion} initial="hidden" animate="visible" />
      )}
      <MNavbar />
      <AnimatedRoutes />
    </motion.div>
  );
};

export default App;
