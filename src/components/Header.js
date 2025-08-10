import React from 'react';

//IMPORT COMPONENTS

import Socials from './Socials';
import MobileNav from './MobileNav';
import Logo from '../img/header/logo.png';


//IMPORT LINK

import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <header className='fixed w-full lg:px-[100px] h-[100px] 
    px-[30px] lg:h-[140px] flex items-center z-30'>
      
      <div className=' flex flex-col lg:flex-row lg:items-center w-full justify-between'> 
        <Link to={'/'} className='max-w-[200px]'>
         <img className='w-20' src={Logo} alt='' />
        </Link>

        <nav className='hidden xl:flex gap-x-12'>
          
          <Link to={'/'} className='text-[#696c6d] hover:text-white hover:text-shadow-pink transition-discrete'>HOME</Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-white hover:text-shadow-pink transition-discrete'>ABOUT</Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-white hover:text-shadow-pink transition-discrete'>PORTFOLIO</Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-white hover:text-shadow-pink transition-discrete'>CONTACT</Link>

        </nav>
      </div>

      <Socials />
      <MobileNav />

    </header>

  );
};

export default Header;
