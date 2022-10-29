import React from 'react';

import { technologies } from '../../data/data';
import { useStateContext } from '../../contexts/ContextProvider';

const TechnologyMenu = () => {
  const { activeTechIndex, handleActiveTechIndex } = useStateContext();
  console.log(activeTechIndex);

  return (
    <ul className="flex flex-row justify-center lg:flex-col gap-4 lg:gap-8 ">
      {technologies.map((item, index) => (
        <TechnologyMenuItem
          key={index}
          index={index}
          isSelected={activeTechIndex === index}
          handleClick={() => handleActiveTechIndex(index)}
        />
      ))}
    </ul>
  );
};

export default TechnologyMenu;

const TechnologyMenuItem = ({ index, isSelected, handleClick }) => {
  return (
    // tracking-[1px] / [1.5px] / [2px]
    <li
      className="w-[40px] md:w-[60px] lg:w-[80px] aspect-square flex items-center justify-center rounded-full border border-[rgba(255,255,255,.5)] hover:border-white font-bellefair text-base md:text-2xl lg:text-[32px] leading-[18px] md:leading-[28px] lg:leading-[37px] transition-all cursor-pointer"
      style={{
        background: isSelected ? 'white' : 'transparent',
        color: isSelected ? 'black' : 'white',
      }}
      onClick={handleClick}
    >
      {index + 1}
    </li>
  );
};
