import React from 'react'
import { IoLocationSharp, IoCall, IoMailSharp, IoGlobeSharp } from 'react-icons/io5'
const Contact = () => {
  return (

    <div data-aos='up' id="contact" className='services py-[20px] mb-[20px] px-[5%] white'>
        <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-10'>Contact</h3>
        <div className="contact-section grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-10">
            <div data-aos='fade-up' className="contact-form mb-5 w-full px-5 md:w-[50%] lg:w-[60%] py-5  rounded-lg shadow-lg">
                <form>
                    <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username" >
                                Name
                            </label>
                            <input className="focus:outline-sky-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight " id="name" type="text" placeholder="full name" />
                    </div>

                    <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username" >
                                Email
                            </label>
                            <input className="focus:outline-sky-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="email" placeholder="email" />
                    </div>
                    <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username" >
                                Company
                            </label>
                            <input className="focus:outline-sky-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="text" placeholder="company" />
                    </div>

                    <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username" >
                                Message
                            </label>
                            <textarea rows={5} className="focus:outline-sky-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="text" placeholder="message" />
                    </div>
                    <br />
                    <button type="submit" className='float-right shadow-lg rounded-md hover:shadow-sky-600/50  md:w-auto bg-gradient-to-b hover:bg-gradient-to-t from-sky-500 to-sky-700 text-white px-3 py-2'>
                        Submit
                    </button>
                </form>
            </div>
            <div data-aos='fade-up' className="contact-info mt-5">
                <p className='text-2xl font-semibold text-gray-600 flex items-center gap-2'> <IoLocationSharp /> JAGGER d.o.o.</p>
                <p className='text-gray-500 mt-2'>Meljska cesta 36 </p>
                <p className='text-gray-500'>2000 Maribor</p>
                <p className='text-gray-500'>Slovenia</p>
                <br />
                <p className='gap-2 flex items-center text-gray-500 hover:underline hover:text-sky-600 mt-1'><IoCall />  +386 41 637 807</p>
                <p className='gap-2 flex items-center text-gray-500 hover:underline hover:text-sky-600 mt-1'><IoMailSharp /> info@jagger-welding.com</p>
                <p className='gap-2 flex items-center text-gray-500 hover:underline hover:text-sky-600 mt-1'><IoGlobeSharp /> www.jagger-welding.com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact