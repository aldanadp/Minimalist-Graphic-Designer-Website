import React from 'react';

const Contact = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex row h-full items-center
        justify-start pt-36 gap-x-8 text-center lg:text-left'>
        
          <div className='lg:flex-1 lg:pt-5 px-4'>
            
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12 lg:text-center'>I would love to get suggestion from you.</p>
            
            <form className='flex flex-col gap-y-4'>
              <div className='flex flex-col gap-y-4'>
                <input
                  className='outline-none border-b border-b-primary h-[60px]
                  bg-tranparent font-secondary w-full pl-3 placeholder:text-cyan-600'
                  type='text'
                  placeholder='Your name'
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px]
                  bg-tranparent font-secondary w-full pl-3 placeholder:text-cyan-600'
                  type='text'
                  placeholder='Your e-mail address'
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px]
                  bg-tranparent font-secondary w-full pl-3 placeholder:text-cyan-600'
                  type='text'
                  placeholder='Your message'
                />
                <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>SEND IT</button>
              </div>
            </form>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
