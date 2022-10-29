import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations } from '../../data/data';

const destinationMotion = {
  hidden: { y: 200, opacity: 0 },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, mass: 1 },
  }),
  exit: { opacity: 0 },
};

const DestinationContent = ({ index }) => {
  const item = destinations[index];

  return (
    <motion.div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.title}
          initial="hidden"
          animate="visible"
          exit="exit"
          className=""
        >
          <motion.h3
            className="font-bellefair text-[56px] md:text-[80px] lg:text-[100px] leading-[64px] md:leading-[92px] lg:leading-[115px] mb-[1px] md:mb-[14px]"
            variants={destinationMotion}
            custom={1}
          >
            {item.title.toUpperCase()}
          </motion.h3>
          <motion.p
            className="font-barlow text-primary text-[15px] md:text-base lg:text-lg leading-[25px] md:leading-7 lg:leading-8 pb-8 md:pb-[49px] lg:pb-[54px] border-b border-[#383B4B] mb-8 md:mb-7"
            variants={destinationMotion}
            custom={2}
          >
            {item.desc}
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-0"
            variants={destinationMotion}
            custom={3}
          >
            <div className="flex flex-col gap-3 w-1/2">
              <p className="uppercase text-sm text-primary leading-[17px] tracking-[2.3625px]">
                avg. distance
              </p>
              <p className="font-bellefair text-[28px] leading-[32px] uppercase">
                {item.distance}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <p className="uppercase text-sm text-primary leading-[17px] tracking-[2.3625px]">
                est. travel time
              </p>
              <p className="font-bellefair text-[28px] leading-[32px] uppercase">
                {item.time}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default DestinationContent;
