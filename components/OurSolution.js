/* eslint-disable @next/next/no-img-element */
import React from 'react'

const OurSolution = () => {
    const solutions = [
        {
            id:1,
            name: 'Manual Welding',
            img: '/images/features/w-1.jpg',
            url: '/'
        },
        {
            id:2,
            name: 'Automated Welding',
            img: '/images/features/w-2.jpg',
            url: '/'
        },
        {
            id:3,
            name: 'Cutting',
            img: '/images/features/w-3.jpg',
            url: '/'
        },
        {
            id:4,
            name: 'Projects',
            img: '/images/features/w-4.jpg',
            url: '/'
        },
    ]
  return (
    <div id="solution" className="about py-[20px] px-[5%]">
    <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl my-3 md:my-10'>Our Solutions</h3>
    <div className="our-solution grid grid-cols-1 lg:grid-cols-2 py-5">
        <div data-aos="fade-up" className="our-solution-text text-center md:text-left md:w-[40%] m-auto">
            <p className='capitalize text-gray-600 md:text-xl'>different solutions. Please select your activity to find the right welding solutions for you.
            Or use the button below to find all our products.</p>
            <button className='shadow-xl mt-5 bg-gradient-to-b hover:bg-gradient-to-t from-sky-500 to-sky-700 px-5 py-2 text-white rounded-md'>All Products</button>
        </div>
        <div data-aos="fade-up" className="our-solution-items my-5 flex flex-wrap justify-center">
            {
                solutions.map(item => {
                    return(
                        <div key={item.id} className="solution-card m-2">
                            <div className="solution-img relative w-[120px] md:w-[280px]">
                                <img className='w-full hover:shadow-xl rounded-xl' src={item.img} alt="" />
                                <p className='absolute text-xs md:text-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-600 bg-opacity-50 hover:bg-opacity-80 py-1 md:py-3 w-full text-center text-white'>{item.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>

    </div>
  )
}

export default OurSolution