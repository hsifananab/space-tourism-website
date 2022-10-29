import React from 'react';
import { motion } from 'framer-motion';

import { MExploreButton } from './UI/ExploreButton';

const textMotion = {
  hidden: { opacity: 0 },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 1.2, duration: 1 },
  }),
};

const buttonMotion = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { delay: 4.8, duration: 1 } },
};

const bgAnimation = {
  hidden: { opacity: 0, scale: 1.3 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
};

const Home = () => {
  return (
    <motion.div
      className="bg-home-pattern md:bg-md-home-pattern lg:bg-lg-home-pattern bg-cover w-full h-screen m-auto"
      variants={bgAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="px-[24px] md:px-[159px] lg:px-[165px] pt-[112px] md:pt-[202px] pb-[48px] md:pb-[90px] lg:py-[131px] w-full h-full flex max-w-screen-2xl max-h-[900px]  m-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-end text-center lg:text-left justify-between w-full">
          <div className="max-w-md flex flex-col gap-4 md:gap-6">
            <motion.p
              className="text-primary text-base md:text-[20px] lg:text-[28px] leading-[19px] md:leading-[24px] lg:leading-[34px] tracking-[2.7px] md:tracking-[3.375px] lg:tracking-[4.725px]"
              variants={textMotion}
              custom={1}
            >
              SO, YOU WANT TO TRAVEL TO
            </motion.p>
            <motion.h1
              className="font-bellefair text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] lg:leading-[172px]"
              variants={textMotion}
              custom={2}
              whileHover={{ color: '#D0D6F9' }}
            >
              SPACE
            </motion.h1>
            <motion.p
              className="text-primary font-barlow text-[15px] md:text-base lg:text-lg leading-[25px] md:leading-7 lg:leading-8"
              variants={textMotion}
              custom={3}
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </motion.p>
          </div>
          <div className="">
            <MExploreButton variants={buttonMotion} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
