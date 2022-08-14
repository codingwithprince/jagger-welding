/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="about py-[20px] px-[5%]">
        <h3 className='font-bold text-center text-gray-700 text-2xl md:text-4xl mb-5'>About Jagger d.o.o.</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-5'>
            <p className="about-text text-gray-600 text-justify text-md md:text-lg mb-5 md:w-[60%]">
            The <span className='bg-yellow-300 text-black font-semibold px-1'>Jagger d.o.o.</span>  Company specialises in complex welding and installation services in industrial facilities and power plants. With our own highly qualified staff, we can carry out complex tasks in the fields of energy, industry and transport. Welders and pipe workers have knowledge on isometry and hold appropriate and valid certificates in accordance with international standards for various materials and welding techniques, which are periodically renewed.
            </p>
            <div className="about-img w-auto p-2 hover:scale-105 animate duration-500 ease-in-out">
                <img className='shadow-full w-[220px] ' src='/images/features/avatar.jpg' alt='jagger-welding-man-welding'/>
            </div>
        </div>
    </div>
    
  )
}

export default About