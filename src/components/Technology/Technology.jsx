import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import TechnologyContent from './TechnologyContent';
import TechnologyImage from './TechnologyImage';

import TechnologyMenu from './TechnologyMenu';

const Technology = () => {
  const { activeTechIndex, useWindowSize } = useStateContext();
  const size = useWindowSize();
  console.log(size);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between relative gap-[34px] md:gap-[56px] lg:pt-[111px]">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-[26px] md:gap-[44px] lg:gap-[80px] ">
        <TechnologyMenu />
        <TechnologyContent index={activeTechIndex} />
      </div>
      <TechnologyImage index={activeTechIndex} />
    </div>
  );
};

export default Technology;
