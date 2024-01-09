import React from 'react';

const MenuBtn = () => {
  return (
    <div className='flex flex-col items-end cursor-pointer group gap-y-2 xl:hidden'>
      <div className='w-7 h-[2px] bg-white transition-all'></div>
      <div className='w-4 group-hover:w-7 h-[2px] bg-white transition-all'></div>
      <div className='w-7 h-[2px] bg-white transition-all'></div>
    </div>
  );
};

export default MenuBtn;
