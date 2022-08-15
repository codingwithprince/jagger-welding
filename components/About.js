/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const About = () => {
  const images = [
    {
      id: 1,
      src: '/images/features/w-1.jpg'
    },
    {
      id: 2,
      src: '/images/features/w-2.jpg'
    },
    {
      id: 3,
      src: '/images/features/w-3.jpg'
    },
    {
      id: 4,
      src: '/images/features/w-4.jpg'
    }
  ]

  const weldingTypes = [
    '111 REO (manual electric-arc welding)',
    '131 MIG (aluminium welding process)',
    '135 MAG (solid wire welding process)',
    '136 MAG (solid wire welding process)',
    '138 MAG (solid wire welding process)',
    '141 WIG (TIG) (inox welding)',
    '141 WIG (TIG) (carbon welding)',
    '141 WIG (TIG) (aluminium welding)',
    '141/111 WIG (TIG) / REO'
  ]
  return (
    <div id="about" className="about py-[20px] px-[5%]">
        <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl my-3 md:my-10'>About Jagger d.o.o.</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-5'>
            <div data-aos="fade-up" className="about-text text-gray-600 text-md md:text-lg mb-5 md:w-[60%]">
              <p className='text-justify '> The <span className='bg-yellow-300 text-black font-semibold px-1'>Jagger d.o.o.</span>  Company specialises in complex welding and installation services in industrial facilities and power plants. With our own highly qualified staff, we can carry out complex tasks in the fields of energy, industry and transport. Welders and pipe workers have knowledge on isometry and hold appropriate and valid certificates in accordance with international standards for various materials and welding techniques, which are periodically renewed.</p>
              <h3 className='font-semibold bg-yellow-300 text-black mt-10 pl-2'>We carry out the following welding processes</h3>
              <ul className='list-disc list-inside mt-5 text-md pl-1'>
                {
                  weldingTypes.map(i => {
                    return(
                      <li key={i}>{i}</li>
                    )
                  })
                }
              
              </ul>
            </div>
            <div data-aos="fade-up" className="about-img">
              <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                {
                  images.map(item => {
                    return(
                      <div key={item.id}>
                       <img className='shadow-full' src={item.src} alt='jagger-welding-man-welding'/>
                        {/* <p className="legend bg-pink-500">Jagger d.o.o</p> */}
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
        </div>
    </div>
    
  )
}

export default About