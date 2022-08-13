import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { IoCallSharp, IoMailSharp } from 'react-icons/io5'

const Hero = () => {
  return (
    <div
    style={{
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1)),url('/images/bg/PipeWelding.jpg')",
        height: '60vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover'
        }}
    >
        <div className="overlay h-full flex w-full justify-center md:justify-end items-center text-white px-[2%] md:px-20">
            <div className="text-overlay text-center md:text-left w-full md:w-[50%] p-2">
                <h1 className='text-4xl inline-block p-2  w-full md:text-8xl animate-bounce uppercase russo-font gap-5 font-bold'>Jagger</h1>
                <div className='text-4xl font-bold rounded-sm  bg-gradient-to-b from-sky-500 to-sky-700 p-2 md:text-8xl uppercase russo-font'>
                <TypeAnimation
                      sequence={['Welding  ', 4000, 'd.o.o', 4000]}
                      speed={40} // Must be in range between 1 and 99!
                      wrapper="h1"
                      repeat={Infinity}
                  />
                </div>
                <p className='mt-5 text-gray-100 md:text-left text-center font-semibold text-sm'>Meljska cesta 36 <br />2000 Maribor</p>
                <div className="hero-btn mt-5 flex gap-3 justify-center md:justify-start font-bold ">
                    <button className='shadow-lg rounded-full hover:shadow-sky-600/50  md:w-auto text-xs md:text-md bg-gradient-to-b hover:bg-gradient-to-t from-sky-500 to-sky-700 text-white px-2 py-2'>
                      <a className='flex justify-center items-center gap-1' href="tel: +386 41 637 807">
                      <IoCallSharp /> 
                      +386 41 637 807
                      </a>
                    </button>
                    <button className='shadow-lg rounded-full hover:shadow-sky-600/50  md:w-auto text-xs md:text-md bg-gradient-to-b hover:bg-gradient-to-t from-sky-500 to-sky-700  text-white px-2 py-2'>
                      <a className='flex justify-center items-center gap-1' href="mailto:info@jagger-welding.com">
                      <IoMailSharp /> 
                      info@jagger-welding.com
                      </a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero