/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { TypeAnimation } from 'react-type-animation';
import { IoCallSharp, IoMailSharp } from 'react-icons/io5';

const images = [
    {
        image: '/images/features/w-1.jpg',
    },
    {
        image: '/images/features/w-2.jpg',
    },
    {
        image: '/images/features/w-3.jpg',
    }
];
const Hero = () => {
  return (
    <div id='home' className="h-[70vh] relative"> 
           <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false} showStatus={false} showIndicators={false}>
                {
                  images.map(item => {
                    return(
                      <div key={item.id}>
                       <img className='shadow-full object-cover h-[70vh]' src={item.image} alt='jagger-welding-man-welding'/>
                        {/* <p className="legend bg-pink-500">Jagger d.o.o</p> */}
                      </div>
                    )
                  })
                }
            </Carousel>
            <div className='bg-black backdrop-blur-sm w-full bg-opacity-50 h-full flex items-center justify-center py-10 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className="text-overlay text-center  w-full md:w-[50%] p-2">
                <h1 className='text-6xl inline-block py-2  w-full md:text-8xl animate-bounce uppercase russo-font gap-5 font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300'>Jagger</h1>
                <div className='text-6xl font-bold rounded-sm text-transparent bg-clip-text bg-gradient-to-t from-sky-600 to-sky-400  py-2 md:text-8xl uppercase russo-font'>
                <TypeAnimation
                      sequence={['Welding', 4000, 'd.o.o', 4000]}
                      speed={40} 
                      wrapper="h1"
                      repeat={Infinity}
                  />
                </div>
                <p className='mt-5 text-gray-300 text-center text-sm px-3'>
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