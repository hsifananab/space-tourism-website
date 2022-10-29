import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useStateContext } from '../../contexts/ContextProvider';
import { pages } from '../../data/data';
import { Link } from 'react-router-dom';

export const Sidebar = forwardRef((props, ref) => {
  const { toggleMenu, activeIndex, handleActiveIndex, myRef } =
    useStateContext();

  return (
    <div
      className="fixed top-0 right-0 h-full w-2/3 z-10 bg-[rgba(255,255,255,.04)]"
      style={{
        backdropFilter: 'blur(40.7742px)',
        WebkitBackdropFilter: 'blur(40.7742px)',
      }}
      ref={ref}
    >
      <div className="pl-8 pt-[118px]">
        <ul className="flex flex-col gap-8">
          {pages.map((item, index) => (
            <SidebarItem
              item={item}
              index={index}
              key={index}
              isSelected={activeIndex === index}
              handleClick={() => {
                handleActiveIndex(index);
                toggleMenu();
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
});

export const MSidebar = motion(Sidebar);

const SidebarItem = ({ item, index, isSelected, handleClick }) => {
  return (
    <motion.li
      className="uppercase text-base leading-[19px] tracking-[2.7px] hover:text-primary relative"
      onClick={handleClick}
    >
      {isSelected && <ActiveLine />}
      <Link to={item.path}>
        <div className="flex gap-[11px]">
          <span className="font-bold">0{index}</span>
          {item.label}
        </div>
      </Link>
    </motion.li>
  );
};

const ActiveLine = () => {
  return (
    <motion.div
      layoutId="activeSidebarItem"
      className="w-[4px] h-[calc(100%+12px)] absolute -bottom-[6px]  right-0 bg-white "
    />
  );
};
