import React from 'react'
import { IoLocationSharp, IoCall, IoMailSharp, IoGlobeSharp } from 'react-icons/io5'
const Contact = () => {
  return (

    <div data-aos='up' id="contact" className='services py-[20px] pb-[50px] px-[5%] bg-white'>
        <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-10'>Contact</h3>
        <div className="contact-section flex flex-wrap justify-around items-center">
            <div className="contact-info">
                <p className='text-2xl font-semibold text-gray-600 flex items-center gap-2'> <IoLocationSharp /> JAGGER d.o.o.</p>
                <p className='text-gray-500 mt-2'>Meljska cesta 36 </p>
                <p className='text-gray-500'>2000 Maribor</p>
                <p className='text-gray-500'>Slovenia</p>
                <br />
                <p className='gap-2 flex items-center text-gray-500 hover:underline hover:text-sky-600 mt-1'><IoCall />  +386 41 637 807</p>
                <p className='gap-2 flex items-center text-gray-500 hover:underline hover:text-sky-600 mt-1'><IoMailSharp /> info@jagger-welding.com</p>
                <p className='gap-2 flex items-center text-gray-500 hover:underline hover:text-sky-600 mt-1'><IoGlobeSharp /> www.jagger-welding.com</p>
            </div>
            <div className="contact-form ">
                <form>
                    <div>
                        <label placeholder='name' />
                        <input placeholder='name' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact