/* eslint-disable @next/next/no-img-element */
import React from 'react';

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
  return (
    <div id="services" className='services py-[20px] px-[5%]'>
         <h3 className='font-bold text-center text-gray-700 text-2xl md:text-4xl mb-5'>Services</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-5">
            <div className="gif-welding p-2 hover:scale-105 animate duration-500 ease-in-out">
                <img className='w-[400px]' src='/images/features/toon-welding.png' alt='' />
            </div>
            <div className="services-text mx-auto">
                <h5 className='text-gray-800 font-bold text-lg'>We carry out the following welding processes</h5>
                <ul className='list-disc pl-5 mt-5 text-left py-5'>
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

         </div>
    </div>
  )
}

export default Services