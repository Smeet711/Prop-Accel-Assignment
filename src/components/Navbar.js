import React, { useState } from "react";

import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <>
     <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#333]'>Logo.</h1>
      <ul className='hidden md:flex cursor-pointer uppercase'>
        <li className='p-4 text-[#333]  hover:text-[#00df9a]'>Home</li>
        <li className='p-4 text-[#333]' >Company</li>
        <li className='p-4 text-[#333]'>Resources</li>
    
      </ul>
      <div onClick={handleNav} className='block md:hidden lg:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={20} color="#333"/> : <AiOutlineMenu size={20} color="#333" />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out top-0 h-full w-[60%] duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LOGO.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
       
      </ul>
    </div>
    </>
  );
};

export default Navbar;
