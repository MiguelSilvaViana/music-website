'use client';

import Image from 'next/image';

/* icons */
import { RiMapPin2Fill } from 'react-icons/ri';

import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const EventBox = ({ events }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
      className='bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative'>
      <div className='flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4'>
        {/* image */}
        <div className='hidden xl:flex w-[400px]'>
          <Image
            src='/assets/events/singer.png'
            width={358}
            height={489}
            priority
            quality={100}
            alt=''
          />
        </div>
        {/* event list */}
        <div className='flex-1  h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 xl:pr-6'>
          {/* event item */}
          {events.map((event) => {
            return (
              <div
                key={event.id}
                className='flex flex-col items-center justify-between pb-10 my-4 text-center border-b xl:flex-row gap-y-4 xl:gap-y-0 xl:text-left xl:my-0 border-white/10 xl:py-3 last-of-type:border-none first-of-type:pt-0'>
                <div className='flex flex-col items-center xl:flex-row gap-x-4'>
                  {/* day & month */}
                  <div className='flex flex-col items-center justify-center leading-tight w-[80px] mb-4 xl:mb-0'>
                    <div className='text-[44px] font-black text-accent'>
                      {event.date.day}
                    </div>
                    <div className='text-[20px] font-extrabold'>
                      {event.date.month}
                    </div>
                  </div>
                  {/* location */}
                  <div className='flex flex-col w-64 gap-y-2'>
                    <div className='text-lg font-bold leading-none'>{`${event.location.city}, ${event.location.country}`}</div>
                    <div className='flex items-center justify-center gap-x-1 xl:justify-start'>
                      <div className='text-lg text-accent'>
                        <RiMapPin2Fill />
                      </div>
                      <div className='font-light'>{event.location.address}</div>
                    </div>
                  </div>
                </div>
                {/* price range */}
                <div className='w-[100px] text-[17px] text-center text-accent font-bold'>
                  {event.priceRange}
                </div>
                {/* btn */}
                <button className='btn btn-sm btn-accent'>Get tickets</button>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default EventBox;
