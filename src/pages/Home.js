import React from 'react';
import PortugalImg from '../img/home/4.jpg';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';

const Home = () => {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Función que actualiza la posición del mouse dentro del h1
  const handleMouseMove = useCallback((e) => {
    
    const rect = e.target.getBoundingClientRect(); // Tamaño y posición del h1
    
    setPos({
        x: e.clientX - rect.left, // Distancia horizontal dentro del h1
        y: e.clientY - rect.top   // Distancia vertical dentro del h1
      });

  }, []);

  return (
    <section className='section lg:pt-36'>

      <div className='container mx-auto h-full relative'>

        {/*TEXT AND IMG WRAPER */}
        <div className='flex flex-col justify-center lg:flex-row'>
          {/* TEXT */}
          <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto 
          flex flex-col justify-center items-center lg:items-start '>
            <h1 className='h1 relative text-transparent bg-clip-text'
                onMouseMove={handleMouseMove}
                style={{
                backgroundImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, #0e67bbff, #333)`,
                WebkitBackgroundClip: 'text',
                
              }}
            >
              designer <br /> & film maker
            </h1>
            <p className='text-[24px] lg:text-[26px] font-primary mb-4 lg:mb-12'>
              Barcelona, SPAIN.
            </p>
            <Link to={'/contact'} className='btn mb-[30px]'>
              HIRE ME
            </Link>
          </div>

          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <div className='relative lg:-right-20 overflow-hidden '>
              <img src={PortugalImg} alt='' />
            </div>
          </div>

        </div>

      </div>

    </section> 
  );
};

export default Home;
