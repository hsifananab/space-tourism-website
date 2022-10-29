import React from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../../data/data';
import { useStateContext } from '../../contexts/ContextProvider';

const DestinationMenu = () => {
  const { activeDestinationIndex, handleActiveDestinationIndex } =
    useStateContext();

  return (
    <ul className="flex justify-center lg:justify-start gap-[26px] md:gap-[35px] mb-[37px]">
      {destinations.map((item, index) => (
        <DestinationMenuItem
          key={index}
          item={item}
          isSelected={activeDestinationIndex === index}
          handleClick={() => handleActiveDestinationIndex(index)}
        ></DestinationMenuItem>
      ))}
    </ul>
  );
};

export default DestinationMenu;

const DestinationMenuItem = ({ item, index, isSelected, handleClick }) => {
  return (
    <motion.li
      className="relative cursor-pointer text-sm md:text-base leading-[17px] md:leading-[19px] tracking-[2.3625px] md:tracking-[2.7px] transition-all"
      style={{ color: isSelected ? 'white' : '#D0D6F9' }}
      onClick={handleClick}
    >
      {isSelected && <ActiveLine />}
      {item.title.toUpperCase()}
    </motion.li>
  );
};

export const ActiveLine = () => {
  return (
    <motion.div
      layoutId="activeDestinationItem"
      className="w-full h-[2px] absolute -bottom-[12px] bg-white "
    />
  );
};
