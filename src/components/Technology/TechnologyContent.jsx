import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies } from '../../data/data';

const technologyMotion = {
  hidden: { y: 200, opacity: 0 },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, mass: 1 },
  }),
  exit: { opacity: 0 },
};

const TechnologyContent = ({ index }) => {
  const item = technologies[index];

  return (
    <motion.div className="overflow-hidden text-center lg:text-left">
      <AnimatePresence mode="wait">
        <motion.div
          className="block "
          initial="hidden"
          animate="visible"
          exit="exit"
          key={item.title}
        >
          <motion.p className="tracking-[2.3625px] md:tracking-[2.7px] text-sm md:text-base leading-[17px] md:leading-[19px] text-primary mb-[9px] md:mb-[16px] lg:mb-[11px] uppercase">
            THE TERMINOLOGY…
          </motion.p>
          <motion.h3
            className="font-bellefair text-[24px] md:text-[40px] lg:text-[56px] leading-[28px] md:leading-[46px] lg:leading-[64px] whitespace-nowrap mb-4 lg:mb-[17px] uppercase"
            variants={technologyMotion}
            custom={1}
          >
            {item.title}
          </motion.h3>
          <motion.div className="flex" variants={technologyMotion} custom={2}>
            <p className="font-barlow text-[15px] md:text-base lg:text-[18px] text-primary leading-[25px] md:leading-[28px] lg:leading-[32px] grow md:w-[458px] lg:w-[444px]">
              {item.desc}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default TechnologyContent;
