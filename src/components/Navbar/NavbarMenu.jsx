import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useStateContext } from '../../contexts/ContextProvider';

import { pages } from '../../data/data';

const NavbarMenu = () => {
  const { activeIndex, handleActiveIndex } = useStateContext();
  return (
    <div>
      <nav
        className="hidden md:flex justify-center items-center w-[450px] lg:w-[830px] h-[96px]"
        style={{
          backdropFilter: 'blur(40.7742px)',
          WebkitBackdropFilter: 'blur(40.7742px)',
          background: 'rgba(255, 255, 255, 0.04)',
        }}
      >
        <ul className="flex gap-[37px] lg:gap-12">
          {pages.map((item, index) => (
            <NavbarMenuItem
              key={index}
              item={item}
              index={index}
              isSelected={activeIndex === index}
              handleClick={() => handleActiveIndex(index)}
            ></NavbarMenuItem>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMenu;

export const NavbarMenuItem = ({ index, item, isSelected, handleClick }) => {
  return (
    <motion.li
      className=" relative hover:text-primary transition-all cursor-pointer"
      onClick={handleClick}
    >
      {isSelected && <ActiveLine />}
      <Link to={item.path} className="flex gap-3 tracking-widest  uppercase">
        <span className=" font-bold hidden lg:inline">0{index}</span>
        {item.label}
      </Link>
    </motion.li>
  );
};

export const ActiveLine = () => {
  return (
    <motion.div
      layoutId="activeItem"
      className="w-[calc(100%-10px)] h-[2px] absolute -bottom-9  left-[5px] bg-white "
    />
  );
};
