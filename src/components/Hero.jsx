'use client';

import Image from 'next/image';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const locationSequence = [
  'Los Angeles, USA',
  3000,
  'Rio de Janeiro, Brazil',
  3000,
  'Paris, France',
  3000,
  'Berlin, Germany',
  3000,
  'Athens, Greece',
  3000,
];

const Hero = () => {
  return (
    <section className='h-[80vh]  xl:h-[850px]' id='home'>
      <div className='container flex items-center justify-center h-full mx-auto xl:justify-start'>
        {/* text */}
        <div className='z-20 flex flex-col items-center justify-center h-full pt-12 xl:items-start'>
          <MouseParallaxContainer
            globalFactorY={0.2}
            globalFactorX={0.1}
            resetOnLeave
            className='relative flex items-center h-[120px] xl:h-max xl:w-[840px]'>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className='relative'>
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]'>
                <Image
                  src='/assets/hero/typo-1.svg'
                  fill
                  alt=''
                  className='object-contain'
                />
              </motion.div>
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.9}
              factorY={0.9}
              className='absolute z-30 xl:left-6'>
              <motion.div
                variants={fadeIn('up', 0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]'>
                <Image
                  src='/assets/hero/typo-2.svg'
                  fill
                  alt=''
                  className='object-contain'
                />
              </motion.div>
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className='absolute right-0 z-20 hidden xl:flex opacity-80'>
              <motion.div
                variants={fadeIn('left', 1.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='w-[150px] h-[100px] xl:w-[248px] xl:h-[200px] mix-blend-luminosity'>
                <Image
                  src='/assets/hero/bird.png'
                  fill
                  alt=''
                  className='object-contain'
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>

          {/* tour */}
          <motion.div
            variants={fadeIn('up', 1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='min-h-[60px] flex items-center mb-6 text-[26px]'>
            <div className='items-center hidden xl:flex xl:gap-x-0'>
              <div>World</div>

              <div className='relative flex items-center justify-center w-2 h-2 mx-2'>
                <Image fill src='assets/hero/dot.svg' alt='' />
              </div>

              <div>Tour</div>
              <div className='relative flex items-center justify-center w-2 h-2 mx-2'>
                <Image fill src='assets/hero/dot.svg' alt='' />
              </div>

              <div>2023</div>
            </div>

            {/* icon */}
            <div className='relative items-center justify-center hidden mx-4 xl:flex w-7 h-7'>
              <Image src='/assets/hero/mic.svg' alt='' fill />
            </div>
            {/* animation */}
            <TypeAnimation
              sequence={locationSequence}
              wrapper='div'
              speed={10}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={false}
            />
          </motion.div>

          <motion.div
            variants={fadeIn('up', 1.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}>
            <button className='btn btn-lg btn-accent'>Get tickets</button>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='absolute top-0 right-0 hidden xl:flex before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10'>
          <Image
            src='/assets/hero/singer.png'
            width={617}
            height={893}
            alt='bg'
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
