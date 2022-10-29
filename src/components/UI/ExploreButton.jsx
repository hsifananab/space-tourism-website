import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';

export const ExploreButton = forwardRef((props, ref) => {
  const { handleActiveIndex } = useStateContext();
  const handleClick = () => handleActiveIndex(1);
  return (
    <div ref={ref}>
      <Link to="destination">
        <button
          className="w-[150px] md:w-[242px] lg:w-[274px] aspect-square rounded-full bg-white text-[#0B0D17] font-bellefair text-[20px] md:text-[32px] leading-[23px] md:leading-[37px] tracking-[1.25px] md:tracking-[2px] hover:shadow-[0_0_0_54px_rgba(255,255,255,.1)] md:hover:shadow-[0_0_0_88px_rgba(255,255,255,.1)] transition-all"
          onClick={handleClick}
        >
          EXPLORE
        </button>
      </Link>
    </div>
  );
});

export const MExploreButton = motion(ExploreButton);
