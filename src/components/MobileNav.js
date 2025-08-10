import React, {useState} from 'react';


//IMPORT ICONS
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
//IMPORT LINK
import { Link } from 'react-router-dom';
//IMPORT MOTION
import { motion } from 'framer-motion';
//MENU VARIANTS
const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition:{
      ease: [0.7,0.01,-0.05,0.9]
    }
  }

}


const MobileNav = () => {

  const[openMenu, setOpenMenu]= useState(false);

  return <nav className='text-primary xl:hidden'>

    {/* NAV OPEN BUTTON*/}
    <div 
    onClick={() => setOpenMenu(true)} 
    className='text-3x1 cursor-pointer'>
      <CgMenuRight />
    </div>

    {/* MENU */}
    <motion.div 
    variants={menuVariants} 
    initial='hidden' 
    animate={openMenu ? 'show' :''} //si openMenu esta en true esta en show o sea visible x=0
    className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
      
      {/* ICONS */}
      <div 
      onClick={() => setOpenMenu(false)} // si esta en false motion vuelve a hidden o sea x 100%
      className='text-4x1 absolute z-30 left-4 top-10 text-primary cursor-pointer'>
        <IoMdClose />
      </div>

      {/* MENU LIST */}
      <ul className='h-full flex flex-col justify-center items-center gap-y-10 text-primary font-bold text-3x1'>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/portfolio'>PORTFOLIO</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </ul>
    </motion.div>
  </nav>;
};

export default MobileNav;
