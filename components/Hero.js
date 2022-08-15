import React from 'react'
// import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { IoCallSharp, IoMailSharp } from 'react-icons/io5';

const Hero = () => {
  return (
    <div
    style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,1)),url('/images/bg/PipeWelding.jpg')",
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover'
        }}
    >
        <div id='home' data-aos="fade-up" className="overlay h-full flex w-full justify-center items-center text-white px-[2%] md:px-20">
            <div   className="text-overlay text-center  w-full md:w-[50%] p-2">
                <h1 className='text-6xl inline-block py-2  w-full md:text-8xl animate-bounce uppercase russo-font gap-5 font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300'>Jagger</h1>
                <div className='text-6xl font-bold rounded-sm text-transparent bg-clip-text bg-gradient-to-t from-sky-600 to-sky-400  py-2 md:text-8xl uppercase russo-font'>
                <TypeAnimation
                      sequence={['Welding', 4000, 'd.o.o', 4000]}
                      speed={40} 
                      wrapper="h1"
                      repeat={Infinity}
                  />
                </div>
                <p className='mt-5 text-gray-300 text-center text-sm'>
                We are specialized in complete welding solutions. We take care of your project from start to finish.
                </p>
                <div className="hero-btn mt-5 flex gap-3 justify-center">
                    <button className='shadow-lg rounded-md hover:shadow-sky-600/50  md:w-auto text-md md:text-lg bg-gradient-to-b hover:bg-gradient-to-t from-sky-500 to-sky-700 text-white px-2 py-2'>
                      <a className='flex justify-center items-center gap-2' href="tel: +386 41 637 807">
                      <IoCallSharp /> 
                      Call Now
                      </a>
                    </button>
                    <button className='shadow-lg rounded-md hover:shadow-sky-600/50  md:w-auto text-md md:text-lg bg-gradient-to-b hover:bg-gradient-to-t from-sky-500 to-sky-700  text-white px-2 py-2'>
                      <a className='flex justify-center items-center gap-2' href="mailto:info@jagger-welding.com">
                      <IoMailSharp  /> 
                      Mail Us
                      </a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero