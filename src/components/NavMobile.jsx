import React, { useContext } from 'react';
import { NavContext } from '@/context/NavContext';

import { RiCloseLine } from 'react-icons/ri';

/* components */
import Nav from './Nav';

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  return (
    <nav
      className={`xl:hidden w-full bg-primary top-0 fixed z-20  bottom-0 transition-all duration-500 ${
        isOpen ? 'right-0' : '-right-full'
      } `}
    >
      <div
        className='absolute cursor-pointer right-4 top-5'
        onClick={() => setIsOpen(false)}
      >
        <RiCloseLine className='text-5xl' />
      </div>
      <Nav
        containerStyles={
          'flex flex-col text-[30px] uppercase font-bold bg-pink-500/10 h-full items-center justify-center gap-y-8'
        }
      />
    </nav>
  );
};

export default NavMobile;
