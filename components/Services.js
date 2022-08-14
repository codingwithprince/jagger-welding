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
            title: 'manual electric-arc welding',
            desc: 'Manual Metal Arc (MMA) welding is the most flexible and one of the most widely used arc welding processes',
            img: '/images/services/s-3.jpg'
        },
        {
            id:2,
            title: 'aluminium welding',
            desc: ' GTAW is a great process for aluminum because it does not require mechanical wire feeding, which can create feedability issues.',
            img: '/images/services/s-2.jpg'
        },
        {
            id:3,
            title: 'solid wire welding',
            desc: 'Mild steel solid wires are to prevent oxidation, aid in electrical conductivity and help increase the life of the welding contact tip.',
            img: '/images/services/s-4.jpg'
        },
        {
            id:4,
            title: 'Carbon welding',
            desc: 'Mild steel solid wires are to prevent oxidation, aid in electrical conductivity and help increase the life of the welding contact tip.',
            img: '/images/services/s-5.jpg'
        }
    ]
  return (
    <div id="services" className='services py-[20px] pb-[50px] px-[5%] bg-slate-100'>
         <h3 className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-10'>Services</h3>
         <div className="service-cards flex flex-wrap justify-center">
            {
                serviceList.map(item => {
                    return (
                        <div key={item.id} className="s-card w-[300px] bg-white grid justify-items-center shadow-xl py-10 px-5 rounded-xl m-3 hover:shadow-2xl hover:scale-105 ease-in-out duration-300">
                            <div className="card-header text-sky-500 text-6xl pt-3">
                                <img className='h-[100px] w-[100px]' src={item.img} alt={item.title} />
                            </div>
                            <div className="s-card-text pt-5">
                                <h3 className="title text-gray-700 text-center font-semibold capitalize text-lg">
                                    {item.title}
                                </h3>
                                <p className='px-2 pt-5 text-justify text-gray-500 text-sm'>
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