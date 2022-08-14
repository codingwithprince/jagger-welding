/* eslint-disable @next/next/no-img-element */
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { IoIosConstruct, IoIosCloudDone } from 'react-icons/io'

const Services = () => {
    const services = [
        {
            id:1,
            title: '111 REO (manual electric-arc welding)'
        },
        {
            id:2,
            title: '131 MIG (Aluminium welding process)'
        },
        {
            id:3,
            title: '135 MAG (solid wire welding process)'
        },
        {
            id:4,
            title: '136 MAG (solid wire welding process)'
        },
        {
            id:5,
            title: '138 MAG (solid wire welding process)'
        },
        {
            id:6,
            title: '141 WIG (TIG) (inox welding)'
        },
        {
            id:7,
            title: '141 WIG (TIG) (carbon welding)'
        },
        {
            id:8,
            title: '141 WIG (TIG) (aluminium welding)'
        },
        {
            id: 9,
            title: '141/111 WIG (TIG) / REO'
        }
        

    ]

    const images =[
          {
            id: 1,
            src: '/images/services/s-1.jpg'
          }
    ]

    const serviceList = [
        {
            id:1,
            title: 'We automate your welding project',
            desc: 'We are specialized in complete welding solutions. We take care of your project from start to finish.',
            img: '/images/services/se-1.png'
        },
        {
            id:2,
            title: 'Manual welding with precision',
            desc: 'For manual welding you will find everything you need to work with efficiency and precision.',
            img: '/images/services/se-2.png'
        },
        {
            id:3,
            title: 'Services',
            desc: 'We provide expertise in installation, maintenance, repair and training.',
            img: '/images/services/se-3.png'
        },
    ]
  return (
    <div id="services" className='services py-[20px] pb-[50px] px-[5%] bg-slate-100'>
         <h3 className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-10'>Services</h3>
         <div className="service-cards flex flex-wrap justify-center">
            {
                serviceList.map(item => {
                    return (
                        <div key={item.id} className="s-card w-[350px] bg-white flex flex-col items-center shadow-xl  px-5 rounded-xl m-3 hover:shadow-2xl hover:scale-105 ease-in-out duration-300 p-5">
                            <div className="card-header flex flex-col items-center justify-center h-[150px] w-[150px] rounded-full text-sky-500 text-6xl">
                                <img className='w-[65px]'  src={item.img} alt={item.title} />
                            </div>
                            <div className="s-card-title mb-2">
                                <h3 className='font-bold text-lg text-[#006bb6] text-center'>
                                    {item.title}
                                </h3>  
                            </div>
                            <div className="s-card-desc">
                                <p className='py-5 text-gray-600 text-center px-2'>
                                        {
                                            item.desc
                                        }
                                </p>
                            </div>
                        </div>
                    )
                })
            }
            
         </div>
         {/* <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
            <div className="gif-welding mx-5 mb-3">
                <Carousel autoPlay={true} showIndicators={false} showStatus={false} infiniteLoop={true} showThumbs={false}>
                    {
                    images.map(item => {
                        return(
                        <div key={item.id}>
                        <img className='shadow-full w-[320px] rounded-lg' src={item.src} alt='jagger-welding-man-welding'/>
                          
                        </div>
                        )
                    })
                    }
                </Carousel>
            </div>
            <div className="services-text mx-auto">
                <h5 className='text-gray-800 font-bold text-lg'>We carry out the following welding processes</h5>
                <ul className='list-disc pl-5 mt-2 text-left py-3'>
                    {
                        services.map(item => {
                            return (
                                <li key={item.id} className='text-green-600 text-lg pt-1'>
                                    <div className='text-gray-700'>
                                        {
                                            item.title
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

         </div> */}
    </div>
  )
}

export default Services