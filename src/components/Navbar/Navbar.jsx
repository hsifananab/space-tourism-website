import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import LogoButton from '../UI/LogoButton';
import NavbarMenu from './NavbarMenu';
import MenuButton from '../UI/MenuButton';

const navbarMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 6 } },
};

export const Navbar = forwardRef((props, ref) => {
  return (
    <motion.div
      className="flex items-center justify-center z-10"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={navbarMotion}
    >
      <div className="max-w-full- absolute lg:top-[40px] md:top-0 top-6 md:left-[55px] left-6 md:right-0 right-6 max-w-screen-2xl max-h-[900px]  m-auto">
        <div className="flex items-center justify-between">
          <LogoButton />
          <NavbarMenu />
          <MenuButton />
        </div>
      </div>
    </motion.div>
  );
});

export const MNavbar = motion(Navbar);
