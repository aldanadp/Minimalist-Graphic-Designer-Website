import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../img/portfolio/1.jpg';
import Img2 from '../img/portfolio/2.jpg';
import Img3 from '../img/portfolio/3.jpg';
import Img4 from '../img/portfolio/4.jpg';


const Portfolio = () => {

  const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
      const rect = e.target.getBoundingClientRect();

      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });

    }, []);


  return (
    <section className='section'>

      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full 
        items-center justify-start gap-x-24 text-center 
        lg:text-left lg:justify-center pt-24 lg:pt-36 pb-8'>
          <div className='flex flex-col lg:items-start'>
            <h1 className='h1 relative text-transparent bg-clip-text'
                onMouseMove={handleMouseMove}
                style={{
                  backgroundImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, #0e67bbff, #333)`,
                  WebkitBackgroundClip: 'text',

                }}
            >Portfolio</h1>
            <p className='mb-12 mt-6 max-w-sm px-5 lg:px-0'>Is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown. 
            <br />
            <br />
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.It was popularised in the 1960s with 
            the release of Letraset sheets containing Lorem Ipsum passages.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'> HIRE ME </Link>
          </div>
          <div className='grid grid-cols-2 lg:gap-6'>
            <div className='max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Img1} alt='' />
            </div>
             <div className='max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Img2} alt='' />
            </div>
             <div className='max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Img3} alt='' />
            </div>
             <div className='max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Img4} alt='' />
            </div>
            
          </div>
        </div>
      </div>

    </section>
  );
};

export default Portfolio;
