import React from 'react';
import AboutImg from '../img/about/4.jpg';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';

const About = () => {


  const [pos, setPos] = useState({ x: 0, y: 0 });
  
    // Función que actualiza la posición del mouse dentro del h1
    const handleMouseMove = useCallback((e) => {
      
      const rect = e.target.getBoundingClientRect(); // Tamaño y posición del h1
      
      setPos({
          x: e.clientX - rect.left, // Distancia horizontal dentro del h1
          y: e.clientY - rect.top   // Distancia vertical dentro del h1
        });
  
    }, []);

  return <section className='section lg:pt-28'>

    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full 
      items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={AboutImg} alt='' />
        </div>
        <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto 
        flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1 relative text-transparent bg-clip-text'
              onMouseMove={handleMouseMove}
              style={{
                backgroundImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, #0e67bbff, #333)`,
                WebkitBackgroundClip: 'text',
                
              }}
          >About me</h1>
          <p className='mb-12 mt-6 max-w-sm px-5 lg:px-0 '>Is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown. 
            <br />
            <br />
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.It was popularised in the 1960s with 
            the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <Link to={'/portfolio'} className='btn mt-6'> View my work </Link>
          
        </div>
      </div>
    </div>

  </section>;
};

export default About;
