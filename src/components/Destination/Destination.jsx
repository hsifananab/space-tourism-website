import React from 'react';

import { useStateContext } from '../../contexts/ContextProvider';
import DestinationMenu from './DestinationMenu';
import DestinationContent from './DestinationContent';
import DestinationImage from './DestinationImage';

const Destination = () => {
  const { activeDestinationIndex } = useStateContext();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-[38px]">
      <div className="w-[170px] md:w-[300px] lg:w-[445px] mb-[26px] md:mb-[53px] lg:mb-0 bg-[#0B0D17] rounded-full">
        <DestinationImage index={activeDestinationIndex} />
      </div>
      <div className="text-center lg:text-left max-w-[327px] md:max-w-[573px] lg:max-w-[444px]">
        <DestinationMenu />
        <DestinationContent index={activeDestinationIndex} />
      </div>
    </div>
  );
};

export default Destination;
