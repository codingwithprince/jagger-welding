import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

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
            <div className="text-overlay w-full md:w-[50%] p-2">
                <h1 className='text-4xl inline-block p-2  w-full md:text-8xl animate-bounce uppercase russo-font gap-5'>Jagger</h1>
                <div className='text-4xl bg-blue-700 p-2 md:text-8xl uppercase russo-font'>
                <TypeAnimation
                      sequence={['Welding  ', 4000, 'd.o.o', 4000]}
                      speed={40} // Must be in range between 1 and 99!
                      wrapper="h1"
                      repeat={Infinity}
                  />
                </div>
                <p className='mt-5 p-2 text-gray-100'>Meljska cesta 36 <br />
                    2000 Maribor</p>
            </div>
        </div>
    </div>
  )
}

export default Hero