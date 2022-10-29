import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, index, label, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-full h-screen bg-cover`}
    >
      <div className="px-6 md:px-[97px] lg:px-[165px] pt-[88px] md:pt-[136px] lg:pt-[212px] pb-[58px] md:pb-[62px] lg:pb-[131px] w-full lg:h-full flex flex-col gap-[32px] md:gap-[60px] lg:gap-[26px] max-w-screen-2xl max-h-[900px] m-auto">
        <h2 className="flex justify-center md:justify-start gap-[18px] md:gap-[19px] lg:gap-7 text-base md:text-5 lg:text-[28px] leading-[19px] md:leading-6 lg:leading-[34px] tracking-[2.7px] md:tracking-[3.375px] lg:tracking-[4.725px]">
          <span className="opacity-25 font-bold">0{index}</span>
          {title.toUpperCase()}
        </h2>
        <div className="">{children}</div>
      </div>
    </motion.div>
  );
};

export default Section;
